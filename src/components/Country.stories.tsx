import React from "react";
import Country from "./Country";
import { Region } from "../generated/graphql";

export const Default = () => (
  <Country
    flagURL="https://restcountries.eu/data/bel.svg"
    name="Belgium"
    region={Region.Europe}
    capitalCities={["Brussels"]}
  />
);

export default {
  title: "Country",
};
