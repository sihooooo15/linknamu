import ThemeToggle from "@/components/ThemeToggle";

// 보여 주기용 더미값. 진짜 내용은 나중에 교체한다.
const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://example.com/blog" },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-md flex-col items-center px-6 pb-12 pt-16">
      <ThemeToggle />

      <div
        role="img"
        aria-label="프로필 사진 (더미)"
        className="h-40 w-40 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 shadow-md"
      />

      <h1 className="mt-8 text-lg font-medium">{profile.name}</h1>
      <p className="mt-4 text-xl font-semibold">{profile.bio}</p>

      <ul className="mt-12 grid w-full gap-5">
        {links.map((link) => (
          <li key={link.title}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border-2 border-stone-800 bg-white py-4 text-center font-semibold transition hover:-translate-y-0.5 hover:border-emerald-600 focus-visible:-translate-y-0.5 focus-visible:border-emerald-600 dark:border-stone-300 dark:bg-neutral-900 dark:hover:border-emerald-400 dark:focus-visible:border-emerald-400"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
