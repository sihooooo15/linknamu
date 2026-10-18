import type { Profile } from "@/lib/data";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="mb-7 text-center">
      {profile.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.avatar}
          alt={`${profile.name} 프로필 사진`}
          className="mx-auto h-24 w-24 rounded-full border-4 border-emerald-600 object-cover dark:border-emerald-400"
        />
      ) : (
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-600 text-4xl font-bold text-white dark:bg-emerald-400 dark:text-neutral-950">
          {profile.name.charAt(0)}
        </div>
      )}
      <h1 className="mb-1.5 mt-3.5 text-2xl font-bold">{profile.name}</h1>
      <p className="text-stone-500 dark:text-stone-400">{profile.bio}</p>
    </header>
  );
}
