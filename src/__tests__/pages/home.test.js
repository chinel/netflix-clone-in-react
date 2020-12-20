import React from "react";
import { getAllByText, render } from "@testing-library/react";
import { Home } from "../../pages";

jest.mock("react-router-dom", () => ({
  Link: "Link",
}));

test("renders the homepage ", () => {
  const {
    getByText,
    getAllByPlaceholderText,
    getByTestId,
    getAllByText,
  } = render(<Home />);
  expect(getByText("Unlimited films, TV programmes and more.")).toBeTruthy();
  expect(getAllByPlaceholderText("Email Address")).toBeTruthy();
  expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
  expect(getAllByText("Try it now")).toBeTruthy();

  expect(
    getAllByText(
      "Ready to watch? Enter your email address to create or restart membership"
    )
  ).toBeTruthy();
});
