import React from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import { RiMovie2Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi"

const Navbarr = () => {
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect
      fixed="top" style={{ zIndex: 2 }} className="navbar navbar-light">
      <Container fluid>
        <span className="navbar-brand">
          <span className="heading">Capital Movies</span>
          <span className="mx-2 "><RiMovie2Fill size={35} /></span>
          <hr />
          <hr className="hr-2" />
        </span>
        <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" ><GiHamburgerMenu size={30} /></Navbar.Toggle>
        <Navbar.Collapse className="collapse" id="basic-navbar-nav">
          <Nav className="ms-auto navbar-nav">

            <Nav.Link className="nav-link" href="/login">Sign In</Nav.Link>
            <Nav.Link className="nav-link" href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navbarr;