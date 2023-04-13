import React, { useState } from "react";
import { ModalWrapper, BorderBtn } from "../../Components/UI/StyledConstants";
import { Title } from "./style";
import IconRefund from "../../assests/images/Icons/IconRefund";
import IconResponse from "../../assests/images/Icons/IconResponse";
import IconStatus from "../../assests/images/Icons/IconStatus";
export default function TableRow({ item, gst, activeIndex }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr
        className={expanded ? "active-tr" : ""}
        onClick={() => setExpanded(!expanded)}
      >
        <th scope="row">
          <div className="flex item-center">
            <span className="toggle-icon"></span>
            <span className="row-index">{activeIndex}</span>
          </div>
        </th>
        <td>{item?.accountNumber || "NA"}</td>

        <td>{item?.createdDate || "NA"}</td>
        <td>{item?.route || "NA"}</td>
        <td>{item?.txnId || "NA"}</td>
        <td>&#8377; {item?.remittanceAmount || "0"}</td>
        <td>&#8377; {item?.closingBalance || "0"}</td>
        <td className={item.status.toLowerCase()}>{item.status}</td>
      </tr>
      {expanded && (
        <ModalWrapper>
          <div className="modal" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Transaction Reports</h4>
                <button
                  type="button"
                  className="close close-btn"
                  onClick={() => setExpanded(!expanded)}
                >
                  <span aria-hidden="true">
                    <i className="fa fa-times" aria-hidden="true"></i> Cancel
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="payment-success">
                  <div className="status"> {item?.status}</div>
                  <div className="paymnent-amount">
                    ₹ {item?.remittanceAmount}
                  </div>
                  <div className="payment-date">{item?.createdDate}</div>
                  <div className="imps">
                    <img src="/images/imps-logo.png" alt="IMPS" />
                  </div>
                </div>
                <Title>Beneficiary Details</Title>
                <div className="flex space-between mb10">
                  <div className="label-name">Name: </div>
                  <div className="value text-right">{item.beneficiaryName}</div>
                </div>
                <div className="flex space-between mb10">
                  <div className="label-name">A/C Number: </div>
                  <div className="value text-right">{item.accountNumber}</div>
                </div>
                <div className="flex space-between mb10">
                  <div className="label-name">IFSC Code: </div>
                  <div className="value text-right">{item.ifscCode}</div>
                </div>
                <Title>Transaction Details</Title>
                <div className="flex space-between mb10">
                  <div className="label-name">Txn Id: </div>
                  <div className="value text-right">{item.txnId}</div>
                </div>
                <div className="flex space-between mb10">
                  <div className="label-name">Merchant Txn Id: </div>
                  <div className="value text-right">{item.merchantTxnId}</div>
                </div>
                <div className="flex space-between mb10">
                  <div className="label-name">Status: </div>
                  <div className="value text-right">{item?.status}</div>
                </div>
                <Title>Charges Details</Title>
                <div className="flex space-between mb10">
                  <div className="label-name">Charge: </div>
                  <div className="value text-right">
                    &#8377; {item?.payoutChanrge || "-"}
                  </div>
                </div>
                <div className="flex space-between mb10">
                  <div className="label-name">GST: </div>
                  <div className="value text-right">&#8377; {gst || "-"}</div>
                </div>
                <div className="flex space-between mb10">
                  <div className="label-name">Wallet OB: </div>
                  <div className="value text-right">
                    &#8377; {item?.openingBalance || "-"}
                  </div>
                </div>
                <div className="flex space-between mb10">
                  <div className="label-name">Wallet CB: </div>
                  <div className="value text-right">
                    &#8377; {item?.closingBalance || "-"}
                  </div>
                </div>
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
      )}
    </>
  );
}

// Previous row html
{
  /* <tr key={item.reqstDate}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.createdDate}</td>
                        <td>{item.route}</td>
                        <td>{item.merchantCode}</td>

                        <td>
                          <div className="label-name"> TxnId:</div> {item.txnId} <br />
                          {item.merchantTxnId ? (
                            <Fragment>
                              <div className="label-name">Merchant TxnId: </div>{" "}
                              {item.merchantTxnId}
                            </Fragment>
                          ) : (
                            ""
                          )}
                        </td>
                        <td>&#8377;{item.remittanceAmount}</td>

                        <td>
                          {item.beneficiaryName}, <br />
                          {item.accountNumber}, <br />
                          {item.ifscCode}
                        </td>

                        {item.openingBalance != null ? (
                          <td>
                            <div className="label-name"> OB:</div> {item.openingBalance} <br />
                            <div className="label-name"> CB:</div> {item.closingBalance} <br />
                          </td>
                        ) : (
                          <td>NA</td>
                        )}

                        <td>
                          <div className="label-name">Charge : </div>
                          {item.payoutChanrge}
                          <br />
                          <div className="label-name"> GST : </div>
                          {gst}
                        </td>

                        <td className={item.status.toLowerCase()}>
                          {item.status}
                        </td>
                        <td>
                          <button
                            onClick={() => {}}
                            className="quick-payment-btn"
                          ></button>
                        </td>
                      </tr> */
}
