import React from "react";
import { render } from "../utils/test-utils";

import Country from "./Country";

describe("compact country details", () => {
  const MiniDetail = (
    <Country
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
