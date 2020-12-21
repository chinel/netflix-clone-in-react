import React from "react";
import { render } from "@testing-library/react";
import { Browse } from "../../pages";

describe("Browse page", () => {
  it("renders the browse page with some data", () => {
    const { container } = render(<Browse />);
  });
});
