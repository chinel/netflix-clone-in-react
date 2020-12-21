import React from "react";
import { BrowseContainer } from "../containers";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  //Retrieve series and the Films
  const { series } = useContent("series");
  const { films } = useContent("films");
  //slides for the browse page
  console.log(typeof selectionFilter);
  console.log(selectionFilter);
  console.log(selectionFilter());
  const slides = selectionFilter({ series, films });
  console.log(slides);
  return <BrowseContainer slides={slides} />;
}
