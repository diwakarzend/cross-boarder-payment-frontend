import React from "react";
import AnchorLink from "../AnchorLink/AnchorLink";
import { BreadCrumbWrapper, PageTitleWrapper } from "./style";

const BreadCrumb = ({ heading, value }) => {
  const refreshPage = () => {
    window.location.reload();
  }
  return (
    <PageTitleWrapper className="breadcrumb flex item-center space-between">
      <h4>{heading}</h4>
      {/* {heading !== "Dashboard" && (
        <BreadCrumbWrapper className="breadcrumb flex item-center">
          <li>
            <AnchorLink href="/dashboard" className="parent-item">
              Home
            </AnchorLink>

            <i className="fa fa-angle-right separator"></i>
          </li>
          <li className="active">{value}</li>
        </BreadCrumbWrapper>
      )}
      {heading == "Dashboard" &&
        <span className="reload-page">
          <i
            className="fa fa-refresh"
            aria-hidden="true"
            onClick={refreshPage}
          ></i>
        </span>
      } */}
    </PageTitleWrapper>
  );
};

export default BreadCrumb;
