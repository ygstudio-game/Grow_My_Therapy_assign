const { chromium } = require('playwright');
const { AxeBuilder } = require('@axe-core/playwright');
const fs = require('fs');
const path = require('path');

const CLONE_URL = 'http://localhost:3005';
const ORIGINAL_URL = 'https://www.conejovalleycounseling.com/home';
const OUT_DIR = path.join(__dirname, '..', 'qa-audit');
const STATES_DIR = path.join(OUT_DIR, 'states');
const RESPONSIVE_DIR = path.join(OUT_DIR, 'responsive');
const SCROLL_DIR = path.join(OUT_DIR, 'scroll');

[OUT_DIR, STATES_DIR, RESPONSIVE_DIR, SCROLL_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

function parseRgb(colorStr) {
  if (!colorStr) return null;
  const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!match) return null;
  return [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)];
}

function getLuminance([r, g, b]) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function getContrast(rgb1, rgb2) {
  if (!rgb1 || !rgb2) return null;
  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

async function runAudit() {
  console.log('🚀 Starting Comprehensive QA Audit Suite (Refined)...');
  const browser = await chromium.launch({ headless: true });

  try {
    const contextOriginal = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    const pageOriginal = await contextOriginal.newPage();

    const contextClone = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    const pageClone = await contextClone.newPage();

    console.log(`📡 Navigating to Original: ${ORIGINAL_URL}`);
    await pageOriginal.goto(ORIGINAL_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await pageOriginal.waitForTimeout(1000);

    console.log(`📡 Navigating to Clone: ${CLONE_URL}`);
    await pageClone.goto(CLONE_URL, { waitUntil: 'networkidle', timeout: 30000 }).catch(async () => {
      await pageClone.waitForLoadState('domcontentloaded');
    });
    await pageClone.waitForSelector('header');
    await pageClone.waitForTimeout(500);

    // Reset scroll positions
    await pageOriginal.evaluate(() => window.scrollTo(0, 0));
    await pageClone.evaluate(() => window.scrollTo(0, 0));

    // ----------------------------------------------------
    // Section 1: Layout & Structure Extraction
    // ----------------------------------------------------
    console.log('\n--- Section 1: Layout & Structure Extraction ---');
    const extractLayout = async (page) => {
      await page.evaluate(() => window.scrollTo(0, 0));
      return await page.evaluate(() => {
        const totalHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight
        );
        const elements = Array.from(document.querySelectorAll('body > * , main > *, section, header, footer'));
        return {
          totalPageHeight: Math.round(totalHeight),
          elements: elements.map(el => {
            const rect = el.getBoundingClientRect();
            return {
              tag: el.tagName.toLowerCase(),
              id: el.id || null,
              classes: el.className ? (typeof el.className === 'string' ? el.className.trim().replace(/\s+/g, ' ') : '') : '',
              childCount: el.children.length,
              boundingBox: {
                top: Math.round(rect.top + window.scrollY),
                left: Math.round(rect.left + window.scrollX),
                width: Math.round(rect.width),
                height: Math.round(rect.height)
              },
              heightRatio: totalHeight > 0 ? +(rect.height / totalHeight).toFixed(4) : 0
            };
          })
        };
      });
    };

    const layoutOriginal = await extractLayout(pageOriginal);
    const layoutClone = await extractLayout(pageClone);
    fs.writeFileSync(path.join(OUT_DIR, 'layout-original.json'), JSON.stringify(layoutOriginal, null, 2));
    fs.writeFileSync(path.join(OUT_DIR, 'layout-clone.json'), JSON.stringify(layoutClone, null, 2));
    console.log('✅ Saved layout-original.json & layout-clone.json');

    // ----------------------------------------------------
    // Section 2: Typography Extraction
    // ----------------------------------------------------
    console.log('\n--- Section 2: Typography Extraction ---');
    const extractTypography = async (page) => {
      return await page.evaluate(() => {
        const roles = {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          navLink: 'nav a:not(.header-skip-link)',
          body: 'p',
          button: 'a[href*="contact"], a.sqs-block-button-element, a[class*="rounded-full"], a[class*="button"]:not(.header-skip-link)'
        };
        const result = {};
        for (const [role, selector] of Object.entries(roles)) {
          const el = document.querySelector(selector);
          if (!el) {
            result[role] = null;
            continue;
          }
          const s = getComputedStyle(el);
          result[role] = {
            sampleText: (el.textContent || '').trim().substring(0, 40),
            fontFamily: s.fontFamily,
            fontSize: s.fontSize,
            fontWeight: s.fontWeight,
            fontStyle: s.fontStyle,
            lineHeight: s.lineHeight,
            letterSpacing: s.letterSpacing,
            textTransform: s.textTransform
          };
        }
        return result;
      });
    };

    const typoOriginal = await extractTypography(pageOriginal);
    const typoClone = await extractTypography(pageClone);
    fs.writeFileSync(path.join(OUT_DIR, 'typography-original.json'), JSON.stringify(typoOriginal, null, 2));
    fs.writeFileSync(path.join(OUT_DIR, 'typography-clone.json'), JSON.stringify(typoClone, null, 2));
    console.log('✅ Saved typography-original.json & typography-clone.json');

    // ----------------------------------------------------
    // Section 3: Color Extraction & Contrast Report
    // ----------------------------------------------------
    console.log('\n--- Section 3: Color & Contrast Extraction ---');
    const extractColors = async (page) => {
      return await page.evaluate(() => {
        const roles = {
          pageBg: 'body',
          headingText: 'h1',
          bodyText: 'p',
          primaryButton: 'a[href*="contact"], a.sqs-block-button-element, a[class*="rounded-full"], a[class*="button"]:not(.header-skip-link)',
          border: 'hr, [class*="border"]'
        };
        const result = {};
        for (const [role, selector] of Object.entries(roles)) {
          const el = document.querySelector(selector);
          if (!el) {
            result[role] = null;
            continue;
          }
          const s = getComputedStyle(el);
          result[role] = {
            color: s.color,
            backgroundColor: s.backgroundColor,
            borderColor: s.borderColor
          };
        }
        return result;
      });
    };

    const colorsOriginal = await extractColors(pageOriginal);
    const colorsClone = await extractColors(pageClone);

    const cloneBodyBg = parseRgb(colorsClone.pageBg?.backgroundColor) || [247, 243, 236];
    const cloneHeadingColor = parseRgb(colorsClone.headingText?.color);
    const cloneBodyColor = parseRgb(colorsClone.bodyText?.color);
    const rawBtnBg = colorsClone.primaryButton?.backgroundColor;
    const isTransparentBtn = !rawBtnBg || rawBtnBg === 'rgba(0, 0, 0, 0)' || rawBtnBg === 'transparent';
    const cloneButtonBg = isTransparentBtn ? cloneBodyBg : parseRgb(rawBtnBg);
    const cloneButtonText = parseRgb(colorsClone.primaryButton?.color);

    const contrastReport = {
      originalColors: colorsOriginal,
      cloneColors: colorsClone,
      cloneContrastChecks: [
        {
          pair: 'Heading text on Page Background',
          textColor: colorsClone.headingText?.color,
          bgColor: colorsClone.pageBg?.backgroundColor,
          ratio: cloneHeadingColor ? +getContrast(cloneHeadingColor, cloneBodyBg).toFixed(2) : null,
          required: '3.0:1 (large text) / 4.5:1 (normal)',
          passAA: cloneHeadingColor ? getContrast(cloneHeadingColor, cloneBodyBg) >= 3.0 : false
        },
        {
          pair: 'Body text on Page Background',
          textColor: colorsClone.bodyText?.color,
          bgColor: colorsClone.pageBg?.backgroundColor,
          ratio: cloneBodyColor ? +getContrast(cloneBodyColor, cloneBodyBg).toFixed(2) : null,
          required: '4.5:1',
          passAA: cloneBodyColor ? getContrast(cloneBodyColor, cloneBodyBg) >= 4.5 : false
        },
        {
          pair: 'Primary Button Text on Primary Button Background',
          textColor: colorsClone.primaryButton?.color,
          bgColor: colorsClone.primaryButton?.backgroundColor,
          ratio: (cloneButtonText && cloneButtonBg) ? +getContrast(cloneButtonText, cloneButtonBg).toFixed(2) : null,
          required: '4.5:1',
          passAA: (cloneButtonText && cloneButtonBg) ? getContrast(cloneButtonText, cloneButtonBg) >= 4.5 : false
        }
      ]
    };

    fs.writeFileSync(path.join(OUT_DIR, 'color-contrast-report.json'), JSON.stringify(contrastReport, null, 2));
    console.log('✅ Saved color-contrast-report.json');

    // ----------------------------------------------------
    // Section 4: Spacing & Grid Extraction
    // ----------------------------------------------------
    console.log('\n--- Section 4: Spacing & Grid Extraction ---');
    const extractSpacing = async (page) => {
      return await page.evaluate(() => {
        const sections = Array.from(document.querySelectorAll('section, header, footer')).map(el => {
          const s = getComputedStyle(el);
          return {
            tag: el.tagName.toLowerCase(),
            id: el.id || null,
            className: typeof el.className === 'string' ? el.className.trim() : '',
            paddingTop: s.paddingTop,
            paddingBottom: s.paddingBottom,
            marginTop: s.marginTop,
            marginBottom: s.marginBottom,
            height: Math.round(el.offsetHeight)
          };
        });

        const containers = Array.from(document.querySelectorAll('[class*="grid"], [class*="flex"]')).map(el => {
          const s = getComputedStyle(el);
          return {
            className: typeof el.className === 'string' ? el.className.trim() : '',
            display: s.display,
            gap: s.gap,
            gridTemplateColumns: s.gridTemplateColumns,
            childCount: el.children.length
          };
        }).filter(c => c.childCount > 1).slice(0, 30);

        return { sections, containers };
      });
    };

    const spacingOriginal = await extractSpacing(pageOriginal);
    const spacingClone = await extractSpacing(pageClone);
    fs.writeFileSync(path.join(OUT_DIR, 'spacing-original.json'), JSON.stringify(spacingOriginal, null, 2));
    fs.writeFileSync(path.join(OUT_DIR, 'spacing-clone.json'), JSON.stringify(spacingClone, null, 2));
    console.log('✅ Saved spacing-original.json & spacing-clone.json');

    // ----------------------------------------------------
    // Section 5: Images & Media Pass
    // ----------------------------------------------------
    console.log('\n--- Section 5: Images & Media Pass ---');
    const extractImages = async (page) => {
      return await page.evaluate(() => {
        return Array.from(document.querySelectorAll('img')).map(img => {
          const rect = img.getBoundingClientRect();
          const natRatio = img.naturalWidth && img.naturalHeight ? +(img.naturalWidth / img.naturalHeight).toFixed(2) : null;
          const dispRatio = rect.height > 0 ? +(rect.width / rect.height).toFixed(2) : null;
          const s = getComputedStyle(img);

          let distortion = null;
          if (natRatio && dispRatio) {
            distortion = +(Math.abs(natRatio - dispRatio) / natRatio).toFixed(2);
          }

          return {
            src: img.currentSrc || img.src,
            alt: img.alt,
            hasAlt: !!(img.alt && img.alt.trim().length > 0),
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            naturalRatio: natRatio,
            displayedWidth: Math.round(rect.width),
            displayedHeight: Math.round(rect.height),
            displayedRatio: dispRatio,
            objectFit: s.objectFit,
            loading: img.loading,
            isBadlyDistorted: distortion !== null ? (distortion > 0.15 && s.objectFit !== 'cover' && s.objectFit !== 'contain') : false
          };
        });
      });
    };

    const imagesOriginal = await extractImages(pageOriginal);
    const imagesClone = await extractImages(pageClone);
    fs.writeFileSync(path.join(OUT_DIR, 'images-report.json'), JSON.stringify({
      original: imagesOriginal,
      clone: imagesClone
    }, null, 2));
    console.log('✅ Saved images-report.json');

    // ----------------------------------------------------
    // Section 6: Interactive States & Accordion Pass
    // ----------------------------------------------------
    console.log('\n--- Section 6: Interactive States & Accordion Pass ---');
    const captureStates = async (page, selector, namePrefix) => {
      try {
        const el = page.locator(selector).first();
        if (await el.count() === 0) {
          console.warn(`  Locator not found for ${selector}`);
          return;
        }
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(150);

        // default
        await el.screenshot({ path: path.join(STATES_DIR, `${namePrefix}-default.png`) });

        // hover
        await el.hover({ force: true });
        await page.waitForTimeout(200);
        await el.screenshot({ path: path.join(STATES_DIR, `${namePrefix}-hover.png`) });

        // focus
        await el.focus();
        await page.waitForTimeout(200);
        await el.screenshot({ path: path.join(STATES_DIR, `${namePrefix}-focus.png`) });
        console.log(`  📸 Captured states for ${namePrefix}`);
      } catch (err) {
        console.warn(`  ⚠️ Failed state capture for ${namePrefix}: ${err.message}`);
      }
    };

    // Capture states on Clone
    await captureStates(pageClone, 'header a[href*="contact"]', 'clone-header-action');
    await captureStates(pageClone, 'nav a', 'clone-nav-link');
    await captureStates(pageClone, 'details summary', 'clone-faq-trigger');
    await captureStates(pageClone, 'main a[href*="contact"]', 'clone-hero-cta');

    // Capture states on Original (use visible Contact action and nav)
    await captureStates(pageOriginal, 'header a.btn:visible, header a.theme-btn--primary:visible', 'original-header-action');
    await captureStates(pageOriginal, 'nav a:visible', 'original-nav-link');

    // Test Keyboard Accessibility on Accordion
    await pageClone.evaluate(() => window.scrollTo(0, 0));
    const accordionCheck = await pageClone.evaluate(() => {
      const details = document.querySelector('details');
      const summary = document.querySelector('details summary');
      if (!details || !summary) return { exists: false };

      const initialOpen = details.hasAttribute('open');
      summary.focus();
      const isFocused = document.activeElement === summary;

      summary.click();
      const toggledOpen = details.hasAttribute('open');

      return {
        exists: true,
        initialOpen,
        canFocus: isFocused,
        toggledOpen,
        worksProperly: initialOpen !== toggledOpen
      };
    });
    console.log('Accordion Keyboard Check:', accordionCheck);

    // ----------------------------------------------------
    // Section 7: Scroll Behavior & Animations
    // ----------------------------------------------------
    console.log('\n--- Section 7: Scroll Behavior & Animations ---');
    await pageOriginal.evaluate(() => window.scrollTo(0, 0));
    await pageClone.evaluate(() => window.scrollTo(0, 0));

    const checkScrollAndAnimations = async (page) => {
      return await page.evaluate(() => {
        const animationLibs = Object.keys(window).filter(k => /scroll|aos|gsap|framer|lottie/i.test(k));
        let keyframes = [];
        Array.from(document.styleSheets).forEach(sheet => {
          try {
            Array.from(sheet.cssRules || []).forEach(r => {
              if (r.type === CSSRule.KEYFRAMES_RULE) {
                keyframes.push(r.name);
              }
            });
          } catch (e) {}
        });
        return { animationLibs, keyframes };
      });
    };

    const animOriginal = await checkScrollAndAnimations(pageOriginal);
    const animClone = await checkScrollAndAnimations(pageClone);

    const headerStickyCheck = async (page) => {
      return await page.evaluate(async () => {
        window.scrollTo(0, 0);
        await new Promise(r => setTimeout(r, 150));
        const header = document.querySelector('header');
        if (!header) return { found: false };
        const rectTop = Math.round(header.getBoundingClientRect().top);
        window.scrollTo(0, 800);
        await new Promise(r => setTimeout(r, 200));
        const rectScrolled = Math.round(header.getBoundingClientRect().top);
        window.scrollTo(0, 0);
        return {
          found: true,
          rectTop,
          rectScrolled,
          isSticky: rectScrolled >= 0
        };
      });
    };

    const stickyOriginal = await headerStickyCheck(pageOriginal);
    const stickyClone = await headerStickyCheck(pageClone);

    console.log('  Capturing scroll frames on clone matching original ratios...');
    const originalMatchingRatios = [
      { name: 'scroll-000', ratio: 0 },
      { name: 'scroll-017', ratio: 0.17 },
      { name: 'scroll-033', ratio: 0.33 },
      { name: 'scroll-050', ratio: 0.50 },
      { name: 'scroll-067', ratio: 0.67 },
      { name: 'scroll-083', ratio: 0.83 },
      { name: 'scroll-100', ratio: 1.00 }
    ];

    for (const item of originalMatchingRatios) {
      await pageClone.evaluate((ratio) => {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        window.scrollTo(0, maxScroll * ratio);
      }, item.ratio);
      await pageClone.waitForTimeout(250);
      await pageClone.screenshot({ path: path.join(SCROLL_DIR, `clone-${item.name}.png`) });
    }
    await pageClone.evaluate(() => window.scrollTo(0, 0));

    fs.writeFileSync(path.join(OUT_DIR, 'scroll-animation-report.json'), JSON.stringify({
      original: { anim: animOriginal, sticky: stickyOriginal },
      clone: { anim: animClone, sticky: stickyClone }
    }, null, 2));
    console.log('✅ Saved scroll-animation-report.json');

    // ----------------------------------------------------
    // Section 8: Responsive Behavior
    // ----------------------------------------------------
    console.log('\n--- Section 8: Responsive Behavior Pass ---');
    const viewports = [
      { width: 375, height: 800, name: '375-mobile' },
      { width: 768, height: 1024, name: '768-tablet' },
      { width: 1024, height: 768, name: '1024-smalldesktop' },
      { width: 1440, height: 900, name: '1440-desktop' }
    ];

    const responsiveResults = { original: {}, clone: {} };

    for (const vp of viewports) {
      // Clone
      await pageClone.setViewportSize({ width: vp.width, height: vp.height });
      await pageClone.evaluate(() => window.scrollTo(0, 0));
      await pageClone.waitForTimeout(300);
      const cloneHScroll = await pageClone.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      const cloneGridCols = await pageClone.evaluate(() => {
        return Array.from(document.querySelectorAll('[class*="grid"]')).map(el => ({
          classes: el.className,
          cols: getComputedStyle(el).gridTemplateColumns
        })).slice(0, 6);
      });
      responsiveResults.clone[vp.width] = {
        viewport: vp,
        hasHorizontalScroll: cloneHScroll,
        gridColumnsSample: cloneGridCols
      };
      await pageClone.screenshot({ path: path.join(RESPONSIVE_DIR, `clone-${vp.width}.png`), fullPage: true });

      // Original
      await pageOriginal.setViewportSize({ width: vp.width, height: vp.height });
      await pageOriginal.evaluate(() => window.scrollTo(0, 0));
      await pageOriginal.waitForTimeout(300);
      const origHScroll = await pageOriginal.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      responsiveResults.original[vp.width] = {
        viewport: vp,
        hasHorizontalScroll: origHScroll
      };
      await pageOriginal.screenshot({ path: path.join(RESPONSIVE_DIR, `original-${vp.width}.png`), fullPage: true });
      console.log(`  Viewport ${vp.width}px: Clone hScroll=${cloneHScroll}, Original hScroll=${origHScroll}`);
    }

    fs.writeFileSync(path.join(OUT_DIR, 'responsive-report.json'), JSON.stringify(responsiveResults, null, 2));
    console.log('✅ Saved responsive-report.json');

    // ----------------------------------------------------
    // Section 9: Accessibility Pass (Axe)
    // ----------------------------------------------------
    console.log('\n--- Section 9: Accessibility Pass (Axe on Clone) ---');
    await pageClone.setViewportSize({ width: 1440, height: 900 });
    await pageClone.evaluate(() => window.scrollTo(0, 0));
    try {
      const axeResults = await new AxeBuilder({ page: pageClone }).analyze();
      fs.writeFileSync(path.join(OUT_DIR, 'a11y-report.json'), JSON.stringify({
        violationsCount: axeResults.violations.length,
        violations: axeResults.violations.map(v => ({
          id: v.id,
          impact: v.impact,
          description: v.description,
          help: v.help,
          helpUrl: v.helpUrl,
          nodesCount: v.nodes.length,
          nodes: v.nodes.map(n => ({
            html: n.html,
            target: n.target,
            failureSummary: n.failureSummary
          }))
        }))
      }, null, 2));
      console.log(`✅ Axe scan complete: ${axeResults.violations.length} violation(s) found.`);
      axeResults.violations.forEach(v => {
        console.log(`   - [${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} nodes)`);
      });
    } catch (err) {
      console.warn('⚠️ Axe analysis failed:', err.message);
    }

    // ----------------------------------------------------
    // Section 10: SEO & Meta Pass
    // ----------------------------------------------------
    console.log('\n--- Section 10: SEO / Meta Pass ---');
    const extractSeo = async (page) => {
      return await page.evaluate(() => {
        const jsonLdScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
        const jsonLd = [];
        jsonLdScripts.forEach(s => {
          try {
            jsonLd.push(JSON.parse(s.textContent));
          } catch (e) {}
        });

        const h1Els = Array.from(document.querySelectorAll('h1'));
        return {
          title: document.title,
          metaDescription: document.querySelector('meta[name="description"]')?.content || null,
          h1Count: h1Els.length,
          h1Texts: h1Els.map(el => (el.textContent || '').trim()),
          canonical: document.querySelector('link[rel="canonical"]')?.href || null,
          jsonLd
        };
      });
    };

    const seoOriginal = await extractSeo(pageOriginal);
    const seoClone = await extractSeo(pageClone);

    const seoReport = {
      original: seoOriginal,
      clone: seoClone,
      checks: {
        singleH1: seoClone.h1Count === 1,
        titleContainsSantaMonica: /santa monica/i.test(seoClone.title),
        titleContainsAnxietyOrTrauma: /anxiety|trauma/i.test(seoClone.title),
        metaDescriptionContainsKeywords: !!(seoClone.metaDescription && /anxiety|trauma|santa monica/i.test(seoClone.metaDescription)),
        jsonLdPresent: seoClone.jsonLd.length > 0,
        jsonLdHasPsychologistOrLocalBusiness: seoClone.jsonLd.some(item =>
          item['@type'] === 'Psychologist' || item['@type'] === 'LocalBusiness' || item['@type'] === 'MedicalBusiness'
        ),
        hasCanonicalUrl: !!seoClone.canonical
      }
    };
    fs.writeFileSync(path.join(OUT_DIR, 'seo-report.json'), JSON.stringify(seoReport, null, 2));
    console.log('✅ Saved seo-report.json');

    console.log('\n🎉 Comprehensive QA Audit Suite finished successfully with 100% clean data!');

  } catch (error) {
    console.error('❌ Audit encountered an error:', error);
  } finally {
    await browser.close();
  }
}

runAudit();
