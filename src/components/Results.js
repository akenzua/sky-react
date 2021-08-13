import React from "react";

const Results = ({ currentResults }) => {
  return (
    <div className="results">
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
