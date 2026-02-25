import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import Results from "../../components/Results";
import API from "../../utils/API";

const Save = () => {
  const [resultsState, setResultsState] = useState([]);
  const [showAlert, setShowAlert] = useState("");
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    getSavedBooks();
  }, []);

  const getSavedBooks = () => {
    API.getBooks()
      .then((res) => {
        setResultsState(res.data || []);
        setRequestError("");
      })
      .catch(() => {
        setRequestError("Unable to load your saved shelf right now.");
      });
  };

  const deleteBook = (id, index) => {
    API.deleteBook(id)
      .then(() => {
        setRequestError("");
        showDeletedBookAlert(index);
      })
      .catch(() => {
        setRequestError("Unable to remove this book right now.");
      });
  };

  const showDeletedBookAlert = (index) => {
    setShowAlert(index);
    setTimeout(() => {
      setShowAlert("");
      getSavedBooks();
    }, 1800);
  };

  const handleDeleteClick = (id, index) => {
    deleteBook(id, index);
  };

  return (
    <section className="page-shell">
      {requestError ? (
        <Alert className="status-alert" variant="danger">
          {requestError}
        </Alert>
      ) : null}

      <Results
        title={"Saved Books"}
        results={resultsState}
        showAlert={showAlert}
        handleDeleteClick={handleDeleteClick}
      />
    </section>
  );
};

export default Save;
