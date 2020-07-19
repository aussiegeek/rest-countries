import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import CountryDetail from "../components/CountryDetail";
import { ButtonLink } from "../components/Link";
import { useCountryQuery } from "../generated/graphql";

const CountryContainer = styled.div``;
interface CountryProps extends RouteComponentProps {
  cca3?: string;
}

const BackButton = styled(ButtonLink)`
  margin-bottom: 64px;

  @media (min-width: 700px) {
    margin-bottom: 80px;
  }
`;

const CountryRoute: React.FC<CountryProps> = ({ cca3 }) => {
  const variables = typeof cca3 === "string" ? { cca3 } : undefined;
  const { data, loading, error } = useCountryQuery({ variables });
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

  if (!cca3 || !data || !data.country) return <span>Country not found</span>;

  const { country } = data;

  return (
    <CountryContainer>
      <BackButton to="/">Back</BackButton>
      <CountryDetail {...country} />
    </CountryContainer>
  );
};

export default CountryRoute;
