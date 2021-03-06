import React, { useState, useCallback } from "react";
import Results from "../components/Results";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resultPerPage] = useState(10);
  const [currentResults, paginate, totalResult] = usePagination(
    results,
    resultPerPage
  );

  // Define searchHistory state
  //   const [searchHistory, setSearchHistory] = useState([]);

  //   should move this to .env of constant file
  const baseAPI = "https://help-search-api-prod.herokuapp.com/search?query=";

  // handle change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //   TODO - when the user hit back, show the last query result
  //   1. Listen the history API when user click back and call history.go(1) to prevent back event
  //   2. Get previous search terms with setSearchTerm(searchHistory[searchHistory.length - 2]);
  //   3. Then call fetchRequest

  // handle submit
  const handleSubmit = () => {
    const encodedTerm = encodeURI(searchTerm);
    setLoading(true);
    fetch(`${baseAPI}${encodedTerm}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((results) => {
        setResults(results.results);
        setLoading(false);
        // update search history
        // setSearchHistory([...searchHistory, searchTerm]);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const fetchRequest = useCallback(handleSubmit, [searchTerm]);

  // click submit
  const clickSubmit = () => {
    fetchRequest();
  };

  // click enter
  const clickEnter = (e) => {
    if (e.key === "Enter") {
      fetchRequest();
    }
  };

  return (
    <main>
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={clickEnter}
        />

        <button className="search-button" type="submit" onClick={clickSubmit}>
          Search
        </button>
      </div>

      <Results
        currentResults={currentResults}
        loading={loading}
        total={totalResult}
      />
      <Pagination
        resultPerPage={resultPerPage}
        totalResults={totalResult}
        paginate={paginate}
      />
    </main>
  );
};

export default Search;
