You are a **strict senior frontend engineer, UI/UX designer, SEO reviewer, and hiring manager** evaluating my Front-End Developer Internship assignment for **Grow My Therapy**.

Your job is NOT to make me feel good. Your job is to determine honestly whether my submission actually satisfies the assignment requirements.

**Do not automatically say PASS. Do not assume that something works because I claim it works. Verify everything you reasonably can. If something cannot be verified, explicitly say “NOT VERIFIED” rather than assuming it is correct.**

## Assignment Requirements

The original website to clone is:

https://www.conejovalleycounseling.com/home

The redesign must use the imaginary therapist profile as the single source of truth:

https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit?usp=sharing

Required stack:

* Next.js
* Tailwind CSS
* Component libraries are allowed
* AI tools are allowed, but the implementation should be manually refined

Required parts:

### Part 1 — Clone

The homepage should reproduce the original website's:

* Overall layout
* Section order
* Structure
* Spacing
* Grid systems
* Typography
* Buttons
* Visual hierarchy
* Responsive behavior
* Desktop/tablet/mobile layouts

### Part 2 — Redesign

The cloned homepage must then be redesigned using Dr. Maya Reynolds' profile.

Check:

* New color palette
* Primary, secondary and accent colors
* Cohesive visual system
* Readability and contrast
* New images
* New homepage copy
* H1
* Subheadings
* Buttons
* Services
* About section
* FAQs
* Other text
* SEO
* Local/location keywords
* Therapist bio
* Therapist approach
* Modalities
* Specialties
* Client populations
* Practice type
* Profile-specific information

IMPORTANT:

Every factual claim about Dr. Maya Reynolds must be supported by her profile.

Flag anything that appears invented, exaggerated, unsupported, misleading, or inconsistent with the profile.

### Part 3 — Our Office

There must be ONE completely new section that does not exist in the original homepage.

It should:

* Be an “Our Office” type section
* Use office information from the profile
* Include 2–3 appropriate office images from the profile where available
* Describe the environment accurately
* Mention location/session availability only if supported by the profile
* Feel warm, trustworthy and appropriate for therapy
* Visually integrate with the rest of the website

### Part 4 — Video

The walkthrough should:

* Be approximately 5 minutes
* Demonstrate desktop
* Demonstrate mobile
* Explain design decisions
* Explain how Dr. Maya's profile was used
* Explain important features
* Use client-friendly language
* Avoid excessive technical jargon
* Sound confident and professional

### Deliverables

Expected:

1. Live website
2. Public GitHub repository
3. Video walkthrough

---

# MY SUBMISSION

Here are my links/files:

LIVE WEBSITE:
[PASTE URL]

GITHUB:
[PASTE URL]

VIDEO:
[PASTE URL]

PROFILE:
https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit?usp=sharing

ORIGINAL WEBSITE:
https://www.conejovalleycounseling.com/home

---

# YOUR AUDIT PROCESS

Perform the review in this order.

## STEP 1 — Original Website Comparison

Compare my website against the original homepage.

Check section-by-section:

1. Header
2. Navigation
3. Hero
4. Buttons
5. Images
6. Every content section
7. Service sections
8. About section
9. Testimonials if applicable
10. FAQ
11. CTA
12. Footer

For each section report:

* Original behavior/design
* My implementation
* PASS / PARTIAL / FAIL
* Exact issue
* Recommended fix

Do NOT judge whether the redesign is prettier during this stage.

The goal is to determine whether I successfully cloned the original structure before redesigning it.

---

# STEP 2 — Responsive Testing

Evaluate:

### Desktop

* 1440px
* 1280px
* 1024px

### Tablet

* 768px
* 820px

### Mobile

* 430px
* 390px
* 375px

Check:

* Horizontal overflow
* Broken grids
* Text wrapping
* Navigation
* Hero layout
* Image cropping
* Button sizes
* Section spacing
* Typography
* Cards
* Footer
* Touch targets
* Unexpected blank space
* Elements going outside viewport
* Overlapping elements
* Fixed/sticky elements
* Mobile menu

If you cannot actually test a viewport, say **NOT VERIFIED**.

Do not pretend to have tested something you couldn't test.

---

# STEP 3 — Technology Audit

Inspect the GitHub repository.

