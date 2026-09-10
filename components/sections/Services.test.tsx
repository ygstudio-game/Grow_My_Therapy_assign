import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Services from "./Services";

describe("Services", () => {
  it("renders all 3 services with titles and descriptions", () => {
    render(<Services />);
    expect(screen.getByText("Anxiety & Panic Treatment")).toBeInTheDocument();
    expect(screen.getByText("Trauma Therapy & EMDR")).toBeInTheDocument();
    expect(screen.getByText("Burnout & Perfectionism Support")).toBeInTheDocument();
    expect(screen.getByText(/CBT and mindfulness-based approaches/)).toBeInTheDocument();
  });
});
