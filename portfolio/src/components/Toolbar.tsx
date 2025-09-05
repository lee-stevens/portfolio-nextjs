"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = { href: string; label: string };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<"light" | "dark">("light");

  // On mount, sync with localStorage or system preference
  useEffect(() => {
    setMounted(true);
    // Respect class set by inline script to prevent flash
    const hasDark = document.documentElement.classList.contains("dark");
    setMode(hasDark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
    // Add a short-lived transition helper class
    document.documentElement.classList.add("theme-transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 350);
  };

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="h-9 w-9 rounded-md border border-black/10 dark:border-white/15 bg-transparent text-xs flex items-center justify-center text-neutral-500"
        disabled
      >
        …
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="h-9 w-9 rounded-md border border-black/10 dark:border-white/15 bg-transparent hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-sm flex items-center justify-center"
    >
      {mode === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export default function Toolbar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-background/80 supports-[backdrop-filter]:bg-background/60 border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-5 h-14 flex items-center gap-6">
        <div className="font-semibold tracking-tight text-sm">Lee Stevens</div>
        <ul className="flex items-center gap-1 text-sm flex-1">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10 ${
                    active ? "text-blue-600 dark:text-blue-400" : "text-neutral-600 dark:text-neutral-300"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/lee-stevens"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-600 dark:text-neutral-300 hover:underline"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