Verify:

* Is this actually Next.js?
* Is Tailwind CSS actually being used?
* Is the project structured properly?
* Are components reusable?
* Are sections unnecessarily duplicated?
* Is there excessive hardcoded styling?
* Are there unnecessary dependencies?
* Are there obvious AI-generated patterns?
* Is the code understandable?
* Are there console/build errors?
* Are images handled appropriately?
* Is there unnecessary client-side JavaScript?
* Are environment variables/secrets exposed?
* Does the project build successfully?

Report specific files when possible.

Example:

`components/Hero.tsx — PASS`

or

`app/page.tsx — PARTIAL: entire homepage is one 900-line component.`

---

# STEP 4 — Profile Accuracy Audit

Read the Dr. Maya Reynolds profile carefully.

Create a table:

| Website Claim | Supported by Profile? | Evidence/Reason | Status |
| ------------- | --------------------- | --------------- | ------ |
| Claim 1       | Yes                   | Profile says... | PASS   |
| Claim 2       | No                    | Not found       | FAIL   |
| Claim 3       | Unclear               | Cannot verify   | RISK   |

Pay special attention to:

* Credentials
* Location
* Therapy specialties
* Modalities
* Client populations
* Age groups
* Treatment claims
* Years of experience
* Certifications
* Office information
* Insurance/payment information
* Session format
* Availability
* Mental health conditions
* Professional titles

If the website claims something that is not in the profile, flag it.

Do NOT excuse invented information as “normal marketing copy.”

---

# STEP 5 — Copywriting Audit

Judge:

* Clarity
* Grammar
* Professionalism
* Therapy-appropriate tone
* Accuracy
* Readability
* Persuasiveness
* Repetition
* CTA quality
* Whether copy sounds AI-generated
* Whether copy actually reflects Maya's profile

Check whether all major homepage copy was rewritten.

Identify any leftover copy from the original therapist.

Flag generic filler such as:

“Your journey starts here.”

if it does not meaningfully communicate Maya's actual positioning.

---

# STEP 6 — SEO Audit

Check:

* Page title
* Meta description
* H1
* H2/H3 hierarchy
* Location keywords
* Therapy/service keywords
* Natural keyword placement
* Image alt text
* URL structure
* Canonical if relevant
* Open Graph metadata
* Semantic HTML
* Internal links
* Duplicate headings
* Keyword stuffing
* Local SEO signals

Determine whether the SEO is actually implemented in code rather than merely claimed.

Give me:

**SEO score: X/100**

and list the most important fixes.

---

# STEP 7 — Design Audit

Evaluate the redesign as a professional UI/UX designer.

Score:

### Color

* Cohesion
* Contrast
* Therapy-appropriate feeling
* Consistency

### Typography

* Font selection
* Hierarchy
* Line height
* Readability
* Consistency

### Spacing

* Padding
* Margins
* Vertical rhythm
* Section consistency

### Layout

* Alignment
* Grid
* Balance
* White space

### Components

* Buttons
* Cards
* Navigation
* Forms
* CTAs

### Visual identity

Determine whether this looks like a deliberate redesign or simply:

“the original site with different colors.”

Be critical.

---

# STEP 8 — Image Audit

Check every major image.

For each image determine:

* Is it relevant?
* Is it intentional?
* Does it support the section?
* Does it fit the new theme?
* Is the quality good?
* Is the crop appropriate?
* Is it too generic?
* Does it look like random stock photography?
* Is Maya's image used appropriately?
* Are office images actually appropriate?
* Are alt attributes present?

Also check image performance and sizing where possible.

---

# STEP 9 — Our Office Section Audit

Find the new office section.

Verify:

* It actually exists
* It was not part of the original template
* It has a clear heading
* It has supporting copy
* Information comes from the profile
* Images are appropriate
* Location is accurate
* Session type is accurate
* Design matches the website

Score it separately out of 10.

---

# STEP 10 — Accessibility Audit

Check:

* Color contrast
* Alt text
* Heading hierarchy
* Keyboard accessibility
* Focus states
* Button/link semantics
* Form labels
* Mobile touch targets
* Screen-reader-friendly structure
* Meaningful link text
* Reduced-motion considerations where appropriate

Identify actual problems, not theoretical ones.

