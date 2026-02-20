import React from "react";
import { Card, Row, Col, Button, Badge } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./BookCard.css";

const BookCard = ({
  title,
  subtitle,
  authors,
  description,
  image,
  link,
  handleSaveClick,
  handleDeleteClick
}) => {
  const location = useLocation();
  const isSearchPage =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/Search";

  const authorText = Array.isArray(authors)
    ? authors.join(", ")
    : authors || "Unknown author";

  const sanitizedSubtitle = subtitle || "No subtitle provided";
  const sanitizedDescription =
    description || "No description is available for this book yet.";

  return (
    <Card className="book-card">
      <Card.Body>
        <Row className="align-items-start">
          <Col md={9}>
            <div className="book-copy">
              <Badge className="book-badge" variant="light">
                {isSearchPage ? "Live result" : "Saved book"}
              </Badge>
              <Card.Title className="book-title">{title}</Card.Title>
              <Card.Subtitle className="book-subtitle">{sanitizedSubtitle}</Card.Subtitle>
              <p className="book-authors">By {authorText}</p>
            </div>
          </Col>

          <Col md={3} className="book-actions-col">
            <Button
              as="a"
              href={link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="book-action-btn book-action-view"
              onClick={!link ? (event) => event.preventDefault() : undefined}
            >
              Read Preview
            </Button>

            {isSearchPage ? (
              <Button
                className="book-action-btn book-action-save"
                onClick={handleSaveClick}
              >
                Save Book
              </Button>
            ) : (
              <Button
                className="book-action-btn book-action-delete"
                onClick={handleDeleteClick}
              >
                Delete Book
              </Button>
            )}
          </Col>
        </Row>

        <Row className="align-items-start mt-3">
          <Col xs={4} sm={3} md={2}>
            <img className="book-cover" src={image} alt={`Cover for ${title}`} />
          </Col>
          <Col xs={8} sm={9} md={10}>
            <Card.Text className="book-description">{sanitizedDescription}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
