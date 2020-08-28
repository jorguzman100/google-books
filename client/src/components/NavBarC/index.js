import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";

function NavBarC() {
  const location = useLocation();

  return (
    <Navbar bg="primary" variant="dark" sticky="top" expand="sm">
      <Link to="/Search">
        <Navbar.Brand>Google Books</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/Search" className={location.pathname === "/Search" ? "nav-link active" : "nav-link"}>
            Search
        </Link>
          <Link to="/Save" className={location.pathname === "/Save" ? "nav-link active" : "nav-link"}>Save</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarC;
