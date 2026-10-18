import { NextResponse } from "next/server";
import { incrementClick } from "@/lib/clicks";
import { links } from "@/lib/data";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const id = body?.id;

  // 등록된 링크 id만 허용한다.
  if (typeof id !== "string" || !links.some((l) => l.id === id)) {
    return NextResponse.json({ error: "invalid id" }, { status: 400 });
  }

  try {
    const count = await incrementClick(id);
    if (count === null) {
      return NextResponse.json({ error: "db not configured" }, { status: 503 });
    }
    return NextResponse.json({ count });
  } catch (e) {
    console.error("click failed", e);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
