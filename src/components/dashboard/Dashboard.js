import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import WeeklyItemsProgressBar from "./WeeklyItemsProgressBar";
import AllObjectiveProgressBar from "./AllObjectiveProgressBar";

const Dashboard = () => {
  // const { objectivesList } = this.props;

  // let currentAllObjectiveProgressValue = objectivesList.reduce(
  //   (accumulator, objectivesList) =>
  //     accumulator + parseInt(objectiveList.currentSumUnit),
  //   0
  // );
  // let targetAllObjectiveProgressValue = objectiveList.reduce(
  //   (accumulator, objectivesList) =>
  //     accumulator + parseInt(objectiveList.sumTargetUnit),
  //   0
  // );

  return (
    <Container>
      <Row>
        <Col>
          <WeeklyItemsProgressBar />
        </Col>

        <Col>
          <AllObjectiveProgressBar
          // value={currentAllObjectiveProgressValue}
          // targetValue={targetAllObjectiveProgressValue}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
