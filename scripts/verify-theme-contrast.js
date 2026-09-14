// Script to calculate exact WCAG 2.1 contrast ratios for the Dr. Maya Reynolds design system
function hexToRgb(hex) {
  const cleanHex = hex.replace("#", "");
  const bigint = parseInt(cleanHex, 16);
  return [
    (bigint >> 16) & 255,
    (bigint >> 8) & 255,
    bigint & 255,
  ];
}

function getLuminance([r, g, b]) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(hex1, hex2) {
  const lum1 = getLuminance(hexToRgb(hex1));
  const lum2 = getLuminance(hexToRgb(hex2));
  const brighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (brighter + 0.05) / (darker + 0.05);
}

const palette = {
  bg: "#f7f3ec",
  surface: "#ffffff",
  primary: "#4a684d",
  primaryDark: "#3a4738",
  accent: "#a25034",
  muted: "#635c51",
  border: "#e4ded2",
  tealBand: "#5a8a8a",
  white: "#ffffff",
};

const checks = [
  { text: "primaryDark", fg: palette.primaryDark, bgName: "bg (#f7f3ec)", bg: palette.bg, usage: "Headings, body copy, header nav" },
  { text: "muted", fg: palette.muted, bgName: "bg (#f7f3ec)", bg: palette.bg, usage: "Subheadings, supporting body text, address" },
  { text: "primary", fg: palette.primary, bgName: "bg (#f7f3ec)", bg: palette.bg, usage: "Section kickers, tags, open borders" },
  { text: "accent", fg: palette.accent, bgName: "bg (#f7f3ec)", bg: palette.bg, usage: "Script kicker text, warm highlights" },
  { text: "white", fg: palette.white, bgName: "accent (#a25034)", bg: palette.accent, usage: "Primary CTA button labels" },
  { text: "white", fg: palette.white, bgName: "primary (#4a684d)", bg: palette.primary, usage: "Secondary CTA button labels" },
  { text: "white", fg: palette.white, bgName: "primaryDark (#3a4738)", bg: palette.primaryDark, usage: "CtaBand headline & body text" },
  { text: "primaryDark", fg: palette.primaryDark, bgName: "surface (#ffffff)", bg: palette.surface, usage: "Card titles on white cards" },
  { text: "muted", fg: palette.muted, bgName: "surface (#ffffff)", bg: palette.surface, usage: "Card descriptions on white cards" },
  { text: "accent", fg: palette.accent, bgName: "surface (#ffffff)", bg: palette.surface, usage: "Card links & script on white" },
  { text: "white", fg: palette.white, bgName: "tealBand (#5a8a8a)", bg: palette.tealBand, usage: "Footer teal accent strip text" },
];

console.log("=== WCAG 2.1 CONTRAST RATIO AUDIT ===");
checks.forEach((c) => {
  const ratio = getContrastRatio(c.fg, c.bg);
  const aaNormal = ratio >= 4.5;
  const aaLarge = ratio >= 3.0;
  const aaaNormal = ratio >= 7.0;
  const status = aaaNormal ? "PASS AAA" : aaNormal ? "PASS AA" : aaLarge ? "PASS AA (Large only)" : "FAIL";
  console.log(
    `[${status}] ${c.text} (${c.fg}) on ${c.bgName}: ${ratio.toFixed(2)}:1 -> ${c.usage}`
  );
});
