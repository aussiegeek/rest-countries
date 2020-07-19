import React from "react";
import {
  render,
  screen,
  MockedApolloClient,
  MockedErrorClient,
  waitFor,
  LoadingClient,
} from "../utils/test-utils";
import HomeRoute from "./HomeRoute";

describe("HomeRoute", () => {
  it("shows data when loaded correctly", async () => {
    render(
      <MockedApolloClient
        resolvers={{
          Query: {
            countries: () => [
              {
                name: "New Zealand",
              },
            ],
          },
        }}
      >
        <HomeRoute />
      </MockedApolloClient>
    );
    expect(await screen.findByText("New Zealand")).toBeInTheDocument();
  });

  it("shows GraphQL error", async () => {
    render(
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      <MockedErrorClient>
        <HomeRoute />
      </MockedErrorClient>
    );
    await waitFor(() =>
      expect(screen.getByText("Something went wrong")).toBeInTheDocument()
    );
  });

  it("shows loading state", () => {
    render(
      <LoadingClient>
        <HomeRoute />
      </LoadingClient>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
