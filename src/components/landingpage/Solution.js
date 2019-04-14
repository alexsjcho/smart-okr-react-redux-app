import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Solution = () => {
  return (
    <Container>
      <br />
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Set Your Objectives</Card.Title>
              <Card.Text>
                Create your goals based on S.M.A.R.T goal setting principals
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">OKR Methodology</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Automate Your Key Results</Card.Title>
              <Card.Text>
                Integrate your key results with your daily tools like Google
                Calendar, Salesforce, and more
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Integrated Tools</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Take Action and Track</Card.Title>
              <Card.Text>
                Watch your goals update as you use your daily tools everyday
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Real Time Tracking</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default Solution;
