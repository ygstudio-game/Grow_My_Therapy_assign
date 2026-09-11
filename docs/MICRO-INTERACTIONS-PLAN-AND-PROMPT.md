# Micro-Interactions & Motion — Plan and Handoff Prompt for Antigravity

Purpose: add restrained, purposeful micro-interactions to the already-accuracy-verified clone, grounded in Emil Kowalski's design-engineering framework (`emil-design-eng` skill) and bounded by what `Scrach/deatils.md` actually allows.

---

## Part 1: Why this is allowed, and why it must stay restrained

`Scrach/deatils.md` never mentions animation or micro-interactions by name — it isn't an explicit Part 2 liberty (color/copy/images/new-section only) the way earlier fixes in this project treated typography and layout as off-limits. What it *does* say: the Role Overview lists loving "visual polish" as a trait they're hiring for, and the grading table weights "Theme & design sense" at 25%. That's the basis for doing this work at all — not a license to go further than that.

**Constraint that matters more than usual here:** the QA audit already confirmed the original site (`qa-audit/scroll-animation-report.json`) has **zero** keyframes and no animation library — it's a calm, static Squarespace site with plain hover states only. Going heavy on motion would itself be a "same styling as the original" mismatch. Every decision below stays on the restrained end of Emil's framework on purpose.

---

## Part 2: The framework being applied (from `emil-design-eng`)

**Before animating anything, ask: how often will a user see this?**

| Frequency | Decision |
|---|---|
| Tens of times/session (hover) | Remove or drastically reduce |
| Occasional (menus, accordions, buttons) | Standard animation |
| Rare (page load) | Can add subtle delight |

**Rules applied throughout this plan:**
- Only `transform` and `opacity` animate (GPU-accelerated, no layout/paint cost) — never `padding`/`margin`/`height`/`width`/`all`.
- `ease-out` for anything entering/appearing; `ease` for hover/color; never `ease-in` on UI.
- Durations stay under 300ms for all UI (buttons 100-160ms, accordion/dropdown 150-250ms, mobile menu drawer 200-300ms).
- Hover effects gated behind `@media (hover: hover) and (pointer: fine)` so touch devices don't get false-positive sticky hover states.
- `prefers-reduced-motion` respected everywhere — reduce, don't necessarily eliminate (keep opacity/color, drop transform-based movement).
- No new dependency. Pure CSS transitions (interruptible, GPU-accelerated) — no Framer Motion, since every target here is simple enough that CSS covers it and avoids Framer's non-hardware-accelerated shorthand pitfall the skill itself warns about.
- No bounce/spring easing anywhere — this is a therapy practice's site, professional and calm, not a playful consumer app.

---

## Part 3: Scope — what gets a micro-interaction, and exactly how

### 1. Buttons (all CTAs: Hero, CtaBand, header "Contact" pill, mobile menu CTA)
- Add `transform: scale(0.97)` on `:active`, `transition: transform 160ms ease-out`.
- This is Emil's single most universal rule ("buttons must feel responsive") — low risk, applies everywhere a button/pill already exists.
- Files: `components/layout/Header.tsx`, `components/sections/Hero.tsx`, `components/sections/CtaBand.tsx`.

### 2. FAQ accordion (`components/sections/Faq.tsx`)
- Currently native `<details>`/`<summary>` toggles instantly with no transition — jarring per the framework's "preventing jarring changes" purpose.
- Add a smooth height/opacity transition on open. Since native `<details>` doesn't animate `height: auto` directly, use the CSS `@starting-style` + `interpolate-size: allow-keywords` approach (modern, no JS) with a `transition: 220ms ease-out` on `[open]`, falling back gracefully (abrupt open, still functional) in browsers that don't support it — do not add a JS-based height-measurement workaround, that's disproportionate complexity for one section.
- Occasional-frequency (opened a handful of times per session) — squarely in "standard animation" territory per the framework.

### 3. Card hover (WhoIHelp, Services cards)
- Subtle lift on hover: `transform: translateY(-4px)`, `transition: transform 200ms ease`, plus a soft shadow increase.
- Gate behind `@media (hover: hover) and (pointer: fine)`.
- Files: `components/sections/WhoIHelp.tsx`, `components/sections/Services.tsx`.

### 4. Mobile menu open/close (`components/layout/Header.tsx`)
- Currently an instant conditional render (`{open && (...)}`) — no transition at all.
- Add enter/exit transition: `opacity` + `transform: translateY(-8px)` to `translateY(0)`, 200ms ease-out on enter. Since this is occasional (opened once or twice per mobile session), this qualifies as "standard animation," not "remove."
- Icon swap (Menu ↔ X) can get a quick 150ms rotate/cross-fade — optional, skip if it adds complexity disproportionate to the effect.

