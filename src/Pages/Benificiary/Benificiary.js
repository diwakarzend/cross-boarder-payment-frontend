import React, { useEffect, memo, useState } from "react";

import { connect } from "react-redux";
import { fetchBeneficiary } from "../../actions/beneficiary";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import BenificiaryForm from "./BenificiaryForm";
import QuickPaymentForm from "../Payout/QuickPaymentForm";
import UPIPaymentForm from "../Payout/UPIPaymentForm";
import IconUPI from "../../assests/images/Icons/IconUPI";
import IconBank from "../../assests/images/Icons/IconBank";
import CsvDown from "../../Components/ExportFiles/CsvDown";
import PdfDown from "../../Components/ExportFiles/PdfDown";
import { ButtonSolid } from "../../Components/styledConstants";

import {
  addOverlay,
  removeOverlay,
  hideMessage,
  printPage,
} from "../../utils/common";
import {
  Button,
  BorderBtn,
  TableWrapper,
} from "../../Components/UI/StyledConstants";
import Request from "../../utils/Request";
import Config from "../../utils/urls";
import { UpiCollectionsStyle } from "../../Components/Dashboard/PtmVendor/style";
import IconSearch from "../../assests/images/Icons/IconSearch";
import { Wrapper } from "./style";
const Benificiary = memo((props) => {
  const { dispatch, login, beneficiary } = props;
  const userRole = login && login.userData && login.userData.role;
  const [isPopupVisible, handlePopUp] = useState(false);
  const [statusMessage, setStatus] = useState("");
  const [isQuickPopupVisible, handleQuickPopUp] = useState(false);
  const [isUPIPopupVisible, handleUPIPopUp] = useState(false);
  const [downloadPageSize, setDownloadPageSize] = useState(10);

  const [payeeInfo, setPayeeInfo] = useState("");
  const [editUserData, setEditUserData] = useState("");
  const benificiaryItems =
    beneficiary && beneficiary.items && beneficiary.items.data;

  useEffect(() => {
    getBeneficiary();
  }, []);

  useEffect(() => {
    hideMessage(statusMessage, setStatus);
  }, [statusMessage]);

  const getBeneficiary = () => {
    dispatch(fetchBeneficiary());
  };

  const closePopUpHandler = () => {
    removeOverlay();
    handlePopUp(false);
  };

  const openPopupHandler = () => {
    addOverlay();
    handlePopUp(true);
    setEditUserData("");
  };

  const closeQuickPopUpHandler = () => {
    removeOverlay();
    handleQuickPopUp(false);
  };

  const closeUPIPopUpHandler = () => {
    removeOverlay();
    handleUPIPopUp(false);
  };

  const openUPIPopupHandler = (accountNumber) => {
    addOverlay();
    handleUPIPopUp(true);
    let payeeData = "";
    if (
      benificiaryItems &&
      Array.isArray(benificiaryItems) &&
      benificiaryItems.length > 0
    ) {
      payeeData = benificiaryItems.filter(
        (item) => item.accountNumber == accountNumber
      );
      if (payeeData.length > 0) {
        setPayeeInfo(payeeData[0]);
      }
    }
  };

  const openQuickPopupHandler = (accountNumber) => {
    addOverlay();
    handleQuickPopUp(true);
    let payeeData = "";
    if (
      benificiaryItems &&
      Array.isArray(benificiaryItems) &&
      benificiaryItems.length > 0
    ) {
      payeeData = benificiaryItems.filter(
        (item) => item.accountNumber == accountNumber
      );
      if (payeeData.length > 0) {
        const payeeInfo = { ...payeeData[0] };

        payeeInfo["clientId"] = "1d04666d-52f1-4dbe-ab5b-d5e8fcc5a12c";
        payeeInfo["merchantCode"] = "RBL";
        // payeeInfo["mobile"] = "8800578866";
        //  payeeInfo["bankName"] = "ICICI";

        console.log("payeeInfo", payeeInfo);

        setPayeeInfo(payeeInfo);

        //     "clientId":"1d04666d-52f1-4dbe-ab5b-d5e8fcc5a12c", \
        //  "accountNumber":"158001505522", \
        //  "ifscCode":"ICIC0001580", \
        //  "bankName":"ICICI", \
        //  "beneficiaryName":"Diwakar", \
        //  "merchantCode":"string", \
        //  "mobileNumber":"8800578866", \
        //  "remittanceAmount":"1", \
        //  "route":"IMPS", \
        //  "type":"IMPS" \
      }
    }
  };

  const editPopupHandler = (item) => {
    const itemCopy = JSON.parse(JSON.stringify(item));
    itemCopy.mobileNumber = itemCopy.mobile;
    delete itemCopy.mobile;
    setEditUserData(itemCopy);
    handlePopUp(true);
    addOverlay();
  };

  const headers = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Mobile No	", key: "mobile" },
    { label: "Bank Name	", key: "bankName" },
    { label: "Account No", key: "accountNumber" },
    { label: "IFSC", key: "ifscCode" },
    { label: "Status", key: "status" },
  ];

  const tableHeader = [
    {
      firstName: "First Name",
      lastName: "Last Name",
      mobile: "Mobile No.",
      bankName: "Bank Name",
      accountNumber: "Account No",
      ifscCode: "IFSC",
      status: "Status",
    },
  ];

  const getTableBody = (data) => {
    const tableBody = [];
    data.forEach((element) => {
      tableBody.push({
        firstName: element.firstName,
        lastName: element.lastName,
        mobile: element.mobile,
        bankName: element.bankName,
        accountNumber: element.accountNumber,
        ifscCode: element.ifscCode,
        status: element.status,
      });
    });

    return tableBody;
  };

  return (
    <Wrapper>
      {/* <UpiCollectionsStyle>
        <div className="wallet-wrapper">
          <div className="flex list">
            <div className="image">
              <img src="/images/rupees.png" alt="rupess" />
            </div>
            <div className="text">
              <div className="label">Wallet Balance:</div>
              <div className="value">
                &#8377; 30491.25
              </div>
            </div>
          </div>
          <div className="flex items-center list">
            <div className="text">
              <div className="label">RBL Bank:</div>
              <div className="value">&#8377; 1,85,507.00</div>
            </div>
            <div className="refresh">
              <button>
                <i className="fa fa-refresh" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </UpiCollectionsStyle> */}
      {/* <BreadCrumb heading="Beneficiary" value="Beneficiary" /> */}
      <div style={{ textAlign: "center" }}>{statusMessage}</div>
      <div className="card-wrapper flex-column mb-4">
        <div className="card-header flex item-center space-between">
          <h4 className="card-title">All Beneficiary</h4>
          <div className="flex gap4">
            <CsvDown
              headers={headers}
              url={`${Config?.login.BASE_URL}${Config?.User?.GET_BENEFICIARY}`}
              method="get"
              //  params={getParams(controls)}
              type="adminlist"
              title="Download CSV."
            />
            <span className="ml10">
              <PdfDown
                tableHeader={tableHeader}
                getTableBody={getTableBody}
                url={`${Config?.login.BASE_URL}${Config?.User?.GET_BENEFICIARY}`}
                method="get"
                // params={getParams(controls)}
                heading="Beneficiary List"
                fileName="beneficires"
              />
            </span>
            <BorderBtn
              className="btn-soft-success border-btn ml10"
              onClick={printPage}
            >
              <i className="fa fa-print" aria-hidden="true"></i> Print
            </BorderBtn>
          </div>
        </div>
        <div className="flex space-between px16">
          <div className="flex filter-wrap">
            <select>
              <option>Select Filter</option>
              <option>Filter 1</option>
              <option>Filter 2</option>
            </select>
            <input type="text" />
            <button>
              <IconSearch />
            </button>
          </div>
          <ButtonSolid type="submit" primary lg> Add Beneficiary</ButtonSolid>
          {/* <Button className="btn-success" onClick={openPopupHandler}>
            Add Beneficiary
          </Button> */}
        </div>
        <div className="card-body">
          <TableWrapper>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Mobile No</th>
                  <th scope="col">Bank Name</th>
                  <th scope="col">Account No</th>
                  <th scope="col">IFSC</th>
                  <th scope="col">Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {benificiaryItems &&
                Array.isArray(benificiaryItems) &&
                benificiaryItems.length > 0 ? (
                  benificiaryItems.map((item, index) => {
                    const statusColor = "green";
                    if (item.status == "INPROCESS") {
                      statusColor = "orange";
                    }
                    return (
                      <tr key={item.reqstDate}>
                        <td scope="row">{index + 1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.mobile}</td>
                        <td>{item.bankName}</td>
                        <td>{item.accountNumber}</td>
                        <td>{item.ifscCode}</td>
                        <td
                          className={item.status.toLowerCase()}
                          style={{ color: statusColor, fontWeight: "bold" }}
                        >
                          {item.status.toLowerCase()}
                        </td>
                        <td>
                          <div className="flex item-center">
                            <span
                              className="flex payment-btn"
                              onClick={() =>
                                openUPIPopupHandler(item.accountNumber)
                              }
                              title="UPI Pay"
                            >
                              <IconUPI />
                              Upi Pay
                            </span>
                            <span
                              className="flex item-center payment-btn"
                              onClick={() =>
                                openQuickPopupHandler(item.accountNumber)
                              }
                            >
                              <span>&#8377;</span>
                              Quick Pay
                            </span>
                            <span
                              className="edit-btn"
                              onClick={() => editPopupHandler(item)}
                            >
                              <i
                                className="fa fa-pencil"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="8" style={{ textAlign: "center" }}>
                      No Data Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </TableWrapper>
        </div>
      </div>
      {isPopupVisible && (
        <BenificiaryForm
          isPopupVisible={isPopupVisible}
          closePopUpHandler={closePopUpHandler}
          userRole={userRole}
          getBeneficiary={getBeneficiary}
          setStatus={setStatus}
          editUserData={editUserData}
        />
      )}
      {isQuickPopupVisible && (
        <QuickPaymentForm
          isQuickPopupVisible={isQuickPopupVisible}
          closeQuickPopUpHandler={closeQuickPopUpHandler}
          benificiaryData={payeeInfo}
        />
      )}
      {isUPIPopupVisible && (
        <UPIPaymentForm
          isUPIPopupVisible={isUPIPopupVisible}
          closeUPIPopUpHandler={closeUPIPopUpHandler}
          benificiaryData={payeeInfo}
        />
      )}
    </Wrapper>
  );
});

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(Benificiary);
