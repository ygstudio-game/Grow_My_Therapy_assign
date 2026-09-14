const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const VIEWPORT_TESTS = [
  { name: 'ultrasmall-320', width: 320, height: 640 },
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-430', width: 430, height: 932 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'tablet-820', width: 820, height: 1180 },
  { name: 'laptop-1024', width: 1024, height: 800 },
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'ultrawide-2560', width: 2560, height: 1440 }
];

async function audit() {
  const browser = await chromium.launch();
  const report = {
    timestamp: new Date().toISOString(),
    viewports: {},
    images: [],
    interactiveTargets: [],
    animations: {}
  };

  const statesDir = path.join(__dirname, '../qa-audit/states/responsive-pass');
  if (!fs.existsSync(statesDir)) {
    fs.mkdirSync(statesDir, { recursive: true });
  }

  for (const vp of VIEWPORT_TESTS) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    // Check horizontal scroll
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const innerWidth = vp.width;
    const hasHScroll = scrollWidth > innerWidth;

    // Check overflowing elements
    const overflowingElements = await page.evaluate(() => {
      const overflow = [];
      const winW = window.innerWidth;
      const all = document.querySelectorAll('*');
      for (const el of all) {
        const rect = el.getBoundingClientRect();
        if (rect.right > winW + 1 || rect.left < -1) {
          overflow.push({
            tag: el.tagName,
            id: el.id,
            className: el.className ? el.className.toString().slice(0, 80) : '',
            rect: { left: rect.left, right: rect.right, width: rect.width }
          });
        }
      }
      return overflow.slice(0, 10);
    });

    // Capture full-page screenshot
    await page.screenshot({
      path: path.join(statesDir, `${vp.name}.png`),
      fullPage: true
    });

    report.viewports[vp.name] = {
      width: vp.width,
      height: vp.height,
      scrollWidth,
      clientWidth,
      hasHScroll,
      overflowingCount: overflowingElements.length,
      overflowingElements
    };

    // If mobile viewport (320 or 375), test mobile menu interaction
    if (vp.width <= 375) {
      const menuBtn = await page.$('button[aria-label="Open menu"]');
      if (menuBtn) {
        await menuBtn.click();
        await page.waitForTimeout(250); // wait for slide-down animation
        const menuOpenScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        const menuBox = await menuBtn.boundingBox();
        await page.screenshot({ path: path.join(statesDir, `${vp.name}-menu-open.png`) });
        
        report.animations[`menu-${vp.name}`] = {
          buttonBox: menuBox,
          hasHScrollAfterOpen: menuOpenScrollWidth > vp.width
        };

        // Close menu
        const closeBtn = await page.$('button[aria-label="Close menu"]');
        if (closeBtn) {
          await closeBtn.click();
          await page.waitForTimeout(200);
        }
      }
    }

    // Test FAQ expansion at 320 and 2560
    if (vp.width === 320 || vp.width === 2560) {
      const firstFaqSummary = await page.$('details summary');
      if (firstFaqSummary) {
        await firstFaqSummary.click();
        await page.waitForTimeout(320); // wait for grid-rows animation
        const faqBox = await firstFaqSummary.boundingBox();
        const faqScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        await page.screenshot({ path: path.join(statesDir, `${vp.name}-faq-open.png`) });
        
        report.animations[`faq-${vp.name}`] = {
          summaryBox: faqBox,
          hasHScrollAfterExpand: faqScrollWidth > vp.width
        };
      }
    }

    // Collect image data on first iteration
    if (vp.name === 'desktop-1440') {
      const imgs = await page.$$eval('img', (elements) => {
        return elements.map(img => ({
          src: img.currentSrc || img.src,
          alt: img.alt,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
          displayedWidth: img.clientWidth,
          displayedHeight: img.clientHeight,
          sizes: img.getAttribute('sizes'),
          loading: img.getAttribute('loading')
        }));
      });
      report.images = imgs;

      // Check tap targets (min 44x44 on interactive elements)
      const targets = await page.$$eval('a, button', (elements) => {
        return elements.map(el => {
          const rect = el.getBoundingClientRect();
          return {
            tag: el.tagName,
            text: (el.innerText || el.getAttribute('aria-label') || '').trim().slice(0, 30),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            href: el.getAttribute('href')
          };
        }).filter(t => t.width > 0 && t.height > 0);
      });
      report.interactiveTargets = targets;
    }

    await page.close();
  }

  await browser.close();

  fs.writeFileSync(
    path.join(__dirname, '../qa-audit/responsive-craft-audit.json'),
    JSON.stringify(report, null, 2)
  );

  console.log('Responsive audit completed successfully!');
  console.log(JSON.stringify(report.viewports, null, 2));
}

audit().catch(console.error);
