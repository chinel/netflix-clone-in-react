import React from "react";
import FooterContainer from "../containers/footer";
import FaqContainer from "../containers/faqs";
import JumbotronContainer from "../containers/jumbotron";
import HeaderContainer from "../containers/header";

export default function Home() {
  return (
    <HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
