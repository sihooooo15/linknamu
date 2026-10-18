import ThemeToggle from "@/components/ThemeToggle";

// 보여 주기용 더미값. 진짜 내용은 나중에 교체한다.
const profile = {
  name: "김시호",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  avatar: "/profile.jpg",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://example.com/blog" },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-md flex-col items-center px-7 pb-16 pt-20">
      <ThemeToggle />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={profile.avatar}
        alt={`${profile.name} 프로필 사진`}
        className="h-36 w-36 rounded-full border-4 border-white/80 object-cover shadow-[0_12px_32px_-8px_rgba(180,100,50,0.45)] ring-1 ring-black/5 dark:border-white/20 dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7)]"
      />

      <h1 className="mt-8 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-3 max-w-xs text-center text-[15px] leading-relaxed text-stone-600 dark:text-stone-300">
        {profile.bio}
      </p>

      <ul className="mt-12 grid w-full gap-4">
        {links.map((link) => (
          <li key={link.title}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-white/70 bg-white/45 py-4 text-center font-medium shadow-[0_8px_24px_-12px_rgba(180,100,50,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-white/65 focus-visible:-translate-y-0.5 focus-visible:bg-white/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-white/10 dark:bg-white/10 dark:shadow-none dark:hover:bg-white/15 dark:focus-visible:bg-white/15"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
