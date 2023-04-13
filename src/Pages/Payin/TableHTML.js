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
              <th scope="col">Payer Name</th>
              <th scope="col">Amount</th>
              <th scope="col">VpaId</th>
              <th scope="col">Status</th>
              <th scope="col">transactionId</th>
              <th scope="col">userId</th>
              <th scope="col">refundAmount</th>
              <th scope="col">remarks</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {reportsDataAvailable &&
              reportsItems.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item?.payerName}</td>

                    <td>&#8377; {item?.remittanceAmount}</td>
                    <td>{item?.requestVpaId}</td>
                    <td className={item?.status?.toLowerCase()}>
                      {item?.status}
                    </td>
                    <td>{item?.transactionId}</td>
                    <td>{item?.userId}</td>
                    <td>&#8377; {item?.refundAmount}</td>
                    <td>{item?.remarks}</td>

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
          type="payin"
        />
      )}
    </TableWrapper>
  );
});

export default TableHTML;
