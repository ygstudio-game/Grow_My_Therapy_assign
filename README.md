# Grow My Therapy — Front-End Developer Internship Assignment

> **Candidate Submission:** Front-End Developer Internship (Stage 2 Practical Assignment)  
> **Original Template Cloned:** [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home)  
> **Client Persona & Profile:** [Dr. Maya Reynolds, PsyD — Clinical Psychologist](https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit?usp=sharing)  

---

## 📦 Required Deliverables

| Deliverable | URL / Resource | Status |
| :--- | :--- | :---: |
| **1. Live Website Link** | [https://grow-my-therapy-clone-dun.vercel.app](https://grow-my-therapy-clone-dun.vercel.app) | 🟢 Live & Deployed |
| **2. Public GitHub Repository** | [https://github.com/ygstudio-game/Grow_My_Therapy_assign](https://github.com/ygstudio-game/Grow_My_Therapy_assign) | 🟢 Active Repository |
| **3. Video Walkthrough Link (5-min Loom)** | [Watch Loom Client Demo Video (5 min)](https://www.loom.com/share/0737cae3dcfa46d7ac7421e25ee87872) | 🟢 Recorded & Verified |

---

## 🧭 Executive Summary & Evaluation Breakdown

This project is a high-fidelity clone and creative redesign of the **Conejo Valley Family Counseling** homepage, reimagined for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist in Santa Monica, California.

| Evaluation Area | Weight | Implementation Highlights |
| :--- | :---: | :--- |
| **UI Cloning Accuracy** | 25% | Exact section hierarchy, container geometry (`max-w-[1400px]`), visual rhythm, and 100% verified responsiveness across 10 viewports (320px–2560px) with 0px horizontal overflow. |
| **Theme & Design Sense** | 25% | Grounded, calming nature-inspired palette (Warm Sage `#3a4738`, Soft Linen `#f7f3ec`, Terracotta `#a25034`), editorial typography pairing (Cormorant Garamond + Mulish + Sacramento), and zero automated WCAG 2.1 AA violations. |
| **Copywriting & Images** | 10% | 100% derived from Dr. Maya Reynolds' profile doc as the single source of truth; zero hallucinations; local Santa Monica SEO integration; authentic photographic assets from the profile packet. |
| **New Section Creativity** | 10% | Custom **"Our Office"** section (*A Calm Space to Begin*) featuring two authentic interior photographs, in-person Santa Monica practice details, and California telehealth scope. |
| **Communication (Video)** | 30% | Structured 5-minute consultative client demo script explaining design and copy decisions in warm, non-technical language for both desktop and mobile views. |

---

## 🧩 Part 1: Homepage Clone & UI Accuracy (25%)

The layout replicates the structural rhythm, section order, and responsive mechanics of the original template:

1. **Header & Navigation**: Desktop horizontal navigation with prominent consultation CTA button; mobile hamburger menu with smooth slide-down animation. Matches the original site's deliberate non-sticky positioning.
2. **Hero Section**: Two-column desktop grid with prominent H1, subhead, body text, primary CTA pill button, and portrait image with matching corner rounding (`rounded-3xl`).
3. **Trust-Building Section**: Empathetic intro addressing high-achieving adults who feel overwhelmed internally.
4. **Who I Help Section**: Three-column card grid with custom icon headers and soothing tinted background gradients.
5. **Quote Band**: Full-bleed photographic banner with deep green overlay and typography quote.
6. **Areas of Expertise Grid**: Two-column specialty matrix highlighting CBT, EMDR, and mindfulness modalities.
7. **About Section**: Two-column layout featuring Dr. Reynolds' photo, license details, and therapeutic philosophy.
8. **Services Section**: Three service cards with descriptive body copy and accessible "Learn more" links.
9. **Our Office (Custom Section)**: Two-column layout highlighting the physical Santa Monica healing space.
10. **FAQ Accordion**: Fully interactive accordion with accessible ARIA states and keyboard navigation (Enter/Space/Arrows/Home/End).
11. **CTA Band**: Full-width bold closing invitation with anchor navigation to consultation.
12. **Footer**: Three-column structured footer with practice details, navigation, teal accent band, and copyright.

### 📱 10-Viewport Responsive Verification Matrix

Tested and verified via automated Playwright Chromium scripts (`scripts/run-responsive-audit.js`):

| Viewport Width | Device Category | Horizontal Scroll | Overflow Elements | Layout & Typography Status |
| :---: | :--- | :---: | :---: | :--- |
| **320px** | Ultra-compact Mobile | **0px** | 0 | Hamburger menu active, padding scales down to 16px, zero text clipping. |
| **375px** | iPhone SE / Compact Mobile | **0px** | 0 | Single-column cards stack cleanly, tap targets ≥44px. |
| **390px** | Modern iPhone (12/13/14) | **0px** | 0 | Proportional margins, fluid line lengths, clear hierarchy. |
| **430px** | iPhone Plus / Pro Max | **0px** | 0 | Hero image full-width responsive with 2:3 aspect ratio. |
| **768px** | iPad Portrait / Tablet | **0px** | 0 | 2-column hero & about grids, 3-column card reflow, desktop nav active. |
| **820px** | iPad Air / Large Tablet | **0px** | 0 | Balanced grid gutters, proper badge alignment. |
| **1024px** | Small Desktop / iPad Landscape | **0px** | 0 | Full 3-column service grid, generous white space. |
| **1280px** | Standard Laptop / Desktop | **0px** | 0 | Max-width container (`1400px`) centered, optimal reading line length. |
| **1440px** | Large Desktop / MacBook Pro | **0px** | 0 | High-DPI image rendering, smooth hover micro-interactions. |
| **2560px** | 4K / Ultrawide Display | **0px** | 0 | Outer background extends seamlessly; container centered without stretching. |

---

## 🎨 Part 2: Creative Redesign with Dr. Maya Reynolds' Profile (35%)

### 1. Theme & Color System

The redesign replaces the original palette with a cohesive, grounding palette tailored for an anxiety and trauma therapy practice:

| Color Name | Hex Code | Role | Contrast Ratio on Background | WCAG Level |
| :--- | :---: | :--- | :---: | :---: |
| **Deep Forest (Primary Dark)** | `#3a4738` | Main headings, dark text, footer | **8.62:1** (on Linen) / **9.82:1** (on White) | **AAA** |
| **Warm Sage (Primary)** | `#4f614d` | Buttons, subheadings, links | **5.41:1** (on Linen) / **6.16:1** (on White) | **AA** |
| **Terracotta (Accent)** | `#a25034` | Script accents, kickers, CTA highlights | **5.09:1** (on Linen) / **5.80:1** (on White) | **AA** |
| **Warm Linen (Background)** | `#f7f3ec` | Page background, calming ambiance | — | Base |
| **Pure Surface** | `#ffffff` | Card surfaces, interactive elements | — | Base |
| **Muted Slate** | `#637061` | Secondary body text, captions | **4.71:1** (on Linen) / **5.37:1** (on White) | **AA** |

### 2. Typography Hierarchy

- **Headings**: `Cormorant Garamond` (Google Font) — elegant, classical serif conveying clinical expertise and emotional safety.
- **Body & Navigation**: `Mulish` (Google Font) — clean, highly legible geometric sans-serif for comfortable reading across all screen sizes.
- **Script Accents**: `Sacramento` (Google Font) — delicate handwriting accents (*"help"*, kicker words) adding human warmth.

### 3. Copywriting & Local SEO

All copy was written strictly from Dr. Maya Reynolds' profile doc without inventing unverified claims, credentials, or pricing:
- **H1 Headline**: *"Anxiety & Trauma Therapy in Santa Monica, CA"* — clearly anchors practice specialty and geographic location.
- **Three Profile-Grounded Services**:
  1. **Anxiety & Panic Therapy**: Addressing constant worry, physical tension, and overthinking in high-achieving adults.
  2. **Trauma & EMDR Therapy**: Evidence-based, carefully paced trauma processing for single-incident and complex relational trauma.
  3. **Burnout & Perfectionism Counseling**: Helping professionals and creatives release chronic pressure and quiet the inner critic.
- **Contact & Practice Scope**: Real Santa Monica address preserved (`123th Street 45 W, Santa Monica, CA 90401`), California-wide telehealth scope stated, and zero fabricated phone numbers or fake email domains.
- **Structured Data (JSON-LD)**: Schema.org `@type: Psychologist` schema complete with geographic coordinates, medical specialties, and address.
- **SEO Assets**: Dynamic XML sitemap (`/sitemap.xml`) and `robots.txt` generated automatically via Next.js Metadata Route handlers.

### 4. Authentic Photographic Assets

- Only genuine assets from Dr. Maya Reynolds' profile packet are used:
  - `maya-headshot.png` (800x1200 high-res portrait in Hero and About sections)
  - `office-1.jpeg` (Santa Monica office seating and natural light in Our Office section)
  - `office-2.jpeg` (Reading corner and calming decor in Our Office and Quote Band)
- Optimized with Next.js `Image` component, AVIF/WebP formats, responsive `sizes`, and priority LCP preloading.

---

## 🏢 Part 3: Custom "Our Office" Section (10%)

To highlight Dr. Reynolds' physical practice space while accommodating California-wide telehealth, a dedicated **"Our Office"** section was engineered:
- **Heading**: *"A Calm Space to Begin"* with warm supporting narrative describing the quiet, sunlit environment.
- **Visuals**: Two-column photographic gallery showcasing both therapy seating and the reading corner.
- **Location & Practice Details**: Clear Santa Monica address card with in-person and secure telehealth badges.
- **Seamless Integration**: Styled with consistent `max-w-[1400px]` margins, `rounded-3xl` radii, and accessible scroll margin anchors (`#our-office`).

---

## 🎥 Part 4: Video Walkthrough (30%)

The video demo is structured as a consultative client walkthrough presenting the first website draft to **Dr. Maya Reynolds**:
- **Format**: 5-minute screen recording with candidate camera bubble.
- **Tone**: Professional, encouraging, empathetic, and free of technical jargon (focuses on client benefits, trust, and conversion).
- **Structure**:
  1. **0:00–0:45**: Hero section & brand atmosphere (warmth, grounding color palette, Santa Monica positioning).
  2. **0:45–1:45**: Validating client experience (Trust-building intro & Who I Help cards).
  3. **1:45–2:30**: Depth, modalities & services (Quote band, Expertise grid, About bio, 3 core services).
  4. **2:30–3:30**: Custom "Our Office" section & interactive FAQ accordion.
  5. **3:30–4:20**: Mobile responsiveness walkthrough (DevTools 375px view, touch targets, hamburger menu).
  6. **4:20–5:00**: Closing invitation CTA band, footer practice details, and consultative wrap-up.
- **Speaker Guide**: The complete word-for-word script is available in [`docs/CLIENT-DEMO-LOOM-SCRIPT.md`](docs/CLIENT-DEMO-LOOM-SCRIPT.md).

---

## 🧠 Intelligent AI-Assisted Engineering Methodology: How This Project Was Built

> **Grow My Therapy Core Guideline:** *"AI tools (ChatGPT, Cursor, Bolt, etc.) are allowed and encouraged, but use them intelligently—refine manually; no blind copy-paste. We want people who use AI intelligently, then refine manually."*

Rather than treating AI as a one-shot "black box" code generator, this project was developed using a **structured agentic pair-programming methodology**. AI was deployed as a specialized team of assistants (code generator, accessibility inspector, local SEO strategist, and strict QA auditor), where **every line of generated code was manually inspected, architected, and verified against empirical browser and compiler evidence**.

### 1. The Multi-Skill Agent Ecosystem

To achieve both design excellence and clinical accuracy, we organized our AI workflow into specialized domain skills:

| Specialized Skill / Tool | Domain Focus | Practical Impact on This Project |
| :--- | :--- | :--- |
| **`using-superpowers`** | Agent Workflow Architecture | Enforced a strict lifecycle: **Research → Implementation Plan → Review → Execution → Verification**. Prevented chaotic modifications and ensured work was trackable at every stage. |
| **`claude-seo`** | Local SEO & Search Intent | Analyzed Santa Monica psychological services intent; shaped H1 and H2/H3 semantic structure; generated dynamic `sitemap.ts` and `robots.ts`; authored Schema.org `Psychologist` structured data with verified geo-coordinates (`34.01945, -118.49119`). |
| **`impeccable`** | UI/UX & Visual Engineering | Critiqued and refined typography pairing (Cormorant + Mulish + Sacramento), micro-interactions (e.g. `active:scale-[0.97]`, custom accordion kinematics), optical alignment, and container padding across viewport transitions. |
| **`responsive-craft`** | Adaptive Layouts & Viewports | Guided the multi-breakpoint layout strategy (320px ultra-compact to 2560px 4K), eliminating edge clipping, awkward card line wraps, and unexpected mobile overflows. |
| **`emil-design-eng` + `animate`/`improve-animations`/`review-animations`** | Motion & Micro-Interaction Framework | Emil Kowalski's design-engineering philosophy supplied the actual animation decision rules: a frequency test (never animate keyboard-repeated actions; standard motion only for occasional UI like menus/accordions), `transform`/`opacity`-only animation, sub-300ms durations, custom easing curves. Applied through the layered workflow the skill set is built for — `improve-animations` audited the codebase and wrote a prioritized plan, `animate` implemented it (button press feedback, the FAQ accordion, the mobile menu transition), `review-animations` critiqued the result against a strict craft bar before it was accepted. |
| **`systematic-debugging` & Strict Audit** | Empirical Verification & Anti-Hallucination | Operated as an adversarial reviewer to catch and eliminate common AI hallucinations, such as fabricated phone numbers or false test pass claims. |

---

### 2. Two Agents, Divided by Task — Not by Habit

We didn't run one AI tool for the whole build. **Claude (Sonnet 5, via Claude Code)** and **Antigravity (Google's agentic IDE, Playwright-backed)** were assigned deliberately, based on what each task actually needed — judgment and planning versus long, iterative, screenshot-heavy execution:

| Work | Handled by | Why |
| :--- | :--- | :--- |
| Requirement analysis, profile extraction, section-by-section spec, the initial full build (all 12 sections, 24 tests, the `lib/content.ts` data model) | **Claude** | High-judgment, low-repetition work: reading the assignment brief and the therapist profile precisely, deciding what's a required liberty (colors/copy/images) versus what must match the original exactly (layout/structure/fonts), and writing the first working version. This needs one continuous reasoning thread, not iteration volume. |
| Root-cause accuracy fixes (non-sticky header, real font stack, container width, image/text left-right order, WCAG contrast, canonical URL) | **Claude** | Each of these was found by measuring the *live original site* directly (`getBoundingClientRect`, `getComputedStyle`) rather than guessing from a screenshot, then fixed and re-verified in the same reasoning pass — this kind of "investigate → hypothesize → fix → confirm" loop needs judgment at every step, not brute-force iteration. |
| Multi-viewport QA sweeps (10 breakpoints, 320px–2560px), the `responsive-craft` audit pass, the micro-interactions implementation across every component, and final polish/deployment | **Antigravity** | These are high-volume, high-token execution loops — dozens of screenshot round-trips, repeated build/test cycles, applying the same pattern across 10+ files. Running that inside Claude's planning session would burn the context budget needed for judgment calls; handing it to a separate agent with a precise written brief keeps both fast and keeps the record of *why* each decision was made intact. |

**The handoff mechanism:** every task given to Antigravity was preceded by a written plan document in `docs/` (e.g. `UI-ACCURACY-PLAN-AND-PROMPT.md`, `MICRO-INTERACTIONS-PLAN-AND-PROMPT.md`, `RESPONSIVE-AUDIT-PLAN-AND-PROMPT.md`) — never a bare instruction. Each one states what's already been verified (so it isn't redone), an explicit "do not touch" list (so deliberate, already-verified decisions don't get "fixed" back toward generic best practices that don't apply to a from-original clone), and a copy-paste-ready prompt. That's the actual mechanic behind "use AI intelligently, then refine manually" — the plan is the refinement; the AI executes against a spec a human already reasoned through.

---

### 3. The 5-Phase Development Lifecycle

#### Phase 1: Spatial & Geometric UI Cloning (Template Fidelity)
* **Action**: Instead of blindly asking an AI to "make a therapist homepage", we first performed a granular architectural breakdown of the source website (`conejovalleycounseling.com`).
* **Tooling — extracting a real design system, not guessing from a screenshot**:
  - Ran **[`skillui`](https://www.npmjs.com/package/skillui)** (`npx skillui --url https://www.conejovalleycounseling.com/home --mode ultra`), a static + Playwright-driven design-system extractor, against the live original site. This produced `conejovalleycounseling-design/` (initial static-analysis pass) and `conejovalleycounseling-design-design/` (ultra mode: full scroll-journey screenshots, section crops, button/link interaction states, computed color/typography/spacing tokens).
  - **Caught a real tool failure rather than trusting it blindly**: `skillui`'s static token extraction reported a false "dark theme" (`#000000` background) on both runs — it was reading Squarespace's own CMS *editor* CSS variables, not the live public page. We didn't take that at face value; the ultra-mode screenshots (real rendered pixels) and hand pixel-sampling of the actual screenshot exposed the true palette (cream `#F6F4EE`, white, sand, dusty teal), which is what the redesign's color system was actually measured against.
  - Ran **Playwright directly** (outside `skillui`, scripted ad hoc against the live site) for everything the extractor's static analysis couldn't answer reliably: `getComputedStyle()` on the real headings/nav/body to get the true font stack and exact pixel sizes, `getBoundingClientRect()` to measure section container widths and confirm image/text left-right ordering per section, and manual scroll tests to confirm the header's actual sticky behavior.
* **Manual Findings & Engineering**:
  - Identified the exact container behavior: `max-w-[1400px]` with responsive horizontal gutters (`px-6 md:px-10 lg:px-16`).
  - Discovered that the original template deliberately utilizes a **static, non-sticky header**. (An uncritical AI might have defaulted to `sticky top-0`, which would have violated template fidelity; we intentionally preserved `position: static`).
  - Mapped section order, card aspects, and responsive reflow patterns before writing feature code.

#### Phase 2: Profile Extraction & Zero-Hallucination Guardrails
* **Action**: We treated Dr. Maya Reynolds' Google Doc profile as the **single immutable source of truth**.
* **AI Hallucination Elimination**:
  - In earlier AI drafts, standard placeholder phone numbers (`(310) 555-0148`) and email addresses (`hello@mayareynoldspsyd.com`) were generated.
  - In our strict audit pass, we **completely excised these fabricated details** from the UI, footer, and JSON-LD schema, replacing them with verified profile facts: in-person Santa Monica sessions, California telehealth coverage, and a consultation anchor request.
  - When inspecting the address `"123th Street 45 W, Santa Monica, CA 90401"`, we noted the probable typo (`123th` vs `123rd`), but followed strict protocol: **preserve source content verbatim** rather than silently hallucinating a correction, while flagging it for client onboarding review.

#### Phase 3: Mathematical Color Science & Design System
* **Action**: Rather than picking arbitrary palette colors, we engineered a custom color token system in `tailwind.config.ts` and `app/globals.css`.
* **Empirical Contrast Verification**:
  - Developed a standalone mathematical contrast computation script (`scripts/verify-theme-contrast.js`) based on W3C relative luminance formulas.
  - Verified that Deep Forest on Linen achieves **8.62:1** (exceeding WCAG AAA), Terracotta on Linen achieves **5.09:1** (exceeding WCAG AA), and Muted Slate achieves **4.71:1**.

#### Phase 4: Creative Section Engineering ("Our Office")
* **Action**: Developed the custom requirement—an "Our Office" section that does not exist on the original template.
* **Execution**: Blended the original site's visual language with Dr. Maya's physical Santa Monica practice narrative, utilizing genuine office photography from the profile packet and clear geographic context.

#### Phase 5: Empirical Multi-Layer Verification
* **Action**: Never accept an AI claim that "everything works" without automated, reproducible proof.
* **Automated Evidence**:
  1. **Vitest Unit Tests**: Authored 24 unit tests across 13 test files covering every component and data contract.
  2. **Playwright 10-Viewport Audit**: Created `scripts/run-responsive-audit.js` running headless Chromium to programmatically assert `scrollWidth === clientWidth` and `overflowElements.length === 0` across 10 distinct viewports (320px, 375px, 390px, 430px, 768px, 820px, 1024px, 1280px, 1440px, 2560px).
  3. **Axe-Core Automated Accessibility**: Created `scripts/run-axe-audit.js` running `@axe-core/playwright` to scan the rendered DOM, confirming **zero WCAG 2.0 / 2.1 AA violations**.
  4. **Cryptographic Asset Integrity**: Ran SHA-256 hash checks confirming that all public images correspond 1:1 with the authentic client asset packet.

---

## 🔬 Quality Assurance & Engineering Standards

### Automated Test Suite (Vitest)
```bash
npm test
```
- **13/13 test files passed** (100%)
- **24/24 unit tests passed** covering all layout and section components:
  - `Header.test.tsx`, `Hero.test.tsx`, `TrustBuilding.test.tsx`, `WhoIHelp.test.tsx`
  - `QuoteBand.test.tsx`, `ExpertiseGrid.test.tsx`, `About.test.tsx`, `Services.test.tsx`
  - `OurOffice.test.tsx`, `Faq.test.tsx`, `CtaBand.test.tsx`, `Footer.test.tsx`, `content.test.ts`

### Automated Accessibility Scan (Axe-Core + Playwright)
```bash
node scripts/run-axe-audit.js
```
- **0 WCAG 2.0 / 2.1 AA violations** detected by axe-core.
- 23 verified automated checks passed.
- Fully accessible keyboard navigation: interactive FAQ accordion supports `Enter`, `Space`, `ArrowUp`, `ArrowDown`, `Home`, `End`.
- Focus indicators (`focus-visible:ring-2`) and screen-reader skip link (`#main-content`) included.

### Next.js Production Build
```bash
npm run build
```
- Compiles with **0 errors and 0 warnings**.
- Static page generation: 6/6 pages pre-rendered.
- First Load JS shared by all: **87.3 kB**; Total homepage bundle: **104 kB**.
- Component architecture: **11 Server Components**, only **2 Client Components** (`Header` and `Faq`).

---

## 🚀 Local Development Setup

```bash
# 1. Clone repository
git clone <your-repo-url>
cd grow-my-therapy-clone

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Open http://localhost:3000 in your browser

# 4. Run automated test suite
npm test

# 5. Run responsive viewport audit
node scripts/run-responsive-audit.js

# 6. Run axe-core accessibility audit
node scripts/run-axe-audit.js

# 7. Create production build
npm run build
```

---

## 📁 Project Architecture & Documentation Index

```
grow-my-therapy-clone/
├── app/
│   ├── globals.css              # Custom Tailwind tokens, typography, animations
│   ├── layout.tsx               # Root layout, Google Fonts, JSON-LD Schema.org
│   ├── page.tsx                 # Composed homepage sections
│   ├── robots.ts                # Dynamic robots.txt route
│   └── sitemap.ts               # Dynamic sitemap.xml route
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Navigation bar with responsive mobile menu
│   │   └── Footer.tsx           # Practice footer, location, telehealth scope
│   └── sections/
│       ├── Hero.tsx             # H1, subhead, portrait, primary CTA
│       ├── TrustBuilding.tsx    # Empathetic client validation intro
│       ├── WhoIHelp.tsx         # 3-column client focus cards
│       ├── QuoteBand.tsx        # Full-bleed photographic quote band
│       ├── ExpertiseGrid.tsx    # Modality & specialty 2-column matrix
│       ├── About.tsx            # Therapist portrait & clinical biography
│       ├── Services.tsx         # 3 profile-supported clinical services
│       ├── OurOffice.tsx        # Custom Santa Monica office showcase
│       ├── Faq.tsx              # Interactive accessible accordion
│       └── CtaBand.tsx          # Bottom consultation banner
├── docs/
│   ├── CLIENT-DEMO-LOOM-SCRIPT.md       # 5-minute timed client demo script
│   ├── THEME-COLOR-PALETTE-CRITIQUE.md  # Design rationale & contrast calculations
│   ├── COPYWRITING-LOCAL-SEO-VERIFICATION.md # Copy source verification
│   ├── PROFILE-COPY-IMAGE-OFFICE-AUDIT.md    # Profile extraction verification
│   ├── RESPONSIVE-AUDIT-PLAN-AND-PROMPT.md   # Viewport audit logs
│   ├── UI-ACCURACY-PLAN-AND-PROMPT.md        # Clone template fidelity audit
│   └── STATUS.md                             # Engineering changelog
├── lib/
│   └── content.ts               # Single source of truth for all copy & config
├── public/
│   └── images/                  # Profile headshot & office photography
└── scripts/
    ├── run-responsive-audit.js  # Playwright 10-viewport test runner
    ├── run-axe-audit.js         # Axe-core automated accessibility scanner
    └── verify-theme-contrast.js # Hex color contrast computation tool
```

---

## 👤 Submitter Information

- **Candidate Name**: Lokesh Sunil Borole  
- **Application**: Front-End Developer Internship — Grow My Therapy  
- **Submission Date**: September 2026  
