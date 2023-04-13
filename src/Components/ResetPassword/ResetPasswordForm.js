import React, { memo } from "react";
import OTPForm from "../Common/OTPForm";
import IconBack from "../../assests/images/Icons/IconBack";
import IconEye from "../../assests/images/Icons/IconEye";
const btnStyle = {
  width: "110px",
  float: "left",
  "margin-right": "21px",
};
const ResetPasswordForm = memo(
  ({
    submitFormHandler,
    otpChangeHandler,
    handleCancel,
    handleChange,
    mobile,
  }) => {
    return (
      <form className="form-group" onSubmit={submitFormHandler}>
        <div className="floating-label-group inputgroup">
          <div className="flex space-between floating-label-input">
            <input
              className={
                mobile != "" ? "form-control has-value" : "form-control"
              }
              id="npass"
              autoFocus="autofocus"
              type="password"
              autoComplete="off"
              required
              name="password"
              onChange={handleChange}
            />

            <label className="label" htmlFor="npass">
              Enter New Password
            </label>
            <span className="eye-icon">
              <IconEye />
            </span>
          </div>
        </div>
        <div className="floating-label-group inputgroup">
          <div className="flex space-between floating-label-input">
            <input
              id="cpass"
              name="confpassword"
              className="form-control"
              type="password"
              autoComplete="off"
              required
              onChange={handleChange}
            />
            <label className="label" htmlFor="cpass">
              Confirm Password
            </label>
            <span className="eye-icon">
              <IconEye />
            </span>
          </div>
        </div>
        <div className="floating-label-group inputgroup">
          <div className="flex space-between floating-label-input">
            <input
              id="otp"
              name="otp"
              className="form-control"
              type="password"
              autoComplete="off"
              required
              onChange={handleChange}
            />
            <label className="label" htmlFor="otp">
              Enter OTP
            </label>
          </div>
        </div>
        {/* <div className="floating-label-group inputgroup">
          <OTPForm otpChangeHandler={otpChangeHandler} />
        </div> */}
        <div className="flex space-between">
          <input
            type="submit"
            value="Submit"
            className="submit-btn primary-btn"
          />
        </div>
        <div className="flex">
          <button onClick={handleCancel} className="back-btn flex item-center">
            <span>
              <IconBack />
            </span>
            Back
          </button>
        </div>
      </form>
    );
  }
);
export default ResetPasswordForm;
