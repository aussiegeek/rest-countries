import React, { ReactElement } from "react";
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

export default function CountryDetail({
  flag,
  name,
  population,
  region,
  capital,
}: CountryDetailProps): ReactElement {
  return (
    <div>
      <Flag src={flag} />
      <Heading1>{name}</Heading1>

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
    </div>
  );
}
