import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CSVLink } from "react-csv";
import moment from "moment";
import "../../../lib/Chart/Chart.min";
const chartConfig = require("../../../lib/Chart/Config");
import { getUserByVendorRole } from "../../../utils/api";
import { UpiCollectionsStyle } from "./style";

import { Chart } from "react-google-charts";

const fontCss = {
  fontSize: "20px",
  textAlign: "center",
  fontWeight: "bold",
  color: "#53505f",
};

export default function PayoutWidget({ data, graphInfo }) {
  const { graphData, options } = graphInfo;

  console.log("statusReportstatusReport", data, graphInfo);

  let totalTransactionCount = 0;
  let totalTransactionAmount = 0;
  let rejectedInfo, successInfo, failedInfo;

  if (Array.isArray(data)) {
    data.filter((item) => {
      totalTransactionCount += item["count"];
      totalTransactionAmount += item["totalTransaction"];
    });

    rejectedInfo = data.filter((item) => item.status == "REJECTED");
    successInfo = data.filter((item) => item.status == "DONE");
  }

  return (
    <>
      <UpiCollectionsStyle className="card-wrapper flex-column mb-4">
        <div className="card-body">
          <div className="upi-n-qr-collection row">
            <div className="flex item-center">
              <div className="left flex item-center">
                <h4 className="card-title">PAYOUT</h4>
              </div>
              <div className="right flex">
                <button className="primary-btn">
                  <a
                    href="/payout-transaction"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    View Transactions
                  </a>
                </button>
              </div>
            </div>
            <div className="cahrtTextWrap flex space-between">
              <div className="chart-container">
                <div className="container-pie-chart flex space-between item-center">
                  <Chart
                    chartType="Bar"
                    width="850px"
                    max-width="100%"
                    height="400px"
                    data={graphData}
                    options={options}
                  />
                  {/* <img src="/images/top-chart.png" alt="chart" /> */}
                </div>
              </div>
              <div className="right-container">
                <div className="collection-info-wrapper">
                  <div className="collection-info">
                    <div className="info-left flex space-between">
                      <div className="image">
                        <img src="/images/rupees-yellow.png" alt="rupess" />
                      </div>
                      <div className="text first">Transactions</div>
                      <strong className="amount">
                        {totalTransactionCount}
                      </strong>
                    </div>
                  </div>
                  <div className="collection-info">
                    <div className="info-left flex space-between">
                      <div className="image">
                        <img src="/images/verified.png" alt="rupess" />
                      </div>
                      <div className="text second">Total Amount</div>
                      <strong className="amount">
                        ₹ {totalTransactionAmount}
                      </strong>
                    </div>
                  </div>

                  <div className="collection-info">
                    <div className="info-left flex space-between">
                      <div className="image">
                        <img src="/images/reject.png" alt="rupess" />
                      </div>
                      <div className="text fourth">Cancelled</div>
                      <strong className="amount">
                        {rejectedInfo &&
                          rejectedInfo[0] &&
                          rejectedInfo[0].count}
                      </strong>
                    </div>
                  </div>
                  <div className="collection-info">
                    <div className="info-left flex space-between">
                      <div className="image">
                        <img src="/images/history.png" alt="rupess" />
                      </div>
                      <div className="text third">Completed</div>
                      <strong className="amount">
                        {successInfo && successInfo[0] && successInfo[0].count}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UpiCollectionsStyle>
    </>
  );
}
