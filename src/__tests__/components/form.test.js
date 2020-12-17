import React from "react";
import { render } from "@testing-library/react";
import { Form } from "../../components";
import * as ROUTES from "../../constants/routes";

jest.mock("react-router-dom", () => ({
  Link: "Link",
}));

describe("<Form />", () => {
  it("renders the <Form /> with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign In</Form.Title>
        <Form.Base>
          <Form.Input placeholder="Email Address" onChange={() => {}} />
          <Form.Input
            placeholder="Password"
            type="password"
            onChange={() => {}}
          />
          <Form.Submit disabled type="submit">
            Sign In
          </Form.Submit>
        </Form.Base>

        <Form.Text>
          New to Netflix?{" "}
          <Form.Link to="/signup">Sign up now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCaptcha to ensure that you're not a
          bot. Learn more.
        </Form.TextSmall>
      </Form>
    );

    expect(
      getByText(
        "This page is protected by Google reCaptcha to ensure that you're not a bot. Learn more."
      )
    ).toBeTruthy();
  });
});
