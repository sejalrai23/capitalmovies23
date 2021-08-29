import React from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import { RiMovie2Fill } from "react-icons/ri"

const Navbarr = () => {
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect
      fixed="top" style={{ zIndex: 2 }} className="navbar">
      <Container>
        <Navbar.Brand href="#">
          <Row>
            <Col md={9}>Capital Movies</Col>
            <Col md={3}><RiMovie2Fill /></Col>
          </Row>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/login">Sign In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navbarr;