import { useState } from "react";

const usePagination = (results, resultPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastResult = currentPage * resultPerPage;
  const indexOfFirstResult = indexOfLastResult - resultPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalResult = results.length;

  return [currentResults, paginate, totalResult];
};

export default usePagination;
