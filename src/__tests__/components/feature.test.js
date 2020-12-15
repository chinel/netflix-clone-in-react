import React from "react";
import { render } from "@testing-library/react";
import { Feature } from "../../components";

describe("<Feature />", () => {
  it("renders the <Feature /> with populated data", () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
      </Feature>
    );
  });
});