---

# STEP 11 — Performance Audit

Evaluate:

* Image optimization
* Image dimensions
* Font loading
* JavaScript
* Unnecessary dependencies
* Client components
* Layout shift
* Loading behavior
* Large assets

If Lighthouse/PageSpeed can be tested, use the results.

Do not invent Lighthouse scores.

---

# STEP 12 — GitHub Audit

Check:

* Public accessibility
* README
* Setup instructions
* Project structure
* Meaningful commit history if available
* No secrets
* No unnecessary files
* No broken configuration
* Clean package.json
* No huge unused assets
* Code readability

---

# STEP 13 — Video Audit

If the video is accessible, evaluate:

* Duration
* Audio quality
* Confidence
* English clarity
* Desktop walkthrough
* Mobile walkthrough
* Explanation of design choices
* Explanation of Maya profile usage
* Client-friendly language
* Lack of unnecessary technical jargon
* Overall professionalism

Do not judge based only on whether I covered every bullet. Judge whether a real client would understand and trust the presentation.

---

# STEP 14 — Hiring Manager Verdict

Now pretend you are the actual person deciding whether I move from Stage 2 to Stage 3.

Use the assignment weighting:

| Category               | Weight |
| ---------------------- | -----: |
| UI cloning accuracy    |    25% |
| Theme & design sense   |    25% |
| Copywriting & images   |    10% |
| New section creativity |    10% |
| Communication/video    |    30% |

Calculate a realistic score.

Do NOT inflate the score.

Give:

**Technical score: X/100**

**Design score: X/100**

**Content score: X/100**

**Responsive score: X/100**

**SEO score: X/100**

**Communication score: X/100**

**Overall assignment score: X/100**

Then give one of these verdicts:

🔴 **NOT READY — I would not submit this**

🟠 **SUBMIT ONLY AFTER FIXES**

🟡 **ACCEPTABLE — likely passes basic screening**

🟢 **STRONG — likely Stage 3 candidate**

🟢🟢 **EXCELLENT — clearly above average**

Most importantly answer:

### “If you were the hiring manager, would you shortlist me for Stage 3?”

Answer only:

**YES / NO / UNCERTAIN**

Then explain why.

---

# FINAL OUTPUT FORMAT

End your audit with exactly these sections:

## 1. Executive Verdict

Give me the brutally honest assessment in 5–10 sentences.

## 2. Scorecard

Give all category scores.

## 3. Requirement-by-Requirement Audit

Use:

🟢 PASS
🟡 PARTIAL
🔴 FAIL
⚠️ NOT VERIFIED / RISK

## 4. Critical Problems

List only issues that could genuinely hurt my selection.

Rank:

**P0 — Must fix**

**P1 — Should fix**

**P2 — Nice to fix**

## 5. Profile Accuracy Problems

List every unsupported or potentially invented claim.

## 6. Visual/UI Problems

List concrete visual issues.

## 7. Mobile Problems

List concrete responsive issues.

## 8. Code Problems

List concrete implementation issues and file names where possible.

## 9. SEO Problems

List concrete SEO problems.

## 10. Video Problems

List concrete communication/demo problems.

## 11. Top 10 Fixes Before Submission

Give me the 10 highest-impact changes in priority order.

## 12. Final Decision

Answer:

**Would you submit this as-is? YES or NO**

**Would you shortlist this candidate for Stage 3? YES / NO / UNCERTAIN**

Be honest even if the answer is negative.

Never praise something merely because it exists.

Never mark something PASS without evidence.

Never claim you tested something you could not access or verify.


























plan 2



I want you to audit my Grow My Therapy internship assignment again, but this time assume that the previous audit may contain false positives, unsupported conclusions, or AI-generated claims.

**Do NOT trust the previous audit.**

Your objective is to determine what is ACTUALLY verified versus what was merely assumed.

Previous audit claimed things such as:

* 98/100 technical
* 97/100 design
* 100% WCAG compliance
* 100% profile accuracy
* exact 1:1 clone
* zero responsive problems
* zero hallucinations
* 24/24 tests passing
* top 2% candidate
* automatic Stage 3 shortlist

Treat ALL of these claims as unverified until you independently prove them.

## RULE #1 — NEVER CLAIM A TEST WAS PERFORMED IF YOU DID NOT PERFORM IT

