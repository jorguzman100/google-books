import React from "react";
import { Card, Alert, Badge } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import BookCard from "../BookCard.js";
import "./Results.css";

const PLACEHOLDER_COVER = `${process.env.PUBLIC_URL}/images/book-placeholder.svg`;

const Results = ({
  title,
  results,
  showAlert,
  handleSaveClick,
  handleDeleteClick
}) => {
  const location = useLocation();
  const isSavePage = location.pathname === "/Save";
  const activeAlertIndex = parseInt(showAlert, 10);

  const normalizedResults = (results || []).reduce((accumulator, book, index) => {
    if (!book) {
      return accumulator;
    }

    if (!isSavePage) {
      if (!book.volumeInfo) {
        return accumulator;
      }

      const volumeInfo = book.volumeInfo;
      accumulator.push({
        index,
        _id: book.id,
        title: volumeInfo.title || "Untitled",
        subtitle: volumeInfo.subtitle,
        authors: volumeInfo.authors,
        description: volumeInfo.description,
        image: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : PLACEHOLDER_COVER,
        link: volumeInfo.infoLink
      });

      return accumulator;
    }

    accumulator.push({
      index,
      _id: book._id,
      title: book.title || "Untitled",
      subtitle: book.subtitle,
      authors: book.authors,
      description: book.description,
      image: book.image || PLACEHOLDER_COVER,
      link: book.link
    });

    return accumulator;
  }, []);

  return (
    <Card className="results-panel">
      <Card.Header className="results-panel-header">
        <div>
          <p className="results-kicker">{isSavePage ? "Saved Collection" : "Live Search"}</p>
          <h2>{title}</h2>
        </div>
        <Badge className="results-count" pill>
          {normalizedResults.length} {normalizedResults.length === 1 ? "book" : "books"}
        </Badge>
      </Card.Header>

      <Card.Body className="results-panel-body">
        {normalizedResults.length === 0 ? (
          <div className="results-empty-state">
            <img
              src={`${process.env.PUBLIC_URL}/brand-mark.svg`}
              className="results-empty-icon"
              alt="ShelfSpark icon"
            />
            <h3>{isSavePage ? "Your shelf is empty" : "Start with a search"}</h3>
            <p>
              {isSavePage
                ? "Books you save will appear here so you can quickly revisit them later."
                : "Type a title, author, or topic above to reveal book recommendations."}
            </p>
          </div>
        ) : (
          normalizedResults.map((book) => (
            <div key={`${book._id}-${book.index}`} className="results-item">
              <BookCard
                title={book.title}
                subtitle={book.subtitle}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
                handleSaveClick={() =>
                  handleSaveClick ? handleSaveClick(book.index) : undefined
                }
                handleDeleteClick={() =>
                  handleDeleteClick
                    ? handleDeleteClick(book._id, book.index)
                    : undefined
                }
              />
              {!Number.isNaN(activeAlertIndex) && activeAlertIndex === book.index ? (
                <Alert className="book-feedback-alert" variant={isSavePage ? "warning" : "success"}>
                  {isSavePage
                    ? "Book removed from your saved shelf."
                    : "Book saved to your shelf."}
                </Alert>
              ) : null}
            </div>
          ))
        )}
      </Card.Body>
    </Card>
  );
};

export default Results;
