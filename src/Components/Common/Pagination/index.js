import React, { Fragment, useState, useEffect } from "react";
import * as Styled from "./style";
import { getVisiblePages } from "./settings";

const Pagination = ({
  className = "",
  currentPage,
  totalPages,
  getCurrentPageData = () => {},
  previousText = "",
  nextText = "",
}) => {
  const [visiblePages, setVisiblePage] = useState([]);

  useEffect(() => {
    const visible = getVisiblePages(currentPage, totalPages);
    setVisiblePage(visible);
  }, [currentPage, totalPages]);

  const changePage = (pageValue) => {
    if (pageValue && pageValue - 1 !== totalPages) {
      const visible = getVisiblePages(pageValue, totalPages);
      setVisiblePage(visible);
      getCurrentPageData(pageValue);
    }
  };

  const getHTML = () => {
    return visiblePages.map((page, index, array) => {
      const btnClass = currentPage !== page ? "pagination-nav" : "pagination-nav active";
      const ActionCta = (
        <button type="button" className={btnClass} onClick={() => changePage(page)}>
          {page}
        </button>
      );
      return (
        <Fragment key={`pagi-${index}`}>
          {array[index - 1] + 1 < page ? (
            <>
              <span key={page} className="threeLine">
                {"..."}
              </span>
              {ActionCta}
            </>
          ) : (
            ActionCta
          )}
        </Fragment>
      );
    });
  };

  return (
    <Styled.pagination>
      <button
        className={currentPage <= 1 ? "prev-btn disabled" : "prev-btn"}
        onClick={() => changePage(currentPage - 1)}
        type="button"
      >
        {previousText}
      </button>

      {getHTML()}

      <button
        className={totalPages !== currentPage ? "next-btn" : "next-btn disabled"}
        onClick={() => changePage(currentPage + 1)}
        type="button"
      >
        {nextText}
      </button>
    </Styled.pagination>
  );
};

export default React.memo(Pagination);
