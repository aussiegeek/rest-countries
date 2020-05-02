import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import useFetch from "use-http";
import FetchCountries from "./FetchCountries";
import { Country } from "../types";
jest.mock("use-http");

type useFetchResult = {
  loading: boolean;
  response: { data: Country[] };
  error?: { message: string };
};
const mockedUseFetch = (useFetch as unknown) as jest.Mock<useFetchResult>;

test("it shows passes on the fetched data", () => {
  mockedUseFetch.mockReturnValue({
    loading: false,
    response: { data: [] },
  });
  const spy = jest.fn((countries: Country[]): ReactElement => <span />);
  render(<FetchCountries render={spy} />);
  expect(spy).toHaveBeenCalledWith([]);
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
