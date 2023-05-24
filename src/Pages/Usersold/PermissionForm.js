import React, { useState, useEffect } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { getAuthToken } from "../../utils/common";
import axios from "axios";
import { Button, ModalWrapper } from "../../Components/UI/StyledConstants";

const PermissionForm = (props) => {
  const { userId, closePopUpHandler } = props;
  const [permissions, setPermissions] = useState("");
  const [message, setMessage] = useState({ error: "", success: "" });

  const fetchPermissions = () => {
    const successHandler = (res) => {
      // console.log("success", res);
      if (res) {
        setPermissions(res);
        updateFormData(res.activePermissions);
      }
    };

    const options = {
      headers: {
        Authorization: getAuthToken(),
        "api-Authorization": getAuthToken("api-Authorization"),
      },
    };

    const promise1 = axios
      .get(`${urls.login.BASE_URL}${urls.User.GET_ALL_PERMISISSIONS}`, options)
      .catch(() => "");

    const promise2 = axios
      .get(
        `${urls.login.BASE_URL}${urls.User.MANAGE_USER_PERMISSIONS}?userName=${userId}`,
        options
      )
      .catch(() => "");

    axios
      .all([promise1, promise2])
      .then(
        axios.spread((...responses) => {
          const allPermissions = responses[0] && responses[0].data.data;
          const activePermissions = responses[1] && responses[1].data.data;

          successHandler({
            allPermissions: allPermissions,
            activePermissions: activePermissions,
          });
        })
      )
      .catch((errors) => {
        console.log("responseOne errors", errors);
      });
  };

  useEffect(() => {
    fetchPermissions();
  }, []);

  const handleClick = (event, permKey) => {
    // console.log(
    //   activePermissions,
    //   permKey,
    //   event.target.name,
    //   event.target.checked
    // );

    const activePermissionsCopy = JSON.parse(JSON.stringify(activePermissions));
    if (event.target.checked) {
      if (activePermissionsCopy[permKey]) {
        activePermissionsCopy[permKey].push(event.target.name);
      } else {
        activePermissionsCopy[permKey] = [event.target.name];
      }
    } else {
      const filteredArray = activePermissionsCopy[permKey].filter(
        (item) => item != event.target.name
      );

      activePermissionsCopy[permKey] = filteredArray;
    }
    setPermissions({
      ...permissions,
      activePermissions: activePermissionsCopy,
    });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const { activePermissions } = permissions;

    console.log("submitFormHandler", activePermissions);

    let newPermissions = [];

    Object.keys(activePermissions).forEach((key) => {
      newPermissions = newPermissions.concat(activePermissions[key]);
    });

    console.log("newPermissions", newPermissions);
    const formData = {
      userName: userId,
      addApiCode: newPermissions,
    };

    const submitSuccess = (res) => {
      if (res.success) {
        setMessage({ success: res.msg, error: "" });
      } else {
        setMessage({ error: res.msg, success: "" });
      }
    };
    const submitError = (res) => {
      setMessage({ error: res.msg, success: "" });
    };

    const api = new Request("", submitSuccess, submitError, false);
    return api.post(
      urls.login.BASE_URL + urls.User.MANAGE_USER_PERMISSIONS,
      formData
    );
  };

  const { allPermissions, activePermissions } = permissions;
  console.log("permissions", activePermissions);

  const data = [];

  const permKeys = allPermissions ? Object.keys(allPermissions) : "";

  return (
    <ModalWrapper>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="exampleModalLabel">
              Manage Permissions
            </h4>
            <button
              type="button"
              className="close close-btn"
              onClick={closePopUpHandler}
            >
              <span aria-hidden="true"><i className="fa fa-times" aria-hidden="true"></i> Cancel </span>
            </button>
          </div>

          <div className="modal-body">
            <form onSubmit={submitFormHandler}>

              <div className="pb16">
                <div className={message.success ? "done" : "fail"}>
                  {message.success || message.error}
                </div>
                {permKeys && Array.isArray(permKeys) ? (
                  permKeys.map((permKey) => {
                    return (
                      <>
                        <h6 className="py8">{permKey}</h6>
                        <ul className="pl16">
                          {allPermissions &&
                            allPermissions[permKey] &&
                            Array.isArray(allPermissions[permKey])
                            ? allPermissions[permKey].map((item) => {
                              return (
                                <li className="py4">
                                  <input
                                    type="checkbox"
                                    name={item}
                                    checked={
                                      activePermissions &&
                                        activePermissions[permKey] &&
                                        activePermissions[permKey].includes(
                                          item
                                        )
                                        ? true
                                        : false
                                    }
                                    onClick={(event) =>
                                      handleClick(event, permKey)
                                    }
                                    style={{ marginRight: "10px" }}
                                  />
                                  {item
                                    .replace(/_/g, " ")
                                    .replace("PTM ", "")}
                                </li>
                              );
                            })
                            : ""}
                        </ul>
                      </>
                    );
                  })
                ) : (
                  <div
                    style={{
                      margin: "167px 0 156px 0",
                      fontSize: "26px",
                      textAlign: "center",
                      color: "#0aaaba",
                    }}
                  >
                    Loading....
                  </div>
                )}
              </div>
              <div className="flex item-center justify-center gap16">
                <Button type="submit" className="btn-success wd248">
                  Update Permissions
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default PermissionForm;
