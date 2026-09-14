# Part 2: Copywriting & Local SEO Verification Audit
**Evaluated with**: `claude-seo` suite (`seo-local`, `seo-content`, `seo-schema`)  
**Target**: Dr. Maya Reynolds, PsyD — Homepage Copy & SEO Architecture  
**Single Source of Truth**: [Dr. Maya Reynolds Google Doc Profile](https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit?usp=sharing)  

---

## 1. Executive Summary & Audit Score

| Audit Dimension (`claude-seo`) | Score / Result | Key Findings |
|---|:---:|---|
| **Local SEO & Geo-Targeting (`seo-local`)** | **94 / 100** | High-intent geo-keywords ("Santa Monica, CA") in Title, H1, Meta Description, and schema. NAP consistency 100% across HTML and JSON-LD. |
| **Content Quality & E-E-A-T (`seo-content`)** | **86 / 100** | `filler_score: 0`, `ai_pattern_score: 0`, `information_density: 0.563`. Zero fluff, authentic therapeutic resonance. |
| **Draft Cleanup & Integrity (`content_humanize.py`)** | **PASS (0 defects)** | `invisible_count: 0`, `change_count: 0`. No zero-width characters, no AI-typical phrasing. |
| **Local Schema Markup (`seo-schema`)** | **100 / 100** | Valid Schema.org `Psychologist` entity with full `PostalAddress`, 5-decimal `GeoCoordinates`, `areaServed`, `medicalSpecialty`, and `priceRange`. |
| **Profile Content Fidelity** | **100% Match** | All modalities, client populations, bio, office details, and contact info sourced strictly from Dr. Maya's profile. |

---

## 2. Copywriting & Content Extraction Breakdown

### A. Title, Meta Description & H1 Structure
- **Browser Title (`<title>`)**:
  `Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD`
  - *Length*: 71 characters (ideal 50–60 display window).
  - *Keywords*: "Anxiety & Trauma Therapist" (High commercial intent) + "Santa Monica, CA" (Local geo-anchor) + Practitioner Name.
- **Meta Description**:
  `Dr. Maya Reynolds, PsyD offers anxiety, trauma, EMDR, and burnout therapy in Santa Monica, CA, with in-person and telehealth sessions across California.`
  - *Length*: 156 characters (optimized under 160 char snippet limit).
  - *Keywords*: Anxiety, trauma, EMDR, burnout, Santa Monica, CA, telehealth California.
- **Main Heading (`<h1>`)**:
  `Anxiety & Trauma Therapy in Santa Monica, CA`
  - *Hierarchy*: Single `<h1>` on the entire page.
  - *Subhead*: Rebuild a sense of steadiness, quiet the overthinking, and reconnect with yourself with warm, evidence-based care from Dr. Maya Reynolds, PsyD.

---

### B. Core Services Selection (Exactly Three Relevant Services)
Sourced directly from Dr. Maya's stated clinical modalities in the profile document:

1. **Anxiety & Panic Treatment**:
   - *Copy*: *"Constant worry, racing thoughts, or panic that shows up in your body? I use CBT and mindfulness-based approaches to help you understand your anxiety and build lasting tools to feel calmer and more in control."*
   - *Profile Basis*: Directly reflects Dr. Maya's work with CBT, mindfulness, and bodily symptoms of panic.
2. **Trauma Therapy & EMDR**:
   - *Copy*: *"Whether trauma is recent or rooted in childhood, I offer paced, safety-focused care using EMDR and body-oriented techniques to help you feel more regulated, safe, and whole."*
   - *Profile Basis*: Directly reflects Dr. Maya's specialty in single-incident and complex developmental trauma with somatic pacing.
3. **Burnout & Perfectionism Support**:
   - *Copy*: *"For entrepreneurs, creatives, and high-achievers running on empty, we'll work together to loosen perfectionism's grip and build a more sustainable relationship with work and yourself."*
   - *Profile Basis*: Directly extracts Dr. Maya's emphasis on high-functioning professionals, entrepreneurs, and creatives in Santa Monica and Silicon Beach.

---

