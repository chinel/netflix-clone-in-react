import React from "react";
import {
  FooterContainer,
  FaqContainer,
  JumbotronContainer,
  HeaderContainer,
} from "../containers";
import { Feature, OptForm } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" data-testid="email" />
            <OptForm.Button data-testid="try-it-now">Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text data-testid="ready">
              Ready to watch? Enter your email address to create or restart
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
