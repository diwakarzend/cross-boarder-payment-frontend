import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../../lib/Chart/Chart.min";
import { getUserByVendorRole } from "../../../utils/api";
import { UpiCollectionsStyle } from "./style";

import { Chart } from "react-google-charts";

const fontCss = {
  fontSize: "20px",
  textAlign: "center",
  fontWeight: "bold",
  color: "#53505f",
};

export default function UPIWidget({
  data = {},
  graphInfo,
  changeMerhcantHandler,
}) {
  const { graphData, options } = graphInfo;

  const [vendorList, setVendorList] = useState([]);

  const userData = useSelector((state) => state?.login?.userData || {});
  let isVendor = false;
  if (userData?.role === "PTM_VENDOR") {
    isVendor = true;
  }

  useEffect(() => {
    getUserByVendorRole().then((res) => {
      if (res?.data?.data) {
        setVendorList(res?.data?.data);
      }
    });
  }, []);

  console.log("statusReportstatusReport", data);

  let totalTranscation = 0;
  let successInfo = "";
  let failedInfo = "";
  let pendingInfo = "";

  if (Array.isArray(data)) {
    data.forEach((item) => {
      totalTranscation += +item.count;
    });

    successInfo = data.filter((item) => item.status == "SUCCESS");
    successInfo = successInfo[0];
    failedInfo = data.filter((item) => item.status == "DONE");
    failedInfo = failedInfo[0];
    pendingInfo = data.filter((item) => item.status == "INITIATED");
    pendingInfo = pendingInfo[0];
  }

  return (
    <>
      <UpiCollectionsStyle className="card-wrapper flex-column mb-4">
        <div className="card-body">
          <div className="upi-n-qr-collection row">
            <div className="flex item-center">
              <div className="left flex item-center">
                <h4 className="card-title">UPI & QR Collections</h4>
                <div className="status flex item-center">
                  <span className="upi">UPI</span>
                  <span className="QR">QR</span>
                </div>
              </div>
              <div className="right flex">
                <button className="primary-btn">
                  <a
                    href="/payin-transaction"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    View Transactions
                  </a>
                </button>
                {!isVendor && (
                  <div className="form-group">
                    <select
                      name="userId"
                      className="form-control"
                      id="exampleFormControlSelect1"
                      onChange={changeMerhcantHandler}
                    >
                      <option value="">Select Merchant</option>
                      {vendorList.map((vendor) => (
                        <option
                          key={vendor?.uuid}
                          value={vendor?.uuid + "," + vendor?.userName}
                        >{`${vendor.firstName || "-"} ${vendor.lastName ||
                          ""}`}</option>
                      ))}
                    </select>
                  </div>
                )}
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
                      <strong className="amount">{totalTranscation}</strong>
                    </div>
                  </div>
                  <div className="collection-info">
                    <div className="info-left flex space-between">
                      <div className="image">
                        <img src="/images/verified.png" alt="rupess" />
                      </div>
                      <div className="text second">Success</div>
                      <strong className="amount">
                        {successInfo && successInfo["count"]}
                      </strong>
                    </div>
                  </div>
                  <div className="collection-info">
                    <div className="info-left flex space-between">
                      <div className="image">
                        <img src="/images/reject.png" alt="rupess" />
                      </div>
                      <div className="text third">Failed</div>
                      <strong className="amount">
                        {failedInfo && failedInfo["count"]}
                      </strong>
                    </div>
                  </div>
                  <div className="collection-info">
                    <div className="info-left flex space-between">
                      <div className="image">
                        <img src="/images/history.png" alt="rupess" />
                      </div>
                      <div className="text fourth">Pending</div>
                      <strong className="amount">
                        {pendingInfo && pendingInfo["count"]}
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
