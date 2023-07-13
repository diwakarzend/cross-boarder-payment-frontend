import React, { useState, memo, useEffect } from "react";
import Request from "../../utils/Request";
import { formValidation } from "../../utils/formValidation";

import urls from "../../utils/urls";
import { removeOverlay } from "../../utils/common";
import "./AddNewPlanForm.css";
import {
  AlertWrapper,
  BorderBtn,
  Button,
  ModalWrapper,

} from "../../Components/UI/StyledConstants";
import {ButtonSolid } from "../../Components/styledConstants"
import { AlertMessage } from "../../Components/UI/AlertMessage";
import ErrorMessage from "../../Components/UI/ErrorMessage";
import MaterialInput from "../../Components/Common/Form";

const initialFormData = Object.freeze({
 planName:"",
 payInCommission:"",
 payOutCommision:""
});

const AddNewPlanForm = memo(
  ({
    setIsPopupShow,
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

    const closePopUpHandler=()=>{
        setIsPopupShow(false)

    }
     
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
                Add New Plan
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
           
              <div className="modal-body">
                <AlertMessage alertMessage={alertMessage} />
                {success}
                <div className="flex gap  flex-wrap">
                    <div>
                <div className="mb16">
                          <MaterialInput
                          className="form-input"
                            wrapperClassName="username"
                            maxLength="10"
                            name="userName"
                            type="text"
                            placeholder="Plan Name"
                            value={formData?.userName}
                            error={formErrors.userName}
                          />
                        </div>
                        <div className="mb16">
                          <MaterialInput
                            wrapperClassName="username"
                            maxLength="10"
                            name="userName"
                            type="text"
                            placeholder="PayIn Commission"
                            value={formData?.userName}
                            error={formErrors.userName}
                          />
                        </div>
                </div>
                        <div className="mb16">
                          <MaterialInput
                          className="form-input"
                            wrapperClassName="username"
                            maxLength="10"
                            name="userName"
                            type="text"
                            placeholder="payOut Commission"
                            value={formData?.userName}
                            error={formErrors.userName}
                          />
                        </div>
                </div>
              </div>

              <div className="modal-footer justify-start">
              <ButtonSolid primary add_user>Add New Plan</ButtonSolid>
              </div>
    
          </div>
        </div>
      </ModalWrapper>
    );
  }
);

export default AddNewPlanForm;
