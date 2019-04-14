import React from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Problem = () => {
  return (
    <Container>
      <Container className="d-flex justify-content-center bg-warning">
        <h3>Common Challenges</h3>
      </Container>
      <br />
      <Row>
        <Col>
          <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                "We don't how our efforts are contributing to the company or
                other departments in our organization"
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Individual Contributor, Manager, Executives
                  <cite title="Source Title">
                    -> Some Department In Some Company
                  </cite>
                </small>
              </footer>
            </blockquote>
          </Card>
        </Col>
        <Col>
          <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                " I know I need to set meaningful goals to get to the next
                level, but I'm too busy to manually update my goals
                consistently"
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Solopreneur
                  <cite title="Source Title"> -> At Me, Myself, & I Inc</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
        </Col>

        <Col>
          <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                "I want my family to work towards a common goal and have
                visibility into whats important for each member about their
                life"
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Parent, Significant Other, Friends{" "}
                  <cite title="Source Title"> -> People in Our Lives</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default Problem;
