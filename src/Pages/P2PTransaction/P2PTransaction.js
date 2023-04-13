import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { bulkUploadTransactionsRequest, getP2pTxnListing } from "../../utils/api";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";
import TableHTML from "./TableHTML";
import CSVExport from "../../Components/DataExport/CSVExport";
import Pagination from "../../Components/PaginationNew/PaginationNew/Pagination";
import { FilterWrapper } from "./style";
import { CSVLink } from "react-csv";
import moment from "moment";
import {
  Button,
  BorderBtn,
  FilterFormWrapper,
} from "../../Components/UI/StyledConstants";
import { printPage } from "../../utils/common";
import { UploadFile } from "../../Components/UploadFile";

const P2PTransaction = ({ dispatch = () => {}, ...props }) => {
  const [reportsItems, setReportsItems] = useState([]);
  const [downloadData, setDownloadData] = useState([]);
  const [paging_data, setPagingData] = useState(null);
  const [filter, setFilter] = useState({
    fromDate: "",
    toDate: "",
    status: "",
    txnRefId: "",
    txnType: "",
    userId: "",
    utrNumber: "",
    vendorCode: "",
  });
  const downloadRef = useRef();
  const userData = useSelector((state) => state?.login?.userData || {});
  useEffect(() => {
    getListing(0);
  }, [filter]);

  const getListing = (page_no, page_size = 20, isDownload = false) => {
    const params = {
      pagination: {
        pageNo: page_no,
        pageSize: 20,
      },
    };

    Object.keys(filter).map((key) => {
      if (filter[key]) {
        if (filter[key]) {
          params[key] = filter[key];
        }
      }
    });

    getP2pTxnListing(params).then((res) => {
      if (isDownload && res?.data?.data?.content) {
        setDownloadData(res?.data?.data?.content);
      } else {
        setPagingData(res?.data?.data);
        setReportsItems(res?.data?.data?.content);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let _filter = JSON.parse(JSON.stringify(filter));
    _filter[name] = value || null;
    setFilter(_filter);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getListing();
  };

  const getCurrentPageData = (page_no) => {
    console.log("page No", page_no);
    getListing(page_no);
  };

  const onDownloadClick = () => {
    if (paging_data && paging_data?.totalElements) {
      getListing(0, paging_data?.totalElements, true);
    }
  };

  useEffect(() => {
    if (Array.isArray(downloadData) && downloadData.length > 0) {
      console.log("downloadData inside = ", downloadData);
      setTimeout(() => {
        downloadRef.current.link.click();
      }, 1000);
    }
  }, [downloadData]);

  useEffect(() => {
    if (userData?.role === "PTM_VENDOR") {
      setFilter({ ...filter, userId: userData.uuid });
    }
  }, [userData]);

  const [uploadMsg, setUploadMsg] = useState("");
  const onUploadFile = (data) => {
    if (data?.code == 200) {
      setUploadMsg("File uploaded successfully");
    }
  };

  useEffect(() => {
    if (uploadMsg) {
      setTimeout(() => {
        getListing(0);
        setUploadMsg("");
      }, 3000);
    }
  }, [uploadMsg]);

  console.log("filter = ", filter);

  return (
    <>
      <BreadCrumb
        heading="P2P Transaction Report"
        value="P2P Transaction Report"
      />
      <div className="card-wrapper flex-column mb-4">
        <div className="card-header flex item-center space-between">
          <h4 className="card-title">P2P Transactions</h4>
          <div className="flex item-center gap4">
            {uploadMsg && <div style={{ color: "green" }}>{uploadMsg}</div>}
            {userData?.role === "PTM_ADMIN" && (
              <UploadFile 
                onUploadFile={onUploadFile} 
                uploadText="Upload Transactions File"
                bulkUploadRequest={bulkUploadTransactionsRequest} 
                accept=".xls,.xlsx"
              />
            )}
            <div className="download-csv">
              <BorderBtn className="btn-soft-success" onClick={onDownloadClick}>
                <i class="fa fa-download" aria-hidden="true"></i>CSV
              </BorderBtn>
              <CSVLink
                title="Download CSV"
                className="csv-link-hide"
                data={downloadData}
                ref={downloadRef}
              />
            </div>
            <BorderBtn className="btn-soft-success" onClick={printPage}>
              <i class="fa fa-print" aria-hidden="true"></i>Print
            </BorderBtn>
          </div>
        </div>
        <div className="card-body px16">
          <div className="flex">
            <form className="filter-form" onSubmit={handleSubmit}>
              <FilterFormWrapper className="flex flex-wrap gap4">
                <div className="form-item">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Transaction Id"
                    name="txnRefId"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-item">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="UTR Number"
                    name="utrNumber"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    className="form-control"
                    name="txnType"
                    placeholder="Txn Type"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    className="form-control"
                    name="userId"
                    placeholder="User Id"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-item">
                  <select
                    className="form-control"
                    name="vendorCode"
                    placeholder="Vendor Code"
                    onChange={handleChange}
                  >
                    <option value="">Vendor Code</option>
                    <option value="3">Paytm</option>
                    <option value="2">Phonepe</option>
                  </select>
                </div>
                <div className="form-item">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    name="status"
                    placeholder="Status"
                    onChange={handleChange}
                  >
                    <option value="">Select Status</option>
                    <option value="synced">Synced</option>
                    <option value="credited">Credited</option>
                  </select>
                </div>
                <div className="form-item">
                  <input
                    name="fromDate"
                    type="date"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={filter?.fromDate}
                  />
                </div>

                <div className="form-item">
                  <input
                    name="toDate"
                    type="date"
                    className="form-control"
                    placeholder="Enter To Date"
                    onChange={handleChange}
                    value={filter?.toDate}
                  />
                </div>
                <div className="form-action">
                  <Button type="submit" className="btn-success">
                    Search
                  </Button>
                </div>
              </FilterFormWrapper>
            </form>
          </div>
          <div className="">
            <TableHTML filterItems={{}} reportsItems={reportsItems} />
            {reportsItems && paging_data && (
              <Pagination
                currentPage={
                  paging_data?.number >= 0 ? paging_data?.number + 1 : 1
                }
                totalPages={paging_data?.totalPages}
                getCurrentPageData={getCurrentPageData}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { payout: state.payout };
};

export default connect(mapStateToProps)(P2PTransaction);
