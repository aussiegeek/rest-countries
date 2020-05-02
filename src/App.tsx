import React from "react";
import FetchCountries from "./components/FetchCountries";
import CountryList from "./CountryList";

function App() {
  return (
    <div className="App">
      <FetchCountries
        render={(countries) => <CountryList countries={countries} />}
      />
    </div>
  );
}

export default App;
