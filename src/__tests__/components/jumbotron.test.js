import React from "react";
import { render } from "@testing-library/react";
import { Jumbotron } from "../../components";
import JumboData from "../../fixtures/jumbo";

describe("<Jumbotron/>", () => {
  it("renders the <Jumbotron /> with populated data", () => {
    const { container, getByText, getByAltText, getTestId } = render();
  });
});
