# Grow My Therapy Internship Assignment — Design Spec

Dr. Maya Reynolds, PsyD homepage: clone `conejovalleycounseling.com/home`, then redesign with Maya's theme, copy, and images.

## 1. Source material (single source of truth)

- Assignment brief: `Scrach/deatils.md`
- Therapist profile: `Scrach/Dr. Maya Reynolds, PsyD.pdf` / `.md` (identical content, extracted in full below)
- Real photos (only 3 exist — no other imagery may be invented as "hers"):
  - `Scrach/Assets/Dr. Maya Reynolds.png` — headshot
  - `Scrach/Assets/office1.jpeg` — office interior (grey sofa, glass coffee table, tall windows)
  - `Scrach/Assets/office2.jpeg` — office interior (bookshelf, leather chair, plant)
- Reference site design extraction: `conejovalleycounseling-design-design/` (skillui output) — **only the screenshots (`screens/pages/home.png`, `screens/scroll/*`, `screens/sections/*`) are trustworthy.** Its `DESIGN.md` token file is corrupted by Squarespace's admin/editor CSS (falsely reports a black `#000000`/`#313131` dark theme) — do not use its color/font tokens. Verified-by-pixel-sampling real palette of the original site: cream `#F6F4EE`, white, sand `#E3D9CA`, dusty teal `#86B3B3`.

### Full extracted profile text (verbatim)

> Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist *(Fictional Therapist)*
> **Office** — Address: 123th Street 45 W, Santa Monica, CA 90401
>
> **About Dr. Maya Reynolds, PsyD**
> I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
>
> My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling "functional" on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they're always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
>
> I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they're experiencing.
>
> Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.
>
> In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.
>
> I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
>
> I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.
>
> If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.

That is the **entire** profile — there is no phone, email, insurance, session-fee, or license-number info anywhere in the source. Those are fabricated as clearly-fictional placeholders (see §7).

## 2. Tech stack

- Next.js 14 (App Router), TypeScript
- Tailwind CSS (theme tokens as CSS variables + Tailwind config, per assignment checklist requirement for reusable/maintainable theming)
- `next/font/google`: **Fraunces** (serif, headings + italic accent words), **Work Sans** (sans, body/nav/UI)
- `next/image` for the 3 real photos
- Deployment target: Vercel
- No backend/CMS/database — all copy lives in `lib/content.ts` as typed constants (single place to edit copy, mirrors how the profile is the single source of truth)

## 3. Folder structure

```
grow-my-therapy-clone/
├── app/
│   ├── layout.tsx          # fonts, metadata, JSON-LD schema
│   ├── page.tsx            # composes all sections in order
│   └── globals.css         # Tailwind base + CSS variable theme tokens
├── components/
│   ├── layout/Header.tsx
│   ├── layout/Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── TrustBuilding.tsx
│       ├── WhoIHelp.tsx
│       ├── QuoteBand.tsx
│       ├── ExpertiseGrid.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── OurOffice.tsx    # NEW section (Part 3 of assignment)
│       ├── Faq.tsx
│       └── CtaBand.tsx
├── lib/content.ts           # all copy, typed
├── public/images/           # the 3 real photos, optimized
└── docs/superpowers/specs/  # this file
```

