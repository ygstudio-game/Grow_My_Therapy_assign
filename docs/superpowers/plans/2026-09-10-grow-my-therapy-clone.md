# Dr. Maya Reynolds Homepage Clone/Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Next.js + Tailwind homepage for Dr. Maya Reynolds, PsyD that reproduces the layout/structure of `conejovalleycounseling.com/home` and replaces theme, copy, and images per the design spec.

**Architecture:** Single-page Next.js 14 App Router site. All content lives in a typed `lib/content.ts` module (single source of truth mirrors the therapist profile). Each homepage section is an isolated component under `components/sections/`, composed in order by `app/page.tsx`. Theme is CSS variables consumed by Tailwind config, so recoloring never touches component code.

**Tech Stack:** Next.js 14 (App Router) + TypeScript, Tailwind CSS, `next/font/google` (Fraunces + Work Sans), `next/image`, `lucide-react` (icons), Vitest + React Testing Library (component/content tests), Vercel (deploy).

**Spec:** `docs/superpowers/specs/2026-09-10-grow-my-therapy-clone-design.md`

## Global Constraints

- All homepage copy must trace back to the therapist profile quoted in spec §1 — never invent clinical claims.
- Only the 3 real photos exist (`Scrach/Assets/Dr. Maya Reynolds.png`, `office1.jpeg`, `office2.jpeg`) — no other photography may be used; sections without a literal photo use CSS/SVG design elements instead.
- Theme tokens are exactly: bg `#F7F3EC`, surface `#FFFFFF`, primary `#6F8770`, primary-dark `#4F5F4C`, accent `#C97B5B`, muted `#7C7568`, border `#E4DED2`, teal-band `#86B3B3` (spec §4).
- Fonts: Fraunces (headings/serif accents), Work Sans (body/UI) — spec §4.
- Placeholder contact info is exactly: phone `(310) 555-0148`, email `hello@mayareynoldspsyd.com`, address `123th Street 45 W, Santa Monica, CA 90401` (spec §7, kept verbatim from the profile).
- Section order must match spec §5 (1–12) and the original site's layout ratios verified in `conejovalleycounseling-design-design/screens/pages/home.png`.
- `npm run build` must pass with zero TypeScript errors before any task is considered done.

---

## File Structure

```
grow-my-therapy-clone/
├── package.json, tsconfig.json, next.config.js, tailwind.config.ts, postcss.config.js
├── vitest.config.ts, vitest.setup.ts
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/Header.tsx, Header.test.tsx
│   ├── layout/Footer.tsx, Footer.test.tsx
│   └── sections/
│       ├── Hero.tsx, Hero.test.tsx
│       ├── TrustBuilding.tsx, TrustBuilding.test.tsx
│       ├── WhoIHelp.tsx, WhoIHelp.test.tsx
│       ├── QuoteBand.tsx, QuoteBand.test.tsx
│       ├── ExpertiseGrid.tsx, ExpertiseGrid.test.tsx
│       ├── About.tsx, About.test.tsx
│       ├── Services.tsx, Services.test.tsx
│       ├── OurOffice.tsx, OurOffice.test.tsx
│       ├── Faq.tsx, Faq.test.tsx
│       └── CtaBand.tsx, CtaBand.test.tsx
├── lib/content.ts, content.test.ts
└── public/images/maya-headshot.png, office-1.jpeg, office-2.jpeg
```

---

### Task 1: Project scaffold, theme system, and test runner

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.js`, `postcss.config.js`, `tailwind.config.ts`
- Create: `app/globals.css`, `vitest.config.ts`, `vitest.setup.ts`, `.gitignore`
- Create: `public/images/maya-headshot.png`, `public/images/office-1.jpeg`, `public/images/office-2.jpeg` (copied from `Scrach/Assets/`)

**Interfaces:**
- Produces: Tailwind color tokens `bg`, `surface`, `primary`, `primary-dark`, `accent`, `muted`, `border`, `teal-band` usable as `bg-primary`, `text-muted`, etc. in every later task. Font families `font-serif` (Fraunces) and `font-sans` (Work Sans).
- Produces: `npm test` (Vitest, jsdom, React Testing Library, `@testing-library/jest-dom` matchers loaded via `vitest.setup.ts`).

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "grow-my-therapy-clone",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "vitest run"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/node": "^20.12.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "vitest": "^1.6.0",
    "@vitejs/plugin-react": "^4.3.0",
    "@testing-library/react": "^15.0.0",
    "@testing-library/jest-dom": "^6.4.0",
    "jsdom": "^24.1.0"
  }
}
```

Run: `npm install`

- [ ] **Step 2: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Create `next.config.js`, `postcss.config.js`, `.gitignore`**

`next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;
```

`postcss.config.js`:
```js
module.exports = {
  plugins: { tailwindcss: {}, autoprefixer: {} },
};
```

