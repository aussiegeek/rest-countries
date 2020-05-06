/* eslint-disable react/destructuring-assignment */
import React, { ReactElement } from "react";
import styled from "styled-components/macro";
import { Heading1 } from "./Headings";
import { Currency, Language } from "../types";

const BaseCountryDetailDiv = styled.div`
  display: grid;
  align-items: start;
`;

const CompactCountryDetailDiv = styled(BaseCountryDetailDiv)`
  background: ${(props): string => props.theme.element.background};
  border-radius: 10px;
  max-width: 375px;
  height: 100%;
  overflow: hidden;
  color: ${(props): string => props.theme.text};
  grid-template-columns: 20px 1fr 20px;
  grid-template-rows: 1fr;
  grid-row-gap: 20px;
  grid-template-areas:
    "flag flag flag"
    ". country-name ."
    ". main ."
    ". details .";
`;

const FullCountryDetailDiv = styled(BaseCountryDetailDiv)`
  background: ${(props): string => props.theme.background};
  grid-template-columns: 1fr;
  grid-template-areas:
    "flag"
    "country-name"
    "main"
    "details";

  @media (min-width: 700px) {
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: min-content 1fr;
    grid-template-areas:
      "flag country-name ."
      "flag main details";
  }
`;

const Flag = styled.img`
  max-width: 100%;
  grid-area: flag;
`;

const CountryName = styled(Heading1)`
  grid-area: country-name;
  margin-top: 40px;
`;

const Main = styled.div`
  grid-area: main;
`;

const AdditionalDetails = styled.div`
  grid-area: details;
`;

const InlineDefinitionList = styled.dl`
  color: ${(props): string => props.theme.text};
  margin-left: 0;
  dt,
  dd {
    display: inline;
  }

  dt,
  dt:after {
    font-weight: 600;
  }

  dt:after {
    content: ": ";
  }

  dd {
    margin-left: 0;
    font-weight: 300;
  }
`;

interface CompactCountryDetails {
  compact: true;
  name: string;
  flag: string;
  region: string;
  capital: string;
  population: number;
}

interface FullCountryDetails extends Omit<CompactCountryDetails, "compact"> {
  compact: false;
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencies: Currency[];
  languages: Language[];
}
type CountryDetailProps = CompactCountryDetails | FullCountryDetails;

function nativeName(props: CountryDetailProps): ReactElement | null {
  if (props.compact) return null;
  return (
    <div>
      <dt>Native Name</dt>
      <dd>{props.nativeName}</dd>
    </div>
  );
}

function subregion(props: CountryDetailProps): ReactElement | null {
  if (props.compact) return null;
  return (
    <div>
      <dt>Sub Region</dt>
      <dd>{props.subregion}</dd>
    </div>
  );
}
function extraDetails(props: CountryDetailProps): ReactElement | null {
  if (props.compact) return null;
  return (
    <InlineDefinitionList>
      <div>
        <dt>Top Level Domain</dt>
        <dd>{props.topLevelDomain}</dd>
      </div>
      <div>
        <dt>Currencies</dt>
        <dd>{props.currencies.map((currency) => currency.name).join(", ")}</dd>
      </div>
      <div>
        <dt>Languages</dt>
        <dd>{props.languages.map((language) => language.name).join(", ")}</dd>
      </div>
    </InlineDefinitionList>
  );
}

const ComponentContainer: React.FunctionComponent<{ compact: boolean }> = ({
  children,
  compact,
}) => {
  if (compact) {
    return <CompactCountryDetailDiv>{children}</CompactCountryDetailDiv>;
  }

  return <FullCountryDetailDiv>{children}</FullCountryDetailDiv>;
};

export default function CountryDetail(props: CountryDetailProps): ReactElement {
  const { flag, name, population, region, capital, compact } = props;
  return (
    <ComponentContainer compact={compact}>
      <Flag src={flag} />
      <CountryName>{name}</CountryName>
      <Main>
        <InlineDefinitionList>
          {nativeName(props)}
          <div>
            <dt>Population</dt>
            <dd>{population}</dd>
          </div>
          <div>
            <dt>Region</dt>
            <dd>{region}</dd>
          </div>
          {subregion(props)}
          <div>
            <dt>Capital</dt>
            <dd>{capital}</dd>
          </div>
        </InlineDefinitionList>
      </Main>
      <AdditionalDetails>{extraDetails(props)}</AdditionalDetails>
    </ComponentContainer>
  );
}
/* eslint-enable react/destructuring-assignment */
