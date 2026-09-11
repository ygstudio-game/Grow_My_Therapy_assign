import Image from "next/image";
import { trustBuilding } from "@/lib/content";

export default function TrustBuilding() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24 lg:px-16">
        <div>
          <h2 className="font-serif text-4xl leading-tight text-primary-dark md:text-5xl">{trustBuilding.headline}</h2>
          <p className="mt-5 text-xl text-primary">{trustBuilding.subhead}</p>
          {trustBuilding.body.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-lg text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="relative h-80 w-full overflow-hidden rounded-3xl md:h-[28rem]">
          <Image
            src="/images/office-1.jpeg"
            alt="Dr. Maya Reynolds' quiet, sunlit therapy office in Santa Monica"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
