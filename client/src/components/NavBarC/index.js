import React from "react";
import { Navbar, Nav } from 'react-bootstrap';


function NavBarC() {
  return (
    <Navbar bg="primary" variant="dark" sticky="top" expand="sm">
      <Navbar.Brand href="#home">Google Books</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Search">Search</Nav.Link>
          <Nav.Link href="/Save">Save</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarC;
