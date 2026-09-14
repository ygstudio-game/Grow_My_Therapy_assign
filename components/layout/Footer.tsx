import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-16 md:scroll-mt-24 bg-surface pt-20">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 pb-14 md:grid-cols-3 md:px-10 lg:px-16">
        <div>
          <p className="font-serif text-2xl text-primary-dark">{siteConfig.name}</p>
          <p className="mt-3 text-base text-muted">{siteConfig.tagline}</p>
        </div>
        <div>
          <p className="mb-4 text-base font-medium text-primary-dark">Navigate</p>
          <ul className="space-y-3">
            {footerNav.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="rounded-sm text-base text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-base font-medium text-primary-dark">Practice &amp; Location</p>
          <p className="text-base text-muted">{siteConfig.address}</p>
          <p className="mt-2 text-sm text-muted">
            {siteConfig.availability}
          </p>
          <Link
            href="#contact"
            className="mt-4 inline-block rounded-full border border-primary-dark px-5 py-2 text-xs font-medium uppercase tracking-widest text-primary-dark transition-colors duration-160 hover:bg-primary-dark hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            Consultation by Request
          </Link>
        </div>
      </div>
      <div className="h-2 w-full bg-teal-band" />
      <div className="mx-auto max-w-[1400px] px-6 py-5 text-sm text-muted md:px-10 lg:px-16">
        © 2026 {siteConfig.name} ·{" "}
        <a
          href="#privacy"
          className="rounded-sm hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          Privacy Policy
        </a>{" "}
        ·{" "}
        <a
          href="#terms"
          className="rounded-sm hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          Terms
        </a>
      </div>
    </footer>
  );
}
