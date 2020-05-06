import React, { ReactElement } from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Country from "./Country";
import FetchCountries from "../components/FetchCountries";

const Routes: React.FC = () => (
  <FetchCountries
    render={(countries): ReactElement => (
      <Router>
        <Home path="/" countries={countries} />
        <Country path="/countries/:code" countries={countries} />
      </Router>
    )}
  />
);

export default Routes;
