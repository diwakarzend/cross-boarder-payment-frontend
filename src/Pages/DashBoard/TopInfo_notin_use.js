import React, { useEffect, useState } from "react";
import "../../lib/Chart/Chart.min";
import { UpiCollectionsStyle } from "../../Components/Dashboard/PtmVendor/style";
import { Chart } from "react-google-charts";

export default function TopInfo({
  statusTranscReport,
  graphInfo,
  type,
  ptpTransactionDetails,
}) {
  const { graphData, options } = graphInfo;

  let totalTransactionCount = 0;
  let totalTransactionAmount = 0;
  let rejectedInfo, successInfo;

  if (Array.isArray(statusTranscReport)) {
    statusTranscReport.filter((item) => {
      totalTransactionCount += item["count"];
      totalTransactionAmount += item["totalTransaction"];
    });

    rejectedInfo = statusTranscReport.filter(
      (item) => item.status == "REJECTED"
    );
    successInfo = statusTranscReport.filter((item) => item.status == "DONE");
  }

  return (
    <>
      <UpiCollectionsStyle className="card-wrapper flex-column mb-4">
        <div className="card-inner-header flex item-center space-between dir-col-in-mobile">
          <h4 className="card-title">{type?.toUpperCase()}</h4>
          <button className="primary-btn">
            <a
              href={`/${type}-${type == "payout" ? "reports" : "transaction"}`}
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              View Transactions
            </a>
          </button>
        </div>
        <div className="card-body">
          <div className="upi-n-qr-collection row">
            {type == "p2p" && ptpTransactionDetails ? (
              <div className="collection-info-wrapper">
                <div className="collection-info info">
                  <div className="info-left flex space-between">
                    <div className="text first">Total Count</div>
                    <strong className="amount">
                      {ptpTransactionDetails?.totalCount}
                    </strong>
                  </div>
                </div>
                <div className="collection-info info">
                  <div className="info-left flex space-between">
                    <div className="text second">Total Credited Count </div>
                    <strong className="amount">
                      {ptpTransactionDetails?.totalCreditedCount}
                    </strong>
                  </div>
                </div>
                <div className="collection-info info">
                  <div className="info-left flex space-between">
                    <div className="text third">Total Synced Count</div>
                    <strong className="amount">
                      {ptpTransactionDetails?.totalSyncedCount}
                    </strong>
                  </div>
                </div>
                <div className="collection-info info">
                  <div className="info-left flex space-between">
                    <div className="text fourth">Total Transactions Sum</div>
                    <strong className="amount">
                      Rs. {ptpTransactionDetails?.totalTransactionSum}
                    </strong>
                  </div>
                </div>
              </div>
            ) : (
              <div className="collection-info-wrapper">
                <div className="collection-info info">
                  <div className="info-left flex space-between">
                    <div className="text first">Total Transactions</div>
                    <strong className="amount">{totalTransactionCount} </strong>
                  </div>
                </div>
                <div className="collection-info info">
                  <div className="info-left flex space-between">
                    <div className="text second">Total Amount</div>
                    <strong className="amount">
                      Rs {totalTransactionAmount}
                    </strong>
                  </div>
                </div>
                <div className="collection-info info">
                  <div className="info-left flex space-between">
                    <div className="text third">Completed</div>
                    <strong className="amount">
                      {successInfo && successInfo[0] && successInfo[0].count}
                    </strong>
                  </div>
                </div>
                <div className="collection-info info">
                  <div className="info-left flex space-between">
                    <div className="text fourth">Cancelled Transactions</div>
                    <strong className="amount">
                      {rejectedInfo && rejectedInfo[0] && rejectedInfo[0].count}
                    </strong>
                  </div>
                </div>
              </div>
            )}

            <div className="col-12">
              <div className="container-pie-chart flex space-between item-center">
                {/* <img src="/images/bottom-chart.png" alt="cahrt" /> */}
                <Chart
                  chartType="Bar"
                  width="100%"
                  height="290px"
                  data={graphData}
                  options={options}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center status-wrap">
          <div className="status flex item-center">
            <span className="upi">UPI</span>
            <span className="QR">QR</span>
            <span className="NEFT">NEFT</span>
            <span className="RTGS">RTGS</span>
          </div>
        </div> */}
      </UpiCollectionsStyle>
    </>
  );
}
