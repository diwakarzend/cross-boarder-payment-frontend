import React, { useState, memo, useEffect, useRef } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { removeOverlay } from "../../utils/common";
import { Button, TableWrapper, ModalWrapper } from "../../Components/UI/StyledConstants";

const initialFormData = Object.freeze({
  fromBank: "",
  payementMode: "",
  remark: "",
  requestAmount: 0,
  toBank: "",
  transationRefNo: "",
});

const FundRequestForm = memo(
  ({ closePopUpHandler, userRole, getFundRequest, setStatus }) => {
    const [isPopupVisible, handlePopUp] = useState(false);
    const [formData, updateFormData] = useState(initialFormData);
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState("");

    const handleChange = (event) => {
      updateFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };

    // useEffect(() => {
    //   dispatch(getFundRequest(userRole));
    // }, [userRole]);

    const submitFormHandler = (event) => {
      event.preventDefault();
      const errorHandler = (response) => {
        const errors = [];
        if (response && response.status == 400) {
          if (response.fieldErrors && response.fieldErrors instanceof Array) {
            response.fieldErrors.forEach((item) =>
              errors.push(`${item.field}: ${item.message}`)
            );
          }
          if (errors.length > 0) {
            setErrors(errors);
            window.scrollTo(100, 100);
          }
        } else if (response && response.status == 401) {
          setErrors([response.error]);
          window.scrollTo(100, 100);
        }
      };

      const successHandler = (response) => {
        if (!response.success) {
          setErrors([response.msg]);
        } else {
          setErrors([]);
          setSuccess(response.msg);
          closePopUpHandler();
          removeOverlay();
          getFundRequest(userRole);
          setStatus("Fund request sent to Admin for Approval");
          //fetchUsersData();
        }
      };

      const api = new Request("", successHandler, errorHandler, false);
      return api.post(urls.login.BASE_URL + urls.Wallet.FUND_REQUEST, formData);
    };

    let errorHTML = "";
    let errorStyles = "";
    let successStyles = "";
    if (errors.length > 0) {
      errorHTML = errors.map((val) => <li key={val}>{val}</li>);
      errorStyles = {
        color: "red",
        fontSize: "14px",
        marginTop: "26px",
      };
    } else {
      successStyles = {
        color: "green",
        fontSize: "14px",
        marginTop: "26px",
      };
    }
    return (
      <ModalWrapper>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Fund Request
              </h5>
              <button
                type="button"
                className="close close-btn"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closePopUpHandler}
              >
                <span aria-hidden="true"><i className="fa fa-times" aria-hidden="true"></i> Cancel </span>
              </button>
            </div>
            <form onSubmit={submitFormHandler}>
              <div className="modal-body">
                  <div className="col-md-12 pb16">
                    <div className="form-group">
                      <label className="label" for="exampleInputEmail1">From Bank</label>
                      <input
                        type="text"
                        className="form-control"
                        id="depositAccount"
                        aria-describedby="Bank Name"
                        placeholder="Bank Name"
                        name="fromBank"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12 pb16">
                    <div className="form-group">
                      <label className="label" for="exampleInputEmail1">To Bank</label>
                      <input
                        type="text"
                        className="form-control"
                        id="depositAccount"
                        aria-describedby="Bank Name"
                        placeholder="Bank Name"
                        name="toBank"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12 pb16">
                    <div className="form-group">
                      <label className="label" for="exampleFormControlSelect1">
                        Choose Payment Mode
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        name="payementMode"
                        onChange={handleChange}
                        required
                      >
                        <option value=""> Choose Payment Mode</option>
                        <option value="upi">UPI</option>
                        <option value="netbanking">Netbanking</option>
                        <option value="cash">Cash</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12 pb16">
                    <div className="form-group">
                      <label className="label" for="exampleInputEmail1">Requested Amount</label>
                      <input
                        type="number"
                        className="form-control"
                        id="requestedAmount"
                        aria-describedby="requestedAmount"
                        placeholder="Requested Amount"
                        name="requestAmount"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12 pb16">
                    <div className="form-group">
                      <label className="label" for="exampleInputEmail1">Reference No</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Reference No"
                        name="transationRefNo"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12 pb16">
                    <div className="form-group">
                      <label className="label" for="exampleInputEmail1">Remarks</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Remark"
                        name="remark"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="modal-footer gap16">
                  <Button
                    type="button"
                    className="btn-light"
                    data-dismiss="modal"
                    onClick={closePopUpHandler}
                  >
                    Close
                  </Button>
                  <Button type="submit" className="btn-success">
                    Submit
                  </Button>
                  <div>
                    {errorHTML && errorStyles ? (
                      <ul style={errorStyles}>{errorHTML}</ul>
                    ) : success && successStyles ? (
                      <div style={successStyles}>{success}</div>
                    ) : (
                      ""
                    )}
                  </div>
              </div>
            </form>
          </div>
        </div>
      </ModalWrapper>
    );
  }
);

export default FundRequestForm;
