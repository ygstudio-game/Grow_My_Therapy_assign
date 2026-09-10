import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <h2 className="font-serif text-4xl text-primary-dark md:text-5xl">
          Honoring where you&apos;ve been{" "}
          <span className="italic text-accent">&amp; helping shape where you&apos;re headed</span>
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-muted">Our services include…</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-border p-8">
              <h3 className="font-serif text-2xl text-primary-dark">{service.title}</h3>
              <p className="mt-3 text-base text-muted">{service.description}</p>
              <a href="#contact" className="mt-4 inline-block text-base font-medium text-primary underline">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
