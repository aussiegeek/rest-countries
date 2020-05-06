import React from "react";
import styled from "styled-components";

import { UnstyledLink } from "./components/Link";
import { Country } from "./types";
import CountryDetail from "./components/CountryDetail";

interface CountryListProps {
  countries: Country[];
}

const CountryListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: content-min;
`;
const CountryDetailContainer = styled.div`
  margin: 40px 20px;
`;

const CountryList: React.FunctionComponent<CountryListProps> = ({
  countries,
}) => {
  return (
    <CountryListContainer>
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
    </CountryListContainer>
  );
};

export default CountryList;
