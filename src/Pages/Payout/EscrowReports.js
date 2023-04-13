import React, { useEffect, memo, useState } from "react";
import { esrowAccountDetails } from "../../utils/api";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Pagination from "../../Components/PaginationNew/PaginationNew/Pagination";
import { Button, BorderBtn } from "../../Components/UI/StyledConstants";
import { TableWrapper } from "../../Components/UI/StyledConstants";

import { getCurrentDate } from "../../utils/common";

import "./Reports.css";
const EscrowReports = memo((props) => {
  const [paging_data, setPagingData] = useState(null);
  const [reportsItems, setReportsItems] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [rowindex, setRowindex] = useState("");

  const [filter, setFilter] = useState({
    fromDate: getCurrentDate(),
    toDate: getCurrentDate(),
    status: "",
  });

  const { dispatch, payout } = props;
  useEffect(() => {
    const queryParams = `?pageNo=${pageNo}&pageSize=10&fromDate=${filter.fromDate}&toDate=${filter.toDate}`;
    esrowAccountDetails(queryParams).then((res) => {
      setReportsItems(JSON.parse(res?.data?.data));
    });
  }, []);

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

    getPayOutTxnListing(params, page_no).then((res) => {
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
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = `?pageNo=${pageNo}&pageSize=10`;
    const payload = {
      fromDate: filter.fromDate,
      toDate: filter.toDate,
      status: filter.status,
    };
    esrowAccountDetails(queryParams, payload).then((res) => {
      setReportsItems(JSON.parse(res?.data?.data));
    });
  };

  const pagingData = payout && payout.reports && payout.reports.data;

  console.log("reportsItems", reportsItems, filter);
  const item = reportsItems?.Acc_Stmt_DtRng_Res;
  const index = 1;

  return (
    <>
      <BreadCrumb heading="Escrow Report" value="Escrow Report" />
      <div className="card-wrapper flex-column mb-4">
        <div className="card-header flex item-center space-between">
          <h4 className="card-title">Escrow Reports</h4>
        </div>
        <div className="card-body px16">
          <div className="report-form">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap gap4">
                <div class="form-item">
                  <input
                    type="date"
                    className="form-control"
                    name="fromDate"
                    onChange={handleChange}
                    min="2022-01-01"
                  />
                </div>
                <div class="form-item">
                  <input
                    type="date"
                    className="form-control"
                    name="toDate"
                    onChange={handleChange}
                    min="2022-01-01"
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
                      <option value="D">DEBIT</option>
                      <option value="C">CREDIT</option>
                    </select>
                  </div>
                </div>

                <div class="form-action">
                  <Button type="submit" className="primary-btn">
                    Search
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="mt24">
            <TableWrapper>
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-left">Transaction Id</th>
                    <th className="text-left">Acid</th>
                    <th className="text-left">Available Balance</th>
                    <th className="text-left">Branch Id</th>
                    <th className="text-left">Currency Code</th>
                    <th className="text-left">Floating Balance</th>
                    <th className="text-left">Ledger Balance</th>
                    <th className="text-left">User Defined Balance</th>
                    <th className="text-left">Ffd balance</th>
                    <th className="text-left">Status</th>
                    <th className="text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {item && (
                      <tr key={index}>
                        <td>{item?.Header?.TranID}</td>
                        <td>{item?.Body?.accountBalances?.acid}</td>
                        <td>
                          {
                            item?.Body?.accountBalances?.availableBalance
                              ?.amountValue
                          }
                        </td>
                        <td>{item?.Body?.accountBalances?.branchId}</td>
                        <td>{item?.Body?.accountBalances?.currencyCode}</td>

                        <td>
                          {
                            item?.Body?.accountBalances?.floatingBalance
                              ?.amountValue
                          }
                        </td>
                        <td>
                          {
                            item?.Body?.accountBalances?.ledgerBalance
                              ?.amountValue
                          }
                        </td>
                        <td>
                          {
                            item?.Body?.accountBalances?.userDefinedBalance
                              ?.amountValue
                          }
                        </td>
                        <td>
                          {item?.Body?.accountBalances?.fFDBalance?.amountValue}
                        </td>
                        <td>{item?.Header?.Status}</td>
                        <td>
                          <span
                            onClick={() => {
                              if (rowindex === index) {
                                setRowindex("");
                              } else {
                                setRowindex(index);
                              }
                            }}
                          >
                            <i class="fa fa-eye" aria-hidden="true" />
                          </span>
                        </td>
                      </tr>
                    )}

                    {rowindex === index ? (
                      item?.Body?.transactionDetails?.length ? (
                        <>
                          <tr>
                            <td
                              colSpan={11}
                              style={{
                                border: "1px solid rgba(128,128,128,0.17)",
                                borderTop: "none",
                              }}
                            >
                              <table className="table">
                                <tr>
                                  <th className="text-center">Txn Id</th>
                                  <th className="text-center">Txn Amount</th>
                                  <th className="text-center">Txn Type</th>
                                  <th className="text-center">Txn Balance</th>
                                  <th className="text-center">Txn Cat</th>
                                  <th className="text-center">Txn Srl No</th>
                                  <th className="text-center">
                                    Txn Description
                                  </th>
                                  <th className="text-center">Date</th>
                                </tr>
                                <tbody>
                                  {item?.Body?.transactionDetails.map(
                                    (cdata, y) => (
                                      <tr key={"ch" + y}>
                                        <td className="text-center">
                                          {cdata?.txnId || ""}
                                        </td>
                                        <td className="text-center">
                                          {cdata?.transactionSummary?.txnAmt
                                            ?.amountValue || ""}
                                        </td>
                                        <td className="text-center">
                                          {cdata?.transactionSummary?.txnType ||
                                            ""}
                                        </td>
                                        <td className="text-center">
                                          {cdata?.txnBalance?.amountValue || ""}
                                        </td>
                                        <td className="text-center">
                                          {cdata?.txnCat || ""}
                                        </td>

                                        <td className="text-center">
                                          {cdata?.txnSrlNo || ""}
                                        </td>
                                        <td className="text-center">
                                          {cdata?.transactionSummary?.txnDesc ||
                                            ""}
                                        </td>
                                        <td className="text-center">
                                          {cdata?.valueDate || ""}
                                        </td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <br />
                          <br />
                        </>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </>
                </tbody>
              </table>
            </TableWrapper>
          </div>

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

export default EscrowReports;
