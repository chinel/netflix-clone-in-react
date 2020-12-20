import React from "react";
import { render } from "@testing-library/react";
import { Home } from "../../pages";

jest.mock("react-router-dom", () => ({
  Link: "Link",
}));

describe("Homepage", () => {
  it("description", () => {
    const { getByText, getByTestId } = render(<Home />);
  });
});
