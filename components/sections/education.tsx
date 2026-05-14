import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Coursework & training.">
      <ul className="divide-y divide-border rounded-xl border border-border bg-subtle/40">
        {education.map((e, i) => (
          <Reveal as="li" key={e.title + e.year} delay={i * 0.04}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-5 py-4">
              <div>
                <p className="font-medium text-foreground">{e.title}</p>
                <p className="text-sm text-muted-foreground">{e.org}</p>
              </div>
              <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {e.year}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