`.gitignore`:
```
node_modules
.next
out
.vercel
*.tsbuildinfo
next-env.d.ts
```

- [ ] **Step 4: Create `tailwind.config.ts` with the exact theme tokens**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        accent: "var(--color-accent)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        "teal-band": "var(--color-teal-band)",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 5: Create `app/globals.css` with theme variables**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-bg: #f7f3ec;
  --color-surface: #ffffff;
  --color-primary: #6f8770;
  --color-primary-dark: #4f5f4c;
  --color-accent: #c97b5b;
  --color-muted: #7c7568;
  --color-border: #e4ded2;
  --color-teal-band: #86b3b3;
}

body {
  background-color: var(--color-bg);
  color: var(--color-primary-dark);
}
```

- [ ] **Step 6: Copy the 3 real images into `public/images/`**

Run:
```bash
mkdir -p public/images
cp "../Scrach/Assets/Dr. Maya Reynolds.png" "public/images/maya-headshot.png"
cp "../Scrach/Assets/office1.jpeg" "public/images/office-1.jpeg"
cp "../Scrach/Assets/office2.jpeg" "public/images/office-2.jpeg"
```

- [ ] **Step 7: Create `vitest.config.ts` and `vitest.setup.ts`**

`vitest.config.ts`:
```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    globals: true,
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, ".") },
  },
});
```

`vitest.setup.ts`:
```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 8: Verify the toolchain works**

Run: `npx tsc --noEmit`
Expected: no errors (no `.tsx` files exist yet, so this just confirms config is valid)

- [ ] **Step 9: Commit**

```bash
git add package.json tsconfig.json next.config.js postcss.config.js tailwind.config.ts app/globals.css vitest.config.ts vitest.setup.ts .gitignore public/images
git commit -m "chore: scaffold Next.js project, theme tokens, and test runner"
```

---

### Task 2: Content module (single source of truth)

**Files:**
- Create: `lib/content.ts`
- Test: `lib/content.test.ts`

**Interfaces:**
- Produces types: `NavLink { label: string; href: string }`, `CardItem { title: string; description: string }`, `FaqItem { question: string; answer: string }`.
- Produces constants consumed by every section component in later tasks: `siteConfig`, `navLinks`, `hero`, `trustBuilding`, `whoIHelp`, `quote`, `expertiseKeywords`, `about`, `services`, `ourOffice`, `faqs`, `ctaBand`, `footerNav`.

- [ ] **Step 1: Write the failing test**

```ts
// lib/content.test.ts
import { describe, it, expect } from "vitest";
import {
  siteConfig,
  navLinks,
  hero,
  trustBuilding,
  whoIHelp,
  quote,
  expertiseKeywords,
  about,
  services,
  ourOffice,
  faqs,
  ctaBand,
  footerNav,
} from "./content";

describe("content", () => {
  it("has correct site config", () => {
    expect(siteConfig.name).toBe("Dr. Maya Reynolds, PsyD");
    expect(siteConfig.phone).toBe("(310) 555-0148");
    expect(siteConfig.email).toBe("hello@mayareynoldspsyd.com");
    expect(siteConfig.address).toBe("123th Street 45 W, Santa Monica, CA 90401");
  });

  it("has 6 nav links and 6 footer nav links", () => {
    expect(navLinks).toHaveLength(6);
    expect(footerNav).toHaveLength(6);
  });

  it("hero H1 includes the primary SEO keyword and location", () => {
    expect(hero.h1).toContain("Anxiety");
    expect(hero.h1).toContain("Santa Monica");
  });

  it("trust building has headline and 2 body paragraphs", () => {
    expect(trustBuilding.headline.length).toBeGreaterThan(0);
    expect(trustBuilding.body).toHaveLength(2);
  });

  it("has exactly 3 who-I-help cards", () => {
    expect(whoIHelp).toHaveLength(3);
    expect(whoIHelp[0].title).toBe("High-Achieving Professionals");
  });

  it("has a quote with attribution", () => {
    expect(quote.text.length).toBeGreaterThan(0);
    expect(quote.author).toBe("Dr. Maya Reynolds, PsyD");
  });

  it("has at least 8 expertise keywords", () => {
    expect(expertiseKeywords.length).toBeGreaterThanOrEqual(8);
  });

  it("about section has 4 body paragraphs", () => {
    expect(about.body).toHaveLength(4);
  });

  it("has exactly 3 services", () => {
    expect(services).toHaveLength(3);
    expect(services.map((s) => s.title)).toEqual([
      "Anxiety & Panic Treatment",
      "Trauma Therapy & EMDR",
      "Burnout & Perfectionism Support",
    ]);
  });

  it("our office section includes the profile address", () => {
    expect(ourOffice.address).toBe(siteConfig.address);
  });

  it("has exactly 5 FAQs", () => {
    expect(faqs).toHaveLength(5);
  });

  it("cta band has heading, body, and cta label", () => {
    expect(ctaBand.heading.length).toBeGreaterThan(0);
    expect(ctaBand.ctaLabel).toBe("Book a Free Consultation");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run lib/content.test.ts`
