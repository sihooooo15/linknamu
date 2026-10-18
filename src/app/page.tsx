import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { getClickCounts } from "@/lib/clicks";
import { links, profile } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const counts = await getClickCounts();
  return (
    <main className="relative mx-auto max-w-md px-4 pb-8 pt-14">
      <ThemeToggle />
      <ProfileHeader profile={profile} />
      <LinkList links={links} initialCounts={counts} />
      <footer className="mt-10 text-center text-sm text-stone-500 dark:text-stone-400">
        🌳 링크나무
      </footer>
    </main>
  );
}
