import React, { memo, useState } from "react";
import P2PModal from "./P2PModal";
import { addOverlay, removeOverlay } from "../../utils/common";
import { TableWrapper } from "../../Components/UI/StyledConstants";
const TableHTML = memo(({ reportsItems, pagingData, dispatch }) => {
  const [modal, setModal] = useState({ status: false, data: null });
  const reportsDataAvailable =
    (reportsItems && Array.isArray(reportsItems) && reportsItems.length > 0) ||
    "";

  const closePopUpHandler = () => {
    removeOverlay();
    setModal({ status: false, data: null });
  };

  const openPopupHandler = (data) => {
    addOverlay();
    setModal({ status: true, data });
  };

  return (
    <TableWrapper>
      {reportsDataAvailable ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">UTR Number</th>
              <th scope="col">Date and Time</th>
              <th scope="col">Transaction Details</th>
              <th scope="col">Amount</th>
              <th scope="col">Receiver Name</th>
              <th scope="col">Vendor Name</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {reportsDataAvailable &&
              reportsItems.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item?.utrNumber}</td>
                    <td>
                      {item?.transactionDate} {item?.transactionTime}
                    </td>

                    <td>{item?.transactionRefId}</td>
                    <td>&#8377;{item?.amount}</td>
                    <td>{item?.receiverName}</td>
                    <td>
                      {item?.vendorCode == "3"
                        ? "PAYTM"
                        : item?.vendorCode == "2"
                        ? "PHONEPE"
                        : "-"}
                    </td>
                    <td className={item?.status?.toLowerCase()}>
                      {item?.status}
                    </td>
                    <td>
                      <span
                        className="cursor-pointer"
                        onClick={() => openPopupHandler(item)}
                      >
                        <i class="fa fa-eye" aria-hidden="true" />
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <div colSpan="8" style={{ textAlign: "center", color: "green" }}>
          No transaction Found, You can use filter option to get all required
          transactions.
        </div>
      )}

      {modal?.status && (
        <P2PModal
          modalData={modal?.data}
          closePopUpHandler={closePopUpHandler}
        />
      )}
    </TableWrapper>
  );
});

export default TableHTML;
