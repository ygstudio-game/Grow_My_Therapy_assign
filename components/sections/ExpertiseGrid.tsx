import { expertiseKeywords } from "@/lib/content";

export default function ExpertiseGrid() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="font-serif text-3xl text-primary-dark">
          Our areas of <span className="italic text-accent">expertise</span>
        </h2>
        <ul className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-3">
          {expertiseKeywords.map((keyword) => (
            <li
              key={keyword}
              className="border-b border-border pb-3 text-base text-primary-dark"
            >
              {keyword}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
