import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer test", () => {
  test("logo should be display", () => {
    render(<Footer />);
    const logo = screen.getByAltText(/Blinkist/i);
    expect(logo).toBeInTheDocument();
  });
});
