import React from "react";
import useFetch from "use-http";
import { CountryRecord, RawCountry } from "../types";

interface FetchCountriesProps {
  render: (countries: CountryRecord) => React.ReactElement;
}

const FetchCountries: React.FC<FetchCountriesProps> = (props) => {
  const { response, loading, error } = useFetch<RawCountry[]>(
    "https://restcountries.eu/rest/v2/all?fields=name;region;population;flag;capital;currencies;languages;alpha3Code;nativeName;topLevelDomain;borders",
    []
  );
  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>{error.message}</span>;
  }

  if (!response.data) {
    return <span>Loading</span>;
  }

  const keyedRawCountries = response.data.reduce<Record<string, RawCountry>>(
    (acc, val) => {
      acc[val.alpha3Code] = val;
      return acc;
    },
    {}
  );

  const countries = response.data.reduce<CountryRecord>((acc, val) => {
    acc[val.alpha3Code] = {
      ...val,
      languages: val.languages.map((l) => l.name),
      currencies: val.currencies.map((c) => c.name),
      borders: val.borders.map((alpha3Code) => {
        return { name: keyedRawCountries[alpha3Code].name, alpha3Code };
      }),
    };
    return acc;
  }, {});

  return props.render(countries);
};

export default FetchCountries;
