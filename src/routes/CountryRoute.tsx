import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import { CountryRecord } from "../types";
import CountryDetail from "../components/CountryDetail";
import { ButtonLink } from "../components/Link";

const CountryContainer = styled.div``;
interface CountryProps extends RouteComponentProps {
  countries: CountryRecord;
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

  const country = countries[code];
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
