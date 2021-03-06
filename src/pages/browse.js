import React from "react";
import { BrowseContainer } from "../containers";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  //Retrieve series and the Films
  const { series } = useContent("series");
  const { films } = useContent("films");
  //slides for the browse page
 
  const slides = selectionFilter({ series, films });
  return <BrowseContainer slides={slides} />;
}
