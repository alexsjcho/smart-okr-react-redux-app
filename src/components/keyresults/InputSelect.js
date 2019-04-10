import React, { Fragment } from "react";
import Select from "react-select";

const options = [
  { value: "dollar", label: "$" },
  { value: "percentage", label: "%" },
  { value: "unit", label: "#" }
];

const InputSelect = ({ name, onChange, initialValue, options }) => (
  <Select
    name={name}
    value={initialValue}
    onChange={selectedOption =>
      onChange({
        name,
        selectedOption
      })
    }
    options={options}
  />
);

export default InputSelect;
