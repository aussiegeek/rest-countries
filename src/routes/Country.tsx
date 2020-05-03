import React, { ReactElement } from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";

import { Country } from "../types";
import CountryDetail from "../components/CountryDetail";
import { ButtonLink } from "../components/Link";

const CountryContainer = styled.div`
  padding: 10px;
`;
interface CountryProps extends RouteComponentProps {
  countries: Country[];
  code?: string;
}
export default function CountryRoute({
  countries,
  code,
}: CountryProps): ReactElement | null {
  if (!code) return null;

  const country = countries.find((c) => c.alpha2Code === code.toUpperCase());
  if (!country) {
    return <span>country not found</span>;
  }
  return (
    <CountryContainer>
      <ButtonLink to="/">Back</ButtonLink>
      <CountryDetail compact={false} {...country} />
    </CountryContainer>
  );
}
