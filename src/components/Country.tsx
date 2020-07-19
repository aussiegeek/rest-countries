import React from "react";
import styled from "styled-components/macro";
import { Heading2 } from "./Headings";
import InlineDefinitionList from "./InlineDefinitionList";
import { Country as GraphQLCountry } from "../generated/graphql";
import { regionNameMapping } from "../regionNameMapping";

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

export type CountryProps = Pick<
  GraphQLCountry,
  "name" | "flagURL" | "region" | "capitalCities"
>;

const Country: React.FC<CountryProps> = (props) => {
  const { flagURL, name, region, capitalCities } = props;
  return (
    <CountryDiv>
      <Flag src={flagURL} />
      <CountryName>{name}</CountryName>
      <Main>
        <InlineDefinitionList>
          <div>
            <dt>Region</dt>
            <dd>{regionNameMapping[region]}</dd>
          </div>
          <div>
            <dt>Capital</dt>
            <dd>{capitalCities.join(", ")}</dd>
          </div>
        </InlineDefinitionList>
      </Main>
    </CountryDiv>
  );
};

export default Country;
