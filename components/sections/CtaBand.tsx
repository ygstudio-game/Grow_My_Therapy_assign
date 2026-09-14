import Link from "next/link";
import { ctaBand } from "@/lib/content";

export default function CtaBand() {
  return (
    <section id="consultation" className="scroll-mt-16 md:scroll-mt-24 bg-primary-dark">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-10 md:py-24">
        <h2 className="font-serif text-4xl text-white md:text-5xl">{ctaBand.heading}</h2>
        <p className="mt-5 text-lg text-white/90">{ctaBand.body}</p>
        <Link
          href="#contact"
          className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 text-base font-medium text-white transition-[transform,opacity] duration-160 ease-emil-out hover:opacity-90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
        >
          {ctaBand.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
