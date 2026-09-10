import type { Metadata } from "next";
import { Cormorant, Mulish, Sacramento } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/content";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  variable: "--font-sacramento",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Dr. Maya Reynolds, PsyD offers anxiety, trauma, EMDR, and burnout therapy in Santa Monica, CA, with in-person and telehealth sessions across California.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: siteConfig.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Santa Monica",
      addressRegion: "CA",
    },
    areaServed: "California",
    telephone: siteConfig.phone,
    email: siteConfig.email,
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable} ${sacramento.variable}`}>
      <body className="font-sans bg-bg text-primary-dark antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
