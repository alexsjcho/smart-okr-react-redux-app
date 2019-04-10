import React, { Fragment } from "react";
import Select from "react-select";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ToolsImageSelector = (onChange, tool) => {
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
      <div className="container">
        <Row>
          <Col xs={{ order: 1 }}>
            <Select value={tool} onChange={onChange} options={options} />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default ToolsImageSelector;