For every claim, classify it as:

🟢 VERIFIED — you actually inspected/tested evidence

🟡 PARTIALLY VERIFIED — some evidence exists but not enough

🔴 FAILED — evidence contradicts the claim

⚪ NOT VERIFIED — you do not have enough evidence

Never convert “probably works” into PASS.

---

# 1. BUILD VERIFICATION

Run:

npm run build

Also inspect:

* package.json
* next.config.*
* tsconfig.json
* tailwind.config.* if present
* app/
* components/
* lib/

Report the actual build result.

Check whether there are:

* TypeScript errors
* ESLint errors
* warnings
* invalid metadata
* broken imports
* deprecated configuration
* unnecessary dependencies

Do not say “zero errors” unless you actually see the output.

---

# 2. ORIGINAL WEBSITE CLONE — DO A REAL COMPARISON

Open the ORIGINAL website:

https://www.conejovalleycounseling.com/home

Open my deployed website:

[MY LIVE URL]

Compare them section by section.

Do NOT judge only by code.

Compare actual rendered UI:

* Header
* Hero
* Navigation
* Hero image
* Typography
* Section heights
* Section order
* Background colors
* Content widths
* Grid structure
* Cards
* Buttons
* Image placement
* CTA
* FAQ
* Footer

For every section give:

Original:
My version:
Difference:
Severity:
PASS/PARTIAL/FAIL

Pay particular attention to whether the assignment's requirement:

“clone the homepage, then redesign it while preserving the original layout”

was actually followed.

If the redesign changed structural layout substantially, flag it even if the redesign looks better.

---

# 3. SCREENSHOT-LEVEL RESPONSIVE TEST

Actually test the rendered site at:

320px
375px
390px
430px
768px
820px
1024px
1280px
1440px

Look for:

* overflow
* clipping
* text collision
* broken grids
* unexpected wrapping
* oversized headings
* tiny text
* buttons touching edges
* navigation problems
* image distortion
* excessive whitespace
* inconsistent section heights
* broken mobile menu
* FAQ problems

If you cannot actually render/test a viewport:

write:

⚪ NOT VERIFIED

Do NOT claim it was tested.

---

# 4. VISUAL CLONING — BE STRICT

Do not accept statements like:

“same general structure”

The assignment asks for accurate cloning.

Determine whether:

* spacing is actually similar
* container widths are similar
* section proportions are similar
* typography hierarchy is similar
* image positions are similar
* grid behavior is similar

Give a separate:

**Clone Fidelity Score: X/100**

Explain what prevents it from being 100.

---

# 5. PROFILE SOURCE-OF-TRUTH TEST

Open the actual Dr. Maya Reynolds profile:

https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit?usp=sharing

Then inspect EVERY important claim on my website.

Create:

| Website text/claim | Profile evidence | Exact match? | Status |

Look especially for invented:

* credentials
* experience
* treatment claims
* certifications
* insurance
* availability
* office information
* location
* session types
* populations
* specialties
* diagnoses
* professional history

IMPORTANT:

Marketing language is allowed, but factual claims must be supported.

If something is merely plausible but not supported:

⚠️ UNSUPPORTED

Do not call it PASS.

---

# 6. OFFICE SECTION

Verify whether the “Our Office” section:

1. Actually exists.
2. Was not already part of the original template.
3. Uses information from Maya's profile.
4. Uses the correct office images.
5. Does not invent office details.
6. Fits the visual system.

Also verify the exact address.

If the address looks suspicious, awkward, malformed, or placeholder-like, FLAG IT.

Do not assume that because the profile contains an address it is automatically good content for a real public website.

---

# 7. IMAGE VERIFICATION

Inspect the actual image files.

Determine:

* source
* dimensions
* file type
* quality
* relevance
* whether the images really appear to come from the provided profile
* whether they are appropriate for the intended sections
* whether they are optimized

If the previous audit claimed:

“exact byte matches to source assets”

actually verify that claim if possible.

Otherwise say:

⚪ NOT VERIFIED.

---

# 8. ACCESSIBILITY — DO NOT TRUST CLAIMS

Do an actual accessibility audit if tools are available.

Check:

