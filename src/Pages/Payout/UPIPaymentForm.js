import React, { useState, memo, useEffect, useRef } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
// import Step2Form from "./Step2Form";
import "./QuickPayment.css";
import PayoutThanks from "./PayoutThanks";
import { Button, ModalWrapper } from "../../Components/UI/StyledConstants";

const initialFormData = Object.freeze({
  beneficiaryName: "",
  accountNumber: "",
  ifscCode: "",
  mobileNumber: "",
  remittanceAmount: "",
  route: "",
  type: "",
  clientId: "", //
});

const UPIPaymentForm = memo(({ closeUPIPopUpHandler, benificiaryData }) => {
  const [formData, updateFormData] = useState(initialFormData);
  const refUPIId = useRef();
  const [otpData, setotpData] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  // const [otpStatus, setotpStatus] = useState({
  //   error: false,
  //   success: false,
  // });
  const [step1Response, updatestep1Response] = useState({});

  const [payoutSuccessData, setPayoutSuccess] = useState("");
  const [statusMessage, updateMessage] = useState({
    error: "",
    success: "",
  });
  const [upiId, setUPIID] = useState("");
  const [loader, setLoader] = useState(false);

  const [upiDetails, setUPIdetails] = useState("");

  const {
    firstName,
    lastName,
    mobile,
    accountNumber,
    ifscCode,
    bankName,
  } = benificiaryData;

  const completeVPAPayment = (transsactionId, amount) => {
    const errorHandler = (response) => {};
    const successHandler = (response) => {
      if (response.success == true) {
        setLoader(false);
        updateMessage({
          error: "",
          success: "Payment done Succesfully.",
        });
        setPayoutSuccess({ transsactionId: transsactionId, amount: amount });
      }
    };
    const api = new Request("", successHandler, errorHandler, false);
    return api.post(urls.login.BASE_URL + urls.payout.UPI_COMPLETE_PAYMENT, {
      request: {
        TXN_ID: transsactionId,
      },
    });
  };

  const initVPAPayment = (vpaId, amount) => {
    const errorHandler = (response) => {};
    const successHandler = (response) => {
      if (response.success == true) {
        completeVPAPayment(response?.data?.txnId, amount);
      }
    };
    const api = new Request("", successHandler, errorHandler, false);
    return api.post(urls.login.BASE_URL + urls.payout.UPI_INIT_PAYMENT, {
      receiverVpaId: vpaId,
      remittanceAmount: amount,
      orderId: "",
    });
  };

  const submitVPAHandler = (event) => {
    event.preventDefault();
    const amount = event.target.amount.value;
    if (upiId && amount) {
      initVPAPayment(upiId, amount);
      setLoader(true);
    }
  };

  const changeHandler = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // const otpChangeHandler = (event) => {
  //   const { maxLength, value, name } = event.target;
  //   const [fieldName, fieldIndex] = name.split("-");
  //   let fieldIntIndex = parseInt(fieldIndex);
  //   if (value.length == maxLength) {
  //     const nextfield = document.querySelector(
  //       `input[name=otp-${fieldIntIndex + 1}]`
  //     );
  //     if (nextfield !== null) {
  //       nextfield.focus();
  //     }
  //   }

  //   setotpData({
  //     ...otpData,
  //     [name]: value,
  //   });
  // };

  useEffect(() => {
    const updatedData = {
      beneficiaryName: `${firstName} ${lastName}`,
      accountNumber: accountNumber,
      ifscCode: ifscCode,
      mobileNumber: mobile,
    };

    updateFormData({
      ...formData,
      ...updatedData,
    });
  }, []);

  const validateUPI = () => {
    //  console.log("sssss");
    const upiId = refUPIId.current.value;
    if (!upiId) {
      alert("Please enter UPI Id");
      return;
    }
    setUPIID(upiId);

    const errorHandler = (response) => {
      const errors = [];

      if (response) {
        updateMessage({
          error: "",
          success: "",
        });
      } else {
        updateMessage({
          error: "An Error occured in API",
          success: "",
        });
      }
    };

    const successHandler = (response) => {
      if (response.message == "SUCCESS") {
        // initVPAPayment(vpaId, amount);
        setUPIdetails(response);
      } else {
        updateMessage({
          ...statusMessage,
          error: response.msg,
          success: "",
        });
      }
    };

    const api = new Request("", successHandler, errorHandler, false);
    return api.get(
      urls.login.BASE_URL + urls.payout.VALIDATE_VPA + "?vpaid=" + upiId
    );
  };

  const msgClass = statusMessage.success ? "done" : "fail";

  console.log(statusMessage, msgClass);

  return (
    <ModalWrapper>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              <sapn className="icon">&#8377;</sapn> UPI Payment
            </h5>
            <button
              type="button"
              className="close close-btn"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeUPIPopUpHandler}
            >
              <span aria-hidden="true">
                <i className="fa fa-times" aria-hidden="true"></i> Cancel
              </span>
            </button>
          </div>
          {/* {!otpStatus.success && (
            <div
              style={{
                textAlign: "center",
                fontWeight: "700",
                color: "#0ab39c",
              }}
              className={msgClass}
            >
              {statusMessage.success || statusMessage.error}
            </div>
          )} */}

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

          {statusMessage.success ? (
            <PayoutThanks
              payoutSuccessData={payoutSuccessData}
              paymentMethod="upi"
            />
          ) : !step1Response.success && !loader ? (
            <Step1Form
              submitFormHandler={submitVPAHandler}
              bankName={bankName}
              ifscCode={ifscCode}
              firstName={firstName}
              lastName={lastName}
              accountNumber={accountNumber}
              changeHandler={changeHandler}
              closeUPIPopUpHandler={closeUPIPopUpHandler}
              validateUPI={validateUPI}
              refUPIId={refUPIId}
              upiId={upiId}
              upiDetails={upiDetails}
              formData={formData}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </ModalWrapper>
  );
});

export default UPIPaymentForm;

const Step1Form = ({
  submitFormHandler,
  bankName,
  ifscCode,
  firstName,
  lastName,
  accountNumber,
  changeHandler,
  closeUPIPopUpHandler,
  validateUPI,
  upiDetails,
  upiId,
  refUPIId,
  formData,
}) => {
  return (
    <React.Fragment>
      <form className="step-one-form" onSubmit={submitFormHandler}>
        <div className="modal-body">
          <div className="flex space-between mt10">
            <div className="col-12">
              <div className="floating-label-group inputgroup">
                <div className="flex space-between floating-label-input">
                  <input
                    type="text"
                    className={`form-control${
                      formData.vpaid ? " has-value" : ""
                    }`}
                    name="vpaid"
                    onChange={changeHandler}
                    required
                    ref={refUPIId}
                    placeholder=""
                  />
                  <label className="label">UPI Id</label>
                </div>
                <div className="flex item-center validate-wrap">
                  <div className="valdate" onClick={validateUPI}>
                    Validate UPI
                  </div>
                  <div className="loader">
                    {upiId && !upiDetails && (
                      <img src="/images/icons8-in-progress.gif" alt="loader" />
                    )
                    // <img src="/images/verified.png" alt="success" />
                    }
                  </div>
                </div>
              </div>

              {upiDetails && (
                <>
                  <div className="floating-label-group inputgroup">
                    <div className="floating-label-input">
                      <input
                        type="text"
                        className="form-control"
                        onChange={changeHandler}
                        value={upiDetails.data.DESCRIPTION}
                        disabled
                        required
                        placeholder=""
                      />
                      <label className="label">Name</label>
                    </div>
                  </div>
                  <div className="floating-label-group inputgroup no-mb">
                    <div className="floating-label-input col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="amount"
                        onChange={changeHandler}
                        required
                      />
                      <label className="label">Amount</label>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {upiDetails && (
          <div className="modal-footer justify-start">
            <Button type="submit" className="btn-success wd248">
              Next
            </Button>
          </div>
        )}
      </form>
    </React.Fragment>
  );
};
