import { expertiseKeywords } from "@/lib/content";

export default function ExpertiseGrid() {
  const half = Math.ceil(expertiseKeywords.length / 2);
  const columns = [expertiseKeywords.slice(0, half), expertiseKeywords.slice(half)];

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <h2 className="font-serif text-4xl text-primary-dark md:text-5xl">
          Our areas of <span className="font-script text-5xl not-italic text-accent">expertise</span>
        </h2>
        <div className="mt-12 grid gap-x-16 gap-y-8 md:grid-cols-2">
          {columns.map((column, i) => (
            <ul key={i} className="space-y-5">
              {column.map((keyword) => (
                <li
                  key={keyword}
                  className="border-b border-border pb-3 text-lg text-primary-dark"
                >
                  {keyword}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
