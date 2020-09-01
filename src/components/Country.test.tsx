import React from "react";
import { render, screen } from "../utils/test-utils";

import Country from "./Country";
import { Region } from "../generated/graphql";

describe("compact country details", () => {
  const MiniDetail = (
    <Country
      flagURL="https://restcountries.eu/data/bel.svg"
      name="Belgium"
      region={Region.Europe}
      capitalCities={["Brussels"]}
    />
  );

  test("it doesn't include the native name", () => {
    render(MiniDetail);
    expect(screen.queryByText("België")).not.toBeInTheDocument();
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
