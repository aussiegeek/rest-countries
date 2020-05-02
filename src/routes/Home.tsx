import React, { ReactElement } from "react";
import { RouteComponentProps } from "@reach/router";
import CountryList from "../CountryList";
import { Country } from "../types";

interface HomeProps extends RouteComponentProps {
  countries: Country[];
}
export default function Home({ countries }: HomeProps): ReactElement {
  return <CountryList countries={countries} />;
}