Expected: FAIL with "Cannot find module './content'"

- [ ] **Step 3: Write `lib/content.ts`**

```ts
// lib/content.ts

export interface NavLink {
  label: string;
  href: string;
}

export interface CardItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: "Dr. Maya Reynolds, PsyD",
  tagline:
    "Anxiety, trauma & burnout therapy — Santa Monica, CA & telehealth across California",
  phone: "(310) 555-0148",
  email: "hello@mayareynoldspsyd.com",
  address: "123th Street 45 W, Santa Monica, CA 90401",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Office", href: "#our-office" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
  { label: "Book a Free Consultation", href: "#contact" },
];

export const hero = {
  h1: "Anxiety & Trauma Therapy in Santa Monica, CA",
  subhead:
    "Rebuild a sense of steadiness, quiet the overthinking, and reconnect with yourself — with warm, evidence-based care from Dr. Maya Reynolds, PsyD.",
  body: "In-person sessions in Santa Monica and secure telehealth across California, for adults who look put-together on the outside but feel exhausted, anxious, or stuck within.",
  ctaLabel: "Book a Free Consultation",
};

export const trustBuilding = {
  headline: "You look like you have it together. Inside, it might feel different.",
  subhead:
    "Many of the people I work with are high-achieving, thoughtful, and self-aware — but quietly exhausted, overthinking, or emotionally on edge.",
  body: [
    "You may be functioning well on the outside while carrying constant worry, tension in your body, restless nights, or the sense that you're always bracing for something to go wrong. Others I work with are still feeling the impact of earlier experiences — in their relationships, their confidence, or their sense of safety.",
    "Therapy can be a place to finally slow down, understand what's happening beneath the surface, and build a steadier relationship with yourself.",
  ],
};

export const whoIHelp: CardItem[] = [
  {
    title: "High-Achieving Professionals",
    description:
      "If you're managing constant pressure, overthinking, or a nervous system that won't switch off, we'll work together to help you feel more regulated and at ease in daily life.",
  },
  {
    title: "Trauma Survivors",
    description:
      "Whether from a single event or long-standing patterns rooted in childhood or chronic stress, trauma-informed care — paced carefully — can help you feel safer in your body and your life.",
  },
  {
    title: "Entrepreneurs & Creatives",
    description:
      "Many of my clients are entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through. Therapy can help you reconnect and build a more sustainable way of working and living.",
  },
];

export const quote = {
  text: "Therapy isn't just about symptom relief — it's about insight, resilience, and coming home to yourself.",
  author: "Dr. Maya Reynolds, PsyD",
};

export const expertiseKeywords: string[] = [
  "Anxiety & Panic",
  "Trauma & PTSD",
  "EMDR",
  "Burnout & Perfectionism",
  "CBT",
  "Mindfulness-Based Therapy",
  "Body-Oriented Therapy",
  "Stress Management",
  "Entrepreneurs & Creatives",
  "In-Person & Telehealth",
  "Santa Monica & CA-wide",
  "…and more",
];

export const about = {
  heading: "About Dr. Maya Reynolds, PsyD",
  subhead: "Licensed Clinical Psychologist, Santa Monica, CA",
  body: [
    "I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware — but internally feel exhausted, stuck in overthinking, or emotionally on edge.",
    "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they're experiencing.",
    "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives — not just during sessions.",
    "I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.",
  ],
};

export const services: CardItem[] = [
  {
    title: "Anxiety & Panic Treatment",
    description:
      "Constant worry, racing thoughts, or panic that shows up in your body? I use CBT and mindfulness-based approaches to help you understand your anxiety and build lasting tools to feel calmer and more in control.",
  },
  {
    title: "Trauma Therapy & EMDR",
    description:
      "Whether trauma is recent or rooted in childhood, I offer paced, safety-focused care using EMDR and body-oriented techniques to help you feel more regulated, safe, and whole.",
  },
  {
    title: "Burnout & Perfectionism Support",
    description:
      "For entrepreneurs, creatives, and high-achievers running on empty, we'll work together to loosen perfectionism's grip and build a more sustainable relationship with work and yourself.",
  },
];

export const ourOffice = {
  heading: "A Calm Space to Begin",
  body: "My Santa Monica office is a quiet, private space designed to feel calm and grounding — filled with natural light and a comfortable, uncluttered environment. Clients often tell me the space itself helps them feel more at ease the moment they arrive.",
  address: siteConfig.address,
  note: "In-person sessions available at my Santa Monica office, with secure telehealth offered for clients throughout California.",
};

export const faqs: FaqItem[] = [
  {
    question: "Do you offer in-person and online sessions?",
    answer:
      "Yes — I offer in-person therapy at my Santa Monica office as well as secure telehealth sessions for clients located anywhere in California.",
  },
  {
    question: "What therapy methods do you use?",
    answer:
      "I integrate evidence-based approaches including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, tailored to what you need.",
  },
  {
    question: "Do you work with trauma?",
    answer:
      "Yes. I work with both single-incident and more complex, long-standing trauma, with an emphasis on safety, stabilization, and pacing that feels right for you.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "Most of my clients are adults — often high-achieving professionals, entrepreneurs, and creatives — navigating anxiety, burnout, or the lasting effects of past experiences.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free consultation using the button above, and we'll find a time to talk about what you're looking for and whether we're a good fit.",
  },
];

export const ctaBand = {
  heading: "Ready to feel more like yourself again?",
  body: "Reach out for a free consultation and take the first step toward calmer, more grounded days.",
  ctaLabel: "Book a Free Consultation",
};

export const footerNav: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Office", href: "#our-office" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run lib/content.test.ts`
Expected: PASS (12 tests)

