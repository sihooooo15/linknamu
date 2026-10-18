"use client";

import { useState } from "react";
import type { LinkItem } from "@/lib/data";
import LinkCard from "./LinkCard";

type Props = { links: LinkItem[]; initialCounts: Record<string, number> };

export default function LinkList({ links, initialCounts }: Props) {
  const [counts, setCounts] = useState(initialCounts);

  function recordClick(id: string) {
    // 화면은 즉시 올리고, 서버가 돌려준 실제 값으로 맞춘다.
    setCounts((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data) setCounts((c) => ({ ...c, [id]: data.count }));
      })
      .catch(() => {});
  }

  return (
    <ul className="grid gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={counts[link.id] ?? 0}
            onClick={() => recordClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
