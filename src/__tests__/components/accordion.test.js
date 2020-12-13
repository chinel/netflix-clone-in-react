import React from "react";
import { render, fireEvent } from "@testing-library/react";
import faqsData from "../../fixtures/faqs.json";
import { Accordion } from "../../components";

describe("<Accordion />", () => {
  it("renders the <Accordion /> with populated data", () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  });
});
