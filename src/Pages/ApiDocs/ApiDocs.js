import React, { useState } from "react";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Wrapper } from "./style";
const ApiDocs = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scaleNumber, setScaleNumber] = useState(1.0);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Wrapper>
      <div className="pdf-btn-wrap flex space-between item-center">
        <div className="download-wrap flex space-between">
          <button
            disabled={scaleNumber === 0.25}
            onClick={() => setScaleNumber(scaleNumber - 0.25)}
          >
            <i class="fa fa-search-minus" aria-hidden="true"></i>
          </button>
          <button
            disabled={scaleNumber === 1}
            onClick={() => setScaleNumber(1.0)}
          >
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
          <button
            disabled={scaleNumber === 2}
            onClick={() => setScaleNumber(scaleNumber + 0.25)}
          >
            <i class="fa fa-search-plus" aria-hidden="true"></i>
          </button>
        </div>
        <div className="page-count">
          Page {pageNumber} of {numPages}
        </div>
        <div className="next-prev flex space-between">
          <button
            disabled={pageNumber === 1}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button
            disabled={pageNumber === numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
          <button className="download">
            <a href="/images/TEXTAGRAM-API-INTEGRATION-KIT.pdf" download>
              <i className="fa fa-download"></i>
            </a>
          </button>
        </div>
      </div>

      <Document
        file="/images/TEXTAGRAM-API-INTEGRATION-KIT.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} scale={scaleNumber} />
      </Document>
    </Wrapper>
  );
};

export default ApiDocs;
