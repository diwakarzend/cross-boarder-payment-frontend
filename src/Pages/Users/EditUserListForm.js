import React, { useState, memo, useEffect } from "react";
import Request from "../../utils/Request";
import { formValidation } from "../../utils/formValidation";

import urls from "../../utils/urls";
import { removeOverlay } from "../../utils/common";
// import "./AddNewPlanForm.css";
import {
  AlertWrapper,
  BorderBtn,
  Button,
  ModalWrapper,

} from "../../Components/UI/StyledConstants";
import {ButtonSolid,Text } from "../../Components/styledConstants"
import { AlertMessage } from "../../Components/UI/AlertMessage";
import ErrorMessage from "../../Components/UI/ErrorMessage";
import MaterialInput from "../../Components/Common/Form";
import { editUserList } from "../../utils/api";

const initialFormData = Object.freeze({
    firstName:"",
    lastName:"",
    pincode:"",
    dob:"",
    address1:"",
    vpaId:"",
    webHookUrl:""

  
});

const EditUserListForm = memo(
  ({
    setEditPopUpSow,
    // setStatus,
    editUserData,
    status = false,
    updatedata,
    setEditData,
    setTrackUpdate
  }) => {
    const [isPopupVisible, handlePopUp] = useState(false);
    const [formData, updateFormData] = useState(updatedata);
    const [formErrors, setFormErrors] = useState({});
    const [success, setSuccess] = useState("");
  
    

    const [alertMessage, setAlertMessage] = useState({
      type: "",
      messageList: [],
    });

    const closePopUpHandler=()=>{
      setEditPopUpSow(false)

    }
     
    const handleChange = (event) => {
      updateFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
   
    useEffect(() => {

    }, []);

    console.log("formData", formData);

    const   handleEditUser = (event) => {
      event.preventDefault();
      const {vpaId,webHookUrl} = formData;
      const newObj = {
        vpaId,
        webHookUrl
      }
      
      const errors = formValidation(newObj);

      // /^[A-Za-z]{4}\d{7}$/.test('HDFC0001236')

      console.log("errors", errors, formData);

      if (!!errors && Object.keys(errors).length != 0) {
        setFormErrors(errors);
      } else {
        setFormErrors({});

        editUserList(formData).then((res)=>{
          setEditData(res)
          console.log("edit",res)
          console.log("edit successfull")
          closePopUpHandler();

        })
        // const errorHandler = (response) => {
        //   const errors = [];
        //   // if (response && response.status == 400) {
        //   //   if (response.fieldErrors && response.fieldErrors instanceof Array) {
        //   //     response.fieldErrors.forEach((item) =>
        //   //       errors.push(`${item.field}: ${item.message}`)
        //   //     );
        //   //   }
        //   // } else if (response && response.status == 401) {
        //   //   errors.push(response.error);
        //   // } else {
        //   //   errors.push("Something went wrong!");
        //   // }
        //   // setAlertMessage({
        //   //   type: "error",
        //   //   messageList: errors,
        //   // });
        // };

        // const successHandler = (response) => {
        //   if (response.success == false) {
        //     setAlertMessage({
        //       type: "error",
        //       messageList: [response.msg],
        //     });
        //   } else {
        //     // setAlertMessage({
        //     //   type: "success",
        //     //   messageList: [response.msg],
        //     // });
        //     addNewPlanRequest().then((res)=>{
        //       console.log("test",res)

        //     })
        //     setSuccess("Plan added successfully");
        //     removeOverlay();
        //     closePopUpHandler();
        //   }
        // };

        // let apiPath = urls.login.BASE_URL + urls.User.ADD_BENEFICIARY;

        // const api = new Request("", successHandler, errorHandler, false);

        // if (editUserData) {
        //   apiPath = urls.login.BASE_URL + urls.User.UPDATE_BENEFICIARY;

        //   return api.put(apiPath, formData);
        // }
        // return api.post(apiPath, formData);
      
      }
    };
    
    console.log("alert message => ", alertMessage);
    return (
      <ModalWrapper>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header flex justify-between item-center">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit User List
               </h5>
              <button
                type="button"
                className="close close-btn"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closePopUpHandler}
              >
                <span aria-hidden="true">
                  <i className="fa fa-times " style={{backgroundColor:"#ed141f", width:"15px",height:"15px" ,color:"#fff",borderRadius:"50%"}} aria-hidden="true"></i> Cancel{" "}
                </span>
              </button>
            </div>
           
              <div className="modal-body">
                <AlertMessage alertMessage={alertMessage} />
                {success}
                <div className="flex   flex-wrap">
                <div className="mb16 col-6">
                  <MaterialInput
                    name="role"
                    type="select"
                   // onChange={handleRoleChange}
                    placeholder="Select role"
                    // value={roles.filter((item) => item.value === formData.role)}
                    error={formErrors.role}
                    // options={roles}
                  />
                </div>
                </div>


                <div className="flex   flex-wrap">
                    <div className="mb16" style={{marginRight:"16px"}}>
                          <MaterialInput
                          className="form-input"
                            wrapperClassName="planName"
                            maxLength="10"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            onChange ={handleChange}
                            value={formData?.firstName}
                            error={formErrors.planName}
                          />
                        </div>
                       
                        <div className="mb16">
                          <MaterialInput
                          className="form-input"
                            wrapperClassName="lastName"
                            maxLength="10"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            onChange ={handleChange}
                            value={formData?.lastName}
                            error={formErrors.payIn}
                          />
                        </div>
                      </div>
                       
                       
                        <div className="flex  flex-wrap">
                
                        <div className="mb16" style={{marginRight:"16px"}}>
                          <MaterialInput
                          className="form-input"
                            wrapperClassName="dob"
                            maxLength="10"
                            name="dob"
                            type="text"
                            placeholder="Dob"
                            onChange ={handleChange}
                            value={formData?.dob}
                            error={formErrors.payOut}
                          />
                        </div>
                        <div className="mb16">
                          <MaterialInput
                          className="form-input"
                            wrapperClassName="payOut"
                            maxLength="10"
                            name="email"
                            type="text"
                            placeholder="Email"
                            onChange ={handleChange}
                            value={formData?.email}
                            error={formErrors.payOut}
                          />
                        </div>
                        </div>
                        <div className="flex  flex-wrap">
                
                        <div className="mb16" style={{marginRight:"16px"}}>
                          <MaterialInput
                          className="form-input"
                            wrapperClassName="dob"
                            maxLength="10"
                            name="userName"
                            type="text"
                            placeholder="userName"
                            onChange ={handleChange}
                            value={formData?.userName}
                            error={formErrors.payOut}
                          />
                        </div>
                        <div className="mb16">
                          <MaterialInput
                          className="form-input"
                            wrapperClassName="payOut"
                            maxLength="10"
                            name="phoneNumber"
                            type="text"
                            placeholder="Phone Number"
                            onChange ={handleChange}
                            value={formData?.phoneNumber}
                            error={formErrors.payOut}
                          />
                        </div>
                        </div>

                        <div className="flex  flex-wrap">
                        <div className="mb16" style={{marginRight:"16px"}} >
                          <MaterialInput
                          className="form-input"
                            wrapperClassName="payOut"
                            maxLength="10"
                            name="pincode"
                            type="text"
                            placeholder="Pin Code"
                            onChange ={handleChange}
                            value={formData?.pincode}
                            error={formErrors.payOut}
                          />
                        </div>
                        <div className="mb16">
                          <MaterialInput
                          className="form-input"
                            wrapperClassName="address1"
                            maxLength="10"
                            name="address1"
                            type="text"
                            placeholder="Address"
                            onChange ={handleChange}
                            value={formData?.address1}
                            error={formErrors.payOut}
                          />
                        </div>
                        </div>
                       

                        <div className="track-check" style={{marginBottom:"3px"}}>
                <Text
                  color="color3"
                  as="h2"
                  className="pr10"
                  size="rg"
                  fw="bold"
                >
                  Bank Details
                </Text>
              </div>
                       
                        <div className="flex  flex-wrap">
                          {(formData.role !=="PTM_ADMIN") && 
                        <div className="mb16" style={{marginRight:"16px"}} >
                          <MaterialInput
                          className="form-input"
                            wrapperClassName="vpaId"
                            maxLength="10"
                            name="vpaId"
                            type="text"
                            placeholder="Vpa Id"
                            onChange ={handleChange}
                            value={formData?.vpaId}
                            error={formErrors.payOut}
                          />
                        </div>}
                        {(formData.role !== "PTM_ADMIN") && <div className="mb16">
                          <MaterialInput
                          className="form-input"
                            wrapperClassName="webHookUrl"
                            maxLength="10"
                            name="webHookUrl"
                            type="text"
                            placeholder="Web Hook Url"
                            onChange ={handleChange}
                            value={formData?.webHookUrl}
                            error={formErrors.payOut}
                          />
                        </div>}
                      </div>
            <div className="flex  flex-wrap">     
             { (formData.role !=="PTM_ADMIN")&&  <div className="mb16" style={{marginRight:"16px"}}>
                  <MaterialInput
                   className="form-input"
                    name="panName"
                    type="text"
                    onChange={handleChange}
                    placeholder="Name of the Account Holder"
                    value={formData?.panName}
                    error={formErrors.panName}
                  />
                </div>}
           {  (formData.role !=="PTM_ADMIN")&&    
           <div className="mb16">
                  <MaterialInput
                  className="form-input"
                    name="panNumber"
                    type="text"
                    onChange={handleChange}
                    placeholder="Account Number"
                    value={formData?.panNumber}
                  />
                </div>}
                </div>
               {(formData.role !=="PTM_ADMIN")&&  <div className="mb16 col-6" style={{marginRight:"16px"}}>
                  <MaterialInput
                    name="aadhaarName"
                    type="text"
                    onChange={handleChange}
                    placeholder="IFSC CODE"
                    value={formData?.aadhaarName}
                  />
                </div>}

                <div className="track-check"  style={{marginBottom:"5px"}}>
                <Text
                  color="color3"
                  as="h2"
                  className="pr10"
                  size="rg"
                  fw="bold"
                >
                 ID Verifications
                </Text>
              </div>

                <div className="flex  flex-wrap">                 
                <div className="mb16 col-6" style={{marginRight:"16px"}} >
                 {(formData.role !=="PTM_ADMIN")&&  <MaterialInput
                    name="aadhaarNumber"
                    type="text"
                    onChange={handleChange}
                    placeholder="Aadhaar Number"
                    value={formData?.aadhaarNumber}
                  />}
                </div>
                {(formData.role !=="PTM_ADMIN")&& <div className="mb16 col-6">
                  <MaterialInput
                    name="accountNumber"
                    type="text"
                    onChange={handleChange}
                    placeholder="Aadhhar card holder Name"
                    value={formData?.accountNumber}
                  />
                </div>}
              </div>
              <div className="flex  flex-wrap"> 
                <div className="mb16 col-6" style={{marginRight:"16px"}} >
                 {(formData.role !=="PTM_ADMIN")&&  <MaterialInput
                    name="ifsc"
                    type="text"
                    onChange={handleChange}
                    placeholder="Pan"
                    value={formData?.ifsc}
                  />}
                </div>
                {(formData.role !=="PTM_ADMIN")&& <div className="mb16 col-6">
                  <MaterialInput
                    name="accountHolderName"
                    type="text"
                    onChange={handleChange}
                    placeholder="Accout Holder Name"
                    value={formData?.accountHolderName}
                  />
                </div>}
                   </div>
                { (formData.role ==="PTM_AGENT")&&   <div className="mb16 col-6">
                  <MaterialInput
                    name="planName"
                    type="select"
                    // onChange={handleCommissionPlanChange}
                    placeholder="Commission Plan"
                //    value={commissionPlan.filter(
                  //    (item) => item.value === formData.planName
                  //  )}
                    error={formErrors.planName}
                 //   options={commissionPlan}
                  />
                </div>}

                
                
              
              </div>

              <div className="modal-footer justify-start">
              <ButtonSolid primary add_user onClick={handleEditUser}>Edit Plan</ButtonSolid>
              </div>
    
          </div>
        </div>
      </ModalWrapper>
    );
  }
);

export default EditUserListForm;
