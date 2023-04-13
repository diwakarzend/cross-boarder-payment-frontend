import React, { Fragment, memo } from "react";
import Pagination from "../../Components/PaginationNew/PaginationNew/Pagination";
import { TableWrapper } from "../../Components/UI/StyledConstants";
import TableRow from "./TableRow";

const TableHTML = memo(
  ({ reportsItems, filterItems, pagingData, dispatch }) => {
    const reportsDataAvailable =
      (reportsItems &&
        Array.isArray(reportsItems) &&
        reportsItems.length > 0) ||
      "";

    return (
      <TableWrapper>
        {reportsDataAvailable ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">A/C No</th>

                <th scope="col">DateTime</th>
                <th scope="col">Payment Mode</th>
                {/* <th scope="col">API Route</th> */}
                <th scope="col">Transaction Id</th>
                <th scope="col">Amount</th>
                {/* <th scope="col">Beneficiary</th> */}
                <th scope="col">Wallet Balance</th>
                {/* <th scope="col">Service Charges</th> */}

                <th scope="col">Status</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {reportsDataAvailable
                ? reportsItems.map((item, index) => {
                    let gst = "";
                    if (item.payoutChanrge) {
                      gst = (item.payoutChanrge * 18) / 100;
                      gst = gst.toFixed(2);
                    }
                    return (
                      <TableRow activeIndex={index + 1} item={item} gst={gst} />
                    );
                  })
                : ""}
            </tbody>
          </table>
        ) : (
          <div colSpan="8" style={{ textAlign: "center", color: "green" }}>
            No transaction Found, You can use filter option to get all required
            transactions.
          </div>
        )}
        {reportsDataAvailable && (
          <div>
            <Pagination pagingData={pagingData} dispatch={dispatch} />
          </div>
        )}
      </TableWrapper>
    );
  }
);

export default TableHTML;
