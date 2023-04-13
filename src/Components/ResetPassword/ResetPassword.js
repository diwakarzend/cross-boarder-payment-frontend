import React, { memo, useState } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { autoFocusOTPForm } from "../../utils/common";
import RequestOTPForm from "./RequestOTPForm";
import ResetPasswordForm from "./ResetPasswordForm";
import IconTexta from "../../assests/images/Icons/IconTexta";
const initialState = {
  otpSend: false,
  otp: "",
  mobile: "",
  password: "",
  confpassword: "",
  otpInput: "",
  successMsg: "",
  errorMsg: "",
};

const ForGotPassword = memo(({ handleCancel, resetSuccess }) => {
  const [formData, updateFormData] = useState(initialState);

  const sendOTPHandler = (event) => {
    event.preventDefault();
    const successHandler = (response) => {
      if (response.success == true) {
        updateFormData({
          ...formData,
          otpSend: true,
          successMsg: response.msg,
          errorMsg: "",
        });
      } else {
        updateFormData({
          ...formData,
          errorMsg: response.msg,
          successMsg: "",
        });
      }
    };
    const errorHandler = (response) => {};

    const api = new Request("", successHandler, errorHandler, false);
    return api.get(
      `${urls.login.BASE_URL}${urls.login.RESET_PASSWORD}?phoneNumber=${formData.mobile}`
    );
  };

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForgotPassword = (event) => {
    event.preventDefault();

    const successHandler = (response) => {
      if (response.success) {
        resetSuccess();
      } else {
        updateFormData({
          ...formData,
          errorMsg: response.msg,
          successMsg: "",
        });
      }
    };
    const errorHandler = (response) => {
      updateFormData({
        ...formData,
        errorMsg: response.msg,
        successMsg: "",
      });
    };

    const params = {
      newPassword: formData.password,
      otp: formData.otp,
      phoneNumber: formData.mobile,
    };

    const api = new Request("", successHandler, errorHandler, false);
    return api.post(
      `${urls.login.BASE_URL}${urls.login.UPDATE_PASSWORD}`,
      params
    );
  };

  console.log("formData", formData);

  const cssClass = formData.successMsg ? "success-msg" : "error-msg";
  return (
    <div className="flex space-between">
      <div className="logo-wrapper">
        <div className="login-logo mb12">
          <IconTexta />
        </div>
        <h3 className="mb12">Easy & Fast Payment with UPI</h3>
        <p>Pay directly from your bank account using your mobile</p>
      </div>
      <div className="form-text-wrapper">
        <div className="form-text-inner">
          <div className="title mb20">Reset password with TEXTA.</div>
          {formData.successMsg || formData.errorMsg ? (
            <div className={`alert alert-warning ${cssClass}`}>
              {formData.successMsg || formData.errorMsg}
            </div>
          ) : (
            <div className="alert alert-warning" role="alert">
              Enter your email and instructions will be sent to you!
            </div>
          )}

          {formData.otpSend ? (
            <ResetPasswordForm
              submitFormHandler={submitForgotPassword}
              handleCancel={handleCancel}
              handleChange={handleChange}
              mobile={formData.mobile}
            />
          ) : (
            <RequestOTPForm
              sendOTPHandler={sendOTPHandler}
              handleCancel={handleCancel}
              handleChange={handleChange}
            />
          )}
        </div>
      </div>
    </div>
  );
});

export default ForGotPassword;
