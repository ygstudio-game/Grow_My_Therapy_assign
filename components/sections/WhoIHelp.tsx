import { whoIHelp } from "@/lib/content";

export default function WhoIHelp() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
      <h2 className="font-serif text-4xl text-primary-dark md:text-5xl">
        Who I <span className="font-script text-5xl not-italic text-accent">help</span>
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {whoIHelp.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-border bg-gradient-to-br from-bg to-surface p-8"
          >
            <div className="mb-4 h-2 w-10 rounded-full bg-accent" />
            <h3 className="font-serif text-2xl text-primary-dark">{card.title}</h3>
            <p className="mt-3 text-base text-muted">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
