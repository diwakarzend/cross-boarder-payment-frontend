import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
// import { fetchMonthlyReports, fetchReportsFailure } from "../../actions/payout";
import { dynamicDataWithXY } from "../../lib/Chart/common";
import CircularProgressBar from "../../Components/CircularProgressBar";
import {
  getUPIGraph,
  getPayoutGraph,
  getPTPGraph,
  getPTPUserTxnDetails,
  fetchPayoutReports,
  fetchUPICollectReports,
} from "../../utils/api";

import UPIWidget from "../../Components/Dashboard/PtmVendor/UPIWidget";
import PayoutWidget from "../../Components/Dashboard/PtmVendor/PayoutWidget";
import PTPWidget from "../../Components/Dashboard/PtmVendor/PTPWidget";

import { UpiCollectionsStyle } from "../../Components/Dashboard/PtmVendor/style";

import {
  fetchUserWallet,
  fetchUserWalletIfNeeded,
  loginResetStore,
} from "../../actions/Login";

import { getCurrentDate } from "../../utils/common";
import { DashboardWrapper } from "./style";

const currentDate = getCurrentDate();

const initFilters = {
  dateTo: "",
  dateFrom: "",
  pagination: {
    pageNo: 1,
    pageSize: 100,
  },
  status: null,
  txnRefId: null,
  txnType: null,
  userId: null,
  utrNumber: null,
  vendorCode: null,
};

const fontCss = {
  fontSize: "20px",
  textAlign: "center",
  fontWeight: "bold",
  color: "#53505f",
};

const payloadUPIGraph = {
  dateFrom: currentDate,
  dateTo: currentDate,
  // requestVpaId: "string",
  // status: "string",
  // txnId: "string",
  // userId: "string",
};

const payloadPayoutGraph = {
  dateFrom: currentDate,
  dateTo: currentDate,

  // accountNumber: "string",
  // clientId: "string",

  // route: "string",
  // status: "string",
  // txnId: "string",
  // vendorId: "string",
};

const payloadPTPGraph = {
  fromDate: currentDate,
  toDate: currentDate,
};
const payloadP2PReports = {
  fromDate: currentDate,
  toDate: currentDate,
};

const payloadPayoutReports = {
  dateFrom: currentDate,
  dateTo: currentDate,
};

const payloadUpiCollectReports = {
  dateFrom: currentDate,
  dateTo: currentDate,
};

console.log("getCurrentDate", getCurrentDate());

