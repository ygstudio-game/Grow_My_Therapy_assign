"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const primaryLinks = navLinks.slice(0, -1);
  const cta = navLinks[navLinks.length - 1];

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="font-serif text-lg text-primary-dark">
          {siteConfig.name}
        </Link>
        <nav className="hidden gap-8 md:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-primary-dark hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={cta.href}
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-white hover:opacity-90 md:inline-block"
        >
          {cta.label}
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="text-primary-dark md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {primaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-primary-dark hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={cta.href}
            onClick={() => setOpen(false)}
            className="mt-2 inline-block rounded-full bg-accent px-5 py-2 text-center text-sm font-medium text-white hover:opacity-90"
          >
            {cta.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
