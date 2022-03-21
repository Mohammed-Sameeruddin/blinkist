import { fireEvent, render, screen } from "@testing-library/react";
import LabTabs from "./LabTabs";

describe("Lab tab test", () => {
  test("should toggle between the tabs", () => {
    render(<LabTabs />);
    const tabs = screen.getAllByRole("tab");

    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(tabs[1]).toHaveAttribute("aria-selected", "false");

    fireEvent.click(tabs[1]);
    expect(tabs[0]).toHaveAttribute("aria-selected", "false");
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
  });
});
