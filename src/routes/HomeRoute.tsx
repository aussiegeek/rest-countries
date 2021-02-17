import React from "react";
import { RouteComponentProps } from "@reach/router";
import { useQuery } from "@apollo/client";
import CountryList from "../CountryList";
import { HomeDocument } from "../generated/graphql";

const HomeRoute: React.FC<RouteComponentProps> = () => {
  const result = useQuery(HomeDocument);
  const { data, loading, error } = result;

  if (loading) {
    return <span>Loading...</span>;
  }
  if (error) {
    return (
      <div>
        <h1>Something went wrong</h1>
        {error.message}
      </div>
    );
  }

  if (!data) {
    return <span>Error loading data</span>;
  }

  return <CountryList countries={data.countries} />;
};

export default HomeRoute;
