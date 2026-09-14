import type { Metadata, Viewport } from "next";
import { Cormorant, Mulish, Sacramento } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/content";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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
  metadataBase: new URL("https://grow-my-therapy-clone-dun.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Dr. Maya Reynolds, PsyD offers anxiety, trauma, EMDR, and burnout therapy in Santa Monica, CA, with in-person and telehealth sessions across California.",
  keywords: [
    "Anxiety Therapy Santa Monica",
    "Trauma Therapist Santa Monica",
    "EMDR Therapy California",
    "Burnout Counseling",
    "Dr. Maya Reynolds",
    "Licensed Clinical Psychologist Santa Monica",
    "CBT Therapy",
    "Mindfulness Somatic Therapy",
    "Telehealth California",
  ],
  authors: [{ name: siteConfig.name, url: "https://grow-my-therapy-clone-dun.vercel.app" }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
    description:
      "Warm, evidence-based anxiety, trauma, EMDR, and burnout therapy in Santa Monica and telehealth across California.",
    url: "https://grow-my-therapy-clone-dun.vercel.app",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/maya-headshot.png",
        width: 800,
        height: 1200,
        alt: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
    description:
      "Warm, evidence-based anxiety, trauma, EMDR, and burnout therapy in Santa Monica and telehealth across California.",
    images: ["/images/maya-headshot.png"],
  },
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
    image: "https://grow-my-therapy-clone-dun.vercel.app/images/maya-headshot.png",
    url: "https://grow-my-therapy-clone-dun.vercel.app",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123th Street 45 W",
      addressLocality: "Santa Monica",
      addressRegion: "CA",
      postalCode: "90401",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.01945,
      longitude: -118.49119,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "California",
      },
      {
        "@type": "City",
        name: "Santa Monica",
      },
    ],
    medicalSpecialty: [
      "Clinical Psychology",
      "Trauma Therapy",
      "EMDR",
      "Cognitive Behavioral Therapy (CBT)",
      "Anxiety & Burnout",
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable} ${sacramento.variable}`}>
      <body className="font-sans bg-bg text-primary-dark antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-primary-dark focus:px-6 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
