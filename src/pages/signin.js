import React, { useState } from "react";
import { FooterContainer, HeaderContainer } from "../containers";
import { Form } from "../components";

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  //check form elements are valid
  //Email and password
  return (
    <>
      <HeaderContainer>
        <Form></Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
