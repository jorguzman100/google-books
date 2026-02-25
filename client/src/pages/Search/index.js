import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import BookSearch from "../../components/BookSearch";
import Results from "../../components/Results";
import GoogleAPI from "../../utils/GoogleAPI";
import API from "../../utils/API";

const PLACEHOLDER_COVER = `${process.env.PUBLIC_URL}/images/book-placeholder.svg`;

const Search = () => {
  const [searchState, setSearchState] = useState({
    search: ""
  });
  const [resultsState, setResultsState] = useState([]);
  const [showAlert, setShowAlert] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const searchBooks = (query) => {
    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
      setRequestError("Add a search term first so we can fetch recommendations.");
      setResultsState([]);
      return;
    }

    setHasSearched(true);
    setIsLoading(true);
    setRequestError("");

    GoogleAPI.search(normalizedQuery)
      .then((res) => {
        setResultsState(res && res.data && res.data.items ? res.data.items : []);
        setRequestError("");
      })
      .catch(() => {
        setRequestError("Book search is unavailable right now. Please try again.");
        setResultsState([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const saveBook = (book, index) => {
    API.saveBook(book)
      .then(() => {
        setRequestError("");
        showSavedBookAlert(index);
      })
      .catch(() => {
        setRequestError("Unable to save this book right now. Please try again.");
      });
  };

  const showSavedBookAlert = (index) => {
    setShowAlert(index);
    setTimeout(() => {
      setShowAlert("");
    }, 2500);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchState({ [name]: value });

    if (requestError) {
      setRequestError("");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchBooks(searchState.search);
  };

  const handleSaveClick = (index) => {
    const selectedResult = resultsState[index];
    const volumeInfo = selectedResult ? selectedResult.volumeInfo : undefined;

    if (!selectedResult || !volumeInfo) {
      return;
    }

    const image = volumeInfo.imageLinks
      ? volumeInfo.imageLinks.thumbnail
      : PLACEHOLDER_COVER;

    const book = {
      _id: selectedResult.id,
      title: volumeInfo.title,
      subtitle: volumeInfo.subtitle,
      authors: volumeInfo.authors,
      description: volumeInfo.description,
      image,
      link: volumeInfo.infoLink
    };

    saveBook(book, index);
  };

  return (
    <section className="page-shell">
      <BookSearch
        search={searchState.search}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        isLoading={isLoading}
      />

      {requestError ? (
        <Alert className="status-alert" variant="danger">
          {requestError}
        </Alert>
      ) : null}

      <Results
        title={hasSearched ? "Search Results" : "Discover Books"}
        results={resultsState}
        showAlert={showAlert}
        handleSaveClick={handleSaveClick}
      />
    </section>
  );
};

export default Search;
