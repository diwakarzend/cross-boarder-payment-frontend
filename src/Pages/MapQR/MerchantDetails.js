import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getVendorListing,
  postVendorListing,
  getUserDetails,
  uploadMapqrRequest,
  getBankEntitiesRequest,
} from "../../utils/api";
import imagePlaceholder from "../../assests/images/gallery.png";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";
import { FormWrapper, Wrapper } from "./style";
import { convertBase64 } from "../../utils/common";
import { Button } from "../../Components/UI/StyledConstants";
//import CSVExport from "../../Components/DataExport/CSVExport";

const initPtpDto = {
  qrDetails: null,
  vendorId: null,
  vpaId: null,
  phoneNo: null,
  dailyLimit: 0,
  totalLimit: 0,
  s3Path: "",
  fileName: "",
};

const MerchantDetails = (props) => {
  const [vender, SetVendor] = useState([]);
  const [controls, setControls] = useState([{ ...initPtpDto }]);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [user, setUser] = useState([]);
  const selectedVendor = useSelector((state) => state?.selectedVendor?.data);
  const [bankOptions, SetBankOptions] = useState([]);
  const [bankId, setBankId] = useState('');
  const history = useHistory();
  console.log("selectedVendor", selectedVendor);

  useEffect(() => {
    getBankEntitiesRequest({ pageNo: 0, pageSize: 100, userUUID: '1ba336de-16e6-11ec-9621-0242ac130002' }).then((res) => {
      SetBankOptions(res?.data?.data);
    });
  }, []);

  useEffect(() => {
    const params = { pageNo: 1, pageSize: 100 };
    getVendorListing(params).then((res) => {
      if (res?.data && res?.data?.data) {
        SetVendor(res?.data?.data);
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMessage({ type: "", text: "" });
      // setControls([{ ...initPtpDto }]);
    }, 5000);
  }, [message?.type]);

  // user Details
  useEffect(() => {
    if (selectedVendor?.userName) {
      getUserDetails(selectedVendor?.userName).then((res) => {
        setUser(res?.data?.data);
        console.log("result", res);
      });
    } else {
      history.push("mapqr-list");
    }
  }, [selectedVendor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ptpDTOList = JSON.parse(JSON.stringify(controls));
    ptpDTOList.forEach((dto) => {
      dto.userUUID = "234";
      dto.bankId = bankId;
    });

    postVendorListing(ptpDTOList).then((res) => {
      if (res?.data) {
        const { success, msg, data } = res?.data;
        setMessage({ type: success ? "success" : "error", text: msg });
        if (data) {
          console.log("All is well");
          // setControls([{ ...initPtpDto }]);
        }
      }
    });
  };

  console.log("controls = ", controls);

  const dtoChangeHandler = (e, i) => {
    const { name, value } = e.target;
    const updateControls = JSON.parse(JSON.stringify(controls));
    updateControls[i][name] = value;
    setControls(updateControls);
  };

  const addMoreQrCodes = () => {
    const updateControls = JSON.parse(JSON.stringify(controls));
    updateControls.push({ ...initPtpDto });
    setControls(updateControls);
  };

  const removePtpDto = (i) => {
    const updateControls = JSON.parse(JSON.stringify(controls));
    updateControls.splice(i, 1);
    setControls(updateControls);
  };

  const handleFileRead = async (event, i) => {
    const file = event.target.files[0];
    const params = new FormData();
    params.append("file", file);
    uploadMapqrRequest(params).then((res) => {
      console.log("res = > ", res);
      const updateControls = JSON.parse(JSON.stringify(controls));
      if (res?.data) {
        updateControls[i][event.target.name] = res?.data?.downloadUri || "";
        updateControls[i].s3Path = res?.data?.s3Path || "";
        updateControls[i].fileName = res?.data || "";
      }
      setControls(updateControls);
    });
  };

  return (
    <>
      <BreadCrumb heading="Map QR" value="mapqr" />
      <div className="card-wrapper flex-column mb-4">
        <div className="card-header flex item-center space-between">
          <h4 className="card-title">Merchant Details</h4>
        </div>
        <div className="card-body p16">
          <div className="flex mercahnt-details pb16">
            <div className="col-3">
              <div className="label">Name</div>
              <div className="value">
                {selectedVendor?.firstName || "-"}{" "}
                {selectedVendor?.lastName || ""}
              </div>
            </div>
            <div className="col-2">
              <div className="label">Mobile No.</div>
              <div className="value">
                {selectedVendor?.phoneNumber || "-"}
              </div>
            </div>
            <div className="col-3">
              <div className="label">Email</div>
              <div className="value">
                {selectedVendor?.email || "-"}
              </div>
            </div>
            <div className="col-4">
              <div className="label">Address</div>
              <div className="value">
                {selectedVendor?.address1 || "-"}{" "}
                {selectedVendor?.address2 || ""}
                {selectedVendor?.pincode
                  ? ` - ${selectedVendor?.pincode}`
                  : ""}
              </div>
            </div>
          </div>
          <div className="">
            <span className={`${message?.type} message-text`}>
              {message?.text}
            </span>
          </div>
          <div className="form-group bank-details pb16">
            <div className="row">
              <div className="col-3">
                <select
                  className="form-control"
                  name="bankId"
                  value={bankId}
                  onChange={(e) => setBankId(e.target.value)}
                >
                  <option value="">Select Bank</option>
                  {bankOptions.map((option) => (
                    <option value={option?.id}>
                      {option?.bankName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <FormWrapper onSubmit={handleSubmit} autoComplete="off">
            <div className="flex gap16 mapping-details-wrapper">
              {controls.map((dto, i) => (
                <>
                  <div className="mapping-details">
                    <div className="QR-wrap col-4">
                      <div className="QR-Image">
                        <img
                          src={dto?.s3Path ? dto?.s3Path : imagePlaceholder}
                          alt=""
                        />

                        <div className="upload">
                          <i className="fa fa-upload" aria-hidden="true"></i>
                          <div className="upload-here">
                            Upload QR code here
                          </div>
                        </div>
                        <input
                          type="file"
                          placeholder="Upload QR Code"
                          name="qrDetails"
                          onInput={(e) => handleFileRead(e, i)}
                        />
                      </div>
                      <div className="controls-wrapper flex flex-column gap4 p16">
                        <div className="form-group">
                          <select
                            className="form-control"
                            name="vendorId"
                            onChange={(e) => dtoChangeHandler(e, i)}
                          >
                            <option value="">Select Vendor</option>
                            {vender.map((option) => (
                              <option value={option?.id}>
                                {option?.brandName}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="VPA ID"
                            name="vpaId"
                            value={dto?.vpaId}
                            onChange={(e) => dtoChangeHandler(e, i)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone No."
                            name="phoneNo"
                            value={dto?.phoneNo}
                            onChange={(e) => dtoChangeHandler(e, i)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Daily Limit"
                            name="dailyLimit"
                            value={dto?.dailyLimit}
                            onChange={(e) => dtoChangeHandler(e, i)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Total Limit."
                            name="totalLimit"
                            value={dto?.totalLimit}
                            onChange={(e) => dtoChangeHandler(e, i)}
                          />
                        </div>
                        {controls.length > 1 && (
                          <Button
                            type="button"
                            className="btn-danger"
                            onClick={() => removePtpDto(i)}
                          >
                            <i className="ion-android-delete"></i>
                            Remove QR Codes
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="addmore-btn-wrap flex item-center justify-end gap16">
              <div className="flex item-center">
                <Button
                  type="button"
                  className="btn-soft-success"
                  onClick={() => addMoreQrCodes()}
                >
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
                  Add more QR Codes
                </Button>
                <div className="max-char">Maximum 6 QR Codes</div>
              </div>
              <Button type="submit" className="btn-success">Submit QR Details</Button>
            </div>
          </FormWrapper>
        </div>
      </div>
    </>
  );
};

export default MerchantDetails;
