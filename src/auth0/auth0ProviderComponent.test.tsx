import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderComponent from "../auth0/auth0ProviderComponent";

describe("Auth0 test", () => {
  test("Should Authenticate", () => {
    render(
      <BrowserRouter>
        <Auth0ProviderComponent children={<h1>Authenticated</h1>} />
      </BrowserRouter>
    );
  });
});
