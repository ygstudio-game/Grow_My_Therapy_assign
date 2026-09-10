import Image from "next/image";
import { ourOffice } from "@/lib/content";

export default function OurOffice() {
  return (
    <section id="our-office" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">Our Office</p>
          <h2 className="mt-4 font-serif text-3xl text-primary-dark">{ourOffice.heading}</h2>
          <p className="mt-4 text-base text-muted">{ourOffice.body}</p>
          <p className="mt-6 text-sm font-medium text-primary-dark">{ourOffice.address}</p>
          <p className="mt-2 text-sm text-muted">{ourOffice.note}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-64 overflow-hidden rounded-3xl">
            <Image
              src="/images/office-1.jpeg"
              alt="Dr. Maya Reynolds' bright, uncluttered office seating area"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 overflow-hidden rounded-3xl">
            <Image
              src="/images/office-2.jpeg"
              alt="Dr. Maya Reynolds' sunlit reading corner office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
