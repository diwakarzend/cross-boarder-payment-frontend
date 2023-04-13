import React, { useState, useRef } from "react";
import APIS from "../../utils/urls";
import Request from "../../utils/Request";
import { Button, ModalWrapper } from "../../Components/UI/StyledConstants";

function AdminFundForm({
  userId,
  closeAdminFundForm,
  setStatusMsg,
  successCallBack,
}) {
  const [formData, setFormData] = useState({
    amount: "",
    remark: "",
    ewalletType: "MAIN_WALLET",
    userId: userId,
  });
  const walletSelect = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const walletAction = walletSelect.current.value;
    const request = new Request("", successHandler, errorHandler, true);
    let walletAPI = `${APIS.login.BASE_URL}${APIS.Wallet.MANAGE_WALLET}`.replace(
      "{actionType}",
      walletAction
    );

    formData.amount = parseInt(formData.amount);
    request.post(walletAPI, formData);
  };
  const successHandler = (response, headers) => {
    if (response.success) {
      closeAdminFundForm();
      successCallBack();
      setStatusMsg("Action to wallet is submitted successfully");
    }
  };

  const errorHandler = (error) => {
    console.log("failed call");
  };

  const handleChange = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  console.log("formData", formData);

  return (
    <ModalWrapper>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">
              Add Fund
            </h4>
            <button
              type="button"
              className="close close-btn"
              onClick={closeAdminFundForm}
            >
              <span aria-hidden="true"><i className="fa fa-times" aria-hidden="true"></i> Cancel </span>
            </button>
          </div>

          <div className="modal-body">
            <form onSubmit={(event) => submitFormHandler(event)}>
              <div className="">
                <div className="floating-label-group inputgroup">
                  <div className="flex space-between floating-label-input">

                    <input
                      required
                      type="number"
                      className="form-control"
                      name="amount"
                      onChange={handleChange}
                    />
                    <label className="label">Amount</label>
                  </div>
                </div>

                <div className="floating-label-group inputgroup">
                  <div className="flex space-between floating-label-input">

                    <select
                      required
                      ref={walletSelect}
                      className="form-control"
                    >
                      <option value="">Choose Action</option>
                      <option value="deposit">Deposit</option>
                      <option value="debit">Withdraw</option>
                      <option value="hold">Hold</option>
                      <option value="hold-withdraw">Block</option>
                    </select>
                    <label className="label">Action</label>
                  </div>
                </div>

                <div className="floating-label-group inputgroup">
                  <div className="flex space-between floating-label-input">

                    <input
                      required
                      type="text"
                      className="form-control"
                      name="remark"
                      onChange={handleChange}
                    />
                    <label className="label">Remark</label>
                  </div>
                </div>
              </div>
              <div className="flex item-center justify-center gap16">
                <Button type="submit" className="btn-success wd248">
                  Add Fund
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default AdminFundForm;
