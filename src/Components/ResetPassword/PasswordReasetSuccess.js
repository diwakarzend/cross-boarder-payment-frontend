import React, { Fragment } from "react";
import { isEmpty } from "../../utils/common";
import ResetPassword from "../../Components/ResetPassword/ResetPassword";
import IconEye from "../../assests/images/Icons/IconEye";
import IconTexta from "../../assests/images/Icons/IconTexta";
export default function PasswordReasetSuccess() {
  return (
    <div className="login-form-wrapper">
      <div className="login-bg">
        <img src={"/images/login-banner.svg"} alt="" />
      </div>
      <div className="login-form">
        <div className="form-heading text-center mb-28">
          <img
            src={"/images/texta-white-logo.png"}
            alt="INRPAY"
            className="logo-icon"
          />
        </div>
        <div className="login-form-inner text-center max400">
          <img src={"/images/success.png"} alt="INRPAY" className="logo-icon" />
          <h4>Password Reset</h4>
          <p>Your password has been successfully reset.</p>
          <button className="primary-btn">Login</button>
        </div>
        <div className="text-center footer-copy-text">
          © 2023 · Terms of use · Support
        </div>
      </div>
    </div>
  );
}
