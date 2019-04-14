import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const AppNavBar = () => {
  return (
    <Fragment>
      <br />
      <br />
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top">
        <Navbar.Brand>SOKR</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/"> Home </Link>
            </Nav.Link>
            <Nav.Link href="#demo">
              <Link to="/demo"> Demo </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default AppNavBar;
