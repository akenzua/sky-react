import React from "react";

const Pagination = ({ resultPerPage, totalResults, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number}>
          <a onClick={() => paginate(number)} href="/#">
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
