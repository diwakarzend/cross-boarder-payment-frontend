import React, { memo, useRef, useState } from "react";
import IconBack from "../../assests/images/Icons/IconBack";
import IconMobile from "../../assests/images/Icons/IconMobile";
import MaterialInput from "../../Components/Common/Form";
import { ButtonSolid } from "../styledConstants";
const btnStyle = {
  width: "110px",
  float: "left",
  "margin-right": "21px",
};

const RequestOTPForm = memo(
  ({ handleChange, sendOTPHandler, handleCancel }) => {
    const refTel = useRef();
    const [formData, updateFormData] = useState({ userName: "" });
    const [formErrors, setFormErrors] = useState({});



    return (
      <>
        <div className="floating-label-group inputgroup">
          {/* <div className="flex space-between floating-label-input">
            <input
              className={
                refTel?.current?.value
                  ? "form-control has-value"
                  : "form-control"
              }
              autoFocus="autofocus"
              type="tel"
              autoComplete="off"
              required
              name="mobile"
              onChange={handleChange}
              ref={refTel}
            />
            <label className="label" htmlFor="mobile">
              Username or Mobile no.
            </label>
          </div> */}
          <div className="mb16">
            <MaterialInput
              wrapperClassName="username"
              icon={<IconMobile />}
              maxLength="10"
              name="mobile"
              type="text"
              onChange={handleChange}
              placeholder="Enter your Email ID / Mobile No."
              // value={formData?.userName}
              error={formErrors.userName}
            />
          </div>
        </div>
        <div className="flex">
          {/* <input
            type="submit"
            value="Send"
            className="submit-btn primary-btn"
          /> */}
          <ButtonSolid primary xl className="mt30 full-width" type="button" onClick={sendOTPHandler}>
            Generate OTP
          </ButtonSolid>
        </div>
        <div className="flex justify-center">
          <button onClick={handleCancel} className="back-btn flex item-center">
            <span>
              <IconBack />
            </span>
            Back to login
          </button>
        </div>
      </>
    );
  }
);

export default RequestOTPForm;
