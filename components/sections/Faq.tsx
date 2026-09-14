"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { faqs, FaqItem as FaqItemType } from "@/lib/content";

function AccordionItem({ item }: { item: FaqItemType }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!isOpen) {
      setIsOpen(true);
      // Next tick to ensure open is rendered before transition kicks in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsExpanding(true);
        });
      });
    } else {
      setIsExpanding(false);
      timerRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 280);
    }
  };

  return (
    <details
      open={isOpen}
      className={`overflow-hidden rounded-2xl border transition-[border-color,background-color,box-shadow] duration-280 ease-emil-out ${
        isExpanding && isOpen
          ? "border-primary bg-surface shadow-[0_6px_24px_-6px_rgba(74,104,77,0.12)]"
          : "border-border bg-surface hover:border-primary/50"
      }`}
    >
      <summary
        onClick={toggle}
        className="flex cursor-pointer select-none items-center justify-between px-5 py-5 text-lg font-medium text-primary-dark transition-colors duration-200 hover:text-primary list-none [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-xl sm:px-7 sm:py-6"
      >
        <span>{item.question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-muted transition-transform duration-280 ease-emil-out ${
            isExpanding && isOpen ? "rotate-180 text-primary" : "rotate-0 text-muted"
          }`}
        />
      </summary>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-280 ease-emil-out ${
          isExpanding && isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-base leading-relaxed text-muted sm:px-7 sm:pb-7">
            {item.answer}
          </p>
        </div>
      </div>
    </details>
  );
}

export default function Faq() {
  return (
    <section id="faqs" className="scroll-mt-16 md:scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
        <h2 className="text-center font-serif text-4xl text-primary-dark md:text-5xl">
          Frequently asked{" "}
          <span className="font-script text-5xl not-italic text-accent">questions</span>
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <AccordionItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

