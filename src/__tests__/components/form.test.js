import React from "react";
import { render } from "@testing-library/react";
import { Form } from "../../components";

describe("<Form />", () => {
  it("renders the <Form /> with populated data", () => {
    <Form>
      <Form.Title>Sign In</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}
      <Form.Base onSubmit={handleSignIn} method="POST">
        <Form.Input
          placeholder="Email Address"
          value={emailAddress}
          onChange={({ target }) => setEmailAddress(target.value)}
        />
        <Form.Input
          placeholder="Password"
          type="password"
          autoComplete="off"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Form.Submit disabled={isInvalid} type="submit">
          Sign In
        </Form.Submit>
      </Form.Base>

      <Form.Text>
        New to Netflix?{" "}
        <Form.TextLink to={ROUTES.SIGN_UP}>Sign up now.</Form.TextLink>
      </Form.Text>
      <Form.TextSmall>
        This page is protected by Google reCaptcha to ensure that you're not a
        bot. Learn more.
      </Form.TextSmall>
    </Form>;
  });
});
