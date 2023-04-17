import React, { memo, useState } from "react";
import OTPForm from "../Common/OTPForm";
import IconBack from "../../assests/images/Icons/IconBack";
import IconEye from "../../assests/images/Icons/IconEye";
import MaterialInput from "../../Components/Common/Form";
import { ButtonSolid } from "../styledConstants";
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
    const [showPassword, setShowPassword] = useState(false);

    return (
      <>
        {/* <div className="floating-label-group inputgroup">
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
        </div> */}
        <div className="mb16 mt10">
          <MaterialInput
            maxLength="10"
            name="password"
            type="text"
            onChange={handleChange}
            placeholder="New Password"
          />
        </div>
        <div className="mb16 pos-rel">
          <MaterialInput
            maxLength="10"
            name="confpassword"
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
          <span
            className={`icon-eye pointer${showPassword ? " active" : ""}`}
            onClick={() => setShowPassword(!showPassword)}
            role="button"
            tabIndex={0}
          >
            <IconEye />
          </span>
        </div>
        <div className="mb16">
          <MaterialInput
            maxLength="10"
            name="otp"
            type="text"
            onChange={handleChange}
            placeholder="Enter OTP *"
          />
        </div>
        {/* <div className="floating-label-group inputgroup">
          <OTPForm otpChangeHandler={otpChangeHandler} />
        </div> */}
        <div className="flex space-between">
          {/* <input
            type="submit"
            value="Submit"
            className="submit-btn primary-btn"
          /> */}
          <ButtonSolid primary xl className="mt30 full-width" type="button" onClick={submitFormHandler}>
            Submit
          </ButtonSolid>
        </div>
        {/* <div className="flex">
          <button onClick={handleCancel} className="back-btn flex item-center">
            <span>
              <IconBack />
            </span>
            Back
          </button>
        </div> */}
      </>
    );
  }
);
export default ResetPasswordForm;
