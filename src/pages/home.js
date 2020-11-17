import React from "react";
import FooterContainer from "../containers/footer";
import FaqContainer from "../containers/faqs";
import JumbotronContainer from "../containers/jumbotron";
import HeaderContainer from "../containers/header";
import { OptForm } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Input placeholder="Email Address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to watch? Enter your email address to create or restart
            membership
          </OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
