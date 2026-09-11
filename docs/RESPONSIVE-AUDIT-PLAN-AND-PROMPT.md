# Responsive Audit — Plan and Handoff Prompt for Antigravity

Purpose: use the newly-installed `responsive-craft` skill to do a deeper, specialist responsive pass than our own ad-hoc Playwright checks have covered — building on what's already verified, not redoing it.

---

## Part 1: Why this is explicitly required (stronger basis than the animation pass)

`Scrach/deatils.md` Part 1 checklist states directly:
> "It is fully responsive across desktop, tablet, and mobile views."

This is a named, explicit requirement — not a judgment call like the animation work was. Full scope is in bounds here.

---

## Part 2: What's already been verified (don't redo, build on it)

From `docs/QA-AUDIT-PLAN.md` execution and `docs/UI-ACCURACY-PLAN-AND-PROMPT.md` Part 7:

- No horizontal overflow at 375px, 768px, 1024px, or 1440px (`hasHorizontalScroll: false` on all four, both via our own `scripts/run-qa-audit.js` and Antigravity's later re-check).
- Grid reflow confirmed correct: 3-card sections (WhoIHelp, Services) go 1-column mobile → 3-column tablet/desktop. 2-column sections (Hero, TrustBuilding, About, OurOffice) go 1-column mobile → 2-column tablet/desktop, with Hero's image/text `order-1`/`order-2` swap confirmed not to cramp at the `md` breakpoint specifically.
- ExpertiseGrid's 2-column list (fixed from 3-column to match the original) confirmed to reflow to 1-column on mobile and 2-column from `md` up.
- WCAG AA accessibility: 0 violations (axe-core).
- Mobile hamburger menu exists and has been tested for open/close.

**What we have NOT specifically checked** (this is the actual gap `responsive-craft` should fill):
- Only 4 viewports tested (375/768/1024/1440) — never the true edges (320px small-phone, 2560px ultra-wide). `responsive-craft`'s own principle is "test by dragging, not jumping, from 280px to 2560px."
- No systematic check against the skill's `ai-failure-patterns.md` 13 categories (100vh-on-mobile bugs, iOS input zoom, missing `min-width: 0` on flex children, `overflow: hidden` silently breaking things, z-index escalation, etc.) — we've verified *symptoms* (no h-scroll) but not *root causes* from that checklist.
- `next/image` `fill` usage across every section — never explicitly verified the `sizes` prop is set correctly for each breakpoint (a common responsive-images gap, and one of the skill's known AI-failure categories).
- The FAQ accordion's CSS grid-rows expand/collapse technique (added during the micro-interactions pass — see `components/sections/Faq.tsx`) and the mobile menu's slide/transform animation (see `components/layout/Header.tsx`) are both new since the last responsive check — neither has been verified across the full viewport range yet.
- Very small viewports (320-374px) specifically for text wrapping/button tap-target sizing, since our type-scale pass (`docs/STATUS.md` "container-width and type-scale fix") deliberately increased font sizes — worth confirming nothing overflows or clips at the smallest phones after that change.

---

## Part 3: Explicit "don't touch" list

- **Don't make the header sticky.** It was deliberately reverted to `position: static` to match the original site's actual behavior (`docs/STATUS.md`, commit `e5b6555`). If `responsive-craft`'s sticky-pattern references suggest sticky headers as a best practice, that's a generic recommendation — it does not apply here, because matching the original's non-sticky behavior is a verified requirement from `deatils.md` Part 1, not an oversight.
- **Don't change section order, layout structure, or column counts** beyond what's needed for responsive reflow at breakpoints not yet covered. Structural decisions (2-col vs 3-col, image/text left-right order, etc.) were already deliberately matched against the live original site — see `docs/UI-ACCURACY-PLAN-AND-PROMPT.md` Parts 3 and 5. Fixing an actual mobile overflow bug is in scope; restructuring a section "for better responsive practice" is not.
- **Don't remove or rework the animation/transition work** from the micro-interactions pass (`docs/MICRO-INTERACTIONS-PLAN-AND-PROMPT.md`) unless it's the literal root cause of a responsive bug you find. If a transition needs a small breakpoint-specific adjustment (e.g., disabling a hover-lift transform on touch/small viewports, which is already supposed to happen via the existing `@media (hover: hover) and (pointer: fine)` gating), fix that narrowly rather than reverting the feature.
- **Don't convert the `max-w-[1400px]` container widths to `clamp()`-based fluid sizing** without checking first — that width was deliberately set to match the original site's measured `content-width--wide` proportions (`docs/STATUS.md`). If `responsive-craft`'s "fluid by default" principle suggests fluid typography *within* that fixed container (e.g., heading sizes using `clamp()` instead of Tailwind breakpoint classes), that's fine and likely a genuine improvement — just don't change the container's max-width itself without re-verifying against `qa-audit/responsive/original-1440.png`.

---

## Part 4: Ready-to-paste prompt for Antigravity

```
You have the `responsive-craft` skill installed. Use it to run a specialist
responsive audit on this Next.js + Tailwind site: grow-my-therapy-clone/,
a clone/redesign of https://www.conejovalleycounseling.com/home for a
fictional therapist, Dr. Maya Reynolds, PsyD.

READ FIRST, IN THIS ORDER:
1. Scrach/deatils.md — Part 1's checklist explicitly requires "fully
   responsive across desktop, tablet, and mobile views." This is a hard
   requirement, not a judgment call.
2. grow-my-therapy-clone/docs/RESPONSIVE-AUDIT-PLAN-AND-PROMPT.md — this
   document. Part 2 lists what's already verified (don't redo it) and the
   actual gaps to fill. Part 3 is an explicit do-not-touch list — several
   things that might look like responsive "issues" to a generic audit
   (a non-sticky header, specific column counts, specific container
   widths) are deliberate, verified-correct choices matching the original
   site. Do not "fix" them.
3. grow-my-therapy-clone/docs/UI-ACCURACY-PLAN-AND-PROMPT.md and
   grow-my-therapy-clone/docs/MICRO-INTERACTIONS-PLAN-AND-PROMPT.md — prior
   work on this project. Don't revert or redo anything documented there.

YOUR TASK:
1. Run `/responsive-craft audit` in Guided mode (this site has genuinely
   complex patterns worth a formal spec pass: the FAQ accordion's
   grid-rows expand/collapse, the mobile hamburger drawer, and the image/
   text order-swapping two-column sections).

2. Focus the audit on the specific gaps listed in Part 2 of the plan doc:
   - True edge viewports: 320px and 2560px, not just the 4 already tested.
   - Run the skill's ai-failure-patterns.md 13-category checklist against
     every component in grow-my-therapy-clone/components/.
   - Verify every next/image `fill` usage has a correct `sizes` prop for
     its actual rendered width at each breakpoint (check
     components/sections/Hero.tsx, TrustBuilding.tsx, About.tsx,
     QuoteBand.tsx, OurOffice.tsx, WhoIHelp.tsx card icons).
   - Verify the FAQ accordion (components/sections/Faq.tsx) and mobile
     menu (components/layout/Header.tsx) animations - both added since the
     last responsive check - hold up across the full viewport range with
     no clipping, jank, or layout shift.
   - Verify text and tap targets at 320-374px specifically, since a recent
     pass deliberately increased the type scale (docs/STATUS.md) - confirm
     nothing overflows or clips at the smallest phone widths.

3. Use `/responsive-craft preview` to visually verify fixes at 375px,
   768px, 1024px, 1440px, plus the new 320px and 2560px edge cases against
   the running dev server.

4. Respect Part 3 of the plan doc's do-not-touch list exactly. If you're
   unsure whether something is a deliberate choice or an actual bug,
   check it against docs/UI-ACCURACY-PLAN-AND-PROMPT.md and
   docs/STATUS.md before changing it - both document why specific
   decisions were made.

5. Follow existing project conventions:
   - Content lives in grow-my-therapy-clone/lib/content.ts - don't
     hardcode copy.
   - Theme tokens are CSS variables in app/globals.css, consumed via
     Tailwind (bg, surface, primary, primary-dark, accent, muted, border,
     teal-band) plus the animation tokens added in tailwind.config.ts
     (--ease-out custom easing, duration-160/220/280) - reuse these,
     don't introduce new ad-hoc values.
   - Run `npm test` after every change (must stay at 24+ passing, 0
     failing) and `rm -rf .next && npm run build` (must complete with 0
     TypeScript errors - the dev server and build can't run concurrently
     without corrupting the cache).

6. When done, append a new "Part 5" section to
   grow-my-therapy-clone/docs/RESPONSIVE-AUDIT-PLAN-AND-PROMPT.md with
   your findings and fixes, following the same format as Part 2 (what was
   found, how it was verified, what was changed, confirmation tests/build
   still pass). Do not overwrite Parts 1-4.

7. Do not touch git remotes, do not push to GitHub, do not redeploy to
   Vercel - those are on hold pending explicit approval from the project
   owner.
```
