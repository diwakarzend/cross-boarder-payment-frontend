import React, { useState, useEffect, useRef } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import Request from "../../utils/Request";
import urls from "../../utils/urls";

const CSVExport = (props) => {
  const { payout, dispatch } = props;
  const csvLink = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      setTimeout(() => {
        csvLink.current.link.click();
      }, 2000);
    }
  }, [data]);
  const downloadCSV = () => {
    const onSuccess = (response) => {
      setData(response.data.content);
    };

    const onFail = (error) => {};

    const api = new Request(dispatch, onSuccess, onFail, false);
    api.post(`${urls.login.BASE_URL}${urls.payout.TRANSACTION_REPORT}`, {
      status: "DONE",
    });
  };
  const headers = [
    {
      label: "name",
      key: "name",
    },
    {
      label: "Age",
      key: "age",
    },
    {
      label: "Add",
      key: "add",
    },
  ];

  const reportsItems = payout && payout.reports && payout.reports.data;
  console.log("reportsItemsd", data);
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn-common"
        onClick={() => downloadCSV()}
      >
        CSV
      </button>
      <CSVLink
        //  headers={headers}
        data={data}
        filename="reports.csv"
        ref={csvLink}
      />
    </React.Fragment>
  );
};

export default React.memo(CSVExport);
