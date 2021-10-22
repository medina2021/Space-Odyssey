import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

import { useHistory } from "react-router-dom";
const NavbarComponent = () => {
  const history = useHistory();
  const signout = () => {
    localStorage.setItem("token", "");
    history.push("/");
  };
  return (
    <Navbar variant="light" bg="light" expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#home">
          <i class="fas fa-starship-freighter"></i>
          <strong>Space Oddyssey</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Homepage">Home</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              menuVariant="light"
            >
              <Nav.Link href="/Mars">Mars</Nav.Link>
              <Nav.Link href="/Moon">Moon</Nav.Link>
              <Nav.Link href="/Andromeda">Andromeda</Nav.Link>
            </NavDropdown>
          </Nav>
          <div class="registration">
            <Nav className="me-auto sign-out">
              <Nav.Link onClick={() => signout()}>Sign-out</Nav.Link>
            </Nav>
            <Nav className="me-auto log-in">
              <Nav.Link onClick={() => signout()}>Register/Log in</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
