import React, { useState, useEffect } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { removeOverlay } from "../../utils/common";
import {
  AlertWrapper,
  Button,
  ModalWrapper,
} from "../../Components/UI/StyledConstants";
const initialFormData = Object.freeze({
  commission: 0,
  commissionType: "",
  maxAmount: 0,
  merchantCode: "",
  minAmount: 0,
  route: "",
  userId: "",
});

const CommissionForm = (props) => {
  const {
    closePopUp,
    itemToUpdate,
    userId,
    comissionRange,
    setMessage,
    message,
  } = props;
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  useEffect(() => {
    const updatedFormData = {
      minAmount: itemToUpdate.minAmount,
      maxAmount: itemToUpdate.maxAmount,
      route: itemToUpdate.mode,
      userId: userId,
      merchantCode: itemToUpdate.merchantApiCode,
      commission: itemToUpdate.comission,
      commissionType: itemToUpdate.commissionType,
    };

    updateFormData({
      ...formData,
      ...updatedFormData,
    });
  }, [merchantCode]);

  /* const updateUser = () => {
    const api = new Request("", successHandler, errorHandler, false);
    return api.post(`${urls.login.BASE_URL}${urls.User.UPDATE_USER}`, formData);
  }; */

  const submitFormHandler = (event) => {
    event.preventDefault();

    const errorHandler = (response) => {
      console.log(response);
    };

    const successHandler = (response) => {
      console.log(response);

      if (!response.success) {
      } else {
        setMessage("Commision Updated Successfully");
        comissionRange();
        // closePopUp();
      }
    };

    const api = new Request("", successHandler, errorHandler, false);
    return api.post(
      `${urls.login.BASE_URL}${urls.payout.UPDATE_COMMISION}`,
      formData
    );
  };

  console.log("render", itemToUpdate, formData);

  return (
    <ModalWrapper>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Commission</h5>
            <button
              type="button"
              className="close close-btn"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closePopUp}
            >
              <span aria-hidden="true">
                <i className="fa fa-times" aria-hidden="true"></i> Cancel{" "}
              </span>
            </button>
          </div>
          <form onSubmit={submitFormHandler}>
            <div className="modal-body">
              <div className="col-md-12 pb16">
                {message && (
                  <AlertWrapper className="alert alert-normal">
                    {message}
                  </AlertWrapper>
                )}
                Range:
                <strong>
                  {` ${itemToUpdate.minAmount} - ${itemToUpdate.maxAmount}`}
                </strong>
              </div>

              <div className="col-md-12 pb16">
                <div className="form-group">
                  <select
                    className="form-control"
                    onChange={handleChange}
                    name="merchantCode"
                    required
                  >
                    <option value="">Select Merchant Code</option>
                    <option
                      value="NP"
                      selected={
                        itemToUpdate.merchantApiCode == "NP" ? "selected" : ""
                      }
                    >
                      Net Paisa
                    </option>
                    <option
                      value="PTM"
                      selected={
                        itemToUpdate.merchantApiCode == "PTM" ? "selected" : ""
                      }
                    >
                      Paytm
                    </option>
                  </select>
                </div>
              </div>

              <div className="col-md-12 pb16">
                <div className="form-group">
                  <select
                    className="form-control"
                    name="commissionType"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Commission Type</option>
                    <option
                      value="FIX"
                      selected={
                        itemToUpdate.commissionType == "FIX" ? "selected" : ""
                      }
                    >
                      Fix
                    </option>
                    <option
                      value="PERCENTAGE"
                      selected={
                        itemToUpdate.commissionType == "PERCENTAGE"
                          ? "selected"
                          : ""
                      }
                    >
                      Percentage
                    </option>
                  </select>
                </div>
              </div>

              <div className="col-md-12 pb16">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="requestedAmount"
                    placeholder="Amount"
                    name="commission"
                    onChange={handleChange}
                    value={formData.commission}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer justify-center gap16">
              <Button type="submit" className="btn-success wd248">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default CommissionForm;
