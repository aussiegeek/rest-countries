import React, { ReactElement } from "react";
import { RouteComponentProps } from "@reach/router";

import { Country } from "../types";
import CountryDetail from "../components/CountryDetail";
import { ButtonLink } from "../components/Link";

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
    <div>
      <ButtonLink to="/">Back</ButtonLink>
      <CountryDetail compact={false} {...country} />
    </div>
  );
}
