import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const NavbarComponent = () => {
  const history = useHistory();
  const signout = () => {
    localStorage.setItem("token", "");
    history.push("/");
  };
  return (
    <Navbar variant="light" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Space Oddyssey</Navbar.Brand>
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
          <Nav className="me-auto">
            <Nav.Link onClick={() => signout()}>Sign-out</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link onClick={() => signout()}>Register/Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
