import React, { ReactElement } from "react";
import { Router } from "@reach/router";
import HomeRoute from "./HomeRoute";
import CountryRoute from "./CountryRoute";
import FetchCountries from "../components/FetchCountries";

const Routes: React.FC = () => (
  <FetchCountries
    render={(countries): ReactElement => (
      <Router>
        <HomeRoute path="/" countries={countries} />
        <CountryRoute path="/countries/:code" countries={countries} />
      </Router>
    )}
  />
);

export default Routes;
