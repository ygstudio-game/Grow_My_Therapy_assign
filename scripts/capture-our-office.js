const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const ARTIFACTS_DIR = 'C:\\Users\\Lokesh Sunil Borole\\.gemini\\antigravity-ide\\brain\\c1b4f3b3-8f3d-45d9-9d0a-786d96f759cb';

async function capture() {
  const browser = await chromium.launch({ headless: true });
  const viewports = [
    { name: 'our-office-desktop-1440', width: 1440, height: 900 },
    { name: 'our-office-tablet-768', width: 768, height: 1024 },
    { name: 'our-office-mobile-375', width: 375, height: 812 },
  ];

  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    
    const section = page.locator('#our-office');
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const outPath = path.join(ARTIFACTS_DIR, `${vp.name}.png`);
    await section.screenshot({ path: outPath });
    console.log(`Saved screenshot to ${outPath}`);
    await context.close();
  }

  await browser.close();
}

capture().catch(console.error);
