import React, { useState } from "react";
import { FooterContainer, HeaderContainer } from "../containers";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //check form elements are valid
  //Email and password
  const isInvalid = emailAddress === "" || password === "";

  const handleSignIn = (event) => {
    event.preventDefault();

    //Firebase here
  };

  return (
    <>
      <HeaderContainer>
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
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Submit disable={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix?{" "}
            <Form.TextLink to={ROUTES.SIGN_UP}>Sign up now.</Form.TextLink>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCaptcha to ensure that you're not
            a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
