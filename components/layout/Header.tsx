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
    <header className="bg-bg">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-8 md:px-10 md:py-10 lg:px-16">
        <Link
          href="#"
          className="rounded-lg font-serif text-xl leading-tight text-primary-dark transition-colors duration-160 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:text-2xl md:text-3xl"
        >
          {siteConfig.name}
        </Link>
        <nav className="hidden gap-10 md:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-2 py-1 text-sm font-medium uppercase tracking-widest text-primary-dark transition-colors duration-160 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={cta.href}
          className="hidden rounded-full border border-primary-dark px-7 py-2.5 text-sm font-medium uppercase tracking-widest text-primary-dark transition-[transform,background-color,color] duration-160 ease-emil-out hover:bg-primary-dark hover:text-white active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:inline-block"
        >
          Contact
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center -mr-2.5 rounded-lg p-2.5 text-primary-dark transition-transform duration-160 ease-emil-out active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="animate-menu-slide-down flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {primaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] items-center rounded-lg px-2 py-3 text-sm text-primary-dark transition-colors duration-160 ease-out hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={cta.href}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-full bg-accent px-5 py-2.5 text-center text-sm font-medium text-white transition-transform duration-160 ease-emil-out hover:opacity-90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            {cta.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
