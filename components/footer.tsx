import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-subtle/40">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">
          Built with Next.js · Tailwind · Motion
        </p>
      </div>
    </footer>
  );
}
