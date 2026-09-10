import { describe, it, expect } from "vitest";
import {
  siteConfig,
  navLinks,
  hero,
  trustBuilding,
  whoIHelp,
  quote,
  expertiseKeywords,
  about,
  services,
  ourOffice,
  faqs,
  ctaBand,
  footerNav,
} from "./content";

describe("content", () => {
  it("has correct site config", () => {
    expect(siteConfig.name).toBe("Dr. Maya Reynolds, PsyD");
    expect(siteConfig.phone).toBe("(310) 555-0148");
    expect(siteConfig.email).toBe("hello@mayareynoldspsyd.com");
    expect(siteConfig.address).toBe("123th Street 45 W, Santa Monica, CA 90401");
  });

  it("has 6 nav links and 6 footer nav links", () => {
    expect(navLinks).toHaveLength(6);
    expect(footerNav).toHaveLength(6);
  });

  it("hero H1 includes the primary SEO keyword and location", () => {
    expect(hero.h1).toContain("Anxiety");
    expect(hero.h1).toContain("Santa Monica");
  });

  it("trust building has headline and 2 body paragraphs", () => {
    expect(trustBuilding.headline.length).toBeGreaterThan(0);
    expect(trustBuilding.body).toHaveLength(2);
  });

  it("has exactly 3 who-I-help cards", () => {
    expect(whoIHelp).toHaveLength(3);
    expect(whoIHelp[0].title).toBe("High-Achieving Professionals");
  });

  it("has a quote with attribution", () => {
    expect(quote.text.length).toBeGreaterThan(0);
    expect(quote.author).toBe("Dr. Maya Reynolds, PsyD");
  });

  it("has at least 8 expertise keywords", () => {
    expect(expertiseKeywords.length).toBeGreaterThanOrEqual(8);
  });

  it("about section has 4 body paragraphs", () => {
    expect(about.body).toHaveLength(4);
  });

  it("has exactly 3 services", () => {
    expect(services).toHaveLength(3);
    expect(services.map((s) => s.title)).toEqual([
      "Anxiety & Panic Treatment",
      "Trauma Therapy & EMDR",
      "Burnout & Perfectionism Support",
    ]);
  });

  it("our office section includes the profile address", () => {
    expect(ourOffice.address).toBe(siteConfig.address);
  });

  it("has exactly 5 FAQs", () => {
    expect(faqs).toHaveLength(5);
  });

  it("cta band has heading, body, and cta label", () => {
    expect(ctaBand.heading.length).toBeGreaterThan(0);
    expect(ctaBand.ctaLabel).toBe("Book a Free Consultation");
  });
});
