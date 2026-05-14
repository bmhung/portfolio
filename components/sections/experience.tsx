import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-8">
        {experiences.map((exp, i) => (
          <Reveal as="li" key={exp.company + exp.period} delay={i * 0.04}>
            <div className="relative">
              <span
                className="absolute -left-[31px] sm:-left-[39px] top-2 h-3 w-3 rounded-full border-2 border-background bg-accent shadow-[0_0_0_2px_var(--border)]"
                aria-hidden
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {exp.role}
                  <span className="text-muted-foreground"> · {exp.company}</span>
                </h3>
                <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {exp.period}
                </span>
              </div>

              <p className="mt-2 text-muted-foreground">{exp.description}</p>

              <ul className="mt-4 space-y-1.5">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="relative pl-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="absolute left-0 top-[0.7em] h-1 w-1 rounded-full bg-accent"
                      aria-hidden
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
