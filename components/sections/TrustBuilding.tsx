import Image from "next/image";
import { trustBuilding } from "@/lib/content";

export default function TrustBuilding() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="relative h-72 w-full overflow-hidden rounded-3xl md:h-96">
          <Image
            src="/images/office-1.jpeg"
            alt="Dr. Maya Reynolds' quiet, sunlit therapy office in Santa Monica"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl text-primary-dark">{trustBuilding.headline}</h2>
          <p className="mt-4 font-serif text-lg italic text-primary">{trustBuilding.subhead}</p>
          {trustBuilding.body.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-base text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
