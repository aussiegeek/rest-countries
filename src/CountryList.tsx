import React from "react";
import { UnstyledLink } from "./components/Link";
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
        <UnstyledLink
          key={country.alpha2Code}
          to={`/countries/${country.alpha2Code}`}
        >
          <CountryDetail compact {...country} />
        </UnstyledLink>
      ))}
    </div>
  );
};

export default CountryList;
