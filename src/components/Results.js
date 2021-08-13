import React from "react";

const Results = ({ currentResults, loading, total }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="results">
      <p className="results-count">Your search returned {total} results</p>
      {currentResults.map((result, i) => (
        <a
          className="result"
          key={i}
          href={result.url}
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="result-title">{result.title}</h1>

          <p>{result.description}</p>
        </a>
      ))}
    </div>
  );
};

export default Results;
