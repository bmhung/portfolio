import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { profile, strengths } from "@/lib/data";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A senior engineer who ships polished UI.">
      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>
        </Reveal>

        <ul className="md:col-span-2 space-y-4">
          {strengths.map((s, i) => (
            <Reveal as="li" key={s.title} delay={0.05 * i}>
              <div className="rounded-xl border border-border bg-subtle/40 p-4">
                <h3 className="font-medium tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
