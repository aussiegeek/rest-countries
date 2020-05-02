import React from "react";
import { Country } from "./types";
import CountryDetail from "./components/CountryDetail";

interface CountryListProps {
  countries: Country[];
}
const CountryList: React.FunctionComponent<CountryListProps> = ({
  countries,
}) => {
  return (
    <div>
      {countries.map((country) => (
        <CountryDetail key={country.name} {...country} />
      ))}
    </div>
  );
};

export default CountryList;
