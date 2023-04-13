import React from "react";
import Pagination from "../../Components/Pagination/Pagination";
import { Button, TableWrapper } from "../../Components/UI/StyledConstants";

const VendorTableHTML = ({ vendorData = [], setModal }) => {
  return (
      <>
      <TableWrapper>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">User UUID</th>
              <th scope="col">Vendor Id</th>
              <th scope="col">VPA Id</th>
              <th scope="col">Phone No</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendorData && vendorData.length > 0 ? (
              vendorData.map((item, index) => (
                <tr key={index}>
                  <td>{item?.id}</td>
                  <td>{item?.userUUID}</td>
                  <td>{item?.vendorId}</td>
                  <td>{item?.vpaId}</td>
                  <td>{item?.phoneNo}</td>
                  <td>
                    <Button className="btn-sm btn-soft-success" onClick={() => setModal(true)}>Change QR Code</Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </TableWrapper>
      <div>
        <Pagination />
      </div>
    </>
  );
};
export default VendorTableHTML;
