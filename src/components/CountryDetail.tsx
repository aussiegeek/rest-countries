import React from "react";
import styled from "styled-components/macro";
import { Heading1, Heading3 } from "./Headings";
import { Country } from "../types";
import InlineDefinitionList from "./InlineDefinitionList";
import { ButtonLink } from "./Link";

const CountryDetailDiv = styled.div`
  background: ${(props): string => props.theme.background};
  display: grid;
  align-items: start;
  grid-template-columns: 1fr;
  grid-template-areas:
    "flag"
    "country-name"
    "main"
    "details"
    "border";
  font-size: 14px;

  @media (min-width: 700px) {
    column-gap: 20px;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: min-content 1fr;
    grid-template-areas:
      "flag country-name ."
      "flag main details"
      "flag border border";
    font-size: 16px;
  }
`;

const Flag = styled.img`
  max-width: 100%;
  grid-area: flag;
`;

const CountryName = styled(Heading1)`
  grid-area: country-name;
  margin-top: 39px;
  margin-bottom: 24px;
`;

const Main = styled.div`
  grid-area: main;
  margin-bottom: 32px;
`;

const AdditionalDetails = styled.div`
  grid-area: details;
`;

const BorderCountries = styled.div`
  margin-top: 34px;
  grid-area: border;
  display: flex;
  flex-direction: column;

  ${Heading3} {
    white-space: nowrap;
    margin-bottom: 16px;

    @media (min-width: 700px) {
      margin-bottom: 0;
      margin-right: 11px;
    }
  }

  @media (min-width: 700px) {
    margin-top: 0;
    flex-direction: row;
    align-items: center;
  }
`;

const BorderCountryButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  margin-bottom: 16px;
  width: 100%;

  @media (min-width: 700px) {
    margin-bottom: 0;
  }
`;

const CountryDetail: React.FC<Country> = (props) => {
  const { flag, name, population, region, capital, borders } = props;
  return (
    <CountryDetailDiv>
      <Flag src={flag} />
      <CountryName>{name}</CountryName>
      <Main>
        <InlineDefinitionList>
          <div>
            <dt>Native Name</dt>
            <dd>{props.nativeName}</dd>
          </div>
          <div>
            <dt>Population</dt>
            <dd>{population}</dd>
          </div>
          <div>
            <dt>Region</dt>
            <dd>{region}</dd>
          </div>
          <div>
            <dt>Sub Region</dt>
            <dd>{props.subregion}</dd>
          </div>
          <div>
            <dt>Capital</dt>
            <dd>{capital}</dd>
          </div>
        </InlineDefinitionList>
      </Main>
      <AdditionalDetails>
        <InlineDefinitionList>
          <div>
            <dt>Top Level Domain</dt>
            <dd>{props.topLevelDomain}</dd>
          </div>
          <div>
            <dt>Currencies</dt>
            <dd>{props.currencies.join(", ")}</dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>{props.languages.join(", ")}</dd>
          </div>
        </InlineDefinitionList>
      </AdditionalDetails>
      <BorderCountries>
        <Heading3>Border Countries:</Heading3>
        <BorderCountryButtons>
          {borders.map(({ alpha3Code, name: borderCountry }) => (
            <ButtonLink key={alpha3Code} to={`/countries/${alpha3Code}`}>
              {borderCountry}
            </ButtonLink>
          ))}
        </BorderCountryButtons>
      </BorderCountries>
    </CountryDetailDiv>
  );
};

export default CountryDetail;
