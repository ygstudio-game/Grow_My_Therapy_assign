import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="bg-surface pt-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg text-primary-dark">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-muted">{siteConfig.tagline}</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-medium text-primary-dark">Navigate</p>
          <ul className="space-y-2">
            {footerNav.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-muted hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-medium text-primary-dark">Contact</p>
          <p className="text-sm text-muted">{siteConfig.address}</p>
          <p className="text-sm text-muted">{siteConfig.phone}</p>
          <p className="text-sm text-muted">{siteConfig.email}</p>
        </div>
      </div>
      <div className="h-2 w-full bg-teal-band" />
      <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-muted">
        © 2026 {siteConfig.name} · Privacy Policy · Terms
      </div>
    </footer>
  );
}
