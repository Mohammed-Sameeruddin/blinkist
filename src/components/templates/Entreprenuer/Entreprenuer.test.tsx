import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Entreprenuer from "./Entreprenuer";
import Header from "../../organisms/Header/Header";
import Banner from "../../organisms/Banner/Banner";
import SearchBar from "../..//molecules/SearchBar/SearchBar";
import DisplayCard from "../../organisms/DisplayCard/DisplayCard";
import Footer from "../../organisms/Footer/Footer";
import BookData from "../../../data/Library";

describe("Entreprenuer test", () => {
  test("Should display entrepreneur template", () => {
    render(
      <BrowserRouter>
        <Entreprenuer
          header={<Header />}
          banner={<Banner />}
          search={<SearchBar />}
          firstSection={<DisplayCard title="Trending Blinks" data={BookData} />}
          secondSection={<DisplayCard title="Just added" data={BookData} />}
          thirdSection={
            <DisplayCard title="Featured Audio blinks" data={BookData} />
          }
          footer={<Footer />}
        />
      </BrowserRouter>
    );

    const trending = screen.getByText(/Trending Blinks/i);
    expect(trending).toBeInTheDocument();

    const justAdded = screen.getByText(/Just added/i);
    expect(justAdded).toBeInTheDocument();

    const featured = screen.getByText(/Featured Audio blinks/i);
    expect(featured).toBeInTheDocument();
  });
});
