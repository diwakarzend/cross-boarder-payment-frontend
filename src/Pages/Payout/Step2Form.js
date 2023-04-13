import React, { useEffect, memo, useState } from "react";
import { connect } from "react-redux";
import { Button } from "../../Components/UI/StyledConstants";
import { getCurrentDate } from "../../utils/common";
import "./QuickPayment.css";

const Step2Form = memo(
  ({
    step2SubmitHandler,
    otpChangeHandler,
    login,
    formData,
    step1Response,
    closeQuickPopUpHandler,
  }) => {
    const userData = login && login.userData && login.userData;

    return (
      <form onSubmit={step2SubmitHandler}>
        <div className="modal-body">
            <div className="col-md-12">
              <div className="form-group merchent-detail-container">
                <div className="flex space-between flex-wrap">
                  <div className="col-6 account-wrap">
                    <div className="label">
                      <label>Merchant Name:</label>
                    </div>
                    <div className="value">
                      <span>
                        {userData.firstName} {userData.lastName}
                      </span>
                    </div>
                  </div>
                  {/*  <div className="col-6 account-wrap">
                    <div className="left">
                      <label>Debit Account:</label>
                    </div>
                    <div className="right">
                      <span>ICICI BANK- 101001</span>
                    </div>
                  </div> */}
                  <div className="col-6 account-wrap">
                    <div className="label">
                      <label>Beneficiary Name:</label>
                    </div>
                    <div className="value">
                      <span>{formData.beneficiaryName}</span>
                    </div>
                  </div>
                  <div className="col-6 account-wrap">
                    <div className="label">
                      <label>Beneficiary Account:</label>
                    </div>
                    <div className="value">
                      <span>{formData.accountNumber}</span>
                    </div>
                  </div>
                  <div className="col-6 account-wrap">
                    <div className="label">
                      <label>Total Amount:</label>
                    </div>
                    <div className="value">
                      <span>{formData.remittanceAmount}</span>
                    </div>
                  </div>
                  <div className="col-6 account-wrap">
                    <div className="label">
                      <label> Date:</label>
                      <span>{getCurrentDate("dmy")}</span>
                    </div>
                    <div className="value">
                      <label> Mode:</label>
                      <span>{formData.route}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="col-md-12 otp-form-wrapper">
              <div className="form-group otp-section">
                <input
                  type="text"
                  className="otp-input"
                  onChange={otpChangeHandler}
                  name="otp-1"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-input"
                  onChange={otpChangeHandler}
                  name="otp-2"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-input"
                  onChange={otpChangeHandler}
                  name="otp-3"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-input"
                  onChange={otpChangeHandler}
                  name="otp-4"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-input"
                  onChange={otpChangeHandler}
                  name="otp-5"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-input"
                  onChange={otpChangeHandler}
                  name="otp-6"
                  maxlength="1"
                  required
                />
              </div>

              <div className="otp-message">
                <p>
                  You Need a One-Time Password (OTP) to authenticate this
                  transactions. the OTP has been send to your registered Mobile
                  Number.
                </p>
              </div>
              <div className="modal-footer justify-center">
                <Button type="submit" className="btn-success wd248">Proceed To Pay</Button>
              </div>
            </div>
            {/* <div className="col-md-12">
                <div className="form-group quick-payment-successfull">
                  <h6> Payment Successfull!!</h6>
                  <p>Company ID: 1011</p>
                  <p>Thank You!</p>
                  <p>
                    Thanks for validating your OTP. Your payment has been Processed
                    Successfully
                  </p>
                  <p> Transaction Refrence No: 99665 </p>
                  <p> Utr No: 026626262662</p>
                </div>
              </div> */}
          </div>
        
      </form>
    );
  }
);

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(Step2Form);
