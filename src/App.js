import React from "react";
import Jumbotron from "./components/jumbotron";
import JumboData from "./fixtures/jumbo";

export default function App() {
  return (
    <Jumbotron.Container>
      {JumboData.map((data) => (
        <Jumbotron key={data.id} direction={data.direction}>
          <p>Hello</p>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
