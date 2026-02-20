import React from "react";
import { Card, Form, FormControl, Button } from "react-bootstrap";
import "./BookSearch.css";

const BookSearch = ({ search, handleInputChange, handleFormSubmit, isLoading }) => {
  return (
    <Card className="search-panel">
      <Card.Body className="search-panel-body">
        <div className="search-panel-header">
          <p className="search-kicker">Book Discovery Studio</p>
          <h1>What are you reading next?</h1>
          <p>
            Search by title, topic, or author and turn your browsing session into
            a polished personal shelf.
          </p>
        </div>

        <Form className="search-form" onSubmit={handleFormSubmit}>
          <FormControl
            type="text"
            placeholder="Try: architecture, stoicism, UX writing..."
            className="search-input"
            name="search"
            value={search}
            onChange={handleInputChange}
            aria-label="Search books"
          />
          <Button className="search-submit-btn" onClick={handleFormSubmit} disabled={isLoading}>
            {isLoading ? "Searching..." : "Search Books"}
          </Button>
        </Form>

        <div className="search-pills" aria-hidden="true">
          <span className="search-pill">Fast search</span>
          <span className="search-pill">Live previews</span>
          <span className="search-pill">One-click save</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookSearch;
