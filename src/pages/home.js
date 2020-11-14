import React from "react";
import FooterContainer from "../containers/footer";
import FaqContainer from "../containers/faqs";
import JumbotronContainer from "../containers/jumbotron";

export default function Home() {
  return (
    <>
      {" "}
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
