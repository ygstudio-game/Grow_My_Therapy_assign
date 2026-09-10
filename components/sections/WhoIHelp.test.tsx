import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WhoIHelp from "./WhoIHelp";

describe("WhoIHelp", () => {
  it("renders all 3 cards with titles and descriptions", () => {
    render(<WhoIHelp />);
    expect(screen.getByText("High-Achieving Professionals")).toBeInTheDocument();
    expect(screen.getByText("Trauma Survivors")).toBeInTheDocument();
    expect(screen.getByText("Entrepreneurs & Creatives")).toBeInTheDocument();
  });
});
