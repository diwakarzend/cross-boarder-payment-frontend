import React, { memo, useState } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { autoFocusOTPForm } from "../../utils/common";
import RequestOTPForm from "./RequestOTPForm";
import ResetPasswordForm from "./ResetPasswordForm";
import IconLogo from "../../assests/images/Icons/IconLogo";
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
    const errorHandler = (response) => { };

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
    <>
          <div className="logo">
            <IconLogo />
            <div className="title mb20">
              Login to Dashboard
            </div>
          </div>
          {/* <div className="title mb20">Reset password with TEXTA.</div> */}
          {formData.successMsg || formData.errorMsg && (
            <div className={`alert alert-warning ${cssClass}`}>
              {formData.successMsg || formData.errorMsg}
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
    </>
  );
});

export default ForGotPassword;
