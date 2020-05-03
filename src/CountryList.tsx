import React from "react";
import styled from "styled-components";

import { UnstyledLink } from "./components/Link";
import { Country } from "./types";
import CountryDetail from "./components/CountryDetail";

interface CountryListProps {
  countries: Country[];
}

const CountryDetailContainer = styled.div`
  margin: 40px 20px;
`;

const CountryList: React.FunctionComponent<CountryListProps> = ({
  countries,
}) => {
  return (
    <div>
      {countries.map((country) => (
        <CountryDetailContainer>
          <UnstyledLink
            key={country.alpha2Code}
            to={`/countries/${country.alpha2Code}`}
          >
            <CountryDetail compact {...country} />
          </UnstyledLink>
        </CountryDetailContainer>
      ))}
    </div>
  );
};

export default CountryList;
