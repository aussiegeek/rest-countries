import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import CountryDetail from "./CountryDetail";

const MiniDetail = (
  <CountryDetail
    flagUrl="https://restcountries.eu/data/bel.svg"
    countryName="Belgium"
    population={11319511}
    region="Europe"
    capital="Brussels"
  />
);

test("it includes the population", () => {
  const { getByText } = render(MiniDetail);
  const population = getByText(/11319511/i);
  expect(population).toBeInTheDocument();
});

test("snapshot", () => {
  const component = renderer.create(MiniDetail);

  let tree = component.toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div>
      <img
        className="CountryDetail__Flag-sc-1k6v274-0 jGcawU"
        src="https://restcountries.eu/data/bel.svg"
      />
      <h1
        className="Headings__Heading1-hoq1z9-0 ecGIHq"
      >
        Belgium
      </h1>
      <dl
        className="CountryDetail__InlineDefinitionList-sc-1k6v274-1 bVBbJe"
      >
        <div>
          <dt>
            Population
          </dt>
          <dd>
            11319511
          </dd>
        </div>
        <div>
          <dt>
            Region
          </dt>
          <dd>
            Europe
          </dd>
        </div>
        <div>
          <dt>
            Capital
          </dt>
          <dd>
            Brussels
          </dd>
        </div>
      </dl>
    </div>
  `);
});
