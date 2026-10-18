"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label="다크모드 전환"
      className="absolute right-4 top-4 h-10 w-10 rounded-full border border-stone-200 bg-white text-lg dark:border-neutral-800 dark:bg-neutral-900"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