const DashBoard = (props) => {
  const { payout } = props;
  const [filters, setFilters] = useState({ ...initFilters });
  const [ptpTransactionDetails, setPTPTransactionDetails] = useState("");
  const [duration, setDuration] = useState("today");

  const [upiGraph, setUpiGraph] = useState([]);
  const [payoutGraph, setPayoutGraph] = useState([]);
  const [ptpGraph, setPTPGraph] = useState([]);

  const [rblAccount, setRblAccount] = useState("");
  const [payoutReports, setPayoutReports] = useState("");
  const [upiCollectReports, setUpiCollectReports] = useState("");

  const statusReport = {};

  const userWallet = useSelector((state) => state?.login?.userWallet);

  let transactionReport = "";
  if (
    payout &&
    payout.statusTranscReport &&
    payout.statusTranscReport.data &&
    Array.isArray(payout.statusTranscReport.data)
  ) {
    transactionReport = payout.statusTranscReport.data.filter(
      (item) => item.status.toLowerCase() == "done"
    );
    transactionReport = transactionReport[0];
  }

  // const totalTransaction = statusReport
  //   ? parseInt(statusReport.DONE) +
  //     parseInt(statusReport.FAIL) +
  //     parseInt(statusReport.REJECTED)
  //   : "";

  const fontCss = {
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "bold",
  };

  const changeMerhcantHandler = (e) => {
    console.log("e.target;", e.target.value);
    let vendorInfo = e.target.value;
    let vendorInfoArr = vendorInfo.split(",");
    const uuId = vendorInfoArr[0];
    const userId = vendorInfoArr[1];

    fetchPTPTransactionDetails({
      ...payloadP2PReports,
      userId: userId,
    });
    renderUPIGraph({ ...payloadUPIGraph, userId: uuId });
    renderPayoutGraph({ ...payloadPayoutGraph, vendorId: uuId });
    renderPTPGraph({ ...payloadPTPGraph, userId: uuId });
    invokePayoutReports({ ...payloadPayoutReports, userId: userId });
    invokeUPICollectReports({
      ...payloadUpiCollectReports,
      userId: userId,
    });
  };

  const handleDurationCick = (duration, event) => {
    event.preventDefault();
    console.log("event", duration, event);
    renderUPIGraph({
      duration: duration,
    });

    renderPayoutGraph({
      duration: duration,
    });
    renderPTPGraph({
      duration: duration,
    });
    setDuration(duration);
  };

  const getRBLBalance = () => {
    const successFn = (response) => {
      if (response?.success) {
        console.log("response111", response);
        setRblAccount(response.metaInfo);
      }
    };
    const errorFn = (error) => {};
    const api = new Request("", successFn, errorFn);
    return api.get(urls.login.BASE_URL + urls.Wallet.RBL_WALLET_SUMMARY);
  };

  const renderUPIGraph = (payloadUPIGraph) => {
    getUPIGraph(payloadUPIGraph).then((res) => {
      console.log("resqqq", res?.data?.data);
      setUpiGraph(res?.data?.data);
    });
  };

  const renderPayoutGraph = (payloadPayoutGraph) => {
    getPayoutGraph(payloadPayoutGraph).then((res) => {
      // console.log("resqqq", res?.data?.data);
      setPayoutGraph(res?.data?.data);
    });
  };

  const renderPTPGraph = (payloadPTPGraph) => {
    getPTPGraph(payloadPTPGraph).then((res) => {
      // console.log("resqqq", res?.data?.data);
      setPTPGraph(res?.data?.data);
    });
  };

  const fetchPTPTransactionDetails = (payload) => {
    getPTPUserTxnDetails(payload).then((res) => {
      if (res?.data?.data) {
        setPTPTransactionDetails(res?.data?.data || null);
      }
    });
  };

  const invokePayoutReports = (payloadPayoutReports) => {
    fetchPayoutReports(payloadPayoutReports).then((res) => {
      console.log("res111", res);

      setPayoutReports(res?.data?.data);
    });
  };

  const invokeUPICollectReports = (payloadUpiCollectReports) => {
    fetchUPICollectReports(payloadUpiCollectReports).then((res) => {
      console.log("res111", res);
      setUpiCollectReports(res?.data?.data);
    });
  };

  useEffect(() => {
    const { dispatch, payout } = props;
    dispatch(fetchUserWalletIfNeeded());
    getRBLBalance();

    fetchPTPTransactionDetails(payloadP2PReports);
    renderUPIGraph(payloadUPIGraph);
    renderPayoutGraph(payloadPayoutGraph);
    renderPTPGraph(payloadPTPGraph);
    invokePayoutReports(payloadPayoutReports);
    invokeUPICollectReports(payloadUpiCollectReports);
  }, []);

  const { login } = props;
  //const userPermissions = getUserPermissions(login);

  const statusTranscReport = payout?.statusTranscReport?.data;

  // console.log("dashboard", statusTranscReport, statusReport);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    const _filters = JSON.parse(JSON.stringify(filters));
    _filters[name] = value;
    setFilters(_filters);
  };

  const submitDateHandler = () => {
    console.log("filters", filters.dateFrom, filters.dateTo);
    renderUPIGraph({
      ...payloadUPIGraph,
      dateFrom: filters.dateFrom,
      dateTo: filters.dateTo,
    });

    renderPayoutGraph({
      ...payloadPayoutGraph,
      dateFrom: filters.dateFrom,
      dateTo: filters.dateTo,
    });

    renderPTPGraph({
      ...payloadPTPGraph,
      fromDate: filters.dateFrom,
      toDate: filters.dateTo,
    });

    fetchPTPTransactionDetails({
      fromDate: filters.dateFrom,
      toDate: filters.dateTo,
    });
  };

  console.log("upiGraphupiGraph", upiGraph);

  let graphUPI = [];
  let graphPayout = [];
  let graphPTP = [];

  if (upiGraph && Array.isArray(upiGraph)) {
    upiGraph.forEach((item) => {
      graphUPI.push([item.date.split("-")[2], +item.transactionAmout]);
    });
  }

  if (payoutGraph && Array.isArray(payoutGraph)) {
    payoutGraph.forEach((item) => {
      graphPayout.push([item.date.split("-")[2], +item.transactionAmout]);
    });
  }

  if (ptpGraph && Array.isArray(ptpGraph)) {
    ptpGraph.forEach((item) => {
      graphPTP.push([item.date.split("-")[2], +item.transactionAmout]);
    });
  }

  const upiGraphInfo = [["Days", "UPI&QR"], ...graphUPI];
  const payoutGraphInfo = [["Days", "Payout"], ...graphPayout];
  const p2pGraphInfo = [["Days", "PTP"], ...graphPTP];

  console.log("graphUPI", upiGraphInfo);

  const options = {
    legend: { position: "none" },
    colors: ["#ff6600"],
  };

  const optionsPayoutGraph = {
    legend: { position: "none" },
    colors: ["green"],
  };

  const optionsP2pGraph = {
    legend: { position: "none" },
    colors: ["#6495ED"],
  };

  console.log("payoutReports", payoutReports);

  return (
    <>
      <BreadCrumb heading="Dashboard" />
      {/* {userPermissions && userPermissions.includes("PTM_VENDOR_TRANSACTION_REPORT") && (
          <UpiCollections />
        )} */}
      <UpiCollectionsStyle>
        <div className="wallet-wrapper">
          <div className="flex list">
            <div className="image">
              <img src="/images/rupees.png" alt="rupess" />
            </div>
            <div className="text">
              <div className="label">Wallet Balance:</div>
              <div className="value">
                &#8377; {userWallet && userWallet["MAIN_WALLET"]}
              </div>
            </div>
          </div>
          <div className="flex items-center list">
            <div className="text">
              <div className="label">RBL Bank:</div>
              <div className="value">&#8377; {rblAccount.balance}</div>
            </div>
            <div className="refresh">
              <button onClick={getRBLBalance}>
                <i className="fa fa-refresh" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </UpiCollectionsStyle>
      <UpiCollectionsStyle className="card-header lr0 flex item-center space-between dir-col-in-mobile">
        <form className="filter-table flex item-center space-between">
          <div className="left flex item-center">
            <button
              className={`border-btn${duration == "today" ? " active" : ""}`}
              onClick={(event) => handleDurationCick("today", event)}
            >
              Today
            </button>
            <button
              className={`border-btn${
                duration == "thismonth" ? " active" : ""
              }`}
              onClick={(event) => handleDurationCick("thismonth", event)}
            >
              This Month
            </button>
            <button
              className={`border-btn${duration == "thisweek" ? " active" : ""}`}
              onClick={(event) => handleDurationCick("thisweek", event)}
            >
              This Week
            </button>
            <button
              className={`border-btn${
                duration == "lastmonth" ? " active" : ""
              }`}
              onClick={(event) => handleDurationCick("lastmonth", event)}
            >
              Last Month
            </button>
          </div>
          <div className="right flex item-center">
            <div className="form-wrapper flex item-center">
              <div className="form-group">
                <input
                  name="dateFrom"
                  type="date"
                  className="form-control"
                  placeholder="Enter From Date"
                  onChange={changeHandler}
                  value={filters?.dateFrom}
                />
              </div>
              <span>To</span>
              <div className="form-group">
                <input
                  name="dateTo"
                  type="date"
                  className="form-control"
                  placeholder="Enter To Date"
                  onChange={changeHandler}
                  value={filters?.dateTo}
                />
              </div>
              <div
                className="form-group"
                onClick={submitDateHandler}
                style={{ padding: "10px" }}
              >
                <i className="fa fa-paper-plane" aria-hidden="true"></i>

                {/* <CSVLink
                  title="Download CSV"
                  className="csv-link"
                  data={downloadData}
                >
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </CSVLink> */}
              </div>
            </div>
          </div>
        </form>
      </UpiCollectionsStyle>

      <UPIWidget
        data={upiCollectReports}
        getRBLBalance={getRBLBalance}
        graphInfo={{ graphData: upiGraphInfo, options: options }}
        changeMerhcantHandler={changeMerhcantHandler}
      />

      <PayoutWidget
        data={payoutReports}
        graphInfo={{ graphData: payoutGraphInfo, options: optionsPayoutGraph }}
      />

      <PTPWidget
        data={ptpTransactionDetails}
        graphInfo={{ graphData: p2pGraphInfo, options: optionsP2pGraph }}
      />

      {/* <TopInfo
        statusTranscReport={payoutReports}
        graphInfo={{
          graphData: payoutGraphInfo,
          options: optionsPayoutGraph,
        }}
        type="payout"
      /> */}

      {/* <TopInfo
        transactionReport={transactionReport}
        statusTranscReport={statusTranscReport}
        graphInfo={{
          graphData: p2pGraphInfo,
          options: optionsP2pGraph,
        }}
        ptpTransactionDetails={ptpTransactionDetails}
        type="p2p"
      /> */}

      {false && (
        <DashboardWrapper className="flex analysis-and-statistics">
          <div className="card-wrapper flex-column transaction-analysis">
            <div className="card-header">
              <h4 className="card-title">Last 6 Months Transaction Analysis</h4>
            </div>
            <div className="card-body">
              <canvas id="myChart3-light" className="height_box"></canvas>
            </div>
          </div>
          <div className="card-wrapper flex-column overall-statistics">
            <div className="card-header">
              <h4 className="card-title">Overall statistics</h4>
            </div>
            <div className="card-body">
              <p className="mt-4">
                Daily information about statistics in system
              </p>
              {statusReport && (
                <>
                  <div className="overall-chart flex item-center">
                    <div>
                      <CircularProgressBar
                        percentage={
                          totalTransaction == 0
                            ? 0
                            : Math.floor(
                                (statusReport.DONE * 100) / totalTransaction
                              )
                        }
                        strokeWidth={7}
                        strokeColor="#097643"
                        sqSize={100}
                      />
                    </div>
                    <strong className="">Success</strong>
                  </div>
                  <div className="overall-chart flex item-center">
                    <div>
                      <CircularProgressBar
                        percentage={
                          totalTransaction == 0
                            ? 0
                            : Math.floor(
                                (statusReport.FAIL * 100) / totalTransaction
                              )
                        }
                        strokeWidth={7}
                        strokeColor="#FF333C"
                        sqSize={100}
                      />
                    </div>
                    <strong className="">Failed</strong>
                  </div>
                  <div className="overall-chart flex item-center">
                    <div>
                      <CircularProgressBar
                        percentage={
                          totalTransaction == 0
                            ? 0
                            : Math.floor(
                                (statusReport.FAIL * 100) / totalTransaction
                              )
                        }
                        strokeWidth={7}
                        strokeColor="#FF333C"
                        sqSize={100}
                      />
                    </div>
                    <strong className="">Rejected</strong>
                  </div>
                </>
              )}
            </div>
          </div>
        </DashboardWrapper>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(DashBoard);
