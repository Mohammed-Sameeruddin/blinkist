import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LibraryPage from "./LibraryPage";

describe("Library Page test", () => {
  test("Should display", () => {
    render(
      <BrowserRouter>
        <LibraryPage />
      </BrowserRouter>
    );

    const element = screen.getByText(/My Library/i);
    expect(element).toBeInTheDocument();
  });
});
