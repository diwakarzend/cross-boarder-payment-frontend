import React, { useState, useEffect } from "react";
import Request from "../../utils/Request";
import APIS from "../../utils/urls";
import { fetchUsersList } from "../../actions/users";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import AddUserForm from "./AddUserForm";
import PermissionForm from "./PermissionForm";
import AdminFundForm from "./AdminFundForm";

import { connect } from "react-redux";
import { printPage, addOverlay, removeOverlay } from "../../utils/common";
import WalletDetails from "./WalletDetails";
import {
  AlertWrapper,
  Button,
  BorderBtn,
  TableWrapper,
  TooltipWrapper,
} from "../../Components/UI/StyledConstants";

const roleMapping = {
  PTM_VENDOR: "Vendor",
  PTM_ADMIN: "Admin",
  PTM_SUB_ADMIN: "Sub Admin",
};

const styles = {
  iconContainer: {
    padding: "10px",
    cursor: "pointer",
  },
  bulbContainer: {
    N: {
      color: "gray",
      padding: "10px",
    },
    Y: { color: "green", padding: "10px" },
  },
};

const Users = (props) => {
  const [isPopupVisible, handlePopUp] = useState(false);
  const [userStatus, setUserStatus] = useState({
    userName: "",
    msg: "",
    status: "",
  });

  const [transationPopupVisible, setTransationPopupVisible] = useState(false);
  const [userTransactionDetails, setUserTransactionDetails] = useState({});

  const [showPhoneNumberField, setShowPhoneNumberField] = useState();
  const [statusMsg, setStatusMsg] = useState("");

  const [userToBeEdit, setUserId] = useState("");
  const [editUserData, setEditUserData] = useState("");
  const [permissionData, setPermissionData] = useState({
    isPopupVisible: false,
    userId: "",
  });

  const [adminFormData, setAdminFormData] = useState("");
  const [isTooltip, setTooltip] = useState(false);

  const { dispatch } = props;

  const fetchUsersData = () => {
    dispatch(fetchUsersList());
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const showTransactionHandler = (item) => {
    setUserTransactionDetails(item);
    setTransationPopupVisible(true);
    addOverlay();
  };
  const closeTransactionHandler = () => {
    setTransationPopupVisible(false);
    removeOverlay();
  };

  const editClickHandler = (userId) => {
    setShowPhoneNumberField(false);
    handlePopUp(true);
    addOverlay();
    setUserId(userId);
    const successHandler = (response, headers) => {
      if (response.success == true) {
        setEditUserData(response.data);
      }
    };

    const errorHandler = (error) => {};

    const request = new Request("", successHandler, errorHandler, false);
    return request.get(
      `${APIS.login.BASE_URL}${APIS.User.EDIT_USER.replace("{userId}", userId)}`
    );
  };

  const adminFundFormHandler = (userId) => {
    addOverlay();
    setAdminFormData(userId);
  };

  const permissionClickHandler = (userId) => {
    addOverlay();
    setPermissionData({ isPopupVisible: true, userId: userId });
  };

  const openPopupHandler = () => {
    document.body.classList.add("modal-open");
    setShowPhoneNumberField(true);
    handlePopUp(true);
  };

  const handleUserStatus = (userId, curentStatus) => {
    const status = curentStatus == "N" ? "Y" : "N";
    setTooltip(false);
    const successHandler = (response) => {
      console.log("responseresponse", response);
      if (response.success) {
        const msg = status == "N" ? "deactivated" : "activated";
        setTooltip(true);
        setUserStatus({
          userName: userId,
          status: status,
          msg: (
            <>
              This user is now <strong>{msg}</strong>
            </>
          ),
        });
      }
    };

    const errorHandler = (error) => {};

    const request = new Request("", successHandler, errorHandler, false);
    const params = `?userId=${userId}&status=${status}`;
    return request.put(
      `${APIS.login.BASE_URL}${APIS.User.MANAGE_USER_STATUS}${params}`
    );
  };

  const closeAdminFundPopUpHandler = () => {
    setAdminFormData("");
    removeOverlay();
    document.body.classList.remove("modal-open");
  };

  const closePopUpHandler = () => {
    setEditUserData("");
    removeOverlay();
    document.body.classList.remove("modal-open");
    handlePopUp(false);
  };

  const closePermissionPopup = () => {
    setPermissionData({
      ...permissionData,
      userId: "",
      isPopupVisible: false,
    });
    removeOverlay();
  };

  const { users } = props;

  let userData = users && users.usersList && users.usersList.data;

  if (userData) {
    userData = userData.map((item) => {
      if (item.userName == userStatus.userName) {
        item.isActive = userStatus.status;
      }
      return item;
    });
  }

  // useEffect(() => {
  //   if(isTooltip) {
  //     setTimeout(() => {
  //       setTooltip(false);
  //     }, 2000)
  //   }
  // }, [isTooltip])

  useEffect(() => {
    if (statusMsg) {
      setTimeout(() => {
        setStatusMsg("");
      }, 3000);
    }
  }, [statusMsg]);

  return (
    <>
      <BreadCrumb heading="Users" value="Users" />
      <div className="card-wrapper flex-column mb-4">
        <div className="card-header flex item-center space-between">
          <h4 className="card-title">Users List</h4>
          <div className="flex gap4">
            <BorderBtn type="button" className="btn-soft-success">
              <i className="fa fa-download" aria-hidden="true"></i> CSV
            </BorderBtn>
            <BorderBtn
              type="button"
              className="btn-soft-success ml10"
              onClick={() => printPage()}
            >
              <i className="fa fa-print" aria-hidden="true"></i> Print
            </BorderBtn>
          </div>
        </div>
        <div className="card-body">
          <div className="flex space-between px16">
            <Button
              type="button"
              className="btn-success"
              onClick={openPopupHandler}
            >
              Add User
            </Button>
          </div>
          <TableWrapper>
            {statusMsg && (
              <AlertWrapper className="alert alert-normal">
                {statusMsg}
              </AlertWrapper>
            )}
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Company Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Wallet</th>
                  <th>Hold Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {userData && Array.isArray(userData)
                  ? userData.map((item, index) => {
                      let userClass = "";
                      if (item.role && roleMapping[item.role]) {
                        userClass = roleMapping[item.role]
                          .toLowerCase()
                          .replace(" ", "-");
                      }

                      let status = item.isActive;
                      const activeStatus = item.isActive == "N" ? "Y" : "N";

                      return (
                        <tr key={item.userName}>
                          <td>{index + 1}</td>
                          <td>{`${item.firstName} ${item.lastName}`}</td>
                          <td>{item.userName}</td>
                          <td>{item.email}</td>
                          <td className={userClass}>
                            {roleMapping[item.role] || "NA"}
                          </td>
                          <td>
                            Rs. {item.userBalance || "0"}
                            <i
                              style={styles.iconContainer}
                              className="fa fa-info-circle"
                              title="Show Transactions"
                              onClick={() => showTransactionHandler(item)}
                            ></i>
                          </td>
                          {/* <td className="done">
                                {item.isActive == "Y"
                                  ? "Active"
                                  : "In Active"}
                              </td> */}
                          <td>
                            {item.holdBalance ? "Rs." + item.holdBalance : "-"}
                          </td>
                          <td>{`${
                            item.isActive == "N" ? "Active" : "Inactive"
                          }`}</td>
                          <td>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                              }}
                            >
                              <div style={styles.iconContainer}>
                                <i
                                  className="fa fa-pencil-square-o"
                                  onClick={() =>
                                    editClickHandler(item.userName)
                                  }
                                  style={{ cursor: "pointer" }}
                                  title="update user"
                                ></i>
                              </div>
                              {/* | */}
                              <div style={styles.iconContainer}>
                                <i
                                  className="fa fa-key"
                                  onClick={() =>
                                    permissionClickHandler(item.userName)
                                  }
                                  title="Manage Permissions"
                                  style={{ cursor: "pointer" }}
                                ></i>
                              </div>
                              {/* | */}
                              <div style={styles.iconContainer}>
                                <i
                                  className="fa-key"
                                  title="Add Fund"
                                  onClick={() => {
                                    console.log("successful");
                                    adminFundFormHandler(item.userName);
                                  }}
                                ></i>
                              </div>
                              {/* | */}
                              <TooltipWrapper
                                style={styles.bulbContainer[activeStatus]}
                                onClick={() =>
                                  handleUserStatus(item.userName, status)
                                }
                              >
                                <i
                                  className="fa fa-lightbulb-o"
                                  style={{ fontWeight: "bold" }}
                                  title={`${
                                    item.isActive == "N" ? "Active" : "Inactive"
                                  }`}
                                ></i>

                                {userStatus.userName == item.userName &&
                                  isTooltip && (
                                    <div className="tooltip tooltip-success">
                                      {userStatus?.msg}
                                    </div>
                                  )}
                              </TooltipWrapper>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  : ""}
              </tbody>
            </table>
          </TableWrapper>
        </div>
      </div>

      {adminFormData ? (
        <AdminFundForm
          userId={adminFormData}
          closeAdminFundForm={closeAdminFundPopUpHandler}
          setStatusMsg={setStatusMsg}
          successCallBack={fetchUsersData}
        />
      ) : (
        ""
      )}
      {isPopupVisible ? (
        <AddUserForm
          closePopUpHandler={closePopUpHandler}
          fetchUsersData={fetchUsersData}
          props={props}
          editUserData={editUserData}
          userToBeEdit={userToBeEdit}
          showPhoneNumberField={showPhoneNumberField}
        />
      ) : (
        ""
      )}

      {transationPopupVisible ? (
        <WalletDetails
          userWallet={userTransactionDetails}
          closeTransactionHandler={closeTransactionHandler}
        />
      ) : (
        ""
      )}

      {permissionData.isPopupVisible ? (
        <PermissionForm
          closePopUpHandler={closePermissionPopup}
          userId={permissionData.userId}
        />
      ) : (
        ""
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Users);