- [ ] **Step 5: Commit**

```bash
git add lib/content.ts lib/content.test.ts
git commit -m "feat: add typed content module as single source of truth"
```

---

### Task 3: Root layout — fonts, metadata, JSON-LD schema

**Files:**
- Create: `app/layout.tsx`

**Interfaces:**
- Consumes: `siteConfig` from `lib/content.ts` (Task 2).
- Produces: `RootLayout({ children }: { children: React.ReactNode })` wrapping every page; CSS variables `--font-fraunces` / `--font-work-sans` available globally.

- [ ] **Step 1: Write `app/layout.tsx`**

```tsx
// app/layout.tsx
import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/content";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
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
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
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
```

This task has no unit test of its own (it is Next.js framework wiring, verified indirectly by `npm run build` in Task 10 and by every component test rendering successfully through Tailwind/JSX in the tasks below).

- [ ] **Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add root layout with fonts, metadata, and Psychologist JSON-LD schema"
```

---

### Task 4: Header and Footer

**Files:**
- Create: `components/layout/Header.tsx`, `components/layout/Header.test.tsx`
- Create: `components/layout/Footer.tsx`, `components/layout/Footer.test.tsx`

**Interfaces:**
- Consumes: `navLinks`, `footerNav`, `siteConfig` from `lib/content.ts`.
- Produces: `Header()` and `Footer()`, zero-prop components, used by `app/page.tsx` in Task 10.

- [ ] **Step 1: Write the failing tests**

```tsx
// components/layout/Header.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./Header";