* WCAG contrast
* alt attributes
* heading hierarchy
* keyboard navigation
* focus indicators
* semantic HTML
* buttons vs links
* labels
* mobile touch targets
* screen-reader structure

IMPORTANT:

Do NOT say:

“100% WCAG AA/AAA”

unless an actual test supports it.

Also explain the difference between:

* passing selected contrast checks
* passing WCAG overall

Do not confuse these.

---

# 9. SEO — VERIFY THE IMPLEMENTATION

Inspect the actual HTML/rendered page.

Check:

* `<title>`
* meta description
* canonical
* H1
* H2/H3 hierarchy
* robots
* sitemap
* structured data
* Open Graph
* Twitter metadata
* image alt text
* location keywords
* service keywords

Validate structured data if possible.

IMPORTANT:

Do not give SEO points merely because metadata exists.

Check whether the metadata is actually appropriate.

Also check whether the title/H1 sounds natural or keyword-stuffed.

---

# 10. NEXT.JS / TAILWIND VERIFICATION

Inspect the repository.

Determine:

* actual Next.js version
* App Router vs Pages Router
* actual Tailwind usage
* component reuse
* server/client components
* unnecessary `"use client"`
* duplicated code
* hardcoded styling
* hardcoded content
* data organization
* accessibility
* maintainability

If the previous audit says:

“zero hardcoded text in JSX”

verify it.

If false, report the files containing hardcoded text.

---

# 11. TEST SUITE VERIFICATION

The previous audit claims:

“24/24 unit tests passing.”

Find the test files.

Determine:

* What exactly is being tested?
* Are they meaningful tests?
* Are they testing UI behavior?
* Are they snapshot tests?
* Are they merely testing data/constants?
* Do they test responsive behavior?
* Do they test accessibility?
* Do they test actual rendered components?

Run the test suite if possible.

IMPORTANT:

Passing 24 tests does NOT automatically mean the website is high quality.

Explain what the tests actually prove.

---

# 12. PERFORMANCE

Run Lighthouse/PageSpeed or another real performance test if available.

Report actual:

* Performance
* Accessibility
* Best Practices
* SEO

Do NOT invent scores.

Check:

* image optimization
* JS bundle
* font loading
* layout shift
* largest contentful paint
* unused JS
* large assets

---

# 13. SECURITY / DEPLOYMENT

Inspect for:

* exposed API keys
* `.env` files
* secrets
* unsafe configuration
* broken production environment variables

Check whether production deployment actually works.

---

# 14. GITHUB

Open the actual GitHub repository.

Check:

* public/private
* README
* setup instructions
* repository cleanliness
* package-lock
* source files
* unnecessary files
* secrets
* commit history
* meaningful commit messages
* deployment configuration

Do not say “GitHub PASS” unless the public repository is actually accessible.

---

# 15. VIDEO

If the Loom URL exists, watch/review it.

If it does not exist:

mark the entire video requirement:

🔴 FAIL / NOT COMPLETED

A script is NOT a video.

Do not give communication points for a script when the assignment explicitly asks for a recorded walkthrough.

---

# 16. PREVIOUS AUDIT ERROR CHECK

Create a section called:

## Claims From Previous Audit That Were Wrong or Unsupported

For every questionable claim, say:

**Previous claim:**
“100% WCAG compliance”

**Reality:**
What was actually verified.

**Verdict:**
VERIFIED / PARTIAL / UNSUPPORTED / FALSE

Do this for every major exaggerated claim.

---

# 17. REALISTIC HIRING SCORE

Use the original assignment weighting:

UI cloning accuracy — 25%
Theme/design — 25%
Copywriting/images — 10%
New section — 10%
Communication/video — 30%

Do NOT give points for unfinished deliverables.

Calculate the score based ONLY on verified evidence.

Then provide:

Technical: X/100
Clone accuracy: X/100
Design: X/100
Content: X/100
Responsive: X/100
SEO: X/100
Accessibility: X/100
Video: X/100

Overall weighted assignment score: X/100

---

# 18. HIRING MANAGER DECISION

Imagine you are the actual Grow My Therapy hiring manager.

You have many internship applicants.

Answer:

### Would this candidate move to Stage 3?

Choose exactly one:

🟢 YES

🟡 MAYBE

🔴 NO

Then explain the decision honestly.

