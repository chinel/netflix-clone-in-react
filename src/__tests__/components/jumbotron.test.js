import React from "react";
import { render } from "@testing-library/react";
import { Jumbotron } from "../../components";
import JumboData from "../../fixtures/jumbo";

describe("<Jumbotron/>", () => {
  it("renders the <Jumbotron /> with populated data", () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <Jumbotron.Container>
        {JumboData.map((data) => (
          <Jumbotron key={data.id}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{data.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{data.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image
                src={data.image}
                alt={data.alt}
                data-testid={`${data.id}-jumbo-image`}
              />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    );

    expect(getByText("Enjoy on your TV.")).toBeTruthy();
    expect(getByAltText("Tiger King on Netflix")).toBeTruthy();
    expect(getByTestId("1-jumbo-image")).toBeTruthy();
    expect(
      getByText(
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      )
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