describe("Header", () => {
  it("renders the practice name and all nav links", () => {
    render(<Header />);
    expect(screen.getByText("Dr. Maya Reynolds, PsyD")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
    expect(screen.getByRole("link", { name: "Book a Free Consultation" })).toHaveAttribute(
      "href",
      "#contact"
    );
  });
});
```

```tsx
// components/layout/Footer.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders address, phone, and email placeholders", () => {
    render(<Footer />);
    expect(screen.getByText("123th Street 45 W, Santa Monica, CA 90401")).toBeInTheDocument();
    expect(screen.getByText("(310) 555-0148")).toBeInTheDocument();
    expect(screen.getByText("hello@mayareynoldspsyd.com")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run components/layout`
Expected: FAIL with "Cannot find module './Header'" / "./Footer"

- [ ] **Step 3: Write `components/layout/Header.tsx`**

```tsx
// components/layout/Header.tsx
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
```

- [ ] **Step 4: Write `components/layout/Footer.tsx`**

```tsx
// components/layout/Footer.tsx
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
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `npx vitest run components/layout`
Expected: PASS (2 tests)

- [ ] **Step 6: Commit**

```bash
git add components/layout
git commit -m "feat: add Header and Footer layout components"
```

---

### Task 5: Hero and TrustBuilding sections

**Files:**
- Create: `components/sections/Hero.tsx`, `components/sections/Hero.test.tsx`
- Create: `components/sections/TrustBuilding.tsx`, `components/sections/TrustBuilding.test.tsx`

**Interfaces:**
- Consumes: `hero`, `trustBuilding` from `lib/content.ts`; `public/images/maya-headshot.png`, `public/images/office-1.jpeg`.
- Produces: `Hero()`, `TrustBuilding()` zero-prop components used by `app/page.tsx` in Task 10.

- [ ] **Step 1: Write the failing tests**

```tsx
// components/sections/Hero.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders the H1 with SEO keyword and location, and the CTA", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { level: 1, name: /Anxiety & Trauma Therapy in Santa Monica, CA/ })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Book a Free Consultation" })).toBeInTheDocument();
  });
});
```

```tsx
// components/sections/TrustBuilding.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TrustBuilding from "./TrustBuilding";

describe("TrustBuilding", () => {
  it("renders the headline and both body paragraphs", () => {
    render(<TrustBuilding />);
    expect(
      screen.getByText("You look like you have it together. Inside, it might feel different.")
    ).toBeInTheDocument();
    expect(screen.getByText(/Therapy can be a place to finally slow down/)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run components/sections/Hero.test.tsx components/sections/TrustBuilding.test.tsx`
Expected: FAIL with "Cannot find module"

- [ ] **Step 3: Write `components/sections/Hero.tsx`**

```tsx
// components/sections/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Online & In-Person Counseling
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-primary-dark md:text-5xl">
          {hero.h1}
        </h1>
        <p className="mt-5 font-serif text-xl italic text-primary">{hero.subhead}</p>
        <p className="mt-4 text-base text-muted">{hero.body}</p>
        <Link
          href="#contact"
          className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          {hero.ctaLabel}
        </Link>
      </div>
      <div className="relative h-80 w-full overflow-hidden rounded-3xl md:h-[28rem]">
        <Image
          src="/images/maya-headshot.png"
          alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, California"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Write `components/sections/TrustBuilding.tsx`**

```tsx
// components/sections/TrustBuilding.tsx
import Image from "next/image";
import { trustBuilding } from "@/lib/content";

export default function TrustBuilding() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="relative h-72 w-full overflow-hidden rounded-3xl md:h-96">
          <Image
            src="/images/office-1.jpeg"
            alt="Dr. Maya Reynolds' quiet, sunlit therapy office in Santa Monica"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl text-primary-dark">{trustBuilding.headline}</h2>
          <p className="mt-4 font-serif text-lg italic text-primary">{trustBuilding.subhead}</p>
          {trustBuilding.body.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-base text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `npx vitest run components/sections/Hero.test.tsx components/sections/TrustBuilding.test.tsx`
Expected: PASS (2 tests)

- [ ] **Step 6: Commit**

```bash
git add components/sections/Hero.tsx components/sections/Hero.test.tsx components/sections/TrustBuilding.tsx components/sections/TrustBuilding.test.tsx
git commit -m "feat: add Hero and TrustBuilding sections"
```

---

### Task 6: WhoIHelp and QuoteBand sections

**Files:**
- Create: `components/sections/WhoIHelp.tsx`, `components/sections/WhoIHelp.test.tsx`
- Create: `components/sections/QuoteBand.tsx`, `components/sections/QuoteBand.test.tsx`

**Interfaces:**
- Consumes: `whoIHelp: CardItem[]`, `quote` from `lib/content.ts`; `public/images/office-2.jpeg`.
- Produces: `WhoIHelp()`, `QuoteBand()` zero-prop components.

- [ ] **Step 1: Write the failing tests**

```tsx
// components/sections/WhoIHelp.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WhoIHelp from "./WhoIHelp";

describe("WhoIHelp", () => {
  it("renders all 3 cards with titles and descriptions", () => {
    render(<WhoIHelp />);
    expect(screen.getByText("High-Achieving Professionals")).toBeInTheDocument();
    expect(screen.getByText("Trauma Survivors")).toBeInTheDocument();
    expect(screen.getByText("Entrepreneurs & Creatives")).toBeInTheDocument();
  });
});
```

```tsx
// components/sections/QuoteBand.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import QuoteBand from "./QuoteBand";

describe("QuoteBand", () => {
  it("renders the quote text and attribution", () => {
    render(<QuoteBand />);
    expect(
      screen.getByText(/it's about insight, resilience, and coming home to yourself/)
    ).toBeInTheDocument();
    expect(screen.getByText("Dr. Maya Reynolds, PsyD")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run components/sections/WhoIHelp.test.tsx components/sections/QuoteBand.test.tsx`
Expected: FAIL with "Cannot find module"

- [ ] **Step 3: Write `components/sections/WhoIHelp.tsx`**

```tsx
// components/sections/WhoIHelp.tsx
import { whoIHelp } from "@/lib/content";

export default function WhoIHelp() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h2 className="font-serif text-3xl text-primary-dark">
        Who I <span className="italic text-accent">help</span>
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {whoIHelp.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-border bg-gradient-to-br from-bg to-surface p-8"
          >
            <div className="mb-4 h-2 w-10 rounded-full bg-accent" />
            <h3 className="font-serif text-xl text-primary-dark">{card.title}</h3>
            <p className="mt-3 text-sm text-muted">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Write `components/sections/QuoteBand.tsx`**

```tsx
// components/sections/QuoteBand.tsx
import Image from "next/image";
import { quote } from "@/lib/content";

export default function QuoteBand() {
  return (
    <section className="relative overflow-hidden py-24">
      <Image
        src="/images/office-2.jpeg"
        alt="Reading corner in Dr. Maya Reynolds' Santa Monica therapy office"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary-dark/70" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="font-serif text-2xl italic leading-relaxed text-white md:text-3xl">
          &ldquo;{quote.text}&rdquo;
        </p>
        <p className="mt-6 text-sm uppercase tracking-widest text-white/80">{quote.author}</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `npx vitest run components/sections/WhoIHelp.test.tsx components/sections/QuoteBand.test.tsx`
Expected: PASS (2 tests)

- [ ] **Step 6: Commit**

```bash
git add components/sections/WhoIHelp.tsx components/sections/WhoIHelp.test.tsx components/sections/QuoteBand.tsx components/sections/QuoteBand.test.tsx
git commit -m "feat: add WhoIHelp and QuoteBand sections"
```

---

### Task 7: ExpertiseGrid and About sections

**Files:**
- Create: `components/sections/ExpertiseGrid.tsx`, `components/sections/ExpertiseGrid.test.tsx`
- Create: `components/sections/About.tsx`, `components/sections/About.test.tsx`

**Interfaces:**
- Consumes: `expertiseKeywords: string[]`, `about` from `lib/content.ts`; `public/images/maya-headshot.png`.
- Produces: `ExpertiseGrid()`, `About()` zero-prop components.

- [ ] **Step 1: Write the failing tests**

```tsx
// components/sections/ExpertiseGrid.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ExpertiseGrid from "./ExpertiseGrid";

describe("ExpertiseGrid", () => {
  it("renders every expertise keyword", () => {
    render(<ExpertiseGrid />);
    expect(screen.getByText("EMDR")).toBeInTheDocument();
    expect(screen.getByText("Anxiety & Panic")).toBeInTheDocument();
    expect(screen.getByText("…and more")).toBeInTheDocument();
  });
});
```

```tsx
// components/sections/About.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "./About";

describe("About", () => {
  it("renders the heading, subhead, and headshot image", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: "About Dr. Maya Reynolds, PsyD" })).toBeInTheDocument();
    expect(screen.getByText("Licensed Clinical Psychologist, Santa Monica, CA")).toBeInTheDocument();
    expect(screen.getByAltText(/Dr. Maya Reynolds/)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run components/sections/ExpertiseGrid.test.tsx components/sections/About.test.tsx`
Expected: FAIL with "Cannot find module"

- [ ] **Step 3: Write `components/sections/ExpertiseGrid.tsx`**

```tsx
// components/sections/ExpertiseGrid.tsx
import { expertiseKeywords } from "@/lib/content";

export default function ExpertiseGrid() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="font-serif text-3xl text-primary-dark">
          Our areas of <span className="italic text-accent">expertise</span>
        </h2>
        <ul className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-3">
          {expertiseKeywords.map((keyword) => (
            <li
              key={keyword}
              className="border-b border-border pb-3 text-base text-primary-dark"
            >
              {keyword}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Write `components/sections/About.tsx`**

```tsx
// components/sections/About.tsx
import Image from "next/image";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
      <div className="relative h-96 w-full overflow-hidden rounded-3xl">
        <Image
          src="/images/maya-headshot.png"
          alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="font-serif text-3xl text-primary-dark">{about.heading}</h2>
        <p className="mt-2 text-sm uppercase tracking-widest text-accent">{about.subhead}</p>
        {about.body.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-base text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `npx vitest run components/sections/ExpertiseGrid.test.tsx components/sections/About.test.tsx`
Expected: PASS (2 tests)

- [ ] **Step 6: Commit**

```bash
git add components/sections/ExpertiseGrid.tsx components/sections/ExpertiseGrid.test.tsx components/sections/About.tsx components/sections/About.test.tsx
git commit -m "feat: add ExpertiseGrid and About sections"
```

---

### Task 8: Services section

**Files:**
- Create: `components/sections/Services.tsx`, `components/sections/Services.test.tsx`

**Interfaces:**
- Consumes: `services: CardItem[]` from `lib/content.ts`.
- Produces: `Services()` zero-prop component.

- [ ] **Step 1: Write the failing test**

```tsx
// components/sections/Services.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Services from "./Services";

describe("Services", () => {
  it("renders all 3 services with titles and descriptions", () => {
    render(<Services />);
    expect(screen.getByText("Anxiety & Panic Treatment")).toBeInTheDocument();
    expect(screen.getByText("Trauma Therapy & EMDR")).toBeInTheDocument();
    expect(screen.getByText("Burnout & Perfectionism Support")).toBeInTheDocument();
    expect(screen.getByText(/CBT and mindfulness-based approaches/)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run components/sections/Services.test.tsx`
Expected: FAIL with "Cannot find module"

- [ ] **Step 3: Write `components/sections/Services.tsx`**

```tsx
// components/sections/Services.tsx
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="font-serif text-3xl text-primary-dark">
          Honoring where you&apos;ve been{" "}
          <span className="italic text-accent">&amp; helping shape where you&apos;re headed</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted">Our services include…</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-border p-8">
              <h3 className="font-serif text-xl text-primary-dark">{service.title}</h3>
              <p className="mt-3 text-sm text-muted">{service.description}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-primary underline">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run components/sections/Services.test.tsx`
Expected: PASS (1 test)

- [ ] **Step 5: Commit**

```bash
git add components/sections/Services.tsx components/sections/Services.test.tsx
git commit -m "feat: add Services section"
```

---

### Task 9: OurOffice (new section) and Faq

**Files:**
- Create: `components/sections/OurOffice.tsx`, `components/sections/OurOffice.test.tsx`
- Create: `components/sections/Faq.tsx`, `components/sections/Faq.test.tsx`

**Interfaces:**
- Consumes: `ourOffice`, `faqs: FaqItem[]` from `lib/content.ts`; `public/images/office-1.jpeg`, `public/images/office-2.jpeg`.
- Produces: `OurOffice()`, `Faq()` zero-prop components. This is the **Part 3 "new section"** requirement from the assignment.

- [ ] **Step 1: Write the failing tests**

```tsx
// components/sections/OurOffice.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import OurOffice from "./OurOffice";

describe("OurOffice", () => {
  it("renders heading, address, note, and both office photos", () => {
    render(<OurOffice />);
    expect(screen.getByRole("heading", { name: "A Calm Space to Begin" })).toBeInTheDocument();
    expect(screen.getByText("123th Street 45 W, Santa Monica, CA 90401")).toBeInTheDocument();
    expect(screen.getByText(/secure telehealth offered for clients throughout California/)).toBeInTheDocument();
    expect(screen.getAllByAltText(/Dr. Maya Reynolds' .* office/)).toHaveLength(2);
  });
});
```

```tsx
// components/sections/Faq.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Faq from "./Faq";

describe("Faq", () => {
  it("renders all 5 questions collapsed by default and reveals the answer on click", async () => {
    render(<Faq />);
    expect(screen.getByText("Do you offer in-person and online sessions?")).toBeInTheDocument();
    expect(screen.getAllByRole("group")).toHaveLength(5);

    const firstAnswer = screen.getByText(
      /I offer in-person therapy at my Santa Monica office/
    );
    expect(firstAnswer).not.toBeVisible();

    const user = userEvent.setup();
    await user.click(screen.getByText("Do you offer in-person and online sessions?"));
    expect(firstAnswer).toBeVisible();
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run components/sections/OurOffice.test.tsx components/sections/Faq.test.tsx`
Expected: FAIL with "Cannot find module". Also install `@testing-library/user-event`: `npm install -D @testing-library/user-event`

- [ ] **Step 3: Write `components/sections/OurOffice.tsx`**

```tsx
// components/sections/OurOffice.tsx
import Image from "next/image";
import { ourOffice } from "@/lib/content";

export default function OurOffice() {
  return (
    <section id="our-office" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">Our Office</p>
          <h2 className="mt-4 font-serif text-3xl text-primary-dark">{ourOffice.heading}</h2>
          <p className="mt-4 text-base text-muted">{ourOffice.body}</p>
          <p className="mt-6 text-sm font-medium text-primary-dark">{ourOffice.address}</p>
          <p className="mt-2 text-sm text-muted">{ourOffice.note}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-64 overflow-hidden rounded-3xl">
            <Image
              src="/images/office-1.jpeg"
              alt="Dr. Maya Reynolds' bright, uncluttered office seating area"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 overflow-hidden rounded-3xl">
            <Image
              src="/images/office-2.jpeg"
              alt="Dr. Maya Reynolds' office reading corner with natural light"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Write `components/sections/Faq.tsx`**

Native `<details>`/`<summary>` needs no client JS, and jsdom/RTL supports toggling it via `userEvent.click`. `role="group"` comes for free from `<details>`.

```tsx
// components/sections/Faq.tsx
import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faqs" className="bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h2 className="text-center font-serif text-3xl text-primary-dark">
          Frequently asked <span className="italic text-accent">questions</span>
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
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `npx vitest run components/sections/OurOffice.test.tsx components/sections/Faq.test.tsx`
Expected: PASS (2 tests)

- [ ] **Step 6: Commit**

```bash
git add components/sections/OurOffice.tsx components/sections/OurOffice.test.tsx components/sections/Faq.tsx components/sections/Faq.test.tsx package.json package-lock.json
git commit -m "feat: add OurOffice (new section) and Faq accordion"
```

---

### Task 10: CtaBand, page composition, and build verification

**Files:**
- Create: `components/sections/CtaBand.tsx`, `components/sections/CtaBand.test.tsx`
- Create: `app/page.tsx`

**Interfaces:**
- Consumes: `ctaBand` from `lib/content.ts`; every component from Tasks 4–9.
- Produces: the full homepage at `/`.

- [ ] **Step 1: Write the failing test**

```tsx
// components/sections/CtaBand.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CtaBand from "./CtaBand";

describe("CtaBand", () => {
  it("renders heading, body, and CTA link", () => {
    render(<CtaBand />);
    expect(screen.getByText("Ready to feel more like yourself again?")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Book a Free Consultation" })).toHaveAttribute(
      "href",
      "#contact"
    );
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run components/sections/CtaBand.test.tsx`
Expected: FAIL with "Cannot find module"

- [ ] **Step 3: Write `components/sections/CtaBand.tsx`**

```tsx
// components/sections/CtaBand.tsx
import Link from "next/link";
import { ctaBand } from "@/lib/content";

export default function CtaBand() {
  return (
    <section className="bg-primary-dark">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
        <h2 className="font-serif text-3xl text-white">{ctaBand.heading}</h2>
        <p className="mt-4 text-base text-white/80">{ctaBand.body}</p>
        <Link
          href="#contact"
          className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          {ctaBand.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run components/sections/CtaBand.test.tsx`
Expected: PASS (1 test)

- [ ] **Step 5: Write `app/page.tsx` composing every section in spec order**

```tsx
// app/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBuilding from "@/components/sections/TrustBuilding";
import WhoIHelp from "@/components/sections/WhoIHelp";
import QuoteBand from "@/components/sections/QuoteBand";
import ExpertiseGrid from "@/components/sections/ExpertiseGrid";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import OurOffice from "@/components/sections/OurOffice";
import Faq from "@/components/sections/Faq";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBuilding />
        <WhoIHelp />
        <QuoteBand />
        <ExpertiseGrid />
        <About />
        <Services />
        <OurOffice />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 6: Run the full test suite**

Run: `npm test`
Expected: PASS (all tests across every task, 0 failures)

- [ ] **Step 7: Run the production build**

Run: `npm run build`
Expected: build succeeds with 0 TypeScript errors, static homepage generated

- [ ] **Step 8: Manual visual check**

Run: `npm run dev`, open `http://localhost:3000`, and compare section order/spacing against `../conejovalleycounseling-design-design/screens/pages/home.png`. Resize the browser to 375px, 768px, 1024px, and 1440px and confirm no horizontal scroll or broken layout at any width.

- [ ] **Step 9: Commit**

```bash
git add components/sections/CtaBand.tsx components/sections/CtaBand.test.tsx app/page.tsx
git commit -m "feat: add CtaBand and compose full homepage in app/page.tsx"
```

---

### Task 11: Deploy to Vercel and push to GitHub

**Files:** none (infra step)

- [ ] **Step 1: Create a public GitHub repo and push**

```bash
gh repo create grow-my-therapy-clone --public --source=. --remote=origin --push
```

If `gh` is not authenticated, create the repo manually on github.com, then:
```bash
git remote add origin <repo-url>
git push -u origin master
```

- [ ] **Step 2: Deploy to Vercel**

```bash
npx vercel --prod
```

Follow the prompts to link the project; accept the auto-detected Next.js build settings.

- [ ] **Step 3: Verify the live deployment**

Open the deployed URL and confirm: homepage loads, all 3 real images render, FAQ accordion opens/closes, nav anchor links scroll to the right sections, and mobile viewport (DevTools device toolbar) looks correct.

- [ ] **Step 4: Record deliverables**

Note the live URL and GitHub repo URL for submission alongside the Loom video walkthrough (recorded separately, per the assignment's Part 4 — not a code task).

---

## Self-Review Notes

- **Spec coverage:** All 12 sections from spec §5 have a task (Tasks 4–10). Theme tokens (§4) implemented in Task 1. Placeholder contact info (§7) implemented in Task 2, asserted in Header/Footer/OurOffice tests. SEO plan (§8) implemented in Task 3 (metadata + JSON-LD) and Task 5 (H1). Testing plan (§9) covered by Task 10 Steps 6–8. Deliverables (§10) covered by Task 11.
- **Placeholder scan:** No "TBD"/"implement later" strings; every step has literal code or an exact shell command.
- **Type consistency:** `CardItem` used consistently for `whoIHelp` and `services`; `FaqItem` used for `faqs`; `NavLink` used for `navLinks`/`footerNav`. Component names match their file names and their usage in `app/page.tsx` exactly.
