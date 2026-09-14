# UI Accuracy — Full Plan, Work Log, and Handoff Prompt for Antigravity

Purpose: a single reference document covering (1) everything already fixed and verified in this project, (2) the boundary rules that govern what's allowed to change vs. what must match the original exactly, and (3) a ready-to-paste prompt for Antigravity to continue the pixel-accuracy pass.

---

## Part 1: The rule that governs every decision here

Source: `Scrach/deatils.md`. Read it before changing anything.

**Part 1 (Clone) requires matching, not changing:**
> "My clone looks exactly like the original... in terms of layout and structure." / "It follows the same fonts, typography, and styling as the original." / "consistent spacing, padding, and margins"

**Part 2 (Redesign) explicitly grants liberty — ONLY for these:**
> Color palette (primary/secondary/accent) · Copy (all text) · Images (all photos) · One new section ("Our Office")

**Everything else — layout, section order, grid structure, left/right positioning, column counts, spacing rhythm, typography roles/sizes, interactive behavior — must match the original.** When in doubt, measure the original, don't guess.

---

## Part 2: Ground-truth reference material (use these, not memory)

- **Live original site:** `https://www.conejovalleycounseling.com/home`
- **Saved original HTML:** `Scrach/index.html`
- **Full-page screenshot of original:** `grow-my-therapy-clone/qa-audit/responsive/original-1440.png` (freshest, most reliable) and `conejovalleycounseling-design-design/screens/pages/home.png`
- **Scroll-journey screenshots of original:** `conejovalleycounseling-design-design/screens/scroll/*.png`
- **Measured computed styles (typography, spacing, colors) of original vs. clone:** `grow-my-therapy-clone/qa-audit/*.json`
- **Design spec (all copy, theme tokens, section content):** `grow-my-therapy-clone/docs/superpowers/specs/2026-09-10-grow-my-therapy-clone-design.md`
- **Implementation plan:** `grow-my-therapy-clone/docs/superpowers/plans/2026-09-10-grow-my-therapy-clone.md`

**Do not trust `conejovalleycounseling-design-design/DESIGN.md` or its color/font tokens** — it's corrupted by Squarespace's admin/editor CSS (falsely reports a black `#000000` "dark theme"). Every color/font claim in this document was instead verified by sampling the real screenshot pixels or reading `getComputedStyle()` on the live site directly.

---

## Part 3: Work already completed and verified (chronological)

Each item below was independently verified (tests + build + screenshot), not just assumed. Full detail in `docs/STATUS.md`.

1. **Base build** — all 12 sections (Header, Hero, TrustBuilding, WhoIHelp, QuoteBand, ExpertiseGrid, About, Services, **OurOffice [new, Part 3 requirement]**, Faq, CtaBand, Footer), 24 tests, clean build.
2. **Mobile nav gap fixed** — header hid all nav links below `md:` breakpoint with no way to reach them on mobile. Added a hamburger toggle.
3. **Sticky-header bug fixed** — header had been made `position: sticky`, but the original's nav is static (confirmed by scrolling the live original and watching the header scroll away with the page). Reverted to static; also matched the original's actual header proportions (taller padding, uppercase tracked nav links, outline-pill "Contact" CTA instead of a filled button — the filled CTA belongs to the hero only in the original).
4. **Font system corrected** — original uses `beaufort-pro` (light serif headings), `Muli` (sans body/nav), and a custom script webfont `PrintedMoments` (single-word accents like "thrive"). Both proprietary fonts aren't legally reusable; substituted closest free equivalents: Cormorant (headings), Mulish (body/nav — literal successor to Muli), Sacramento (script accents). Removed two italic-serif "subhead" lines that had no equivalent in the original's actual font usage.
5. **QA audit run** (`docs/QA-AUDIT-PLAN.md` executed via `scripts/run-qa-audit.js`) found and fixed two real bugs:
   - 18 elements failed WCAG AA contrast (4.5:1) — retuned 5 color tokens to ≥5.0:1 everywhere.
   - SEO canonical URL pointed to a fabricated, unowned domain (`mayareynoldspsyd.com`) — corrected to the real Vercel deployment URL.
6. **Container width & type scale corrected** — clone was constrained to a centered `max-w-6xl` (1152px) box, producing visible side margins the original doesn't have (original uses Squarespace's `background-width--full-bleed` + `content-width--wide`, effectively ~1400px with modest gutters). Widened every section to `max-w-[1400px]`. Also measured the original's actual heading sizes (H1≈60px, H2≈48px, H3≈39px vs. our 48/30/20px) and bumped the type scale across all sections to match.
7. **Image/text left-right ordering fixed** — measured the original precisely (`getBoundingClientRect()` on the live site): Hero is **image-LEFT / text-RIGHT**, TrustBuilding and About/"How We Work" are **text-LEFT / image-RIGHT**. Our clone had all three backwards. Fixed via CSS `order` (Hero, to preserve H1-first DOM order for accessibility/SEO) and DOM reordering (TrustBuilding, About).
8. **WhoIHelp card composition fixed** — original's 3 cards are photo-topped (large image, then title, then description). Ours only had an 8px decorative accent bar — a real structural gap, not just a color choice. Since only 3 real photos exist (headshot + 2 office shots) and none fit "High-Achieving Professionals" etc., added a proper image-slot-sized (176px) gradient panel with a themed icon per card instead of stock photos — preserves the original's card *structure* while staying honest per the images checklist ("not random stock photos... feel intentional").
9. **Expertise-grid column count fixed** — original is a **2-column** list (6 items each, filled column-major: items 1-6 in col 1, 7-12 in col 2). Ours was 3-column. Fixed to match.

