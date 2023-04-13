import React, { useState, useRef, useEffect } from "react";
import { ModalWrapper, Button, AlertWrapper } from "../../Components/UI/StyledConstants";
import Request from "../../utils/Request";
import urls from "../../utils/urls";

const IPForm = (props) => {
  const { closePopUpHandler, fetchIPDetails, userInfo, setIpMessage } = props;
  const [formData, updateFormData] = useState({ ip: "", username: "" });
  const [message, setMessage] = useState({ success: "", error: "" });

  // const [success, updateSuccess] = useState("");

  useEffect(() => {
    updateFormData({
      ip: userInfo.ip && userInfo.ip,
      username: userInfo && userInfo.username,
    });
  }, []);

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      ip: event.target.value,
    });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log("ipInputValue", formData);
    const errorHandler = (response) => {
      if (response) {
        setMessage({ error: response.msg, success: "" });
      }
    };

    const successHandler = (response) => {
      if (response) {
        if (response.success) {
          setMessage({ success: response.msg, error: "" });
          fetchIPDetails();
          setIpMessage("IP Updated successfully");
          closePopUpHandler();
        } else {
          setMessage({ error: response.msg, success: "" });
        }
      }
    };

    const api = new Request("", successHandler, errorHandler, false);
    return api.post(urls.login.BASE_URL + urls.User.API_LIST_UPDATE, formData);
  };

  console.log("formData", formData, userInfo);
  return (
    <ModalWrapper>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="exampleModalLabel">
              Add IP
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
            {(message.success || message.error) && <AlertWrapper className="alert alert-normal">{message.success || message.error}</AlertWrapper>}
            <form onSubmit={submitFormHandler}>

              <div className="pb16">
                <textarea
                  type="text"
                  className="form-control form-textarea"
                  placeholder="Enter Comma Separted IPs"
                  name="ipInput"
                  value={formData && formData.ip}
                  onChange={handleChange}
                />
              </div>
              <div className="flex item-center justify-end gap16">
                <Button
                  type="button"
                  className="btn-light"
                  data-dismiss="modal"
                  onClick={closePopUpHandler}
                >
                  Close
                </Button>
                <Button type="submit" className="btn-success">
                  Update IP
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default IPForm;
