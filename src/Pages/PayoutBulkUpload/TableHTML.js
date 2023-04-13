import React, { memo, useState } from "react";
// import P2PModal from "./P2PModal";
import { addOverlay, removeOverlay } from "../../utils/common";
import { TableWrapper } from "../../Components/UI/StyledConstants";
import { jobInvokerRequest } from "../../utils/api";
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

  const onJobInvoke = (uuid) => {
    jobInvokerRequest(uuid).then(response => {
      console.log("onJobInvoke = ", response)
    })
  }

  return (
    <TableWrapper>
      {reportsDataAvailable ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">File Name</th>
              <th scope="col">Date and Time</th>
              <th scope="col">Count</th>
              <th scope="col">Amount</th>
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
                    <td>{item?.fileName}</td>
                    <td>{item?.uploadedTime}</td>
                    <td>{item?.totalCount}</td>
                    <td>&#8377;{item?.totalAmount}</td>
                    <td className={item?.status?.toLowerCase()}>{item?.status}</td>
                    <td>
                      <button className="primary-btn" onClick={() => onJobInvoke(item?.uuid)}>Proceed</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <div colSpan="8" style={{ textAlign: "center", color: "green" }}>
          No Uploaded Data Found.
        </div>
      )}

      {/* {modal?.status && (
        <P2PModal
          modalData={modal?.data}
          closePopUpHandler={closePopUpHandler}
        />
      )} */}
    </TableWrapper>
  );
});

export default TableHTML;
