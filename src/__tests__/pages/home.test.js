import React from "react";
import { render } from "@testing-library/react";
import { Home } from "../../pages";

jest.mock("react-router-dom", () => ({
  Link: "Link",
}));

describe("Homepage", () => {
  it("description", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<Home />);
    expect(getByText("Unlimited films, TV programmes and more.")).toBeTruthy();
    expect(getByTestId("email")).toBeTruthy();
    expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
    expect(getByTestId("try-it-now")).toBeTruthy();

    expect(getByTestId("ready")).toBeTruthy();
  });
});
