import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Header } from "../../components";

jest.mock("react-router-dom");

describe("<Header/>", () => {
  it("renders the <Header /> with populated data", () => {
    const { container, getByText, getByTestId } = render(
      <Header>
        <Header.Frame>
          <Header.Logo src="/logo.svg" alt="Netflix" />
          <Header.ButtonLink>Sign In</Header.ButtonLink>
          <Header.TextLink active="true">Hello I am a link!</Header.TextLink>
        </Header.Frame>
      </Header>
    );

    expect(getByText("Hello I am a link!")).toBeTruthy();
    expect(getByTestId("header-bg")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
