import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders the H1 with SEO keyword and location, and the CTA", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { level: 1, name: /Anxiety & Trauma Therapy in Santa Monica, CA/ })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Book a Free Consultation" })).toBeInTheDocument();
  });
});
