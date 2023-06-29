import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCommisionRange } from "../../actions/payout";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import CommissionForm from "./CommissionForm";
import {
  addOverlay,
  removeOverlay,
  printPage,
  hideMessage,
} from "../../utils/common";

import { Button,BorderBtn, TableWrapper } from "../../Components/UI/StyledConstants";
import { CommissionWrapper } from "./style";

const Commission = (props) => {
  const { dispatch, payout } = props;
  const [isPopupVisible, setPopUp] = useState(false);
  const [itemInfo, setItem] = useState({ item: "", vendor: "" });
  const [message, setMessage] = useState("");

  const comissionRange = () => {
    dispatch(fetchCommisionRange());
  };

  useEffect(() => {
    comissionRange();
  }, []);

  useEffect(() => {
    hideMessage(message, setMessage);
  }, [message]);

  const openPopup = (item, itemKey, vendor) => {
    // console.log("item", item);
    item.mode = itemKey;
    setItem({
      item: item,
      vendor: vendor,
    });
    addOverlay();
    setPopUp(true);
  };

  const closePopUp = () => {
    removeOverlay();
    setPopUp(false);
  };

  const testData =
    payout &&
    payout.commission &&
    payout.commission.data &&
    payout.commission.data.content &&
    payout.commission.data.content;

  const finalData = [];

  if (testData && testData.constructor == Object) {
    Object.keys(testData).forEach((key) => {
      // finalData.push(testData[key]);
      const objCopy = JSON.parse(JSON.stringify(testData[key]));
      objCopy["vendor"] = key;
      finalData.push(objCopy);
    });
  }
  const rows = [];

  const prepareData = (commissionData) => {
    let lastCategory = null;
    if (commissionData) {
      Object.keys(commissionData).forEach((itemKey) => {
        if (Array.isArray(commissionData[itemKey])) {
          commissionData[itemKey].forEach((product) => {
            if (itemKey !== lastCategory) {
              rows.push(
                <ProductRow
                  itemKey={itemKey}
                  data={commissionData}
                  openPopup={openPopup}
                  vendor={commissionData.vendor}
                />
              );
            }
            lastCategory = itemKey;
          });
        }
      });
    }
  };

  if (finalData) {
    Object.keys(finalData).forEach((item) => {
      prepareData(finalData[item]);
    });
  }

  return (
    <CommissionWrapper>
      {/* <BreadCrumb heading="Commission" value="Commission" /> */}
      <div className="card-wrapper flex-column mb-4">
        <div className="card-header flex item-center space-between">
          <h4 className="card-title">Commission</h4>
          <div className="flex gap4">
            <BorderBtn className="btn-soft-success" onClick={printPage}><i className="fa fa-print" aria-hidden="true"></i> Print</BorderBtn>
          </div>
        </div>
        <div className="card-body">
        <TableWrapper>
        <table className="table">
          <thead>
            <tr>
              <th>UserName</th>
              <th>Mode</th>
              <th>Range</th>
              <th>Merchant Code</th>
              <th>Charges</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        </TableWrapper>
        </div>
      </div>
      {isPopupVisible && (
        <CommissionForm
          closePopUp={closePopUp}
          itemToUpdate={itemInfo.item}
          comissionRange={comissionRange}
          setMessage={setMessage}
          message={message}
          userId={itemInfo.vendor}
        />
      )}
    </CommissionWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Commission);

const ProductRow = ({ itemKey, data, openPopup, vendor }) => {
  const range = [];
  const merchantCode = [];
  const charges = [];
  const commission = [];
  const edit = [];
  data[itemKey].forEach((item) => {
    range.push(
      <div className="mb4 mt4">
        {`Rs.${item.minAmount} - Rs.${item.maxAmount}`}
      </div>
    );
    merchantCode.push(<div>{item.merchantApiCode || "NA"}</div>);

    let commissionValue = "NA";
    if (item.commissionType == "FIX") {
      commissionValue = `Rs. ${item.comission} + GST`;
    } else if (item.commissionType == "PERCENTAGE") {
      commissionValue = `${item.comission}% + GST`;
    }

    commission.push(<div>{commissionValue}</div>);
    edit.push(<div className="edit-link flex item-center mb4 mt4 cursor-pointer" title="Edit" onClick={() => openPopup(item, itemKey, vendor)}><i className="icon-pencil"></i></div>);
  });
  return (
    <tr>
      <td>{vendor}</td>
      <td>{itemKey}</td>
      <td>{range}</td>
      <td>{merchantCode}</td>
      <td>{commission}</td>
      <td>{edit}</td>
    </tr>
  );
};
