import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSelectedVendor } from "../../actions/selectedVendor";
import Pagination from "../../Components/Pagination/Pagination";
import { TableWrapper } from "../../Components/UI/StyledConstants";
const TableHTML = ({ listData = [] }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onViewClick = (vendor) => {
    dispatch(setSelectedVendor(vendor));
    history.push(`vendor-list?uuid=${vendor?.uuid}`);
  };
  return (
    <div className="card-body">
      <TableWrapper>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Company Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Role</th>
              <th>Balance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listData && listData.length > 0 ? (
              listData
                .filter((item) => item.role === "PTM_VENDOR")
                .map((item, index) => (
                  <tr key={item.userName}>
                    <td>{index + 1}</td>
                    <td>{`${item.firstName} ${item.lastName}`}</td>
                    <td>{item.userName}</td>
                    <td>{item.email}</td>
                    <td className="vendor">
                      {item.role.replace("PTM_VENDOR", "Vendor")}
                    </td>
                    <td>{item.userBalance}</td>
                    <td>
                      <span
                        onClick={() => onViewClick(item)}
                        className="cursor-pointer"
                      >
                        <i class="fa fa-eye" aria-hidden="true" />
                      </span>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan={7} className="center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
};
export default TableHTML;
