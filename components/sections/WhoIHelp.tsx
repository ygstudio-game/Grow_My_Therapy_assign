import { whoIHelp } from "@/lib/content";

export default function WhoIHelp() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h2 className="font-serif text-3xl text-primary-dark">
        Who I <span className="font-script text-4xl not-italic text-accent">help</span>
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {whoIHelp.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-border bg-gradient-to-br from-bg to-surface p-8"
          >
            <div className="mb-4 h-2 w-10 rounded-full bg-accent" />
            <h3 className="font-serif text-xl text-primary-dark">{card.title}</h3>
            <p className="mt-3 text-sm text-muted">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
