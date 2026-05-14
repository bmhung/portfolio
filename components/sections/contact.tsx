import type { ComponentType, SVGProps } from "react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Mail, Phone } from "lucide-react";
import { contact } from "@/lib/data";

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-7.7H5.78v7.7h2.56ZM7.06 9.5a1.49 1.49 0 1 0 0-2.98 1.49 1.49 0 0 0 0 2.98Zm11.28 8.84v-4.42c0-2.38-1.27-3.49-2.97-3.49a2.56 2.56 0 0 0-2.33 1.28v-1.1H10.5c.03.72 0 7.73 0 7.73h2.54v-4.31c0-.23.02-.46.09-.62.18-.46.6-.94 1.31-.94.92 0 1.29.7 1.29 1.74v4.13h2.61Z" />
    </svg>
  );
}

type Item = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href: string;
  external: boolean;
};

const items: Item[] = [
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: contact.linkedinLabel,
    href: contact.linkedin,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phoneHref}`,
    external: false,
  },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together.">
      <Reveal>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Open to senior frontend roles, contract engagements, and interesting
          collaborations. The fastest way to reach me is email.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.label} delay={i * 0.05}>
              <a
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-subtle/40 p-5 transition-all hover:border-foreground/30 hover:bg-subtle"
              >
                <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" aria-hidden />
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 break-all font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