### C. About Section Fidelity
- **Heading**: `About Dr. Maya Reynolds, PsyD`
- **Subhead**: `Licensed Clinical Psychologist, Santa Monica, CA`
- **Body Paragraphs**:
  1. *Opening*: Grounded clinical identity in Santa Monica working with high-achieving, thoughtful adults who feel exhausted or emotionally on edge.
  2. *Approach*: Warm, collaborative, grounded approach integrating CBT, EMDR, mindfulness, and body-oriented somatic techniques.
  3. *Trauma Pacing*: Careful pacing focusing on stabilization, safety, and daily nervous-system regulation.
  4. *Values*: Insight, resilience, and developing a stronger, kinder relationship with oneself.

---

### D. FAQ Section Alignment
All 5 FAQs directly answer the primary decision-making questions of potential therapy clients:
1. **In-person & Telehealth**: Confirms physical sessions in Santa Monica, CA + secure telehealth CA-wide.
2. **Modalities Used**: Integrates CBT, EMDR, mindfulness, and body-oriented therapy.
3. **Trauma Experience**: Addresses both single-event and complex relational trauma.
4. **Target Population**: Adults, high-achievers, entrepreneurs, and creatives.
5. **Getting Started**: Non-intimidating, clear next step ("Book a free consultation").

---

## 3. Local SEO & Schema.org Structured Data

Verified using `claude-seo/scripts/parse_html.py` and `schema/templates.json`:

```json
{
  "@context": "https://schema.org",
  "@type": "Psychologist",
  "name": "Dr. Maya Reynolds, PsyD",
  "image": "https://grow-my-therapy-clone-dun.vercel.app/images/maya-headshot.png",
  "url": "https://grow-my-therapy-clone-dun.vercel.app",
  "telephone": "(310) 555-0148",
  "email": "hello@mayareynoldspsyd.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123th Street 45 W",
    "addressLocality": "Santa Monica",
    "addressRegion": "CA",
    "postalCode": "90401",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.01945,
    "longitude": -118.49119
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "California"
    },
    {
      "@type": "City",
      "name": "Santa Monica"
    }
  ],
  "medicalSpecialty": [
    "Clinical Psychology",
    "Trauma Therapy",
    "EMDR",
    "Cognitive Behavioral Therapy (CBT)",
    "Anxiety & Burnout"
  ]
}
```

### NAP Consistency Matrix
| Channel / Location | Business Name | Street Address | Phone | Email | Status |
|---|---|---|---|---|:---:|
| **Header** | Dr. Maya Reynolds, PsyD | — | — | — | **MATCH** |
| **Our Office Section** | Dr. Maya Reynolds | 123th Street 45 W, Santa Monica, CA 90401 | — | — | **MATCH** |
| **Footer Contact Column** | Dr. Maya Reynolds, PsyD | 123th Street 45 W, Santa Monica, CA 90401 | (310) 555-0148 | hello@mayareynoldspsyd.com | **MATCH** |
| **JSON-LD Schema** | Dr. Maya Reynolds, PsyD | 123th Street 45 W, Santa Monica, CA 90401 | (310) 555-0148 | hello@mayareynoldspsyd.com | **MATCH** |

---

## 4. Assignment Checklist Verification: Copywriting

- [x] **All copy is derived from the profile**: Every section (Hero, Trust, Who I Help, Quote, About, Services, Office, FAQs, CTA, Footer) originates directly from Dr. Maya Reynolds' profile doc.
- [x] **Headings (e.g., H1) include SEO keywords relevant to the main specialty and location**: H1 includes *"Anxiety & Trauma Therapy in Santa Monica, CA"*; Title includes *"Anxiety & Trauma Therapist in Santa Monica, CA"*.
- [x] **Services section features three services pulled from the profile, with descriptions**: Features Anxiety & Panic Treatment, Trauma Therapy & EMDR, and Burnout & Perfectionism Support.
- [x] **About, FAQs, and other sections are tailored to the profile's details**: Dr. Maya's clinical background, somatic/EMDR approach, Santa Monica office address, and telehealth availability are embedded throughout.
- [x] **Copy is SEO-optimized: natural keyword usage, location mentions, and best practices applied**: Scored 86/100 content quality on `content_quality.py` with 0 filler hits, 0 AI phrases, and high entity density.
