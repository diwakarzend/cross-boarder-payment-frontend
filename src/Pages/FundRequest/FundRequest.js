import React, { useEffect, memo, useState } from "react";
import { fetchFundRequests } from "../../actions/userwallet";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { connect } from "react-redux";
import { addOverlay, printPage, removeOverlay } from "../../utils/common";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import FundRequestForm from "./FundRequestForm";
import FullPageLoader from "../../Components/FullPageLoader";
import {
  Button,
  BorderBtn,
  TableWrapper,
} from "../../Components/UI/StyledConstants";

const FundRequest = memo((props) => {
  const { dispatch, login, userwallet } = props;

  const fundRequestItems = userwallet?.fundRequest?.data;
  const fundRequestLoading = userwallet?.fundRequestLoading;
  const userRole = login && login.userData && login.userData.role;

  const [isPopupVisible, handlePopUp] = useState(false);
  const [statusMessage, setStatus] = useState("");

  const getFundRequest = (userRole) => {
    dispatch(fetchFundRequests(userRole));
  };

  //componentDidUpdate

  useEffect(() => {
    if (userRole) {
      getFundRequest(userRole);
    }
  }, [userRole]);

  const changeHandler = (event) => {
    dispatch(fetchFundRequests(userRole, event.target.value));
  };

  const closePopUpHandler = () => {
    removeOverlay();
    handlePopUp(false);
  };

  const openPopupHandler = () => {
    addOverlay();
    handlePopUp(true);
  };

  const successHandler = (response) => {
    setStatus(response.msg);
    getFundRequest(userRole);
  };
  const errorHandler = (response) => {
    setStatus(response.msg);
  };

  const handleApprove = (requestId) => {
    // reqstfunduuid
    const api = new Request("", successHandler, errorHandler, false);
    return api.get(
      urls.login.BASE_URL + urls.Wallet.FUND_REQUEST_APPROVE + requestId
    );
  };
  const handleReject = (requestId) => {
    const api = new Request("", successHandler, errorHandler, false);
    return api.get(
      urls.login.BASE_URL + urls.Wallet.FUND_REQUEST_REJECT + requestId
    );
  };

  console.log("fundRequestLoading", fundRequestLoading);
  return (
    <>
      <BreadCrumb heading="Fund Request" value="Fund Request" />
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        {statusMessage}
      </div>
      <div className="card-wrapper flex-column mb-4">
        <div className="card-header flex item-center space-between">
          <h4 className="card-title">All Fund Requests</h4>
          <div className="flex gap4">
            <BorderBtn>
              <i className="fa fa-download" aria-hidden="true"></i> CSV
            </BorderBtn>
            <BorderBtn className="ml10" onClick={printPage}>
              <i className="fa fa-print" aria-hidden="true"></i> Print
            </BorderBtn>
          </div>
        </div>
        <div className="card-body px16">
          <div className="flex space-between">
            {userRole !== "PTM_ADMIN" && (
              <Button className="btn-success" onClick={openPopupHandler}>
                Fund Request
              </Button>
            )}
            <div className="col-2">
              {userRole != "PTM_ADMIN" && (
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  onChange={changeHandler}
                >
                  <option value="">Search Payment Status</option>
                  <option value="INITIATED">INITIATED</option>
                  <option value="DONE">Completed</option>
                </select>
              )}
            </div>
          </div>
          <TableWrapper>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Mobile No.</th>
                  <th scope="col">From Bank Name</th>
                  <th scope="col">To Bank Name</th>
                  <th scope="col">Requested Amount</th>
                  <th scope="col">Payment Mode</th>
                  <th scope="col">Requested Date</th>
                  <th scope="col">Status</th>
                  {userRole !== "PTM_VENDOR" && <th scope="col">Action</th>}
                </tr>
              </thead>
              <tbody>
                {fundRequestLoading && <FullPageLoader />}
                {!fundRequestLoading &&
                fundRequestItems &&
                Array.isArray(fundRequestItems) &&
                fundRequestItems.length > 0 ? (
                  fundRequestItems.map((item, index) => {
                    return (
                      <tr key={item.reqstDate}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.requestUserName}</td>
                        <td>{item.requestUserName}</td>
                        <td>{item.fromBank}</td>
                        <td>{item.toBank}</td>
                        <td>Rs. {item.requestAmount}</td>
                        <td>{item.payementMode}</td>
                        <td>{item.reqstDate}</td>
                        <td className={item.approveStatus.toLowerCase()}>
                          {item.approveStatus}
                        </td>

                        {userRole !== "PTM_VENDOR" && (
                          <td>
                            {item.approveStatus != "DONE" &&
                            item.approveStatus != "REJECTED" ? (
                              <React.Fragment>
                                <button
                                  onClick={() =>
                                    handleApprove(item.reqstfundUuid)
                                  }
                                  className="btn-common"
                                >
                                  Approve
                                </button>
                                <button
                                  onClick={() =>
                                    handleReject(item.reqstfundUuid)
                                  }
                                  className="btn-common badge-warning"
                                >
                                  Reject
                                </button>
                              </React.Fragment>
                            ) : (
                              "NA"
                            )}
                          </td>
                        )}
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="9" style={{ textAlign: "center" }}>
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
        <FundRequestForm
          isPopupVisible={isPopupVisible}
          closePopUpHandler={closePopUpHandler}
          userRole={userRole}
          getFundRequest={getFundRequest}
          setStatus={setStatus}
        />
      )}
    </>
  );
});

const mapStateToProps = (state) => {
  return { login: state.login, userwallet: state.userwallet };
};
export default connect(mapStateToProps)(FundRequest);
