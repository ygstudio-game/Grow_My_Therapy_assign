import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faqs" className="bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h2 className="text-center font-serif text-3xl text-primary-dark">
          Frequently asked <span className="font-script text-4xl not-italic text-accent">questions</span>
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="rounded-2xl border border-border p-6">
              <summary className="cursor-pointer font-medium text-primary-dark">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
