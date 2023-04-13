import React from "react";
import { ModalWrapper, BorderBtn } from "../../Components/UI/StyledConstants";
import { DetailsWrapper, Title } from "./style";
import IconTDetail from "../../assests/images/Icons/IconTDetail";
import IconRefund from "../../assests/images/Icons/IconRefund";
import IconResponse from "../../assests/images/Icons/IconResponse";
import IconStatus from "../../assests/images/Icons/IconStatus";
export default function P2PModal({ modalData, closePopUpHandler }) {
  console.log("modalData = ", modalData);
  return (
    <ModalWrapper>
      <div className="modal" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">
              <span className="icon">
                <IconTDetail />
              </span>{" "}
              Transaction Details
            </h4>
            <button
              type="button"
              className="close close-btn"
              onClick={closePopUpHandler}
            >
              <span aria-hidden="true">
                <i className="fa fa-times" aria-hidden="true"></i> Cancel{" "}
              </span>
            </button>
          </div>
          <div className="modal-body">
            <DetailsWrapper>
              <div className="payment-success">
                <div className="status">Payment Successful</div>
                <div className="paymnent-amount">₹ {modalData?.amount}</div>
                <div className="payment-date">
                  {modalData?.transactionDate} {modalData?.transactionTime}
                </div>
                <div className="imps">
                  <img src="/images/imps-logo.png" alt="IMPS" />
                </div>
              </div>

              <Title>Beneficiary Details</Title>
              <div className="flex space-between">
                <div className="label-name">Sender Name:</div>
                <div className="value text-right">{modalData?.senderName}</div>
              </div>
              <div className="flex space-between">
                <div className="label-name">UTR Number:</div>
                <div className="value text-right">{modalData?.utrNumber}</div>
              </div>
              <div className="flex space-between">
                <div className="label-name">Payment Mode:</div>
                <div className="value text-right">
                  {modalData?.transactionType}
                </div>
              </div>
              <div className="flex space-between">
                <div className="label-name">Amount:</div>
                <div className="value text-right">{modalData?.amount}</div>
              </div>
              <Title>Transaction Details</Title>
              <div className="flex space-between">
                <div className="label-name">Receiver Name:</div>
                <div className="value text-right">
                  {modalData?.receiverName}
                </div>
              </div>
              <div className="flex space-between">
                <div className="label-name">Receiver UPI:</div>
                <div className="value text-right">{modalData?.receiverUpi}</div>
              </div>
              <div className="flex space-between">
                <div className="label-name">Status:</div>
                <div className="value text-right">{modalData?.status}</div>
              </div>
              <div className="flex space-between">
                <div className="label-name">Sender Name:</div>
                <div className="value text-right">{modalData?.senderName}</div>
              </div>
              <Title>Charges Details</Title>
              <div className="flex space-between">
                <div className="label-name">Transaction Date:</div>
                <div className="value text-right">
                  {modalData?.transactionDate}
                </div>
              </div>
              <div className="flex space-between">
                <div className="label-name">Transaction Time:</div>
                <div className="value text-right">
                  {modalData?.transactionTime}
                </div>
              </div>
              <div className="flex space-between">
                <div className="label-name">Transaction RefId:</div>
                <div className="value text-right">
                  {modalData?.transactionRefId}
                </div>
              </div>
              <div className="flex space-between">
                <div className="label-name">Vendor Code:</div>
                <div className="value text-right">{modalData?.vendorCode}</div>
              </div>
              <div className="flex space-between">
                <div className="label-name">User Id:</div>
                <div className="value text-right">{modalData?.userId}</div>
              </div>
            </DetailsWrapper>
          </div>
          <div className="modal-footer flex flex-wrap justify-start">
            <BorderBtn className="mr10 mb10">
              <span className="mr5">
                <IconStatus />
              </span>
              Check Status
            </BorderBtn>
            <BorderBtn className="mr10 mb10">
              <span className="mr5">
                <IconResponse />
              </span>
              Check API Response
            </BorderBtn>
            <BorderBtn className="mr10 mb10">
              <span className="mr5">
                <IconRefund />
              </span>
              Refund
            </BorderBtn>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
