import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Autho0Provider from "../../../auth0/auth0ProviderComponent";

const MockHeader = () => (
  <BrowserRouter>
    <Autho0Provider>
      <Header />
    </Autho0Provider>
  </BrowserRouter>
);

describe("Header tests before login", () => {
  test("should login", async () => {
    render(<MockHeader />);

    expect(window.location.pathname).toEqual("/");

    const myLibrary = screen.queryByText(/My Library/i);
    expect(myLibrary).toBeNull();

    const explore = screen.queryByText(/Explore/i);
    expect(explore).toBeNull();
  });
});

describe("Header test  login", () => {
  test("login test", async () => {
    render(<MockHeader />);
    const element = await screen.findByRole("button", { name: "Login" });
    expect(element).toBeInTheDocument();
  });
});
