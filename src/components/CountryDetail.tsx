import React from "react";
import styled from "styled-components/macro";
import {
  Country as GraphQLCountry,
  CountryName as GraphQLCountryName,
  Currency,
  Language,
  CountryNameType,
} from "../generated/graphql";
import { Heading1, Heading3 } from "./Headings";
import InlineDefinitionList from "./InlineDefinitionList";
import { ButtonLink } from "./Link";
import { regionNameMapping } from "../regionNameMapping";

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

export type CountryDetailProps = Pick<
  GraphQLCountry,
  "cca3" | "flagURL" | "name" | "region" | "capitalCities" | "subregion" | "tld"
> & {
  currencies: Array<Pick<Currency, "name">>;
  borders: Array<Pick<GraphQLCountry, "cca3" | "name">>;
  languages: Array<Pick<Language, "name">>;
  names: Array<Pick<GraphQLCountryName, "type" | "common">>;
};

const CountryDetail: React.FC<CountryDetailProps> = (props) => {
  const {
    flagURL,
    name,
    names,
    region,
    capitalCities,
    borders,
    subregion,
    tld,
    currencies,
    languages,
  } = props;
  return (
    <CountryDetailDiv>
      <Flag src={flagURL} />
      <CountryName>{name}</CountryName>
      <Main>
        <InlineDefinitionList>
          <div>
            <dt>Native Name</dt>
            <dd>
              {names
                .filter(({ type }) => type === CountryNameType.Native)
                .map(({ common }) => common)
                .join(", ")}
            </dd>
          </div>
          {/* <div>
            <dt>Population</dt>
            <dd>{population}</dd>
          </div> */}
          <div>
            <dt>Region</dt>
            <dd>{regionNameMapping[region]}</dd>
          </div>
          <div>
            <dt>Sub Region</dt>
            <dd>{subregion}</dd>
          </div>
          <div>
            <dt>Capital</dt>
            <dd>{capitalCities.join(", ")}</dd>
          </div>
        </InlineDefinitionList>
      </Main>
      <AdditionalDetails>
        <InlineDefinitionList>
          <div>
            <dt>Top Level Domain</dt>
            <dd>{tld}</dd>
          </div>
          <div>
            <dt>Currencies</dt>
            <dd>
              {currencies
                .map(({ name: currencyName }) => currencyName)
                .join(", ")}
            </dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>
              {languages
                .map(({ name: languageName }) => languageName)
                .join(", ")}
            </dd>
          </div>
        </InlineDefinitionList>
      </AdditionalDetails>
      <BorderCountries>
        <Heading3>Border Countries:</Heading3>
        <BorderCountryButtons>
          {borders.map(({ cca3, name: borderCountry }) => (
            <ButtonLink key={cca3} to={`/countries/${cca3}`}>
              {borderCountry}
            </ButtonLink>
          ))}
        </BorderCountryButtons>
      </BorderCountries>
    </CountryDetailDiv>
  );
};

export default CountryDetail;
