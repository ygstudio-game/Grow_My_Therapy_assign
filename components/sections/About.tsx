import Image from "next/image";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
      <div className="relative h-96 w-full overflow-hidden rounded-3xl">
        <Image
          src="/images/maya-headshot.png"
          alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="font-serif text-3xl text-primary-dark">{about.heading}</h2>
        <p className="mt-2 text-sm uppercase tracking-widest text-accent">{about.subhead}</p>
        {about.body.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-base text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
