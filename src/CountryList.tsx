import React from "react";
import { Country } from "./types";
import CountryDetail from "./components/CountryDetail";

interface CountryListProps {
  countries: Country[];
}
const CountryList: React.FunctionComponent<CountryListProps> = (props) => {
  return (
    <div>
      {props.countries.map((country) => (
        <CountryDetail {...country} />
      ))}
    </div>
  );
};

export default CountryList;
