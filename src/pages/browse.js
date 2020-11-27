import React from "react";
import { useContent } from "../hooks";

export default function Browse() {
  //Retrieve series and the Films
  const { series } = useContent("series");
  const { films } = useContent("films");
  console.log(series);
  console.log(films);
  return <p>Hello From Browse</p>;
}
