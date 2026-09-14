const { chromium } = require('playwright');
const { AxeBuilder } = require('@axe-core/playwright');

async function runAxe() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  await browser.close();

  console.log('--- AXE-CORE ACCESSIBILITY AUDIT REPORT ---');
  console.log(`Violations count: ${results.violations.length}`);
  console.log(`Passes count: ${results.passes.length}`);
  console.log(`Incomplete/Review count: ${results.incomplete.length}`);
  console.log(`Inapplicable count: ${results.inapplicable.length}`);

  if (results.violations.length > 0) {
    console.log('\nVIOLATIONS DETAILS:');
    results.violations.forEach((v, idx) => {
      console.log(`\n${idx + 1}. [${v.impact.toUpperCase()}] ${v.id}: ${v.help}`);
      console.log(`   Description: ${v.description}`);
      console.log(`   Help URL: ${v.helpUrl}`);
      console.log(`   Nodes affected: ${v.nodes.length}`);
      v.nodes.forEach((n) => {
        console.log(`     - Target: ${n.target.join(' ')}`);
        console.log(`       Failure summary: ${n.failureSummary}`);
      });
    });
  } else {
    console.log('\nCONGRATULATIONS: Zero WCAG 2.0 / 2.1 AA violations detected by axe-core!');
  }
}

runAxe().catch((err) => {
  console.error('Axe audit failed:', err);
  process.exit(1);
});
