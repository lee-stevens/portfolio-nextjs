import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Lee Stevens",
  description: "Selected projects and case studies by Lee Stevens.",
};

type Project = {
  name: string;
  description: string;
  stack?: string[];
  link?: string;
  repository?: string;
  thumbnail?: string;
};

const githubUrl = "https://github.com/lee-stevens/"
const projects: Project[] = [
  {
    name: "Athena Toolkit",
    description: "A full-stack self-hostable suite of configurable tools that I use in my day-to-day life.",
    stack: ["Angular 20", ".NET 8", "PostgreSQL", "Docker", "Github Container Repository"],
    link: "#",
    repository: `${githubUrl}athena-toolkit`,
    thumbnail: ""
  },
  {
    name: "Portfolio",
    description: "This website",
    stack: ["NextJS", "Tailwind CSS", "React"],
    link: "#",
    repository: `${githubUrl}portfolio-nextjs`,
    thumbnail: ""
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto p-8 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          A curated selection of things I&apos;ve built. More coming soon.
        </p>
      </header>
      <ul className="space-y-6">
        {projects.map((p) => (
          <li
            key={p.name}
            className="rounded border border-black/10 dark:border-white/15 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <h2 className="text-xl font-medium">{p.name}</h2>
            <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
              {p.description}
            </p>
            {p.stack && (
              <p className="mt-2 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {p.stack.join(" • ")}
              </p>
            )}
            {p.link && (
              <a
                href={p.link}
                className="inline-block mt-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Site →
              </a>
            )}
            {p.repository && (
              <a
                href={p.repository}
                className="inline-block mt-3 ml-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Repository →
              </a>
            )}
            {p.thumbnail && (
              <image href={p.thumbnail} className="mt-4 rounded-lg border border-black/10 dark:border-white/15" />
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
