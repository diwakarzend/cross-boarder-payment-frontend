import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { getPayoutBulkUploadedListingRequest, payoutBulkUploadDetailsRequest, payoutBulkUploadRequest } from "../../utils/api";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import TableHTML from "./TableHTML";
import Pagination from "../../Components/PaginationNew/PaginationNew/Pagination";
import { CSVLink } from "react-csv";
import {
    Button,
    BorderBtn,
    FilterFormWrapper,
    TabCardsWraper,
} from "../../Components/UI/StyledConstants";
import { printPage } from "../../utils/common";
import { UploadFile } from "../../Components/UploadFile";
import Tabs from "../../Components/Tabs";

const PayoutBulkUpload = ({ dispatch = () => { }, ...props }) => {
    const [reportsItems, setReportsItems] = useState([]);
    const [downloadData, setDownloadData] = useState([]);
    const [paging_data, setPagingData] = useState(null);
    const [filter, setFilter] = useState({});
    const [activeTab, setActiveTab] = useState('BULK_PAYOUTS');
    const downloadRef = useRef();
    const userData = useSelector((state) => state?.login?.userData || {});
    useEffect(() => {
        getListing(1);
    }, [filter]);

    const getListing = (page_no, page_size = 20, isDownload = false) => {
        const params = {
            pagination: {
                pageNo: page_no,
                pageSize: 20,
            },
        };

        payoutBulkUploadDetailsRequest(params).then((res) => {
            if (isDownload && res?.data?.data?.content) {
                setDownloadData(res?.data?.data?.content);
            } else {
                setPagingData(res?.data?.data);
                setReportsItems(res?.data?.data?.content);
            }
        });
    };

    const getCurrentPageData = (page_no) => {
        getListing(page_no);
    };

    const onDownloadClick = () => {
        if (paging_data && paging_data?.totalElements) {
            getListing(1, paging_data?.totalElements, true);
        }
    };

    const onTabClick = (tabValue) => {
        if(tabValue === "MY_PAYOUTS") {
            getListing(1);
        }
        setActiveTab(tabValue);
    } 

    useEffect(() => {
        if (Array.isArray(downloadData) && downloadData.length > 0) {
            setTimeout(() => {
                downloadRef.current.link.click();
            }, 1000);
        }
    }, [downloadData]);

    const [uploadMsg, setUploadMsg] = useState("");
    const onUploadFile = (data) => {
        if (data?.code == 200) {
            setUploadMsg("File uploaded successfully");
        }
    };

    const getUploadDetails = () => {
        const params = {
            "pagination": {
              "pageNo": 1,
              "pageSize": 10
            }
          }
        payoutBulkUploadDetailsRequest(params).then((response => {
            setPagingData(res?.data?.data);
            setReportsItems(res?.data?.data?.content);
        }));

        

    }

    useEffect(() => {
        if (uploadMsg) {
            setTimeout(() => {
                setUploadMsg("");
            }, 3000);
        }
    }, [uploadMsg]);

    return (
        <>
            {/* <BreadCrumb
                heading="P2P Transaction Report"
                value="P2P Transaction Report"
            /> */}
            <Tabs onTabClick={onTabClick} activeTab={activeTab} tablist={[{ value: 'MY_PAYOUTS', label: 'My Payouts' }, { value: 'BULK_PAYOUTS', label: 'Bulk Payouts' }]} />
            <TabCardsWraper className="">
                <div className="tab-card active">
                    <div className="title">Upload Payout File</div>
                    <p className="text">Simplify your bulk payouts with a single file upload</p>
                </div>
                <div className="tab-card-details">
                    <div className="details-data">
                        <div className="title">File Uploaded</div>
                        <div className="value">0</div>
                    </div>
                    <div className="details-data">
                        <div className="title">File Uploaded</div>
                        <div className="value">0</div>
                    </div>
                    <div className="details-data">
                        <div className="title">File Uploaded</div>
                        <div className="value">0</div>
                    </div>
                </div>
            </TabCardsWraper>
            <div className="card-wrapper flex-column mb-4">
                {
                    activeTab === 'MY_PAYOUTS' &&
                    <>
                        <div className="card-header flex item-center space-between">
                            <h4 className="card-title">Bulk Payouts</h4>
                            <div className="flex item-center gap4">
                                {uploadMsg && <div style={{ color: "green" }}>{uploadMsg}</div>}
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
                    </>
                }
                {
                    activeTab === 'BULK_PAYOUTS' &&
                    <>
                        <div className="card-header flex item-center space-between">
                            {/* <h4 className="card-title">Bulk Payouts</h4> */}
                            <div className="flex item-center gap4">
                                {uploadMsg && <div style={{ color: "green" }}>{uploadMsg}</div>}
                            </div>
                        </div>
                        <div className="card-body px16">
                            {userData?.role === "PTM_ADMIN" && (
                                <UploadFile
                                    onUploadFile={onUploadFile}
                                    uploadText="Payout Bulk Upload"
                                    bulkUploadRequest={payoutBulkUploadRequest}
                                    accept=".csv"
                                />
                            )}
                            
                        </div>
                    </>
                }
            </div>
        </>
    );
};
const mapStateToProps = (state) => {
    return { payout: state.payout };
};

export default connect(mapStateToProps)(PayoutBulkUpload);
