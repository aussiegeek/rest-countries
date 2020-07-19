import React from "react";
import {
  render,
  screen,
  MockedApolloClient,
  MockedErrorClient,
  waitFor,
  LoadingClient,
} from "../utils/test-utils";
import CountryRoute from "./CountryRoute";

describe("CountryRoute", () => {
  it("shows data when loaded correctly", async () => {
    render(
      <MockedApolloClient
        resolvers={{
          Query: {
            country: () => ({ name: "New Zealand" }),
          },
        }}
      >
        <CountryRoute cca3="NZL" />
      </MockedApolloClient>
    );
    expect(await screen.findByText("New Zealand")).toBeInTheDocument();
  });

  it("shows GraphQL error", async () => {
    render(
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      <MockedErrorClient>
        <CountryRoute />
      </MockedErrorClient>
    );
    await waitFor(() =>
      expect(screen.getByText("Something went wrong")).toBeInTheDocument()
    );
  });

  it("shows loading state", () => {
    render(
      <LoadingClient>
        <CountryRoute />
      </LoadingClient>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
