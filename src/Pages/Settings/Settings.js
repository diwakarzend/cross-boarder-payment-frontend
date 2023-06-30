import React, { useState, useRef } from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ChangePassword from "../../Components/ResetPassword/ChangePassword";
import IPForm from "../Settings/IPForm";
import { addOverlay, removeOverlay } from "../../utils/common";
import { connect } from "react-redux";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import "./Settings.css";
import { Button, TableWrapper } from "../../Components/UI/StyledConstants";
import { ButtonSolid } from "../../Components/styledConstants";

const Settings = (props) => {
  const [toggleApi1, setToggeleAPI1] = useState(false);
  const [toggleApi2, setToggeleAPI2] = useState(false);
  const [activeTab, setactiveTab] = useState("password");
  const [ipPopup, setIPPopup] = useState(false);
  const [ipdata, setipData] = useState("");
  const [activeUserInfo, setActiveUserInfo] = useState("");
  const [ipmessage, setIpMessage] = useState("");

  const tokenInput = useRef();

  const { login } = props;

  const fetchIPDetails = () => {
    const successHandler = (response) => {
      if (response.success == true) {
        setipData(response.data);
      }
    };

    const errorHandler = (error) => {};

    const request = new Request("", successHandler, errorHandler, false);
    return request.get(`${urls.login.BASE_URL}${urls.User.API_LIST}`);
  };

  const handleTabClick = (item) => {
    // alert(item);
    if (item == "ip") {
      fetchIPDetails();
    }
    setactiveTab(item);
  };

  const handleIPForm = (item) => {
    console.log("item121", item);
    addOverlay();
    setIPPopup(true);
    setActiveUserInfo(item);
  };

  const closeIPPopUpHandler = () => {
    removeOverlay();
    setIPPopup(false);
    setActiveUserId("");
  };

  const generateString = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    tokenInput.current.value = result;
  };

  const setTabItemClass = (tabName) => {
    let cls = "tab-item";
    if (activeTab === tabName) {
      cls += " active";
    }
    return cls;
  };

  console.log("ipdata", props);

  const userRole = login && login.userData && login.userData.role;

  /*
   */
  return (
    <>
      {/* <BreadCrumb heading="Settings" value="Settings" /> */}

      <div className="card-wrapper flex-column mb-4 mt30 ml30 mr30">
        <div className="card-header">
          <ul className="tab-List">
            <li
              className={setTabItemClass()}
              onClick={() => handleTabClick("password")}
            >
              Change Password
            </li>
            {/* <li
              className={setTabItemClass()}
              onClick={() => handleTabClick("payoutapi")}
            >
              PAYOUT API
            </li> */}
            <li
              className={setTabItemClass()}
              onClick={() => handleTabClick("apikey")}
            >
              API Key
            </li>
            <li
              className={setTabItemClass()}
              onClick={() => handleTabClick("ip")}
            >
              IP
            </li>
          </ul>
        </div>

        <div className="card-body p16">
          <div className="tab-content" id="pills-tabContent">
            {activeTab == "password" && <ChangePassword />}
            {activeTab == "payoutapi" && (
              <API
                toggleApi1={toggleApi1}
                toggleApi2={toggleApi2}
                setToggeleAPI1={setToggeleAPI1}
                setToggeleAPI2={setToggeleAPI2}
              />
            )}
            {activeTab == "apikey" && (
              <>
               <ButtonSolid 
                  className="mb16" 
                  onClick={() => generateString(70)} 
                  primary lg
                >
                    Generate Token
              </ButtonSolid>
                {/* <Button
                  className="btn-success mb16"
                  onClick={() => generateString(70)}
                >
                  Generate Token
                </Button> */}
                <div className="form-group">
                  <input
                    className="form-control"
                    value="BSX4MzMZKnb4g0JFYGEzk-pvPx4a7ZtQfduKmkfHhTsJJNsfLaNHlPufPSfA"
                    ref={tokenInput}
                  />
                </div>
              </>
            )}
            {activeTab == "ip" && (
              <div>
                {ipPopup ? (
                  <IPForm
                    closePopUpHandler={closeIPPopUpHandler}
                    fetchIPDetails={fetchIPDetails}
                    setIpMessage={setIpMessage}
                    userInfo={activeUserInfo}
                  />
                ) : (
                  ""
                )}

                <div className="done">{ipmessage}</div>
                <TableWrapper>
                  <table className="table">
                    <tr>
                      <th>UserId</th>
                      <th>IP Address</th>
                      <th>Last Modified</th>
                      {userRole != "PTM_VENDOR" && <th>Action</th>}
                    </tr>

                    {ipdata && ipdata.content && Array.isArray(ipdata.content)
                      ? ipdata.content.map((item) => {
                          return (
                            <tr>
                              <td>{item.username}</td>
                              <td>{item.ip && item.ip.join(", ")}</td>
                              <td>{item.lastUpdated}</td>
                              {userRole != "PTM_VENDOR" && (
                                <td onClick={() => handleIPForm(item)}>
                                  <i
                                    className="icon-pencil"
                                    style={{ cursor: "pointer" }}
                                    title="Edit IP"
                                  ></i>
                                </td>
                              )}
                            </tr>
                          );
                        })
                      : ""}
                  </table>
                </TableWrapper>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Settings);

const API = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="card-wrapper flex-column mb-4">
            <div className="card-header flex item-center space-between">
              <h4>Send Payout Request</h4>
            </div>
            <div className="card-body">
              <h6 className="p16 text-right">Parameter Required</h6>
              <TableWrapper className="pt0">
                <table className="table table-bordered">
                  <tr>
                    <th>Parameter</th>
                    <th>Required</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>accountNumber</td>
                    <td>Mendatory</td>
                    <td>Benefeciary account number</td>
                  </tr>
                  <tr>
                    <td>beneficiaryName</td>
                    <td>Mendatory</td>
                    <td>Benefeciary Name</td>
                  </tr>
                  <tr>
                    <td>ifscCode</td>
                    <td>Mendatory</td>
                    <td>Benefeciary Ifsc code</td>
                  </tr>
                  <tr>
                    <td>mobileNumber</td>
                    <td>Non Mendatory</td>
                    <td>Benefeciary Mobile Number</td>
                  </tr>
                  <tr>
                    <td>remittanceAmount</td>
                    <td>Mendatory</td>
                    <td>Amount need to send</td>
                  </tr>
                  <tr>
                    <td>route</td>
                    <td>Mendatory</td>
                    <td>NEFT/IMPS/RTGS</td>
                  </tr>
                </table>
              </TableWrapper>
              <div className="p16 pt0">
                <h6 className="pb16">Response Json</h6>
                <div className="api-code-block">
                  <span className="pl-0"></span>
                  <span className="pl-4">"success :true,"</span>
                  <span className="pl-4">"code :INFO031",</span>
                  <span className="pl-4">
                    "msg :PayOut Initiated successfully!"
                  </span>

                  <span className="pl-0"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card-wrapper flex-column mb-4">
            <div className="card-header flex item-center space-between">
              <h4>Verify Payout OTP</h4>
            </div>
            <div className="card-body">
              <h6 className="p16 text-right">Parameter Required</h6>
              <TableWrapper className="pt0">
                <table className="table">
                  <tr>
                    <th>Parameter</th>
                    <th>Required</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>payOutOtp</td>
                    <td>Mendatory</td>
                    <td>Add recieved otp send to the vendor mobile</td>
                  </tr>
                  <tr>
                    <td>txnId</td>
                    <td>Mendatory</td>
                    <td>Payout transaction id</td>
                  </tr>
                </table>
              </TableWrapper>
              <div className="p16 pt0">
                <h6 className="pb16">Response Json</h6>
                <div className="api-code-block">
                  <span className="pl-0"></span>
                  <span className="pl-4">
                    "txnId" : "payoutrequest txn id",
                  </span>
                  <span className="pl-4">
                    "payOutOtp" : "received otp on vendor mobile"
                  </span>

                  <span className="pl-0"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
