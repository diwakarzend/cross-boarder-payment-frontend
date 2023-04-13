import React, { useState, memo, useEffect, useRef } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import Step2Form from "./Step2Form";
import "./QuickPayment.css";
import PayoutThanks from "./PayoutThanks";
import {
  Button,
  BorderBtn,
  ModalWrapper,
} from "../../Components/UI/StyledConstants";

const initialFormData = Object.freeze({
  beneficiaryName: "",
  accountNumber: "",
  ifscCode: "",
  mobileNumber: "",
  remittanceAmount: "",
  route: "",
  type: "",
  clientId: "",
  merchantCode: "",
  bankName: "",
});

const QuickPaymentForm = memo(({ closeQuickPopUpHandler, benificiaryData }) => {
  const [formData, updateFormData] = useState(initialFormData);
  const [otpData, setotpData] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  const [otpStatus, setotpStatus] = useState({
    error: false,
    success: false,
  });
  const [step1Response, updatestep1Response] = useState({});

  const [payoutSuccessData, setPayoutSuccess] = useState("");
  const [statusMessage, updateMessage] = useState({
    error: "",
    success: "",
  });
  const [loader, setLoader] = useState(false);

  const {
    firstName,
    lastName,
    mobile,
    accountNumber,
    ifscCode,
    bankName,
    clientId,
    merchantCode,
  } = benificiaryData;

  const step2SubmitHandler = (event) => {
    event.preventDefault();
    setLoader(true);
    updateMessage({
      error: "",
      success: "",
    });

    const tranSactionId = step1Response.data.tnxId;

    const otp = Object.values(otpData).join("");
    const successHandler = (response) => {
      if (response.success == true) {
        setLoader(false);
        setotpStatus({
          ...otpStatus,
          success: true,
          error: false,
        });
        updateMessage({
          ...statusMessage,
          success: response.msg,
          error: "",
        });

        setPayoutSuccess({
          transsactionId: tranSactionId,
          amount: formData.remittanceAmount,
        });
      } else {
        setLoader(false);

        setotpStatus({
          ...otpStatus,
          error: true,
        });
        updateMessage({
          ...statusMessage,
          error: response.msg,
          success: "",
        });
      }

      // let errorCode = "";
      // if (response.errorCodeList) {
      //   errorCode = response.errorCodeList[0];
      // }
    };
    const errorHandler = (response) => {};

    const api = new Request("", successHandler, errorHandler, false);
    return api.put(
      `${urls.login.BASE_URL}${urls.payout.GET_PAYOUT_STATUS}?payOutOtp=${otp}&txnId=${tranSactionId}`
    );
  };

  /*   {"code":"ERR0029","msg":"payout fail from merchant !","errorCodeList":["Invalid IFSC"],"success":false}
   */

  const submitFormHandler = (event) => {
    event.preventDefault();
    formData.type = formData.route;
    formData.clientId = clientId;
    formData.merchantCode = merchantCode;
    formData.bankName = bankName;
    formData.orderId = "";

    const errorHandler = (response) => {
      // const errors = [];
      // if (response && response.status == 400) {
      //   if (response.fieldErrors && response.fieldErrors instanceof Array) {
      //     updateMessage({
      //       error: response.fieldErrors[0],
      //       success: "",
      //     });
      //   }
      //   if (errors.length > 0) {
      //     setErrors(errors);
      //     window.scrollTo(100, 100);
      //   }
      // } else if (response && response.status == 401) {
      //   setErrors([response.error]);
      //   window.scrollTo(100, 100);
      // }
    };

    const successHandler = (response) => {
      if (response.success) {
        updatestep1Response(response);
        updateMessage({
          ...statusMessage,
          success: response.msg,
          error: "",
        });
      } else {
        updateMessage({
          ...statusMessage,
          error: response.msg,
          success: "",
        });

        //removeOverlay();
        // getBeneficiary(userRole);
        //  setStatus("Beneficary added successfully");
        //fetchUsersData();
      }
    };

    const api = new Request("", successHandler, errorHandler, false);
    return api.post(urls.login.BASE_URL + urls.payout.ADD_PAYOUT, formData);
  };

  const changeHandler = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const otpChangeHandler = (event) => {
    const { maxLength, value, name } = event.target;
    const [fieldName, fieldIndex] = name.split("-");
    let fieldIntIndex = parseInt(fieldIndex);
    if (value.length == maxLength) {
      const nextfield = document.querySelector(
        `input[name=otp-${fieldIntIndex + 1}]`
      );
      if (nextfield !== null) {
        nextfield.focus();
      }
    }

    setotpData({
      ...otpData,
      [name]: value,
    });
  };

  useEffect(() => {
    //      : "12345678"
    //  : "HDFC"
    //  : "Ram"
    //  : "hdfc123"
    // : "Lakhan"
    //  : "9718063555"
    // status: "ACTIVE"
    const updatedData = {
      beneficiaryName: `${firstName} ${lastName}`,
      accountNumber: accountNumber,
      ifscCode: ifscCode,
      mobileNumber: mobile,
      //  clientId: clientId,
    };

    updateFormData({
      ...formData,
      ...updatedData,
    });
  }, []);

  const msgClass = statusMessage.success ? "done" : "fail";

  console.log(statusMessage, msgClass);

  return (
    <ModalWrapper>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title flex item-center" id="exampleModalLabel">
              <sapn className="icon">&#8377;</sapn>Quick Payment
            </h5>
            <button
              type="button"
              className="close close-btn"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeQuickPopUpHandler}
            >
              <span aria-hidden="true">
                <i className="fa fa-times" aria-hidden="true"></i> Cancel{" "}
              </span>
            </button>
          </div>
          {!otpStatus.success && (
            <div className={msgClass}>
              {statusMessage.success || statusMessage.error ? (
                <p>{statusMessage.success || statusMessage.error} </p>
              ) : (
                ""
              )}
            </div>
          )}

          {loader && (
            <div
              style={{
                width: "100%",
                textAlign: "center",
                margin: "11px 0px 62px 0px",
              }}
            >
              <img src="/images/loaderGif.webp" alt="loader" width="70" />
            </div>
          )}

          {otpStatus.success ? (
            <PayoutThanks payoutSuccessData={payoutSuccessData} />
          ) : !step1Response.success && !loader ? (
            <Step1Form
              submitFormHandler={submitFormHandler}
              bankName={bankName}
              ifscCode={ifscCode}
              firstName={firstName}
              lastName={lastName}
              accountNumber={accountNumber}
              changeHandler={changeHandler}
              closeQuickPopUpHandler={closeQuickPopUpHandler}
            />
          ) : (
            !loader && (
              <Step2Form
                step2SubmitHandler={step2SubmitHandler}
                otpChangeHandler={otpChangeHandler}
                formData={formData}
                closeQuickPopUpHandler={closeQuickPopUpHandler}
              />
            )
          )}
        </div>
      </div>
    </ModalWrapper>
  );
});

