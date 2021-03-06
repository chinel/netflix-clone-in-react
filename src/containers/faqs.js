import React from "react";
import { Accordion, OptForm, Break } from "../components";
import faqsData from "../fixtures/faqs";

export default function FaqContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      
      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email address to create or restart
          membership
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
