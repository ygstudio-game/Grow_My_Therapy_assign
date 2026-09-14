import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders address and consultation request link", () => {
    render(<Footer />);
    expect(screen.getByText("123th Street 45 W, Santa Monica, CA 90401")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Consultation by Request" })).toBeInTheDocument();
  });
});
