import React from "react";
import { render } from "../utils/test-utils";

import CountryDetail from "./CountryDetail";
import { Region, CountryNameType } from "../generated/graphql";

describe("full country details", () => {
  const FullDetail = (
    <CountryDetail
      flagURL="https://restcountries.eu/data/bel.svg"
      name="Belgium"
      names={[{ type: CountryNameType.Native, common: "België" }]}
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
