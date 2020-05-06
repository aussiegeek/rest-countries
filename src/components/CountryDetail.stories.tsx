import React from "react";
import CountryDetail from "./CountryDetail";

export const compact = () => (
  <CountryDetail
    compact
    flag="https://restcountries.eu/data/bel.svg"
    name="Belgium"
    population={11319511}
    region="Europe"
    capital="Brussels"
  />
);

export const detailed = () => (
  <CountryDetail
    compact={false}
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
  />
);

export default {
  title: "CountryDetail",
  component: CountryDetail,
};
