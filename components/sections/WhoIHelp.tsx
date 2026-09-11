import { Briefcase, ShieldCheck, Rocket } from "lucide-react";
import { whoIHelp } from "@/lib/content";

const icons = [Briefcase, ShieldCheck, Rocket];
const panelGradients = [
  "from-primary/25 via-primary/10 to-bg",
  "from-accent/25 via-accent/10 to-bg",
  "from-teal-band/30 via-teal-band/10 to-bg",
];

export default function WhoIHelp() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
      <h2 className="font-serif text-4xl text-primary-dark md:text-5xl">
        Who I <span className="font-script text-5xl not-italic text-accent">help</span>
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {whoIHelp.map((card, i) => {
          const Icon = icons[i];
          return (
            <div
              key={card.title}
              className="overflow-hidden rounded-3xl border border-border bg-surface"
            >
              <div
                className={`flex h-44 items-center justify-center bg-gradient-to-br ${panelGradients[i]}`}
              >
                <Icon className="h-12 w-12 text-primary-dark" strokeWidth={1.25} />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-primary-dark">{card.title}</h3>
                <p className="mt-3 text-base text-muted">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