## 4. Theme tokens (sage & terracotta)

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#F7F3EC` | page background (cream) |
| `--color-surface` | `#FFFFFF` | card/section backgrounds |
| `--color-primary` | `#6F8770` | sage — buttons, links, icons |
| `--color-primary-dark` | `#4F5F4C` | deep sage — headings, nav text |
| `--color-accent` | `#C97B5B` | terracotta — CTA highlights, script accent words |
| `--color-muted` | `#7C7568` | warm taupe — body/secondary text |
| `--color-border` | `#E4DED2` | dividers, card borders |
| `--color-teal-band` | `#86B3B3` | thin accent bar in footer (nod to original's teal, not a copy of it) |

Fonts: `Fraunces` (headings, weight 500/600, italic for accent words like *thrive*, *steadiness*, *yourself*), `Work Sans` (body/nav, weight 400/500).

Contrast check: sage `#4F5F4C` on cream `#F7F3EC` = AA-safe for text; terracotta `#C97B5B` used only for accents/buttons with white text, not body copy.

## 5. Section-by-section spec (content sourced from §1 profile only)

### 1. Header/Nav
Logo: "Dr. Maya Reynolds, PsyD". Links: About · Services · Our Office · FAQs · Contact. CTA button: "Book a Free Consultation" (links to `#contact`).

### 2. Hero
- H1 (SEO): **"Anxiety & Trauma Therapy in Santa Monica, CA"**
- Subhead: "Rebuild a sense of steadiness, quiet the overthinking, and reconnect with yourself — with warm, evidence-based care from Dr. Maya Reynolds, PsyD."
- Body: "In-person sessions in Santa Monica and secure telehealth across California, for adults who look put-together on the outside but feel exhausted, anxious, or stuck within."
- CTA: "Book a Free Consultation"
- Image: headshot

### 3. Trust-Building (2-col)
- Headline: "You look like you have it together. Inside, it might feel different."
- Subhead: "Many of the people I work with are high-achieving, thoughtful, and self-aware — but quietly exhausted, overthinking, or emotionally on edge."
- Body: "You may be functioning well on the outside while carrying constant worry, tension in your body, restless nights, or the sense that you're always bracing for something to go wrong. Others I work with are still feeling the impact of earlier experiences — in their relationships, their confidence, or their sense of safety.\n\nTherapy can be a place to finally slow down, understand what's happening beneath the surface, and build a steadier relationship with yourself."
- Image: office1

### 4. Who I Help (3 cards)
1. **High-Achieving Professionals** — "If you're managing constant pressure, overthinking, or a nervous system that won't switch off, we'll work together to help you feel more regulated and at ease in daily life."
2. **Trauma Survivors** — "Whether from a single event or long-standing patterns rooted in childhood or chronic stress, trauma-informed care — paced carefully — can help you feel safer in your body and your life."
3. **Entrepreneurs & Creatives** — "Many of my clients are entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through. Therapy can help you reconnect and build a more sustainable way of working and living."

(No photos exist for these — use soft sage/terracotta gradient shape + fine botanical line-art per card, not stock people photos.)

### 5. Quote band (full-bleed, photo-backed with sage overlay)
"Therapy isn't just about symptom relief — it's about insight, resilience, and coming home to yourself." — Dr. Maya Reynolds, PsyD
Background: office2 photo with a sage-tinted overlay for text legibility.

### 6. Expertise keyword grid
Anxiety & Panic · Trauma & PTSD · EMDR · Burnout & Perfectionism · CBT · Mindfulness-Based Therapy · Body-Oriented Therapy · Stress Management · Entrepreneurs & Creatives · In-Person & Telehealth · Santa Monica & CA-wide · …and more

### 7. About Dr. Maya (2-col, headshot + bio)
- Heading: "About Dr. Maya Reynolds, PsyD"
- Subhead: "Licensed Clinical Psychologist, Santa Monica, CA"
- Body: condensed version of the full bio in §1 (use paragraphs 1, 3, 4, 6 near-verbatim; this is explicitly required to be profile-derived)
- Image: headshot (reused, cropped differently than hero)

### 8. Services (3 cards, required by checklist)
1. **Anxiety & Panic Treatment** — "Constant worry, racing thoughts, or panic that shows up in your body? I use CBT and mindfulness-based approaches to help you understand your anxiety and build lasting tools to feel calmer and more in control."
2. **Trauma Therapy & EMDR** — "Whether trauma is recent or rooted in childhood, I offer paced, safety-focused care using EMDR and body-oriented techniques to help you feel more regulated, safe, and whole."
3. **Burnout & Perfectionism Support** — "For entrepreneurs, creatives, and high-achievers running on empty, we'll work together to loosen perfectionism's grip and build a more sustainable relationship with work and yourself."

### 9. NEW — "Our Office" section (Part 3 of assignment)
- Heading: "A Calm Space to Begin"
- Body: "My Santa Monica office is a quiet, private space designed to feel calm and grounding — filled with natural light and a comfortable, uncluttered environment. Clients often tell me the space itself helps them feel more at ease the moment they arrive."
- Address: "123th Street 45 W, Santa Monica, CA 90401" (kept verbatim from profile)
- Supporting line: "In-person sessions available at my Santa Monica office, with secure telehealth offered for clients throughout California."
- Images: office1.jpeg + office2.jpeg, side by side
- Placement: after Services, before FAQ — fits the "warm, human, trustworthy" requirement right after clients learn what she treats, before they commit via FAQ/CTA

### 10. FAQ (accordion)
1. **Do you offer in-person and online sessions?** — "Yes — I offer in-person therapy at my Santa Monica office as well as secure telehealth sessions for clients located anywhere in California."
2. **What therapy methods do you use?** — "I integrate evidence-based approaches including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, tailored to what you need."
3. **Do you work with trauma?** — "Yes. I work with both single-incident and more complex, long-standing trauma, with an emphasis on safety, stabilization, and pacing that feels right for you."
4. **Who do you typically work with?** — "Most of my clients are adults — often high-achieving professionals, entrepreneurs, and creatives — navigating anxiety, burnout, or the lasting effects of past experiences."
5. **How do I get started?** — "Book a free consultation using the button above, and we'll find a time to talk about what you're looking for and whether we're a good fit."

### 11. CTA band
- Heading: "Ready to feel more like yourself again?"
- Body: "Reach out for a free consultation and take the first step toward calmer, more grounded days."
- CTA: "Book a Free Consultation"

### 12. Footer
- Logo + tagline: "Anxiety, trauma & burnout therapy — Santa Monica, CA & telehealth across California"
- Nav column: Home, About, Services, Our Office, FAQs, Contact
- Contact column: address (from profile), placeholder phone, placeholder email (see §7)
- Thin `--color-teal-band` accent bar at the very bottom, echoing the original's footer treatment without copying its color
- Bottom bar: © 2026 Dr. Maya Reynolds, PsyD · Privacy Policy · Terms (placeholder links, `#`)

## 6. Responsive & fidelity targets

Breakpoints: 375px (mobile), 768px (tablet), 1024px (small desktop), 1440px (desktop) — matches the original's approximate breakpoint set observed in its CSS (`sm`~640, `md`~768, `lg`~1024, `xl`~1280).
Section order and grid ratios (2-col 50/50, 3-col cards, full-bleed bands) must match the original's `screens/pages/home.png` and `screens/scroll/*` screenshots.

## 7. Placeholder / fabricated data (explicitly not in the source profile)

- Phone: `(310) 555-0148`
- Email: `hello@mayareynoldspsyd.com`
- These are clearly fictional (matches the profile's own "Fictional Therapist" framing) and CTA buttons link to an in-page `#contact` anchor, not a real booking system.

## 8. SEO plan

- `<title>`: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD"
- Meta description referencing anxiety, trauma, EMDR, burnout, Santa Monica/California
- H1 carries primary keyword + location (see Hero)
- JSON-LD `Psychologist`/`LocalBusiness` schema: name, address (123th Street 45 W, Santa Monica, CA 90401), areaServed: California
- Descriptive `alt` text on all 3 real images tied to actual content (not generic)
- Semantic heading hierarchy (one H1, H2 per section, H3 for cards)
- Natural keyword integration throughout body copy — no stuffing

## 9. Testing / verification plan

- Visual diff against `conejovalleycounseling-design-design/screens/pages/home.png` and scroll screenshots for section order/spacing fidelity
- Manual responsive check at 375/768/1024/1440px
- Lighthouse pass: SEO, Performance, Accessibility
- Contrast check on sage-on-cream and terracotta-button-on-cream combinations
- `npm run build` must succeed with no type errors before calling this done

## 10. Deliverables (from assignment brief)

1. Live site on Vercel
2. Public GitHub repo
3. Loom video walkthrough (5 min, desktop + mobile, non-technical, client-facing) — **out of scope for code**; recorded by the user after the build is live