export default QuickPaymentForm;

const Step1Form = ({
  submitFormHandler,
  bankName,
  ifscCode,
  firstName,
  lastName,
  accountNumber,
  changeHandler,
  closeQuickPopUpHandler,
}) => {
  return (
    <React.Fragment>
      <form className="step-one-form" onSubmit={submitFormHandler}>
        <div className="modal-body">
          <div className="bank-info">
            <div className="form-group flex space-between flex-wrap">
              <div className="col-6 account-wrap">
                <label className="label">Beneficiary Name</label>
                <div className="beneficiary-name value">{`${firstName} ${lastName}`}</div>
              </div>
              <div className="col-6 account-wrap">
                <label className="label">Bank Name</label>
                <div className="bank-name value">{bankName}</div>
              </div>
              <div className="col-6 account-wrap">
                <label className="label">IFSC Code</label>
                <div className="ifsc value">{ifscCode}</div>
              </div>
              <div className="col-6 account-wrap">
                <label className="label">A/C Number</label>
                <div className="account-number value">{accountNumber}</div>
              </div>
            </div>
          </div>
          <div className="flex space-between flex-wrap mt10">
            <div className="col-6">
              <div className="floating-label-group inputgroup no-mb">
                <div className="flex space-between floating-label-input">
                  <input
                    type="text"
                    className="form-control"
                    name="remittanceAmount"
                    onChange={changeHandler}
                    required
                  />
                  <label className="label">Amount</label>
                </div>
              </div>
            </div>

            {/* <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Remarks</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add for free"
                      name="remark"
                    />
                  </div>
                </div> */}

            <div className="col-6">
              <div className="floating-label-group inputgroup no-mb">
                <div className="flex space-between floating-label-input">
                  <select
                    className="form-control"
                    name="route"
                    required
                    onChange={changeHandler}
                  >
                    <option>Choose Option</option>
                    <option value="IMPS">IMPS</option>
                    <option value="NB">NEFT</option>
                    <option value="RTGS">RTGS</option>
                  </select>
                  <label className="label">Transfer Mode</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer gap16 justify-start">
          <Button type="submit" className="btn-success wd248">
            Next
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};
