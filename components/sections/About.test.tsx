import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "./About";

describe("About", () => {
  it("renders the heading, subhead, and headshot image", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: "About Dr. Maya Reynolds, PsyD" })).toBeInTheDocument();
    expect(screen.getByText("Licensed Clinical Psychologist, Santa Monica, CA")).toBeInTheDocument();
    expect(screen.getByAltText(/Dr. Maya Reynolds/)).toBeInTheDocument();
  });
});
