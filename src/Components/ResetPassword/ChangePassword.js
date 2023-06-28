import React, { memo, useState } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { Button } from "../UI/StyledConstants";
import { ButtonSolid } from "../../Components/styledConstants";

const initialFormData = Object.freeze({
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
});
const ChangePassword = memo((props) => {
  const [formData, updateFormData] = useState(initialFormData);
  const [message, setMessage] = useState({ error: "", success: "" });

  const submitFormHandler = (event) => {
    event.preventDefault();

    const errorHandler = (response) => {};

    const successHandler = (response) => {
      if (response && response.success == false) {
        setMessage({ error: response.msg, success: "" });
      } else {
        setMessage({ success: response.msg, error: "" });
      }
    };

    if (formData.newPassword !== formData.confirmNewPassword) {
      setMessage({
        success: "",
        error: "New Passwords are not same",
      });

      return;
    }

    delete formData.confirmNewPassword;

    const api = new Request("", successHandler, errorHandler, false);
    return api.post(urls.login.BASE_URL + urls.login.CHANGE_PASSWORD, formData);
  };

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  return (
    <>
      <div
        className={`${message.success ? "done" : "fail"}`}
        style={{
          top: "34px",
          position: "absolute",
          color: "green",
          marginLeft: "13px",
          fontSize: "14px",
        }}
      >
        {message.error || message.success}
      </div>
      <form className="change-password-form flex" onSubmit={submitFormHandler}>
        <div className="col-4">
          <div className="mb16">
            <div className="floating-label-group inputgroup">
              <div className="flex space-between floating-label-input">
                <input
                  type="password"
                  className="form-control"
                  name="currentPassword"
                  onChange={handleChange}
                  required
                />
                <label className="label">Current Password</label>
              </div>
            </div>
          </div>
          <div className="mb16">
            <div className="floating-label-group inputgroup">
              <div className="flex space-between floating-label-input">
                <input
                  type="password"
                  className="form-control"
                  name="newPassword"
                  onChange={handleChange}
                  required
                />
                <label className="label">New Password</label>
              </div>
            </div>
          </div>
          <div className="mb16">
            <div className="floating-label-group inputgroup">
              <div className="flex space-between floating-label-input">
                <input
                  type="password"
                  className="form-control"
                  name="confirmNewPassword"
                  onChange={handleChange}
                  required
                />
                <label className="label">Confirm New Password</label>
              </div>
            </div>
          </div>
          <div className="">
          <ButtonSolid type="submit" primary lg>Search</ButtonSolid>
            {/* <Button type="submit" className="btn-success primary-btn">
              Update
            </Button> */}
          </div>
        </div>
      </form>
    </>
  );
});
export default ChangePassword;
