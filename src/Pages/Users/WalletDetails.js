import React, { useState, useEffect } from "react";
import APIS from "../../utils/urls";
import Request from "../../utils/Request";
import { ModalWrapper } from "../../Components/UI/StyledConstants";

function WalletDetails({
  userId,
  closeTransactionHandler,
  successCallBack,
  userWallet,
}) {
  const fetchWalletDetails = () => {
    const request = new Request("", successHandler, errorHandler, true);
    let walletAPI = `${APIS.login.BASE_URL}${APIS.Wallet.VIEW_TRANSACTIONS}`.replace(
      "{userId}",
      userWallet.userName
    );

    userWallet.userId = parseInt(userWallet.userId);
    request.get(walletAPI);
  };
  const successHandler = (response, headers) => {
    if (response.success) {
      setObtainedWalletDetails(response.data);
    }
  };

  const [obtainedWalletDetails, setObtainedWalletDetails] = useState([]);

  const errorHandler = (error) => {
    console.log("failed call");
  };

  useEffect(() => {
    fetchWalletDetails();
  }, []);

  return (
    <ModalWrapper>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Details
            </h5>
            <button
              type="button"
              className="close close-btn"
              data-dismiss="modal"
              aria-label="Close close-btn"
              onClick={closeTransactionHandler}
            >
              <span aria-hidden="true"><i className="fa fa-times" aria-hidden="true"></i> Cancel </span>
            </button>
          </div>
          <div className="modal-body">
            <div>
              {/* <tr>
                <th>User Id</th>
                <th>Transaction Type</th>
                <th>Amount</th>
                <th>Remarks </th>
                <th>Date</th>
                <th>Id</th>
              </tr> */}
              <ul>
                {obtainedWalletDetails.map((details) => {
                  return (
                    <React.Fragment>
                      <li>
                        {Object.entries(details).map(([key, value]) => {
                          return <li>{`${key} : ${value}`}</li>;
                        })}
                      </li>
                      {/* <li>{detail.userId}</li>
                      <li>{detail.transactionType}</li>
                      <li>{detail.transactionAmout}</li>
                      <li>{detail.remarks}</li>
                      <li>{detail.createdDate}</li>
                      <li>{detail.transactionId}</li>
                      <li>
                        <br />
                      </li> */}
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
export default WalletDetails;
