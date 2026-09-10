import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content";

export default function Header() {
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
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          {cta.label}
        </Link>
      </div>
    </header>
  );
}
