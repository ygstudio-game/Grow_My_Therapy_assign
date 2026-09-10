import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders address, phone, and email placeholders", () => {
    render(<Footer />);
    expect(screen.getByText("123th Street 45 W, Santa Monica, CA 90401")).toBeInTheDocument();
    expect(screen.getByText("(310) 555-0148")).toBeInTheDocument();
    expect(screen.getByText("hello@mayareynoldspsyd.com")).toBeInTheDocument();
  });
});
