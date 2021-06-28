import React from "react";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Select } from "@material-ui/core";
import uniq from "lodash.uniq";
import { v4 as uuidv4 } from "uuid";

const BreweryFilter = ({
  data,
  stateFilter,
  typeFilter,
  onStateChange,
  onTypeChange,
  onReset,
}) => {
  const state = uniq(data.map((item) => item.state)).sort();
  const type = uniq(data.map((item) => item.brewery_type)).sort();

  return (
    <>
      <FormControl variant="filled">
        <InputLabel htmlFor="state">State</InputLabel>
        <Select
          native
          value={stateFilter}
          onChange={onStateChange}
          inputProps={{
            name: "State",
            id: "state",
          }}
        >
          <option aria-label="None" value="state">
            All
          </option>
          {state.map((item) => (
            <option key={uuidv4()} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="type">Type</InputLabel>
        <Select
          native
          value={typeFilter}
          onChange={onTypeChange}
          inputProps={{
            name: "Type",
            id: "type",
          }}
        >
          <option aria-label="None" value="type">
            All
          </option>
          {type.map((item) => (
            <option key={uuidv4()} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </FormControl>
      {(stateFilter || typeFilter) && (
        <Button variant="contained" color="primary" onClick={onReset}>
          Reset
        </Button>
      )}
    </>
  );
};
export default BreweryFilter;