All of the above: 24/24 tests pass, clean `npm run build`, verified via direct screenshot comparison against `qa-audit/responsive/original-1440.png` at each step.

---

## Part 4: Known items NOT yet re-verified after the Part 3 fixes

These were true before the latest round of fixes (steps 6-9 above) and need a fresh screenshot pass to confirm they're still fine, since widening the container and changing column counts can shift things:

- Does the new 2-column expertise list still read cleanly at 768px/375px, or does it need a `grid-cols-1` mobile fallback? (Should already work via Tailwind's `md:grid-cols-2` mobile-first default, but verify visually.)
- Does the widened `max-w-[1400px]` container cause the Hero image/text `order-1`/`order-2` swap to look right at the `md` breakpoint specifically (768-1023px), where a 2-column grid with swapped order can sometimes look cramped before it has room to breathe?
- OurOffice section width/proportions — this is a new section with no original equivalent, so no accuracy check needed, but confirm it still feels visually consistent with the now-wider surrounding sections.

## Part 5: Things intentionally left alone (do not "fix" these)

- All color values (Part 2 explicit liberty)
- All copy/text content (Part 2 explicit liberty, sourced from `Scrach/Dr. Maya Reynolds, PsyD.pdf`)
- All photography (Part 2 explicit liberty — only 3 real photos exist: `public/images/maya-headshot.png`, `office-1.jpeg`, `office-2.jpeg`)
- The "Our Office" section's own internal layout (no original equivalent — Part 3 new-section requirement, our own creative call)
- Services section having 3 cards instead of the original's 4 (checklist explicitly requires exactly 3 services with descriptions)
- Footer having 3 columns instead of the original's 4 (original's 4th column lists 9 team members — we have one therapist, not a team, so a "team" column has no content to hold)
- CtaBand's dark background instead of the original's cream (legitimate color/theme choice under Part 2's liberty — the compositional structure — centered heading/body/button band — still matches)
- FAQ section's narrower `max-w-4xl` centered container (this section doesn't exist on the original's homepage at all — it's a Part 2 checklist requirement we added; narrow-centered is a reasonable, common pattern for an FAQ accordion, not something to widen to match a section that isn't there)

---

## Part 6: Ready-to-paste prompt for Antigravity

```
You are doing a pixel-accuracy pass on a Next.js + Tailwind clone/redesign of
https://www.conejovalleycounseling.com/home. The redesign is for a fictional
therapist, Dr. Maya Reynolds, PsyD, and lives in this repo at
grow-my-therapy-clone/.

READ FIRST, IN THIS ORDER:
1. Scrach/deatils.md — the assignment brief. It draws a hard line: layout,
   structure, spacing, and typography must match the original exactly.
   ONLY color palette, copy, images, and one new "Our Office" section are
   allowed to differ. Do not "improve" or restyle anything that isn't
   explicitly covered by that liberty, even if you think it looks better.
2. grow-my-therapy-clone/docs/UI-ACCURACY-PLAN-AND-PROMPT.md — this document.
   Part 3 lists everything already fixed and verified (don't redo it, don't
   revert it). Part 4 lists open follow-up checks. Part 5 lists things that
   are INTENTIONALLY different — do not "fix" them back to match the
   original, they're already correct per the assignment's explicit liberty.

YOUR TASK:
1. Do a fresh full-page screenshot comparison at 1440px, 1024px, 768px, and
   375px between the live original (https://www.conejovalleycounseling.com/home)
   and the local clone (npm run dev in grow-my-therapy-clone/, then screenshot
   localhost). Use Playwright, matching the methodology in
   grow-my-therapy-clone/docs/QA-AUDIT-PLAN.md and the existing script at
   grow-my-therapy-clone/scripts/run-qa-audit.js (extend it, don't replace it).

2. For every visual difference you find, classify it BEFORE touching code:
   - Is it a color, copy, image-content, or the Our Office section? -> SKIP,
     it's intentional (see Part 5 of the plan doc).
   - Is it layout, structure, left/right ordering, column count, spacing
     rhythm, or typography size/role? -> this is a real bug, fix it.
   - If you're not sure which category it falls into, measure the original
     directly with page.evaluate(() => el.getBoundingClientRect() /
     getComputedStyle(el)) rather than guessing from a screenshot alone —
     that's how every fix in Part 3 of the plan doc was verified.

3. Complete the two open checks in Part 4 of the plan doc (mobile/tablet
   behavior of the expertise-grid 2-column layout and the Hero image/text
   order swap at the md breakpoint).

4. For anything you fix, follow the existing project conventions:
   - Content lives in grow-my-therapy-clone/lib/content.ts (typed, single
     source of truth) — don't hardcode copy in components.
   - Theme colors are CSS variables in app/globals.css, consumed via
     Tailwind tokens (bg, surface, primary, primary-dark, accent, muted,
     border, teal-band) — don't introduce new arbitrary hex values.
   - Every component has a matching *.test.tsx using Vitest + React Testing
     Library — update/add tests for anything you change, and run `npm test`
     (must stay at 24+ passing, 0 failing) before considering a fix done.
   - Run `npm run build` after every change (must complete with 0 TypeScript
     errors) — this project uses `rm -rf .next && npm run build` since the
     dev server and build can't run concurrently without corrupting the
     cache.

5. When you're done, write your findings and fixes as a new "Part 7" section
   appended to grow-my-therapy-clone/docs/UI-ACCURACY-PLAN-AND-PROMPT.md,
   following the same format as Part 3 (what was found, how it was verified,
   what was changed, confirmation that tests/build still pass). Do not
   overwrite Parts 1-6.

6. Do not touch git remotes, do not push to GitHub, do not redeploy to
   Vercel — those are on hold pending explicit approval from the project
   owner.
```

---

## Part 7: Verification pass & resolution of open follow-up checks

Conducted by Antigravity using automated Playwright multi-viewport extraction and direct DOM `getBoundingClientRect()` / `getComputedStyle()` measurement against the active local server (`http://localhost:3000`) and live original (`https://www.conejovalleycounseling.com/home`).

10. **4-Viewport fresh screenshot & horizontal overflow pass** —
    - Captured fresh full-page screenshots at 1440px (desktop), 1024px (small desktop), 768px (tablet), and 375px (mobile) for both the live original and local clone into `qa-audit/responsive/`.
    - Verified `hasHorizontalScroll: false` on all 4 viewports — zero horizontal overflow anywhere on the clone.
    - Verified WCAG 2 AA accessibility via `@axe-core/playwright`: 0 violations found.

11. **ExpertiseGrid mobile/tablet reflow verified (Part 4 Check A)** —
    - Measured grid columns: at 375px mobile, `grid-template-columns: 327px` (single column). Each `ul` column spans the full container width (327px) stacking column 1 (items 1-6) above column 2 (items 7-12) with clean divider spacing.
    - At 768px tablet, `grid-template-columns: 312px 312px` (2 columns side-by-side with 64px `gap-x-16` within 40px gutters).
    - At 1024px and 1440px, cleanly scales to `416px 416px` and `604px 604px`.
    - Finding: The Tailwind `md:grid-cols-2` configuration already provides the correct 1-column mobile fallback and 2-column tablet/desktop presentation. No layout changes needed.

12. **Hero image/text order swap at `md` breakpoint verified (Part 4 Check B)** —
    - Measured element bounding boxes across breakpoints:
      - 375px (mobile): text (top) above image (bottom) at `left: 24px, width: 327px`, maintaining SEO/heading primacy on mobile viewports.
      - 768px (tablet): Image at `left: 40px, width: 320px`; Text at `left: 408px, width: 320px` (`imageIsLeft: true`). Perfectly balanced 50/50 split with 40px gutters and 48px gap (`gap-12 md:px-10`). No cramping observed.
      - 1024px (small desktop): Image at `left: 64px, width: 424px`; Text at `left: 536px, width: 424px` (`imageIsLeft: true`).
      - 1440px (desktop): Image at `left: 84px, width: 612px`; Text at `left: 744px, width: 612px` (`imageIsLeft: true`).
    - Finding: The `md:order-1` / `md:order-2` swap correctly keeps image-left / text-right across all tablet and desktop viewports without visual cramping.

13. **OurOffice container width & proportions verified (Part 4 Check C)** —
    - Verified container classes: `mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24 lg:px-16`.
    - Measured grid columns: 327px (375px), 320px 320px (768px), 424px 424px (1024px), 612px 612px (1440px).
    - Proportions match the surrounding Hero, TrustBuilding, and About sections 1:1.

14. **Discrepancy classification & regression check** —
    - Cross-referenced all visual elements against Part 5 "Things intentionally left alone". All non-identical elements (earthy sage/terracotta palette, Dr. Maya Reynolds copy, headshot/office photos, 3 services cards, 3-column footer, dark CTA band, FAQ accordion) are confirmed intentional redesign choices.
    - Zero structural bugs found.
    - Vitest unit tests: 13 test files, 24/24 tests passing.
    - TypeScript check: `npx tsc --noEmit` completed with 0 errors.