Do not say “YES” simply because the code is technically good.

Consider:

* design taste
* attention to detail
* following instructions
* communication
* ability to understand a client's requirements
* originality
* professionalism
* polish
* accuracy
* completeness

---

# 19. FINAL SUBMISSION CHECK

Give me a final checklist:

[ ] Clone verified
[ ] Redesign verified
[ ] Profile accuracy verified
[ ] Images verified
[ ] Our Office verified
[ ] Responsive verified
[ ] Accessibility verified
[ ] SEO verified
[ ] Build verified
[ ] GitHub verified
[ ] Deployment verified
[ ] Video verified

For every unchecked item, tell me exactly what I need to do.

## FINAL RULE

I would rather receive:

“Your website is only 78/100 and these 6 things are wrong”

than:

“Your website is 96/100”

if 96 is not supported by evidence.

Be skeptical.

Be specific.

Be evidence-driven.

Do not flatter me.

Do not infer testing that you did not perform.

Do not use words like “flawless,” “perfect,” “top 2%,” “automatic shortlist,” or “100% compliant” unless you have strong objective evidence for them.



plan 3 





Act as a **senior frontend engineer + UI/UX designer + strict internship assignment reviewer**.

I already have a mostly completed Grow My Therapy internship assignment. I do NOT want a complete redesign or rewrite.

Your job is to make **only high-value improvements that directly address verified weaknesses**.

## IMPORTANT RULES

1. Do NOT rebuild the project from scratch.
2. Do NOT change the overall page structure unnecessarily.
3. Do NOT add unnecessary libraries or features.
4. Do NOT invent therapist information.
5. Dr. Maya Reynolds' profile is the single source of truth for factual content.
6. Do NOT invent phone numbers, email addresses, credentials, experience, insurance information, pricing, or availability.
7. Do NOT claim something is tested unless you actually test it.
8. Preserve the existing good work.
9. Before modifying anything, inspect the existing code.
10. Make the smallest changes necessary to improve the score.
11. After modifications, run the relevant tests/build again.
12. If you cannot verify something, report it instead of pretending it passed.

## PROJECT

Project:
Grow My Therapy Front-End Developer Internship Assignment

Original website:
https://www.conejovalleycounseling.com/home

Dr. Maya Reynolds profile:
https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit?usp=sharing

---

# PRIORITY 1 — REMOVE UNSUPPORTED CONTACT INFORMATION

Inspect the website for:

* phone number
* email
* contact details

The previous audit found:

Phone:
(310) 555-0148

Email:
[hello@mayareynoldspsyd.com](mailto:hello@mayareynoldspsyd.com)

These are NOT present in the supplied profile.

Therefore:

* Do not present invented contact details as real.
* If the assignment requires a contact UI, preserve the UI but use clearly marked placeholder content only where appropriate.
* Prefer removing unsupported factual contact information rather than inventing replacements.
* Do not create a fake therapist email/domain.
* Do not invent a real phone number.

Tell me exactly what you changed.

---

# PRIORITY 2 — ADDRESS

The profile contains:

"123th Street 45 W, Santa Monica, CA 90401"

This appears to contain a possible street-formatting typo.

Do NOT silently invent a corrected address.

Use the profile's supplied address unless there is a strong reason not to.

If you display it, consider making the implementation easy to update later.

Do not replace "123th" with "123rd" unless the source profile itself is updated.

---

# PRIORITY 3 — RESPONSIVE VERIFICATION

Actually test the website at:

390px
430px
820px
1280px

Also retain the existing tests at:

320px
375px
768px
1024px
1440px
2560px

For each viewport check:

* horizontal overflow
* header/navigation
* hero
* typography
* buttons
* cards
* images
* section spacing
* FAQ
* footer
* unexpected wrapping
* clipping
* alignment

If you find a problem, fix it.

Do not make unnecessary CSS changes if everything already works.

Afterward report:

| Viewport | Tested | Overflow | Layout | Status |
| -------- | ------ | -------- | ------ | ------ |

---

# PRIORITY 4 — ORIGINAL TEMPLATE FIDELITY

Compare the current site with:

https://www.conejovalleycounseling.com/home

The assignment requires:

"clone the homepage, then redesign it with a new theme, copy, and images, while preserving the original layout."

