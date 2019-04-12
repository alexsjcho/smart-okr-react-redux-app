import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import WeeklyItemsProgressBar from "./WeeklyItemsProgressBar";
import AllObjectiveProgressBar from "./AllObjectiveProgressBar";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <WeeklyItemsProgressBar />
        </Col>

        <Col>
          <AllObjectiveProgressBar />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
