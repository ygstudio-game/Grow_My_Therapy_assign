import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Faq from "./Faq";

describe("Faq", () => {
  it("renders all 5 questions collapsed by default and reveals the answer on click", async () => {
    render(<Faq />);
    expect(screen.getByText("Do you offer in-person and online sessions?")).toBeInTheDocument();
    expect(screen.getAllByRole("group")).toHaveLength(5);

    const firstAnswer = screen.getByText(
      /I offer in-person therapy at my Santa Monica office/
    );
    expect(firstAnswer).not.toBeVisible();

    const user = userEvent.setup();
    await user.click(screen.getByText("Do you offer in-person and online sessions?"));
    expect(firstAnswer).toBeVisible();
  });
});
