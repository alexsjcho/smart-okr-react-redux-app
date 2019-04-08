import React, { Fragment } from "react";
import Select from "react-select";

const options = [
  { value: "dollar", label: "$" },
  { value: "percentage", label: "%" },
  { value: "unit", label: "#" }
];

const MetricMenu = () => {
  return (
    <Fragment>
      <Select options={options} />
    </Fragment>
  );
};

export default MetricMenu;
