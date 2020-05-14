import React, { ReactElement } from "react";
import { RouteComponentProps } from "@reach/router";
import CountryList from "../CountryList";
import { CountryRecord } from "../types";

interface HomeProps extends RouteComponentProps {
  countries: CountryRecord;
}
export default function HomeRoute({ countries }: HomeProps): ReactElement {
  return <CountryList countries={Object.values(countries)} />;
}
