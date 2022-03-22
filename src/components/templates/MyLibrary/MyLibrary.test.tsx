import { render, screen } from "@testing-library/react";
import MyLibrary from "./MyLibrary";
import Typography from "../../atoms/Typography/Typography";
import Header from "../../organisms/Header/Header";
import Tabs from "../../organisms/Tab/LabTabs";
import Footer from "../../organisms/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("My Library test", () => {
  test("Should display and renders", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <MyLibrary
                header={<Header />}
                heading={<Typography variant="h1">My Library</Typography>}
                tab={<Tabs />}
                footer={<Footer />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );

    const element = screen.getByText(/My Library/i);
    expect(element).toBeInTheDocument();
  });
});
