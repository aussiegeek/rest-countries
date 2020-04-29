import React from "react";
import CountryDetail from "../components/CountryDetail";

export const CountryDetailStory = () => (
  <div>
    <CountryDetail
      flagUrl="https://restcountries.eu/data/bel.svg"
      countryName="Belgium"
      population={11319511}
      region="Europe"
      capital="Brussels"
    />
  </div>
);

export default {
  title: "CountryDetail",
  component: CountryDetailStory,
};
