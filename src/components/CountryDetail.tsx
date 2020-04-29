import React from "react";
import styled from "styled-components/macro";
import { Heading1 } from "./Headings";

const Flag = styled.img``;
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

interface CountryDetailProps {
  flagUrl: string;
  countryName: string;
  population: number;
  region: string;
  capital: string;
}

export default function CountryDetail(props: CountryDetailProps) {
  return (
    <div>
      <Flag src={props.flagUrl} />
      <Heading1>{props.countryName}</Heading1>

      <InlineDefinitionList>
        <div>
          <dt>Population</dt>
          <dd>{props.population}</dd>
        </div>
        <div>
          <dt>Region</dt>
          <dd>{props.region}</dd>
        </div>
        <div>
          <dt>Capital</dt>
          <dd>{props.capital}</dd>
        </div>
      </InlineDefinitionList>
    </div>
  );
}
