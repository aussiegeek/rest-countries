import React from "react";
import { Router } from "@reach/router";
import HomeRoute from "./HomeRoute";
import CountryRoute from "./CountryRoute";

const Routes: React.FC = () => (
  <Router>
    <HomeRoute path="/" />
    <CountryRoute path="/countries/:cca3" />
  </Router>
);

export default Routes;
