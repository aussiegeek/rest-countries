import React from "react";
import styled from "styled-components/macro";
import { Heading2 } from "./Headings";
import InlineDefinitionList from "./InlineDefinitionList";

const CountryDiv = styled.div`
  background: ${(props): string => props.theme.element.background};
  border-radius: 10px;
  max-width: 264px;
  height: 100%;
  overflow: hidden;
  color: ${(props): string => props.theme.text};
  display: grid;
  align-items: start;
  grid-template-columns: 20px 1fr 20px;
  grid-template-rows: 1fr;
  grid-template-areas:
    "flag flag flag"
    ". country-name ."
    ". main ."
    ". details .";
`;

const Flag = styled.img`
  max-width: 100%;
  grid-area: flag;
`;

const CountryName = styled(Heading2)`
  grid-area: country-name;
  margin-top: 24px;
  margin-bottom: 16px;
`;

const Main = styled.div`
  grid-area: main;
  margin-bottom: 46px;
`;

interface CountryDetails {
  name: string;
  flag: string;
  region: string;
  capital: string;
  population: number;
}

const Country: React.FC<CountryDetails> = (props) => {
  const { flag, name, population, region, capital } = props;
  return (
    <CountryDiv>
      <Flag src={flag} />
      <CountryName>{name}</CountryName>
      <Main>
        <InlineDefinitionList>
          <div>
            <dt>Population</dt>
            <dd>{population}</dd>
          </div>
          <div>
            <dt>Region</dt>
            <dd>{region}</dd>
          </div>
          <div>
            <dt>Capital</dt>
            <dd>{capital}</dd>
          </div>
        </InlineDefinitionList>
      </Main>
    </CountryDiv>
  );
};

export default Country;
