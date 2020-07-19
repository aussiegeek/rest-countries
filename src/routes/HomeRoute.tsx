import React from "react";
import { RouteComponentProps } from "@reach/router";
import CountryList from "../CountryList";
import { useHomeQuery } from "../generated/graphql";

const HomeRoute: React.FC<RouteComponentProps> = () => {
  const result = useHomeQuery();
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
