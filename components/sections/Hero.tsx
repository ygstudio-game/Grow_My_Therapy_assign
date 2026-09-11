import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24 lg:px-16">
      <div className="md:order-2">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Online & In-Person Counseling
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.1] text-primary-dark md:text-6xl">
          {hero.h1}
        </h1>
        <p className="mt-6 text-xl text-primary">{hero.subhead}</p>
        <p className="mt-4 text-lg text-muted">{hero.body}</p>
        <Link
          href="#contact"
          className="mt-8 inline-block rounded-full bg-primary px-8 py-3.5 text-base font-medium text-white hover:opacity-90"
        >
          {hero.ctaLabel}
        </Link>
      </div>
      <div className="relative h-96 w-full overflow-hidden rounded-3xl md:order-1 md:h-[32rem]">
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
