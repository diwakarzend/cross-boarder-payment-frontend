import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { getPayInTxnListing } from "../../utils/api";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import TableHTML from "./TableHTML";
import Pagination from "../../Components/PaginationNew/PaginationNew/Pagination";
import {
  Button,
  BorderBtn,
  FilterFormWrapper,
} from "../../Components/UI/StyledConstants";
import { getCurrentDate } from "../../utils/common";
import { ButtonSolid } from "../../Components/styledConstants";

const P2PTransaction = ({ dispatch = () => {}, ...props }) => {
  const [reportsItems, setReportsItems] = useState([]);
  const [downloadData, setDownloadData] = useState([]);
  const [paging_data, setPagingData] = useState(null);
  // const [pageNo, setPageNo] = useState(1);
  const [filter, setFilter] = useState({
    dateFrom: getCurrentDate(),
    dateTo: getCurrentDate(),
    status: "",
    txnId: "",
    userId: "",
  });
  const downloadRef = useRef();
  const userData = useSelector((state) => state?.login?.userData || {});
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

    getPayInTxnListing(params, page_no).then((res) => {
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
    getListing(0);
  };

  const getCurrentPageData = (page_no) => {
    console.log("page No", page_no);
    getListing(page_no);
  };

  const onDownloadClick = () => {
    if (paging_data && paging_data?.totalElements) {
      getListing(1, paging_data?.totalElements, true);
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
        getListing(pageNo);
        setUploadMsg("");
      }, 3000);
    }
  }, [uploadMsg]);

  console.log("filter = ", filter);

  return (
    <>
      {/* <BreadCrumb
        heading="UPI PayIn Transaction Report"
        value="P2P Transaction Report"
      /> */}
      <div className="card-wrapper flex-column mb-4">
        <div className="card-header flex item-center space-between">
          <h4 className="card-title">PayIn Transactions</h4>
          {/* <div className="flex item-center gap4">
            {uploadMsg && <div style={{ color: "green" }}>{uploadMsg}</div>}
            {userData?.role === "PTM_ADMIN" && (
              <UploadFile onUploadFile={onUploadFile} />
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
          </div> */}
        </div>

        <div className="card-body px16">
          <div className="flex w-full">
            <form className="filter-form w-full" onSubmit={handleSubmit}>
              <FilterFormWrapper className="flex flex-wrap gap4">
                <div className="form-item">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Transaction Id"
                    name="txnId"
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
                    id="exampleFormControlSelect1"
                    name="status"
                    placeholder="Status"
                    onChange={handleChange}
                  >
                    <option value="">Select Status</option>
                    <option value="INITIATED">INITIATED</option>
                    <option value="DONE">DONE</option>
                  </select>
                </div>

                <div className="form-item">
                  <input
                    name="dateFrom"
                    type="date"
                    className="form-control"
                    placeholder="Fom Date"
                    onChange={handleChange}
                    value={filter?.fromDate}
                  />
                </div>

                <div className="form-item">
                  <input
                    name="dateTo"
                    type="date"
                    className="form-control"
                    placeholder="To Date"
                    onChange={handleChange}
                    value={filter?.toDate}
                  />
                </div>
                <div className="form-action">
                  <ButtonSolid type="submit" primary>Search</ButtonSolid>
                  {/* <Button type="submit" className="btn-success">
                    Search
                  </Button> */}
                </div>
              </FilterFormWrapper>
            </form>
          </div>
          <div className="">
            <TableHTML filterItems={{}} reportsItems={reportsItems} />
            {reportsItems && paging_data && (
              <Pagination
                currentPage={paging_data?.number}
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
