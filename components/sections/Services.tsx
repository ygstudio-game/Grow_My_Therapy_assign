import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="font-serif text-3xl text-primary-dark">
          Honoring where you&apos;ve been{" "}
          <span className="italic text-accent">&amp; helping shape where you&apos;re headed</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted">Our services include…</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-border p-8">
              <h3 className="font-serif text-xl text-primary-dark">{service.title}</h3>
              <p className="mt-3 text-sm text-muted">{service.description}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-primary underline">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