Therefore:

DO NOT redesign the structure.

Preserve:

* section order
* container behavior
* major grid structures
* content hierarchy
* approximate spacing
* CTA positioning
* footer structure
* responsive behavior

The redesign should mainly change:

* content
* colors
* typography where appropriate
* images
* therapist identity

Do NOT add unnecessary layout changes simply because they look nicer.

---

# PRIORITY 5 — WHO I HELP SECTION

The previous audit identified this as the biggest visual mismatch.

Original:
photographic/card-based visual treatment.

Current:
gradient/icon panels.

Improve this section only if you can make it more visually faithful while still following the assignment's image requirements.

Do NOT use random stock images.

Do NOT invent therapist-specific imagery.

Possible solutions:

* use Maya's legitimate supplied images if appropriate
* create a visually polished image treatment around legitimate assets
* preserve the original card dimensions/proportions
* maintain the original grid structure

The goal is:

**higher clone fidelity + intentional redesign**

not simply "make it prettier."

---

# PRIORITY 6 — SERVICES

The original has four service cards.

The assignment specifically asks for:

"choose and describe three relevant services"

Therefore keep THREE services.

Do not add a fourth just to match the original.

Instead, preserve the original card sizing, spacing, visual rhythm and grid behavior as closely as possible while using three profile-supported services.

Use only services supported by Maya's profile.

---

# PRIORITY 7 — FOOTER

The original has a larger staff-oriented footer.

Maya is a solo therapist.

Do NOT invent a team.

Keep the solo-practitioner footer appropriate to Maya while preserving the visual structure and spacing of the original as much as practical.

---

# PRIORITY 8 — ACCESSIBILITY

Run an actual automated accessibility test if the project supports it.

Prefer axe or another real accessibility scanner.

Check:

* contrast
* missing alt text
* buttons
* links
* headings
* landmarks
* form controls
* keyboard navigation
* focus states

Fix actual violations.

Do NOT claim:

"100% WCAG compliant"

unless you have actually performed a comprehensive WCAG audit.

Instead report exactly what was tested.

---

# PRIORITY 9 — SEO

Inspect the current implementation.

Verify:

* title
* meta description
* H1
* H2/H3 hierarchy
* canonical
* robots
* sitemap
* Open Graph
* Twitter metadata
* structured data
* image alt text
* natural Santa Monica/local SEO wording

Do not keyword-stuff.

Do not invent SEO claims.

Make only improvements that are actually useful.

---

# PRIORITY 10 — CODE QUALITY

Inspect the existing architecture.

Do NOT refactor everything.

Only fix genuine problems such as:

* duplicated logic
* unnecessary client components
* obvious accessibility issues
* broken types
* unnecessary dependencies
* bad naming
* dead code
* obvious duplicated markup

Do NOT waste time moving every static label from JSX into a content file.

That is not a priority for this assignment.

---

# PRIORITY 11 — IMAGE PERFORMANCE

Inspect:

* image dimensions
* alt text
* Next.js Image usage
* `sizes`
* loading behavior
* unnecessarily large source assets

Optimize only where there is a real benefit.

Do not reduce image quality unnecessarily.

---

# PRIORITY 12 — TESTING

After making changes, run:

npm run build

and the project's test suite.

If available, run:

npm test

or:

npx vitest run

and the responsive/browser tests.

Report the ACTUAL results.

Do not claim tests passed if they weren't executed.

---

# FINAL REPORT

After making the changes, provide:

## Changes Made

List every actual modification.

## Tests Run

List every command actually executed and its result.

## Remaining Risks

List anything that is still not verified.

## Before vs After

Give a concise assessment:

* Clone fidelity
* Design
* Responsive
* Content accuracy
* Accessibility
* SEO
* Code quality

## Submission Readiness

Choose exactly one:

🔴 NOT READY

🟡 NEEDS MINOR FIXES

🟢 READY TO SUBMIT

Do not use exaggerated language such as:

"perfect"
"flawless"
"top 2%"
"automatic shortlist"

unless objectively justified.

## MOST IMPORTANT

Preserve the existing work.

The goal is NOT to make the project bigger.

The goal is to make the existing submission:

**more accurate, more compliant with the assignment, more polished, and safer to submit.**
