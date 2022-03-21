import { render, screen } from "@testing-library/react";
import BookView from "./BookView";

describe("Book View test", () => {
  test("Button style", () => {
    render(<BookView />);
    const buttonElement = screen.getByText(/Finished/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("Should display read now button", () => {
    render(<BookView />);
    const readNow = screen.getByText(/Read now/i);
    expect(readNow).toBeInTheDocument();
  });
});
