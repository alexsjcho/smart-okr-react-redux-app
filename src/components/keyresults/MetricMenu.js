import React, { Fragment } from "react";
import Select from "react-select";

const options = [
  { value: "dollar", label: "$" },
  { value: "percentage", label: "%" },
  { value: "unit", label: "#" }
];

const MetricMenu = ({ onChange, unitCategory }) => {
  return (
    <Fragment>
      <Select
        name="unitCategory"
        value={unitCategory}
        onChange={onChange}
        options={options}
      />
    </Fragment>
  );
};

export default MetricMenu;
