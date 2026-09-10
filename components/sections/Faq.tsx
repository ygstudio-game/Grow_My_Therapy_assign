import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faqs" className="bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
        <h2 className="text-center font-serif text-4xl text-primary-dark md:text-5xl">
          Frequently asked <span className="font-script text-5xl not-italic text-accent">questions</span>
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="rounded-2xl border border-border p-7">
              <summary className="cursor-pointer text-lg font-medium text-primary-dark">
                {item.question}
              </summary>
              <p className="mt-3 text-base text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
