import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import OurOffice from "./OurOffice";

describe("OurOffice", () => {
  it("renders heading, address, note, and both office photos", () => {
    render(<OurOffice />);
    expect(screen.getByRole("heading", { name: "A Calm Space to Begin" })).toBeInTheDocument();
    expect(screen.getByText("123th Street 45 W, Santa Monica, CA 90401")).toBeInTheDocument();
    expect(screen.getByText(/secure telehealth offered for clients throughout California/)).toBeInTheDocument();
    expect(screen.getAllByAltText(/Dr. Maya Reynolds' .* office/)).toHaveLength(2);
  });
});
