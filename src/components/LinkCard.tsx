import type { LinkItem } from "@/lib/data";

type Props = { link: LinkItem; count: number; onClick: () => void };

export default function LinkCard({ link, count, onClick }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-emerald-600 focus-visible:-translate-y-0.5 focus-visible:border-emerald-600 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-400 dark:focus-visible:border-emerald-400"
    >
      <span className="text-2xl">{link.icon}</span>
      <span className="flex-1 font-semibold">{link.title}</span>
      <span className="text-sm text-stone-500 dark:text-stone-400">{count}회</span>
    </a>
  );
}
