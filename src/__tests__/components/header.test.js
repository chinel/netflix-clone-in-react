import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Header } from "../../components";

jest.mock("react-router-dom");

describe("<Header/>", () => {
  it("renders the <Header /> with populated data", () => {
    const { container, getByText, getByTestId } = render();
  });
});
