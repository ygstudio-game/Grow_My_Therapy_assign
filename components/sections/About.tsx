import Image from "next/image";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-[1400px] items-start gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24 lg:px-16">
      <div>
        <h2 className="font-serif text-4xl text-primary-dark md:text-5xl">{about.heading}</h2>
        <p className="mt-3 text-base uppercase tracking-widest text-accent">{about.subhead}</p>
        {about.body.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-lg text-muted">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="relative h-[28rem] w-full overflow-hidden rounded-3xl">
        <Image
          src="/images/maya-headshot.png"
          alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
