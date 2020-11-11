import React from "react";
import FooterContainer from "./containers/footer";
import FaqContainer from "./containers/faqs";
import JumbotronContainer from "./containers/jumbotron";

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
