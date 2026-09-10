import Link from "next/link";
import { ctaBand } from "@/lib/content";

export default function CtaBand() {
  return (
    <section className="bg-primary-dark">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
        <h2 className="font-serif text-3xl text-white">{ctaBand.heading}</h2>
        <p className="mt-4 text-base text-white/80">{ctaBand.body}</p>
        <Link
          href="#contact"
          className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          {ctaBand.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
