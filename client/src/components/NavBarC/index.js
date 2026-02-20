import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NavBarC({ theme, onToggleTheme, toggleLabel }) {
  const location = useLocation();
  const searchRouteIsActive =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/Search";

  return (
    <Navbar expand="lg" className="gb-navbar">
      <Navbar.Brand as={Link} to="/Search" className="gb-brand">
        <span className="gb-brand-mark-wrap" aria-hidden="true">
          <img
            src={`${process.env.PUBLIC_URL}/brand-mark.svg`}
            className="gb-brand-mark"
            alt=""
          />
        </span>
        <span className="gb-brand-copy">
          <span className="gb-brand-title">ShelfSpark</span>
          <span className="gb-brand-subtitle">Discover stories in style</span>
        </span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="gb-navbar-nav" />
      <Navbar.Collapse id="gb-navbar-nav" className="justify-content-end">
        <Nav className="align-items-lg-center gb-nav-links">
          <Nav.Link
            as={Link}
            to="/Search"
            className={`gb-nav-link ${searchRouteIsActive ? "is-active" : ""}`}
          >
            Explore
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Save"
            className={`gb-nav-link ${location.pathname === "/Save" ? "is-active" : ""}`}
          >
            Saved Shelf
          </Nav.Link>
          <Button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={toggleLabel}
          >
            <span
              className={`theme-toggle-orb ${theme === "dark" ? "is-dark" : ""}`}
              aria-hidden="true"
            />
            <span className="theme-toggle-text">
              {theme === "dark" ? "Dark" : "Light"} mode
            </span>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarC;
