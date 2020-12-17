import React from "react";
import { render } from "@testing-library/react";
import { OptForm } from "../../components";

describe("<OptForm />", () => {
  it("renders the <OptForm /> with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(
      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email address to create or restart your
          membership.
        </OptForm.Text>
      </OptForm>
    );
  });
});
