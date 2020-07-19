import React from "react";
import styled from "styled-components/macro";

import { UnstyledLink } from "./components/Link";
import Country, { CountryProps } from "./components/Country";

interface CountryListProps {
  countries: Array<CountryProps & { cca3: string }>;
}

const CountryListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  grid-auto-rows: min-content;
  row-gap: 32px;
  column-gap: 74px;

  @media (min-width: 700px) {
    row-gap: 67px;
  }
`;
const CountryDetailContainer = styled.div``;

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <CountryListContainer>
      {countries.map((country) => (
        <CountryDetailContainer key={country.cca3}>
          <UnstyledLink to={`/countries/${country.cca3}`}>
            <Country {...country} />
          </UnstyledLink>
        </CountryDetailContainer>
      ))}
    </CountryListContainer>
  );
};

export default CountryList;
