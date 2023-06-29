import React, { useEffect, memo, useState } from "react";
import { connect } from "react-redux";
import { getUPIPayOutTxnListing } from "../../utils/api";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";
import TableHTML from "./TableHTML";
import Pagination from "../../Components/PaginationNew/PaginationNew/Pagination";
import { Button, BorderBtn } from "../../Components/UI/StyledConstants";
import "./Reports.css";
const Reports = memo((props) => {
  const [filterItems, updateItems] = useState({});
  const [paging_data, setPagingData] = useState(null);
  const [reportsItems, setReportsItems] = useState([]);
  const [downloadData, setDownloadData] = useState([]);

  const [filter, setFilter] = useState({
    dateFrom: "",
    dateTo: "",
    requestVpaId: "",
    status: "DONE",
    txnId: "",
    userId: "",
  });

  const { dispatch, payout } = props;
  useEffect(() => {
    getListing(0);
  }, [filter]);

  const getListing = (page_no, page_size = 20, isDownload = false) => {
    console.log(filter);

    const params = {};

    Object.keys(filter).map((key) => {
      if (filter[key]) {
        if (filter[key]) {
          params[key] = filter[key];
        }
      }
    });

    getUPIPayOutTxnListing(params, page_no).then((res) => {
      if (isDownload && res?.data?.data?.content) {
        setDownloadData(res?.data?.data?.content);
      } else {
        setPagingData(res?.data?.data);
        setReportsItems(res?.data?.data?.content);
      }
    });
  };

  const getCurrentPageData = (page_no) => {
    console.log("page No", page_no);
    getListing(page_no);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let _filter = JSON.parse(JSON.stringify(filter));
    _filter[name] = value || null;
    setFilter(_filter);
  };

  // const handleChange = (event) => {

  //   event.preventDefault();
  //   const itemName = event.target.name;
  //   const itemVal = event.target.value;
  //   const params = {};
  //   // if (itemVal) {
  //   if (itemVal.trim()) {
  //     updateItems({
  //       ...filterItems,
  //       [itemName]: itemVal,
  //     });
  //   } else {
  //     delete filterItems[itemName];
  //     updateItems({
  //       ...filterItems,
  //     });
  //   }
  //   //  }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchTransactionReport(filterItems));
  };

  // {
  //   "accountNumber": "string",
  //   "clientId": "string",
  //   "dateFrom": "string",
  //   "dateTo": "string",
  //   "route": "string",
  //   "status": "string",
  //   "txnId": "string",
  //   "vendorId": "string"
  // }

  // const reportsItems =
  //   payout &&
  //   payout.reports &&
  //   payout.reports.data &&
  //   payout.reports.data.content;

  //   accountNumber: "50100017129260"
  // approvalRequired: "N"
  // beneficiaryName: "Ranjeet Singh Paliwal"
  // closingBalance: 10825
  // createdDate: "2021-09-26T17:11:32"
  // ifscCode: "HDFC0001236"
  // lastModifiedDate: "2021-09-26T17:12:21"
  // merchantTxnId: "126922915833"
  // mobileNumber: null
  // openingBalance: 10830
  // payoutChanrge: 5
  // remark: null
  // remittanceAmount: 9
  // route: "IMPS"
  // status: "DONE"
  // txnId: "8f903076-f4f2-444d-9c6a-57a6fd0817e6"
  // type: null

  /*   {
    "accountNumber": "string",
    "clientId": "string",
    "date": "string",
    "route": "string",
    "status": "string",
    "txnId": "string",
    "vendorId": "string"
  } */

  // const getData = () => {
  //   setTimeout(() => {
  //     const csvData = [
  //       { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  //       { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  //       { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  //     ];
  //     return csvData;
  //   }, 1000);
  // };

  const pagingData = payout && payout.reports && payout.reports.data;

  return (
    <>
      {/* <BreadCrumb heading="Transaction Report" value="Transaction Report" /> */}
      <div className="card-wrapper flex-column mb-4">
        <div className="card-header flex item-center space-between">
          <h4 className="card-title">PayOut Transactions (UPI)</h4>
          <div className="flex gap4">
            <BorderBtn type="button" className="btn-soft-success">
              <i class="fa fa-download" aria-hidden="true"></i> CSV
            </BorderBtn>
            <BorderBtn
              type="button"
              className="btn-soft-success ml10"
              onClick={() => {
                window.print();
              }}
            >
              <i class="fa fa-print" aria-hidden="true"></i> Print
            </BorderBtn>
          </div>
          {/* <div
            className="btn-group"
            role="group"
            aria-label="Basic example"
          >
            <CSVExport dispatch={dispatch} />
          </div> */}
        </div>
        <div className="card-body px16">
          <div className="report-form">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap gap4">
                <div class="form-item">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Transaction Id"
                    name="txnId"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-item">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Account number"
                    name="accountNumber"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-item">
                  <input
                    type="date"
                    className="form-control"
                    name="dateFrom"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-item">
                  <input
                    type="date"
                    className="form-control"
                    name="dateTo"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-item">
                  <div className="col-md-12">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      name="status"
                      onChange={handleChange}
                    >
                      <option value="">Status</option>
                      <option value="DONE">DONE</option>
                      <option value="INITIATED">INITIATED</option>
                      <option value="REJECTED">REJECTED</option>
                      <option value="PENDING">PENDING</option>
                      <option value="FAIL">FAIL</option>
                    </select>
                  </div>
                </div>
                {/* <div class="form-item">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Transaction Ref No"
                    name="transactionrefNo"
                    onChange={handleChange}
                  />
                </div> */}
                <div class="form-action">
                  <Button type="submit" className="primary-btn">
                    Search
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <TableHTML
            filterItems={filterItems}
            reportsItems={reportsItems}
            pagingData={pagingData}
            dispatch={dispatch}
          />

          {reportsItems && paging_data && (
            <Pagination
              currentPage={paging_data?.number}
              totalPages={paging_data?.totalPages}
              getCurrentPageData={getCurrentPageData}
            />
          )}
        </div>
      </div>
    </>
  );
});

const mapStateToProps = (state) => {
  return { payout: state.payout };
};

export default connect(mapStateToProps)(Reports);
