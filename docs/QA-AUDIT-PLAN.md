# QA Audit Plan — Clone vs. Original Fidelity Check

Purpose: systematically extract and compare every layout, typography, color, spacing, image, interaction, animation, and responsive detail between our clone (`grow-my-therapy-clone`) and the original (`https://www.conejovalleycounseling.com/home`), so we know exactly what still deviates before submission.

This plan is written to be run with **Playwright** (works the same whether driven from a terminal script, an MCP browser tool, or Antigravity's built-in browser automation — Antigravity is fine to use here since it's just a Playwright driver with a nicer UI; nothing below is tool-specific).

Reference: this whole exercise exists to satisfy `Scrach/deatils.md` Part 1's checklist — "looks exactly like the original... in terms of layout and structure," "same fonts, typography, and styling," "consistent spacing, padding, and margins," "fully responsive." Part 2/3 changes (colors, copy, images, Our Office section) are intentionally *not* being diffed against the original — only structural/behavioral fidelity is in scope here.

---

## 0. Setup

```bash
npm install -D playwright
npx playwright install chromium
```

Two site targets:
- **Original:** `https://www.conejovalleycounseling.com/home`
- **Clone:** `http://localhost:3000` (run `npm run dev` first) or the deployed Vercel URL

Output folder for all artifacts: `qa-audit/` (screenshots, JSON reports) — gitignore this, it's working material, not a deliverable.

---

## 1. Layout & Structure Extraction

**Goal:** confirm section order, section count, and each section's DOM landmark match.

For each site, extract:
```js
// Run in page.evaluate()
Array.from(document.querySelectorAll('body > * , main > *, section, header, footer'))
  .map(el => ({
    tag: el.tagName,
    id: el.id || null,
    classes: el.className,
    childCount: el.children.length,
    boundingBox: el.getBoundingClientRect(),
  }))
```

**Compare:** section count, section order (top-to-bottom), and each section's height ratio relative to total page height (so absolute pixel differences from different content length don't create false mismatches — compare *proportions*).

**Record in:** `qa-audit/layout-original.json`, `qa-audit/layout-clone.json`

---

## 2. Typography Extraction

**Goal:** confirm font-family, size, weight, and line-height per role (H1, H2, H3, nav link, body paragraph, button, caption) match our documented mapping (`docs/superpowers/specs/2026-09-10-grow-my-therapy-clone-design.md` §4, and the font-fix commit `3b3c5e6`).

For each site, extract computed styles for one representative element per role:
```js
const roles = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  navLink: 'nav a, header a:not(:first-child)',
  body: 'p',
  button: 'a[class*="button"], button, .Button',
};
const result = {};
for (const [role, selector] of Object.entries(roles)) {
  const el = document.querySelector(selector);
  if (!el) { result[role] = null; continue; }
  const s = getComputedStyle(el);
  result[role] = {
    fontFamily: s.fontFamily,
    fontSize: s.fontSize,
    fontWeight: s.fontWeight,
    fontStyle: s.fontStyle,
    lineHeight: s.lineHeight,
    letterSpacing: s.letterSpacing,
    textTransform: s.textTransform,
  };
}
result;
```

**Known intentional difference:** original uses beaufort-pro/Muli/PrintedMoments (proprietary); clone uses Cormorant/Mulish/Sacramento (closest free equivalents). Don't flag the font *name* as a mismatch — flag size/weight/line-height/letter-spacing/text-transform ratios that are unreasonably off (e.g. clone H1 is 40% smaller than original's, or clone lost the uppercase+tracked treatment on nav links).

**Record in:** `qa-audit/typography-original.json`, `qa-audit/typography-clone.json`

---

## 3. Color Extraction

**Goal:** confirm the *role* each color plays (background/surface/text/accent/border) is consistent, not the hex values (Part 2 explicitly requires a new palette).

```js
const roles = {
  pageBg: 'body',
  headingText: 'h1',
  bodyText: 'p',
  primaryButtonBg: 'a[class*="button"], button',
  border: 'hr, [class*="border"]',
};
const result = {};
for (const [role, selector] of Object.entries(roles)) {
  const el = document.querySelector(selector);
  if (!el) { result[role] = null; continue; }
  const s = getComputedStyle(el);
  result[role] = { color: s.color, backgroundColor: s.backgroundColor, borderColor: s.borderColor };
}
result;
```

