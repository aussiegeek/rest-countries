/* eslint-disable react/destructuring-assignment */
import React, { ReactElement } from "react";
import styled from "styled-components/macro";
import { Heading1 } from "./Headings";
import { Currency, Language } from "../types";

const CountryDetailDiv = styled.div<{ compact: boolean }>`
  background: ${(props): string =>
    props.compact ? props.theme.element.background : props.theme.background};
  border-radius: ${(props): string => (props.compact ? "10px" : "auto")};
  overflow: hidden;
  color: ${(props): string => props.theme.text};
`;

const TextContainer = styled.div<{ compact: boolean }>`
  padding: ${(props): string => (props.compact ? "20px" : "0")};
`;

const Flag = styled.img`
  max-width: 100%;
`;
const InlineDefinitionList = styled.dl`
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
export default function CountryDetail(props: CountryDetailProps): ReactElement {
  const { flag, name, population, region, capital, compact } = props;
  return (
    <CountryDetailDiv compact={compact}>
      <Flag src={flag} />

      <TextContainer compact={compact}>
        <Heading1>{name}</Heading1>
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

        {extraDetails(props)}
      </TextContainer>
    </CountryDetailDiv>
  );
}
/* eslint-enable react/destructuring-assignment */
