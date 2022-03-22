import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";

describe("Landing Page test", () => {
  test("Should display", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const element = screen.queryByTestId("cover");
    expect(element).toBeInTheDocument();
  });
});
