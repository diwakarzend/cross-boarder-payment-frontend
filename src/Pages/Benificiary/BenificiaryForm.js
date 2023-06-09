import React, { useState, memo, useEffect } from "react";
import Request from "../../utils/Request";
import { formValidation } from "../../utils/formValidation";

import urls from "../../utils/urls";
import { removeOverlay } from "../../utils/common";
import "./Benificiary.css";
import {
  AlertWrapper,
  BorderBtn,
  Button,
  ModalWrapper,
} from "../../Components/UI/StyledConstants";
import { AlertMessage } from "../../Components/UI/AlertMessage";
import ErrorMessage from "../../Components/UI/ErrorMessage";

const initialFormData = Object.freeze({
  firstName: "",
  lastName: "",
  mobileNumber: "",
  bankName: "",
  accountNumber: "",
  ifscCode: "",
});

const BenificiaryForm = memo(
  ({
    closePopUpHandler,
    userRole,
    getBeneficiary,
    // setStatus,
    editUserData,
    status = false,
  }) => {
    const [isPopupVisible, handlePopUp] = useState(false);
    const [formData, updateFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});
    const [success, setSuccess] = useState("");

    const [alertMessage, setAlertMessage] = useState({
      type: "",
      messageList: [],
    });

    const handleChange = (event) => {
      updateFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };

    useEffect(() => {
      if (editUserData) {
        updateFormData(editUserData);
      }
    }, [editUserData]);

    console.log("formData", formData);

    const submitFormHandler = (event) => {
      event.preventDefault();

      console.log("formData", formData);

      const { ifscCode, accountNumber, mobileNumber } = formData;
      const errors = formValidation(formData);

      // /^[A-Za-z]{4}\d{7}$/.test('HDFC0001236')

      console.log("errors", errors, formData);

      if (ifscCode) {
        if (!/^[A-Za-z]{4}\d{7}$/.test(ifscCode)) {
          errors["ifscCode"] = "Invalid IFSC Code formate";
        } else {
          delete errors["ifscCode"];
        }
      }

      if (accountNumber) {
        if (accountNumber.length < 8 || accountNumber.length > 16) {
          errors["accountNumber"] = "Invalid a/c no formate";
        } else {
          delete errors["accountNumber"];
        }
      }

      if (mobileNumber) {
        if (!/^\d{10}$/.test(mobileNumber)) {
          errors["mobileNumber"] = "Invalid mobile no formate";
        } else {
          delete errors["mobileNumber"];
        }
      }

      if (!!errors && Object.keys(errors).length != 0) {
        setFormErrors(errors);
      } else {
        setFormErrors({});

        const errorHandler = (response) => {
          const errors = [];
          // if (response && response.status == 400) {
          //   if (response.fieldErrors && response.fieldErrors instanceof Array) {
          //     response.fieldErrors.forEach((item) =>
          //       errors.push(`${item.field}: ${item.message}`)
          //     );
          //   }
          // } else if (response && response.status == 401) {
          //   errors.push(response.error);
          // } else {
          //   errors.push("Something went wrong!");
          // }
          // setAlertMessage({
          //   type: "error",
          //   messageList: errors,
          // });
        };

        const successHandler = (response) => {
          if (response.success == false) {
            setAlertMessage({
              type: "error",
              messageList: [response.msg],
            });
          } else {
            // setAlertMessage({
            //   type: "success",
            //   messageList: [response.msg],
            // });
            setSuccess("Beneficary added successfully");
            removeOverlay();
            closePopUpHandler();
            getBeneficiary(userRole);
          }
        };

        let apiPath = urls.login.BASE_URL + urls.User.ADD_BENEFICIARY;

        const api = new Request("", successHandler, errorHandler, false);

        if (editUserData) {
          apiPath = urls.login.BASE_URL + urls.User.UPDATE_BENEFICIARY;

          return api.put(apiPath, formData);
        }
        return api.post(apiPath, formData);
      }
    };

    console.log("alert message => ", alertMessage);
    return (
      <ModalWrapper>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header flex justify-between item-center">
              <h5 className="modal-title" id="exampleModalLabel">
                <span className="icon">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </span>
                {editUserData ? "Update Beneficiary" : "Add Beneficiary"}
              </h5>
              <button
                type="button"
                className="close close-btn"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closePopUpHandler}
              >
                <span aria-hidden="true">
                  <i className="fa fa-times" aria-hidden="true"></i> Cancel{" "}
                </span>
              </button>
            </div>
            <form onSubmit={submitFormHandler}>
              <div className="modal-body">
                <AlertMessage alertMessage={alertMessage} />
                {success}
                <div className="flex space-between flex-wrap">
                  <div className="col-6">
                    <div className="inputgroup floating-label-group">
                      <div className="flex space-between floating-label-input">
                        <input
                          type="text"
                          value={formData.firstName}
                          className={
                            formData.firstName != ""
                              ? "form-control has-value"
                              : "form-control"
                          }
                          id="depositAccount"
                          aria-describedby="First Name"
                          name="firstName"
                          onChange={handleChange}
                        />
                        <label className="label" for="exampleInputEmail1">
                          First Name
                        </label>
                      </div>
                      <ErrorMessage message={formErrors.firstName} />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="inputgroup floating-label-group">
                      <div className="flex space-between floating-label-input">
                        <input
                          type="text"
                          value={formData.lastName}
                          className={
                            formData.lastName != ""
                              ? "form-control has-value"
                              : "form-control"
                          }
                          id="depositAccount"
                          aria-describedby="Last Name"
                          name="lastName"
                          onChange={handleChange}
                        />
                        <label className="label" for="exampleInputEmail1">
                          Last Name
                        </label>
                      </div>
                      <ErrorMessage message={formErrors.lastName} />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="inputgroup floating-label-group">
                      <div className="flex space-between floating-label-input">
                        <input
                          type="tel"
                          value={formData.mobileNumber}
                          className={
                            formData.mobileNumber != ""
                              ? "form-control has-value"
                              : "form-control"
                          }
                          aria-describedby="requestedAmount"
                          name="mobileNumber"
                          onChange={handleChange}
                        />
                        <label className="label" for="exampleInputEmail1">
                          Mobile No
                        </label>
                      </div>
                      <ErrorMessage message={formErrors.mobileNumber} />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="inputgroup floating-label-group">
                      <div className="flex space-between floating-label-input">
                        <input
                          type="text"
                          value={formData.bankName}
                          className={
                            formData.bankName != ""
                              ? "form-control has-value"
                              : "form-control"
                          }
                          name="bankName"
                          onChange={handleChange}
                        />
                        <label className="label" for="exampleInputEmail1">
                          Bank Name
                        </label>
                      </div>
                      <ErrorMessage message={formErrors.bankName} />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="inputgroup floating-label-group">
                      <div className="flex space-between floating-label-input">
                        <input
                          type="number"
                          value={formData.accountNumber}
                          className={
                            formData.accountNumber != ""
                              ? "form-control has-value"
                              : "form-control"
                          }
                          name="accountNumber"
                          onChange={handleChange}
                        />
                        <label className="label" for="exampleInputEmail1">
                          Account Number
                        </label>
                      </div>
                      <ErrorMessage message={formErrors.accountNumber} />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="inputgroup floating-label-group">
                      <div className="flex space-between floating-label-input">
                        <input
                          type="text"
                          value={formData.ifscCode}
                          className={
                            formData.ifscCode != ""
                              ? "form-control has-value"
                              : "form-control"
                          }
                          name="ifscCode"
                          onChange={handleChange}
                        />
                        <label className="label" for="exampleInputEmail1">
                          IFSC Code
                        </label>
                      </div>
                      <ErrorMessage message={formErrors.ifscCode} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer justify-start">
                <Button type="submit" className="btn-success wd248">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </ModalWrapper>
    );
  }
);

export default BenificiaryForm;
