import React, { Fragment } from "react";
import Select from "react-select";

const ToolsImageSelector = (onChange, toolOption) => {
  const options = [
    { value: "google_calendar", label: "Google Calendar" },
    { value: "salesforce", label: "Salesforce" },
    { value: "zendesk", label: "Zendesk" },
    { value: "mint", label: "Mint" },
    { value: "marketo", label: "Marketo" },
    { value: "github", label: "GitHub" },
    { value: "trello", label: "Trello" }
  ];

  return (
    <Fragment>
      <Select
        style={{ fontSize: "12px" }}
        name="toolOption"
        value={toolOption}
        onChange={onChange}
        options={options}
      />
    </Fragment>
  );
};

export default ToolsImageSelector;
