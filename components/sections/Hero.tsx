import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Online & In-Person Counseling
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-primary-dark md:text-5xl">
          {hero.h1}
        </h1>
        <p className="mt-5 font-serif text-xl italic text-primary">{hero.subhead}</p>
        <p className="mt-4 text-base text-muted">{hero.body}</p>
        <Link
          href="#contact"
          className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          {hero.ctaLabel}
        </Link>
      </div>
      <div className="relative h-80 w-full overflow-hidden rounded-3xl md:h-[28rem]">
        <Image
          src="/images/maya-headshot.png"
          alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, California"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
