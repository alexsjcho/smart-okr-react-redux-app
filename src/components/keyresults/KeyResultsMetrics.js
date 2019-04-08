import React from "react";

//Bootstrap-React
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Components
import MetricMenu from "./MetricMenu";

const KeyResultsMetrics = () => {
  return (
    <Container>
      <Row>
        <Col xs={4} md={4}>
          <InputGroup>
            <InputGroup.Prepend />
            <FormControl aria-label="Percentage to completion)" />
            <InputGroup.Append>
              <InputGroup.Text>
                {" "}
                <MetricMenu />{" "}
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default KeyResultsMetrics;
