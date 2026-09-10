import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="bg-surface pt-20">
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
                <Link href={link.href} className="text-base text-muted hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-base font-medium text-primary-dark">Contact</p>
          <p className="text-base text-muted">{siteConfig.address}</p>
          <p className="text-base text-muted">{siteConfig.phone}</p>
          <p className="text-base text-muted">{siteConfig.email}</p>
        </div>
      </div>
      <div className="h-2 w-full bg-teal-band" />
      <div className="mx-auto max-w-[1400px] px-6 py-5 text-sm text-muted md:px-10 lg:px-16">
        © 2026 {siteConfig.name} · Privacy Policy · Terms
      </div>
    </footer>
  );
}