**Compare:** contrast ratios (use a WCAG contrast formula) for each text/background pair on both sites — confirm the clone's new palette doesn't *regress* readability versus the original, even though the colors themselves differ by design.

**Record in:** `qa-audit/color-contrast-report.json`

---

## 4. Spacing & Grid Extraction

**Goal:** confirm padding/margin/gap rhythm between sections and within grids matches proportionally.

```js
Array.from(document.querySelectorAll('section, header, footer')).map(el => {
  const s = getComputedStyle(el);
  return {
    id: el.id || el.className,
    paddingTop: s.paddingTop, paddingBottom: s.paddingBottom,
    marginTop: s.marginTop, marginBottom: s.marginBottom,
  };
});
```

Also extract grid/flex gap values inside multi-column sections (Who I Help / Who We Help cards, Services / Specialties cards):
```js
Array.from(document.querySelectorAll('[class*="grid"], [class*="flex"]')).map(el => ({
  className: el.className,
  display: getComputedStyle(el).display,
  gap: getComputedStyle(el).gap,
  gridTemplateColumns: getComputedStyle(el).gridTemplateColumns,
}));
```

**Record in:** `qa-audit/spacing-original.json`, `qa-audit/spacing-clone.json`

---

## 5. Images & Media

**Goal:** confirm image aspect ratios, object-fit behavior, and alt-text presence (not content — ours are intentionally different photos per Part 2).

```js
Array.from(document.querySelectorAll('img')).map(img => ({
  alt: img.alt,
  naturalRatio: img.naturalWidth && img.naturalHeight ? (img.naturalWidth / img.naturalHeight).toFixed(2) : null,
  displayedRatio: (img.getBoundingClientRect().width / img.getBoundingClientRect().height).toFixed(2),
  objectFit: getComputedStyle(img).objectFit,
  loading: img.loading,
}));
```

**Flag:** any image with empty/missing `alt`, any image whose displayed aspect ratio is badly distorted from its natural ratio (stretching).

---

## 6. Interactive States (hover / focus / active)

**Goal:** confirm buttons/links have visible, accessible hover and focus states on both sites (not identical styling — just presence and adequate contrast).

Playwright script per interactive element (buttons, primary nav links, FAQ triggers):
```js
async function captureStates(page, selector) {
  const el = page.locator(selector).first();
  const states = {};
  states.default = await el.screenshot();
  await el.hover();
  await page.waitForTimeout(150);
  states.hover = await el.screenshot();
  await el.focus();
  await page.waitForTimeout(150);
  states.focus = await el.screenshot();
  return states;
}
```
Save each state screenshot to `qa-audit/states/<site>-<element>-<state>.png` and eyeball diff.

**Specific to check on the clone:** the FAQ `<details>`/`<summary>` accordion — confirm keyboard accessibility (Tab to focus, Enter/Space to toggle) works, since that's a native-HTML interaction pattern we chose deliberately over the original's JS accordion.

---

## 7. Scroll Behavior & Animations

