import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Header } from "../../components";

jest.mock("react-router-dom", () => ({
  Link: "Link",
}));

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

  it("renders the full <Header/> with a background", () => {
    const { container, getByText, getByTestId } = render(
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo alt="Netflix" src="/images/logo.svg" />
            <Header.TextLink active={false} onClick={() => {}}>
              Series
            </Header.TextLink>
            <Header.TextLink active onClick={() => {}}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm="joker" setSearchTerm={() => {}} />
            <Header.Profile>
              <Header.Picture src="/images/nelly.png" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src="/images/nelly.png" />
                  <Header.TextLink>Nelly Kally</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => {}}>Sign Out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>Forever alone in a crowd..</Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    );
    expect(getByTestId("search-input")).toBeTruthy();
    expect(getByTestId("search-input").value).toBe("joker");
    fireEvent.change(getByTestId("search-input"), {
      target: { value: "Simpsons" },
    });
    fireEvent.click(getByTestId("search-click"));
    expect(getByText("Series")).toBeTruthy();
    expect(getByText("Films")).toBeTruthy();
    expect(getByText("Nelly Kally")).toBeTruthy();
    expect(getByText("Watch Joker Now")).toBeTruthy();
    expect(getByText("Forever alone in a crowd..")).toBeTruthy();
    expect(getByText("Sign Out")).toBeTruthy();
    expect(getByText("Play")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
