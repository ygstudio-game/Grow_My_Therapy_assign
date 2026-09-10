import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CtaBand from "./CtaBand";

describe("CtaBand", () => {
  it("renders heading, body, and CTA link", () => {
    render(<CtaBand />);
    expect(screen.getByText("Ready to feel more like yourself again?")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Book a Free Consultation" })).toHaveAttribute(
      "href",
      "#contact"
    );
  });
});
