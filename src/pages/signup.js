import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { useHistory } from "react-router-dom";
import { FooterContainer, HeaderContainer } from "../containers";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || emailAddress === "" || password === "";

  const handleSignUp = (event) => {
    event.preventDefault();

    //sign up with firebase
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type="submit" disabled={isInvalid}>
              Sign up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user?{" "}
            <Form.TextLink to={ROUTES.SIGN_IN}>Sign in now</Form.TextLink>
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
