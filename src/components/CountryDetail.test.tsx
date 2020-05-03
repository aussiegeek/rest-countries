import React from "react";
import { render } from "../utils/test-utils";

import CountryDetail from "./CountryDetail";

describe("compact country details", () => {
  const MiniDetail = (
    <CountryDetail
      compact
      flag="https://restcountries.eu/data/bel.svg"
      name="Belgium"
      population={11319511}
      region="Europe"
      capital="Brussels"
    />
  );

  test("it includes the population", () => {
    const { getByText } = render(MiniDetail);
    expect(getByText("11319511")).toBeInTheDocument();
  });

  test("it doesn't include the native name", () => {
    const { queryByText } = render(MiniDetail);
    expect(queryByText("België")).not.toBeInTheDocument();
  });

  test("it includes the country name", () => {
    const { getByText } = render(MiniDetail);
    expect(getByText("Belgium")).toBeInTheDocument();
  });

  test("it includes the country region", () => {
    const { getByText } = render(MiniDetail);
    expect(getByText("Europe")).toBeInTheDocument();
  });

  test("it includes the capital", () => {
    const { getByText } = render(MiniDetail);
    expect(getByText("Brussels")).toBeInTheDocument();
  });
});

describe("full country details", () => {
  const FullDetail = (
    <CountryDetail
      compact={false}
      flag="https://restcountries.eu/data/bel.svg"
      name="Belgium"
      nativeName="België"
      population={11319511}
      region="Europe"
      subregion="Western Europe"
      capital="Brussels"
      topLevelDomain=".be"
      currencies={[{ name: "Euro" }]}
      languages={[{ name: "Dutch" }, { name: "French" }, { name: "German" }]}
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
