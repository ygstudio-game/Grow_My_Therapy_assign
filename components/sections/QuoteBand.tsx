import Image from "next/image";
import { quote } from "@/lib/content";

export default function QuoteBand() {
  return (
    <section className="relative overflow-hidden py-24">
      <Image
        src="/images/office-2.jpeg"
        alt="Reading corner in Dr. Maya Reynolds' Santa Monica therapy office"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary-dark/70" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="font-serif text-2xl italic leading-relaxed text-white md:text-3xl">
          &ldquo;{quote.text}&rdquo;
        </p>
        <p className="mt-6 text-sm uppercase tracking-widest text-white/90">{quote.author}</p>
      </div>
    </section>
  );
}