**Goal:** confirm header scroll behavior matches (already fixed to non-sticky — this step just re-verifies it didn't regress), and catalog any scroll-triggered reveal animations on the original that we may be missing.

```js
// Detect scroll-triggered animation libraries on window
Object.keys(window).filter(k => /scroll|aos|gsap|framer|lottie/i.test(k));

// Detect CSS @keyframes in use
Array.from(document.styleSheets).flatMap(sheet => {
  try {
    return Array.from(sheet.cssRules).filter(r => r.type === CSSRule.KEYFRAMES_RULE).map(r => r.name);
  } catch { return []; }
});
```

Then scroll the original page in 10% increments (0%, 10%, ... 100% of `document.body.scrollHeight`), screenshotting each step (this reuses the same technique as `conejovalleycounseling-design-design/screens/scroll/*.png` from the earlier skillui extraction — that folder already has this for the original; **no need to re-run it**, just reuse those 7 frames). Do the equivalent scroll-capture on the clone and compare section reveal timing/fade-in behavior side by side.

**Known finding already fixed:** header must NOT be sticky on either site (confirmed via this exact method in the previous session — see git commit `e5b6555`).

**Open question to verify:** does the original have any scroll-fade-in animation on section entry (cards, images)? If yes and it's a simple CSS opacity/transform transition (not paid library), consider matching it for polish — but confirm first via the keyframes/scroll-frame check above rather than assuming.

---

## 8. Responsive Behavior

**Goal:** confirm both sites reflow correctly at the same breakpoints, and neither has horizontal scroll.

Viewports to test: `375×800` (mobile), `768×1024` (tablet), `1024×768` (small desktop), `1440×900` (desktop).

```js
for (const vw of [375, 768, 1024, 1440]) {
  await page.setViewportSize({ width: vw, height: 900 });
  const hScroll = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  console.log(vw, 'horizontal scroll:', hScroll);
  await page.screenshot({ path: `qa-audit/responsive/<site>-${vw}.png`, fullPage: true });
}
```

**Compare:** at each breakpoint, does the clone's grid column count match the original's (e.g. 3-col cards → 1-col on mobile on both, not 3-col cards staying 3-col and overflowing on the clone)?

---

## 9. Accessibility Pass

**Goal:** catch anything the visual comparison misses.

```bash
npx playwright test --grep @a11y   # if using axe-playwright, otherwise:
```
Simplest path without extra deps — run Lighthouse's accessibility category via Chrome DevTools Protocol, or use the `@axe-core/playwright` package:
```bash
npm install -D @axe-core/playwright
```
```js
const { AxeBuilder } = require('@axe-core/playwright');
const results = await new AxeBuilder({ page }).analyze();
console.log(results.violations);
```
Run on the clone only (auditing the original's accessibility isn't the goal — ours needs to pass, not theirs).

---

## 10. SEO / Meta Pass

**Goal:** confirm the clone's on-page SEO fundamentals are present (per spec §8).

```js
{
  title: document.title,
  metaDescription: document.querySelector('meta[name="description"]')?.content,
  h1Count: document.querySelectorAll('h1').length,
  jsonLd: Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(s => JSON.parse(s.textContent)),
  canonical: document.querySelector('link[rel="canonical"]')?.href,
}
```
**Check:** exactly one `<h1>`, title/description contain "Santa Monica" + "Anxiety" or "Trauma", JSON-LD `Psychologist` schema present and valid.

---

## 11. Consolidated Report

Produce one file, `qa-audit/REPORT.md`, structured as:

```markdown
# QA Audit Report — <date>

## Summary
- Sections matched: X/12
- Typography roles matched (size/weight/case, not font name): X/6
- Spacing rhythm matched: pass/fail per section
- Responsive breakpoints clean (no h-scroll): 4/4
- Accessibility violations (clone): N found
- SEO checks: pass/fail list

## Deviations found
| # | Category | Original | Clone | Verdict (intentional per spec / bug) |
|---|----------|----------|-------|----------------------------------------|
| 1 | ... | ... | ... | ... |

## Fixes applied this pass
- ...
```

Every row in "Deviations found" must be explicitly marked **intentional** (traceable to a spec/plan decision — color, copy, images, new section, font substitution) or **bug** (needs a fix, like the earlier sticky-nav and font-family issues). Don't let "looks different" alone justify a fix — cross-check against `docs/superpowers/specs/2026-09-10-grow-my-therapy-clone-design.md` and `Scrach/deatils.md` first, the way the sticky-nav and font issues were resolved earlier in this project.

---

## Notes on tooling choice

- **Antigravity** is fine for this — it's a Playwright-backed browser automation IDE, so every script above runs unchanged inside it; use its recorder/inspector to speed up selector discovery if useful, but the extraction snippets above are selector-agnostic enough to paste directly into its console runner.
- If running from this Claude Code session instead, the same `node -e "..."` + `playwright` pattern already used earlier in this project (header sticky check, font computed-style check, responsive screenshots) is the reference implementation — copy that pattern for each section above.
