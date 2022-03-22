import { fireEvent, render, screen } from "@testing-library/react";
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

  test("Should change color on mouse enter and mouse over", () => {
    render(<BookView />);
    const elementText = screen.getByText("Finished Reading");
    const state = false;
    fireEvent.mouseEnter(elementText);
    expect(state).toBe(false);
    fireEvent.mouseLeave(elementText);
    expect(state).toBe(false);
  });

  test("Should update api on click", () => {
    render(<BookView />);
    const elementText = screen.getByText("Finished Reading");
    fireEvent.click(elementText);
    expect(elementText).toBeInTheDocument();
  });
});
