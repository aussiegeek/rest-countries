import React, { ReactElement } from "react";
import FetchCountries from "./components/FetchCountries";
import CountryList from "./CountryList";

function App(): ReactElement {
  return (
    <div className="App">
      <FetchCountries
        render={(countries): ReactElement => (
          <CountryList countries={countries} />
        )}
      />
    </div>
  );
}

export default App;
