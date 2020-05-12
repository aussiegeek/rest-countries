import React from "react";
import CountryDetail from "./CountryDetail";

export const Default = () => (
  <CountryDetail
    flag="https://restcountries.eu/data/bel.svg"
    name="Belgium"
    nativeName="België"
    population={11319511}
    region="Europe"
    subregion="Western Europe"
    capital="Brussels"
    topLevelDomain=".be"
    currencies={[{ name: "Euro" }]}
    languages={[{ name: "Dutch" }, { name: "French" }, { name: "German" }]}
    alpha2Code="be"
  />
);

export default {
  title: "CountryDetail",
};
