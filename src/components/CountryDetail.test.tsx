import React from "react";
import { render } from "../utils/test-utils";

import CountryDetail from "./CountryDetail";

describe("full country details", () => {
  const FullDetail = (
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

  test("it includes the population", () => {
    const { getByText } = render(FullDetail);
    expect(getByText("11319511")).toBeInTheDocument();
  });

  test("it includes the country name", () => {
    const { getByText } = render(FullDetail);
    expect(getByText("Belgium")).toBeInTheDocument();
  });

  test("it includes the native country name", () => {
    const { getByText } = render(FullDetail);
    expect(getByText("België")).toBeInTheDocument();
  });

  test("it includes the country region", () => {
    const { getByText } = render(FullDetail);
    expect(getByText("Europe")).toBeInTheDocument();
  });

  test("it includes the subregion", () => {
    const { getByText } = render(FullDetail);
    expect(getByText("Western Europe")).toBeInTheDocument();
  });

  test("it includes the capital", () => {
    const { getByText } = render(FullDetail);
    expect(getByText("Brussels")).toBeInTheDocument();
  });

  test("it includes the domain", () => {
    const { getByText } = render(FullDetail);
    expect(getByText(".be")).toBeInTheDocument();
  });

  test("it includes the currencies", () => {
    const { getByText } = render(FullDetail);
    expect(getByText("Euro")).toBeInTheDocument();
  });

  test("it includes the languages", () => {
    const { getByText } = render(FullDetail);
    expect(getByText("Dutch, French, German")).toBeInTheDocument();
  });
});
