import React from "react";
import { render } from "@testing-library/react";
import { Jumbotron } from "../../components";
import JumboData from "../../fixtures/jumbo";

describe("<Jumbotron/>", () => {
  it("renders the <Jumbotron /> with populated data", () => {
    const { container, getByText, getByAltText, getTestId } = render(
      <Jumbotron.Container>
        {JumboData.map((data) => (
          <Jumbotron key={data.id} direction={data.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{data.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{data.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={data.image} alt={data.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    );
  });
});
