import React, { useState } from "react";
import { useQuery } from "react-query";
import BreweryFilter from "../components/BreweryFilter";
import BreweryList from "../components/BreweryList";

const ListPage = () => {
  const [stateFilter, setStateFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const { status, data } = useQuery(
    ["Brewers", stateFilter, typeFilter],
    () =>
      fetch(
        `https://api.openbrewerydb.org/breweries?by_state=${stateFilter}&by_type=${typeFilter}&per_page=100`
      ).then((res) => res.json()),
    { onError: (error) => console.log(error) }
  );

  const handleStateChange = (event) => {
    setStateFilter(event.target.value);
  };
  const handleTypeChange = (event) => {
    setTypeFilter(event.target.value);
  };
  const handleReset = (event) => {
    setStateFilter("");
    setTypeFilter("");
  };

  return (
    <>
      {status !== "success" ? (
        <div>Loading....</div>
      ) : (
        <>
          <BreweryFilter
            data={data}
            stateFilter={stateFilter}
            typeFilter={typeFilter}
            onStateChange={handleStateChange}
            onTypeChange={handleTypeChange}
            onReset={handleReset}
          />
          <BreweryList data={data} />
        </>
      )}
    </>
  );
};
export default ListPage;