### 5. Smooth anchor scrolling (global)
- Add `scroll-behavior: smooth` to `app/globals.css` on `html`, wrapped in `@media (prefers-reduced-motion: no-preference)` so it's skipped for users who've asked for reduced motion.
- Purpose: "spatial consistency" — when a nav link jumps to a section, a smooth scroll helps the user understand where they landed instead of an instant jarring jump. This is a single global CSS rule, not a component change.

### 6. Section entrance reveal — OPTIONAL, lowest priority, implement last if at all
- The riskiest item on this list, because the original has *no* scroll-triggered animation at all — adding one is the one place this plan could tip into "different styling than the original."
- If implemented: extremely subtle only — `opacity: 0` → `1` and `translateY(8px)` → `0`, 300-400ms ease-out, triggered once via `IntersectionObserver`/`useInView({ once: true, margin: "-100px" })`, never blocking interaction, never re-triggering on scroll-back-up.
- **Do this last, and only if everything else in this plan is done, tested, and still feels calm/restrained.** If it starts to feel like it's fighting the original's static character, skip it.

---

## Part 4: What NOT to do (explicit)

- No `transition: all`.
- No animation on keyboard-triggered actions (none exist on this site, but if any get added later, they stay instant).
- No spring/bounce easing.
- No new npm dependency (Framer Motion, GSAP, etc.) — everything above is achievable in plain CSS.
- No animating the nav bar itself into existence, no page-load hero animation, no parallax — none of these have a clear purpose per the framework's "what is the purpose?" test, and the original has none of them either.
- Don't touch anything already covered by `docs/UI-ACCURACY-PLAN-AND-PROMPT.md` Part 5 ("things intentionally left alone") while doing this pass.

---

## Part 5: Ready-to-paste prompt for Antigravity

```
You are adding restrained micro-interactions to a Next.js + Tailwind clone of
https://www.conejovalleycounseling.com/home, redesigned for a fictional
therapist Dr. Maya Reynolds, PsyD. Repo: grow-my-therapy-clone/.

READ FIRST, IN THIS ORDER:
1. Scrach/deatils.md — the assignment brief. Animation isn't explicitly
   covered by its Part 2 liberties (only color/copy/images/new-section are).
   The basis for this work is the brief's "visual polish" / "design sense"
   language, not a blank check — stay restrained.
2. grow-my-therapy-clone/docs/MICRO-INTERACTIONS-PLAN-AND-PROMPT.md — this
   document. Part 3 is your exact scope, item by item, with concrete
   durations/easings/properties. Part 4 is an explicit do-not-do list.
3. grow-my-therapy-clone/docs/UI-ACCURACY-PLAN-AND-PROMPT.md Part 5 — things
   already intentionally different from the original. Don't touch them
   while doing this pass, and don't let any new animation change layout,
   structure, or spacing (that would violate deatils.md's Part 1
   requirement to match the original's structure exactly).

YOUR TASK:
Implement exactly the 5 required items in Part 3 (buttons, FAQ accordion,
card hover, mobile menu transition, smooth anchor scroll), plus the
optional item 6 (section entrance reveal) LAST and only if the first 5
still feel calm and restrained once done — skip it if in doubt.

For each item:
- Only animate `transform` and `opacity` (never `padding`/`margin`/`height`/
  `width`/`all`).
- Stay under the duration in the framework table in Part 2/3 of the plan
  doc.
- Gate any hover effect behind `@media (hover: hover) and (pointer: fine)`.
- Respect `prefers-reduced-motion` (wrap `scroll-behavior: smooth` in
  `@media (prefers-reduced-motion: no-preference)`; keep opacity but drop
  transform-based movement for reduced-motion users elsewhere).
- No new npm dependency — plain CSS transitions only.
- No bounce/spring easing anywhere.

Follow existing project conventions:
- Every component has a matching *.test.tsx (Vitest + React Testing
  Library). Adding a CSS transition class shouldn't break existing tests,
  but run `npm test` after every change (must stay at 24+ passing, 0
  failing).
- Run `npm run build` after every change (must complete with 0 TypeScript
  errors) — use `rm -rf .next && npm run build` since the dev server and
  build can't run concurrently without corrupting the cache.
- Theme tokens are CSS variables in app/globals.css — if you need a new
  easing curve variable (e.g. --ease-out: cubic-bezier(0.23, 1, 0.32, 1)),
  add it there alongside the existing color tokens, don't hardcode
  cubic-bezier values inline everywhere.

When you're done, verify with a quick before/after screen recording or a
few Playwright screenshots mid-transition (the existing
grow-my-therapy-clone/scripts/run-qa-audit.js has state-capture patterns
you can reuse) — confirm the FAQ accordion, mobile menu, button press, and
card hover all look and feel like the spec, not just that they compile.

Do not touch git remotes, do not push to GitHub, do not redeploy to
Vercel — those are on hold pending explicit approval from the project
owner.
```
