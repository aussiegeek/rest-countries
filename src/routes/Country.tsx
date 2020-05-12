import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import { Country as CountryInterface } from "../types";
import CountryDetail from "../components/CountryDetail";
import { ButtonLink } from "../components/Link";

const CountryContainer = styled.div``;
interface CountryProps extends RouteComponentProps {
  countries: CountryInterface[];
  code?: string;
}

const BackButton = styled(ButtonLink)`
  margin-bottom: 64px;

  @media (min-width: 700px) {
    margin-bottom: 80px;
  }
`;

const CountryRoute: React.FC<CountryProps> = ({ countries, code }) => {
  if (!code) return null;

  const country = countries.find((c) => c.alpha2Code === code.toUpperCase());
  if (!country) {
    return <span>country not found</span>;
  }
  return (
    <CountryContainer>
      <BackButton to="/">Back</BackButton>
      <CountryDetail {...country} />
    </CountryContainer>
  );
};

export default CountryRoute;
