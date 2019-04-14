import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Solution = () => {
  return (
    <Container>
      <Container className="d-flex justify-content-center bg-success">
        <br />
        <h3>SOKR Solution</h3>
        <br />
      </Container>
      <Row>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://activerain-store.s3.amazonaws.com/blog_entries/127/5320127/original/OKRs.png?1547466712"
            />
            <Card.Body>
              <Card.Title>1. Set Your Objectives</Card.Title>
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
            <Card.Img
              variant="top"
              src="https://blogs.thomsonreuters.com/answerson/wp-content/uploads/sites/3/2015/12/117579327-adobe-conveyor-belt-boxes-800x450.jpg"
            />
            <Card.Body>
              <Card.Title>2. Automate Your Key Results</Card.Title>
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
            <Card.Img
              variant="top"
              src="https://marketingland.com/wp-content/ml-loads/2014/02/analytics-600.jpg"
            />
            <Card.Body>
              <Card.Title>3. Take Action and Track</Card.Title>
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
