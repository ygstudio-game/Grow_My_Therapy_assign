import { expertiseKeywords } from "@/lib/content";

export default function ExpertiseGrid() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <h2 className="font-serif text-4xl text-primary-dark md:text-5xl">
          Our areas of <span className="font-script text-5xl not-italic text-accent">expertise</span>
        </h2>
        <ul className="mt-12 grid gap-x-12 gap-y-5 md:grid-cols-3">
          {expertiseKeywords.map((keyword) => (
            <li
              key={keyword}
              className="border-b border-border pb-3 text-lg text-primary-dark"
            >
              {keyword}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
