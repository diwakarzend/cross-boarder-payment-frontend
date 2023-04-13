import React, { useState, useEffect } from "react";
//import { connect } from "react-redux";
//import { fetchTransactionReport } from "../../actions/payout";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";
import TableHTML from "./TableHTML";
import { Wrapper } from "./style";
import { getMapqrListing } from "../../utils/api";
//import CSVExport from "../../Components/DataExport/CSVExport";
``;
const MapQR = (props) => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    getMapqrListing({ pageNo: 1, pageSize: 100 }).then((res) => {
      setListData(res?.data?.data);
    });
  }, []);

  return (
    <>
      <BreadCrumb heading="Merchant List" value="Merchant List" />
      <div className="card-wrapper flex-column mb-4">
        {/* <div className="card-header flex item-center space-between">
          <h4 className="card-title">Beneficiary</h4>
          <div className="flex gap4">
            <Button className="btn-soft-success">Copy</Button>
            <Button className="btn-soft-success">CSV</Button>
            <Button className="btn-soft-success">Excel</Button>
            <Button className="btn-soft-success">PDF</Button>
            <Button className="btn-soft-success" onClick={printPage}>Print</Button>
          </div>
        </div> */}
        <TableHTML listData={listData} />
      </div>
    </>
  );
};

export default MapQR;
