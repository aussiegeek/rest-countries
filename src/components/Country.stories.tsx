import React from "react";
import Country from "./Country";

export const Default = () => (
  <Country
    flag="https://restcountries.eu/data/bel.svg"
    name="Belgium"
    population={11319511}
    region="Europe"
    capital="Brussels"
  />
);

export default {
  title: "Country",
};
