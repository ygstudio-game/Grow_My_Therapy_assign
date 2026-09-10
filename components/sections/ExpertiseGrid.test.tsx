import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ExpertiseGrid from "./ExpertiseGrid";

describe("ExpertiseGrid", () => {
  it("renders every expertise keyword", () => {
    render(<ExpertiseGrid />);
    expect(screen.getByText("EMDR")).toBeInTheDocument();
    expect(screen.getByText("Anxiety & Panic")).toBeInTheDocument();
    expect(screen.getByText("…and more")).toBeInTheDocument();
  });
});
