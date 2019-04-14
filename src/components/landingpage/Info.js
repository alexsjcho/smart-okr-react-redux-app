import React, { Fragment } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Info = () => {
  return (
    <Fragment>
      <Container>
        <Container className="d-flex justify-content-center bg-light">
          <h3>About This Project</h3>
        </Container>
        <br />
        <Row>
          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src="https://images.zapier.com/storage/photos/af6bf297d0e53599a420441668e92111.png?format=jpg"
              />
              <Card.Body>
                <Card.Title>Project Management </Card.Title>
                <Card.Text>
                  Check out my Trello cards to manage feature implementations on
                  this project
                </Card.Text>
                <Button variant="warning">
                  <a href="https://trello.com/b/aQDwaNUn/smartokrs">
                    Trello Board
                  </a>{" "}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn.productplan.com/wp-content/uploads/2014/03/Sample-roadmap.png"
              />
              <Card.Body>
                <Card.Title> Product Roadmap </Card.Title>
                <Card.Text>
                  Check out my Google Sheet product development planning
                </Card.Text>
                <Button variant="primary">
                  {" "}
                  <a href="https://docs.google.com/spreadsheets/d/1TXtMZzuoYQbTcidbsaGsN8lnYE67iHUw5Hx8yiXkN7E/edit?usp=sharing">
                    Google Sheets
                  </a>{" "}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg"
              />
              <Card.Body>
                <Card.Title>Source Code</Card.Title>
                <Card.Text>
                  Check out my source code implementation of: React, Redux,
                  Bootstrap, Javascript, and other libraries to accomplish this
                  project
                </Card.Text>
                <Button variant="success">
                  {" "}
                  <a href="https://github.com/alexsjcho/smart-okr-react-app">
                    GitHub Repo
                  </a>{" "}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src="https://www.mraddoil.com/wp-content/uploads/2019/02/OKR-Goal-Management-Framework.png"
              />
              <Card.Body>
                <Card.Title>Blog</Card.Title>
                <Card.Text>
                  Check out my blog post I wrote about my OKR goal management
                  strategy and OKR Google Sheet template
                </Card.Text>
                <Button variant="info">
                  {" "}
                  <a href="https://www.mraddoil.com/2019/02/10/okrs-goal-management-framework/">
                    Read Blog
                  </a>{" "}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
      </Container>
      <br />
    </Fragment>
  );
};

export default Info;
