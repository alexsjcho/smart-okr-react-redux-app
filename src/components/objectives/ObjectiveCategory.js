import React, { Fragment } from "react";
import Select from "react-select";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ObjectiveCategory = () => {
  const options = [
    { value: "sales", label: "Sales" },
    { value: "product", label: "Product" },
    { value: "engineering", label: "Engineering" }
  ];

  return (
    <Fragment>
      <div className="container">
        <Row>
          <Col xs={{ order: 1 }}>
            <Select options={options} />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default ObjectiveCategory;
