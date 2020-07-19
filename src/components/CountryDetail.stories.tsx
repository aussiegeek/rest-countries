import React from "react";
import CountryDetail from "./CountryDetail";
import { Region, CountryNameType } from "../generated/graphql";

export const Default = () => (
  <CountryDetail
    flagURL="https://restcountries.eu/data/bel.svg"
    name="Belgium"
    names={[{ type: CountryNameType.Native, common: "Belië" }]}
    region={Region.Europe}
    subregion="Western Europe"
    capitalCities={["Brussels"]}
    tld={[".be"]}
    currencies={[{ name: "Euro" }]}
    languages={[{ name: "Dutch" }, { name: "French" }, { name: "German" }]}
    cca3="bel"
    borders={[
      { name: "France", cca3: "France" },
      { name: "Germany", cca3: "DEU" },
      { name: "Luxembourg", cca3: "LUX" },
      { name: "Netherlands", cca3: "NLD" },
    ]}
  />
);

export default {
  title: "CountryDetail",
};
