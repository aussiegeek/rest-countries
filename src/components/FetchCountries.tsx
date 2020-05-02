import React from "react";
import useFetch from "use-http";
import { Country } from "../types";

interface FetchCountriesProps {
  render: (countries: Country[]) => React.ReactElement;
}

const FetchCountries: React.FC<FetchCountriesProps> = (props) => {
  const { response, loading, error } = useFetch<Country[]>(
    "https://restcountries.eu/rest/v2/all?fields=name;region;population;flag;capital",
    []
  );
  if (loading) {
    return <span>Loading...</span>;
  }

  if (error || !response.data) {
    return <span>{error.message}</span>;
  }

  return props.render(response.data);
};

export default FetchCountries;
