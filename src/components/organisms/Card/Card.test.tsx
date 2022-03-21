import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card Test", () => {
  test("Should display image", () => {
    render(
      <Card
        title="Book Title"
        author="Book Author"
        time="12-min read"
        read="1.9k reads"
        isFinished={true}
        value={1}
      />
    );
    const imageElement = screen.getByAltText("img");
    expect(imageElement).toBeInTheDocument();

    const titleElement = screen.getByText("Book Title");
    expect(titleElement).toBeInTheDocument();

    const authorElement = screen.getByText("Book Author");
    expect(authorElement).toBeInTheDocument();

    const timeElement = screen.getByText("12-min read");
    expect(timeElement).toBeInTheDocument();

    const readElement = screen.getByText("1.9k reads");
    expect(readElement).toBeInTheDocument();
  });

  test("Should display Finished Button", () => {
    render(
      <Card
        title="Book Title"
        author="Book Author"
        time="12-min read"
        read="1.9k reads"
        isFinished={true}
        value={1}
      />
    );
    const finishedButton = screen.getByText(/Finished/i);
    expect(finishedButton).toBeInTheDocument();
  });

  test("Should display Read Again Button", () => {
    render(
      <Card
        title="Book Title"
        author="Book Author"
        time="12-min read"
        read="1.9k reads"
        readAgain={true}
        value={1}
      />
    );
    const readAgain = screen.getByText(/Read Again/i);
    expect(readAgain).toBeInTheDocument();
  });

  test("Should display add to library Button", () => {
    render(
      <Card
        title="Book Title"
        author="Book Author"
        time="12-min read"
        read="1.9k reads"
        addToLibrary={true}
        value={1}
      />
    );
    const addToLibraryButton = screen.getByText(/Add to Library/i);
    expect(addToLibraryButton).toBeInTheDocument();
  });
});
