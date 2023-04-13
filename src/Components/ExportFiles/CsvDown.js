import React, { useState, useRef } from "react";
import { CSVLink } from "react-csv";
import Request from "../../utils/Request";
import { Button,BorderBtn } from "../../Components/UI/StyledConstants";

const CsvDown = ({
  headers,
  url,
  params,
  method,
  title = "DOWNLOAD CSV.",
  contentType,
  reportName = "Report.csv",
}) => {
  const [data, setData] = useState([]);
  const csvLinkRef = useRef(null);

  const downloadReport = () => {
    getUserList();
  };

  const getUserList = () => {
    const successHandler = (res) => {
      if (res && res.data) {
        console.log("res===>", res);
        setData(res.data);
        setTimeout(() => {
          csvLinkRef.current.link.click();
        }, 0);
      }
    };
    const errorHandler = () => {};

    const api = new Request("", successHandler, errorHandler, false);
    if (method == "get") {
      api.get(url);
    } else {
      api.post(url, params);
    }
  };

  return (
    <>
      <CSVLink
        className="flex"
        data={data}
        headers={headers}
        filename={reportName}
        ref={csvLinkRef}
      ></CSVLink>
      {url ? (
        <BorderBtn onClick={downloadReport} className="btn-soft-success">
          <i className="fa fa-download" aria-hidden="true"></i> CSV
        </BorderBtn>
      ) : (
        <BorderBtn className="btn-soft-success"> <i className="fa fa-download" aria-hidden="true"></i> CSV</BorderBtn>
      )}
    </>
  );
};

export default CsvDown;
