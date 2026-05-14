import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, className, children }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-20 sm:py-28",
        className,
      )}
    >
      {(eyebrow || title) && (
        <header className="mb-10 flex flex-col gap-3">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-6 bg-border" aria-hidden />
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
