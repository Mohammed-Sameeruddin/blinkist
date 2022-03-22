import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DisplayCard from "./DisplayCard";
import MyData from "../../../data/Library";

type ObjectType = {
  id: number;
  title: string;
  author: string;
  time: string;
  read: string;
  image: string;
  state: {
    isTrending: boolean;
    isFinished: boolean;
    justAdded: boolean;
    isFeatured: boolean;
  };
};

interface CardProps {
  title: string;
  data: Array<ObjectType>;
  state?: string;
}

const MockDisplayCard = (props: CardProps) => {
  return (
    <BrowserRouter>
      <DisplayCard title={props.title} data={props.data} />
    </BrowserRouter>
  );
};

describe("Display card test", () => {
  test("Should display card", async () => {
    render(<MockDisplayCard title="Trending Blink" data={MyData} />);
    const cardElements = await screen.findAllByRole("iconButton");
    expect(cardElements.length).toBe(7);
  });

  describe("Card event", () => {
    test("card on click", async () => {
      render(<MockDisplayCard title="Featured Audio Blink" data={MyData} />);
      const card = await screen.findByText(/The lonely Century/i);
      fireEvent.click(card);
      expect(window.location.pathname).toBe("/");
    });
  });
});
