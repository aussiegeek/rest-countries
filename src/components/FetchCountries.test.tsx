import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import useFetch from "use-http";
import FetchCountries from "./FetchCountries";
import { RawCountry, CountryRecord } from "../types";

jest.mock("use-http");

type useFetchResult = {
  loading: boolean;
  response: { data: RawCountry[] };
  error?: { message: string };
};
const mockedUseFetch = (useFetch as unknown) as jest.Mock<useFetchResult>;

const demoCountries: RawCountry[] = [
  {
    currencies: [{ name: "Chilean peso" }],
    languages: [{ name: "Spanish" }],
    flag: "https://restcountries.eu/data/chl.svg",
    name: "Chile",
    alpha3Code: "CHL",
    capital: "Santiago",
    region: "Americas",
    population: 18191900,
    borders: ["NZL"],
    nativeName: "Chile",
    subregion: "South America",
    topLevelDomain: [".cl"],
  },
  {
    currencies: [{ name: "New Zealand dollar" }],
    languages: [{ name: "English" }, { name: "Māori" }],
    flag: "https://restcountries.eu/data/nzl.svg",
    name: "New Zealand",
    topLevelDomain: [".nz"],
    alpha3Code: "NZL",
    capital: "Wellington",
    region: "Oceania",
    subregion: "Australia and New Zealand",
    population: 4697854,
    borders: ["CHL"],
    nativeName: "New Zealand",
  },
];

test("it translates the country data", () => {
  mockedUseFetch.mockReturnValue({
    loading: false,
    response: { data: demoCountries },
  });
  const spy = jest.fn((): ReactElement => <span />);
  render(<FetchCountries render={spy} />);

  const expectedCountries: CountryRecord = {
    CHL: {
      currencies: ["Chilean peso"],
      languages: ["Spanish"],
      flag: "https://restcountries.eu/data/chl.svg",
      name: "Chile",
      alpha3Code: "CHL",
      capital: "Santiago",
      region: "Americas",
      population: 18191900,
      borders: [{ name: "New Zealand", alpha3Code: "NZL" }],
      nativeName: "Chile",
      subregion: "South America",
      topLevelDomain: [".cl"],
    },
    NZL: {
      currencies: ["New Zealand dollar"],
      languages: ["English", "Māori"],
      flag: "https://restcountries.eu/data/nzl.svg",
      name: "New Zealand",
      topLevelDomain: [".nz"],
      alpha3Code: "NZL",
      capital: "Wellington",
      region: "Oceania",
      subregion: "Australia and New Zealand",
      population: 4697854,
      borders: [{ name: "Chile", alpha3Code: "CHL" }],
      nativeName: "New Zealand",
    },
  };
  expect(spy).toHaveBeenCalledWith(expectedCountries);
});

test("it shows the loading state", () => {
  mockedUseFetch.mockReturnValue({
    loading: true,
    response: { data: [] },
  });
  const spy = jest.fn();
  const { getByText } = render(<FetchCountries render={spy} />);
  expect(getByText("Loading...")).toBeInTheDocument();
});

test("it shows the error state", () => {
  mockedUseFetch.mockReturnValue({
    loading: false,
    error: { message: "Something went wrong" },
    response: { data: [] },
  });
  const spy = jest.fn();
  const { getByText } = render(<FetchCountries render={spy} />);
  expect(getByText("Something went wrong")).toBeInTheDocument();
});
