import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import QuoteBand from "./QuoteBand";

describe("QuoteBand", () => {
  it("renders the quote text and attribution", () => {
    render(<QuoteBand />);
    expect(
      screen.getByText(/it's about insight, resilience, and coming home to yourself/)
    ).toBeInTheDocument();
    expect(screen.getByText("Dr. Maya Reynolds, PsyD")).toBeInTheDocument();
  });
});
