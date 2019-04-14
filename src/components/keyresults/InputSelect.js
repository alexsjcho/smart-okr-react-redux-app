import React from "react";
import Select from "react-select";

const InputSelect = ({ name, onChange, initialValue, options }) => (
  <Select
    style={{ fontSize: "12px" }}
    name={name}
    options={options}
    onChange={selectedOption =>
      onChange({
        name,
        selectedOption
      })
    }
    value={initialValue}
  />
);

export default InputSelect;
