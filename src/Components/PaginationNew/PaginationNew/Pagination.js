import React, { Fragment } from "react";
import * as Styled from "./style";
import { getVisiblePages } from "./PaginationSetting";

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblePages: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const { currentPage, totalPages } = this.props;
      const visible = getVisiblePages(currentPage, totalPages);
      this.setVisiblePage(visible);
    }
  }

  setVisiblePage = (visible) => {
    this.setState({
      visiblePages: visible,
    });
  };

  getHTML = () => {
    const { visiblePages } = this.state;
    const { currentPage } = this.props;
    return visiblePages.map((page, index, array) => {
      const btnClass =
        currentPage + 1 == page ? "pagination-nav active" : "pagination-nav";
      const ActionCta = (
        <button
          type="button"
          className={btnClass}
          onClick={() => this.changePage(page)}
        >
          {page}
        </button>
      );
      return (
        <Fragment>
          {array[index - 1] + 1 < page ? (
            <span key={page} className="threeLine">
              {"..."}
              {ActionCta}
            </span>
          ) : (
            ActionCta
          )}
        </Fragment>
      );
    });
  };

  changePage = (pageValue) => {
    const { totalPages, getCurrentPageData } = this.props;
    if (pageValue && pageValue - 1 !== totalPages) {
      const visible = getVisiblePages(pageValue, totalPages);
      this.setState({
        visiblePages: visible,
      });
      getCurrentPageData(pageValue - 1);
    }
  };

  render() {
    const {
      currentPage,
      previousText = "Prev",
      nextText = "Next",
      totalPages,
    } = this.props;

    if (totalPages && totalPages > 1) {
      return (
        <Styled.pagination>
          <button
            className={currentPage <= 1 ? "prev-btn disabled" : "prev-btn"}
            onClick={() => this.changePage(currentPage - 1)}
            type="button"
          >
            {previousText}
          </button>

          {this.getHTML()}

          <button
            className={
              totalPages !== currentPage ? "next-btn" : "next-btn disabled"
            }
            onClick={() => this.changePage(currentPage + 1)}
            type="button"
          >
            {nextText}
          </button>
        </Styled.pagination>
      );
    }
    return null;
  }
}
