import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TrustBuilding from "./TrustBuilding";

describe("TrustBuilding", () => {
  it("renders the headline and both body paragraphs", () => {
    render(<TrustBuilding />);
    expect(
      screen.getByText("You look like you have it together. Inside, it might feel different.")
    ).toBeInTheDocument();
    expect(screen.getByText(/Therapy can be a place to finally slow down/)).toBeInTheDocument();
  });
});
