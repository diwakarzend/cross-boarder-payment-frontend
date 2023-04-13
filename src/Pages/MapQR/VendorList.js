import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import VendorTableHTML from "./VendorTableHTML";
import { getVendorDetailsByID } from "../../utils/api";
import { getQueryParams, isEmpty } from "../../utils/common";
import { Button, ModalWrapper } from "../../Components/UI/StyledConstants";
import { ChangeQrWrapper } from "./style";

const VendorList = () => {
  const [vendorData, setvendorData] = useState([]);
  const [modal, setModal] = useState(false);
  const [qrCode, setQrCode] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location?.search) {
      let queryParams = getQueryParams(location?.search);
      getVendorDetailsByID({
        pageNo: 1,
        pageSize: 1,
        uuid: queryParams?.uuid,
      }).then((res) => {
        setvendorData(res?.data?.data);
      });
    }
  }, [location]);

  return (
    <>
      <BreadCrumb heading="Vendor List" value="Vendor List" />
      <div className="card-wrapper flex-column mb-4">
        <div className="card-header flex item-center space-between">
          <h4 className="card-title">Vendor Table</h4>
        </div>
        <div className="card-body p16">
          <Button className="btn-success" as={Link} to="/mapqr-add">Add / Update</Button>
          <VendorTableHTML vendorData={vendorData} setModal={setModal} />
        </div>
      </div>
      {modal &&
        <ModalWrapper>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4>Change Active QR Code</h4>
                <button className="close close-btn" onClick={() => setModal(false)}><span aria-hidden="true"><i className="fa fa-times" aria-hidden="true"></i> Cancel </span></button>
              </div>
              <div className="modal-body">
                <ChangeQrWrapper>
                  <div className="pb16">
                    <select
                      name="qrCode"
                      className="form-control"
                      value={qrCode}
                      onChange={(e) => setQrCode(e.target.value)}
                    >
                      <option value="">Select QR Code</option>
                      {vendorData.map((option, i) =>
                        <option value={option?.vpaId}>{option?.vpaId}</option>
                      )}
                    </select>
                  </div>
                  {/* <div className="qr-image flex item-center justify-center">
                    <img src="https://storage.googleapis.com/ptm-assets-prod/icons/yes-paytm.png" alt="" />
                  </div> */}
                  <div className="flex item-center justify-center gap16">
                    <Button className="btn-light" onClick={() => setModal(false)}>Close</Button>
                    <Button className="btn-success">Change QR Code</Button>
                  </div>
                </ChangeQrWrapper>
              </div>
            </div>
          </div>

        </ModalWrapper>
      }
    </>
  );
};

export default VendorList;
