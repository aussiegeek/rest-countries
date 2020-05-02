import React from "react";
import styled from "styled-components/macro";
import { Heading1 } from "./Headings";
import { Country } from "../types";

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

type CountryDetailProps = Country;

export default function CountryDetail(props: CountryDetailProps) {
  return (
    <div>
      <Flag src={props.flag} />
      <Heading1>{props.name}</Heading1>

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
