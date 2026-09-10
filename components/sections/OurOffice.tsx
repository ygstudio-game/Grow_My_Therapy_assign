import Image from "next/image";
import { ourOffice } from "@/lib/content";

export default function OurOffice() {
  return (
    <section id="our-office" className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Our Office</p>
          <h2 className="mt-4 font-serif text-4xl text-primary-dark md:text-5xl">{ourOffice.heading}</h2>
          <p className="mt-5 text-lg text-muted">{ourOffice.body}</p>
          <p className="mt-6 text-base font-medium text-primary-dark">{ourOffice.address}</p>
          <p className="mt-2 text-base text-muted">{ourOffice.note}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-80 overflow-hidden rounded-3xl">
            <Image
              src="/images/office-1.jpeg"
              alt="Dr. Maya Reynolds' bright, uncluttered office seating area"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 overflow-hidden rounded-3xl">
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
