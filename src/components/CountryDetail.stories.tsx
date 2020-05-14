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
    topLevelDomain={[".be"]}
    currencies={["Euro"]}
    languages={["Dutch", "French", "German"]}
    alpha3Code="bel"
    borders={[
      { name: "France", alpha3Code: "France" },
      { name: "Germany", alpha3Code: "DEU" },
      { name: "Luxembourg", alpha3Code: "LUX" },
      { name: "Netherlands", alpha3Code: "NLD" },
    ]}
  />
);

export default {
  title: "CountryDetail",
};
