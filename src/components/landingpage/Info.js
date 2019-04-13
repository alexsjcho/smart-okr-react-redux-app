import React from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Info = () => {
  return (
    <Container>
      <h2>About This Project</h2>
      <Row>
        <Col>
          <Card style={{ width: "13rem" }}>
            <Card.Img
              variant="top"
              src="https://images.zapier.com/storage/photos/af6bf297d0e53599a420441668e92111.png?format=jpg"
            />
            <Card.Body>
              <Card.Title>Project Management </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
          <Card style={{ width: "13rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.productplan.com/wp-content/uploads/2014/03/Sample-roadmap.png"
            />
            <Card.Body>
              <Card.Title> Product Roadmap </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">
                {" "}
                <a href="https://cdn.productplan.com/wp-content/uploads/2014/03/Sample-roadmap.png">
                  Google Sheets
                </a>{" "}
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "13rem" }}>
            <Card.Img
              variant="top"
              src="https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg"
            />
            <Card.Body>
              <Card.Title>Source Code</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
          <Card style={{ width: "13rem" }}>
            <Card.Img
              variant="top"
              src="https://www.mraddoil.com/wp-content/uploads/2019/02/OKR-Goal-Management-Framework.png"
            />
            <Card.Body>
              <Card.Title>Blog</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="info">
                {" "}
                <a href="https://www.mraddoil.com/2019/02/10/okrs-goal-management-framework/">
                  Checkout My Blog
                </a>{" "}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
