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
import { addNewPlanRequest } from "../../utils/api";

const initialFormData = Object.freeze({
  planName:"",
  payIn:"",
  payOut:""
});

const BlockCardRangeModal = memo(
  ({
    setIsOpen,
    // setStatus,
    editUserData,
    status = false,
    setTrackUpdate
  }) => {
    const [isPopupVisible, handlePopUp] = useState(false);
    const [formData, updateFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});
    const [success, setSuccess] = useState("");
    

    const [alertMessage, setAlertMessage] = useState({
      type: "",
      messageList: [],
    });

    const closePopUpHandler=()=>{
        setIsOpen(false)

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

    const handleAddNewPlan = (event) => {
      event.preventDefault();

      console.log("formData", formData);

      const { planName, payInCommission, payOutCommision} = formData;
      const errors = formValidation(formData);

      // /^[A-Za-z]{4}\d{7}$/.test('HDFC0001236')

      console.log("errors", errors, formData);

      if (!!errors && Object.keys(errors).length != 0) {
        setFormErrors(errors);
      } else {
        setFormErrors({});

        addNewPlanRequest(formData).then((res)=>{
             console.log("test",res)
            //  updateFormData(res)
             setTrackUpdate(res);
            
        })
        closePopUpHandler()

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
        <div className="modal-dialog" style={{width:'402px'}}  role="document">
          <div className="modal-content" style={{width:'402px'}}>
            <div className="modal-header flex justify-between item-center">
              <h5 className="modal-title" id="exampleModalLabel">
              Block Card Ranges
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
                <div className="gap  flex-wrap">
                    
                            <div className="mb16 col-6">
                                    <MaterialInput
                                        name="planName"
                                        type="select"
                                       // onChange={handleCommissionPlanChange}
                                        placeholder="Select Merchant"
                                       // value={commissionPlan.filter((item) => item.value === formData.ccode)}
                                        error={formErrors.planName}
                                        // options={commissionPlan}
                                    />
                                </div>
                                <div className="mb16 col-6">
                                    <MaterialInput
                                        name="planName"
                                        type="text"
                                       // onChange={handleCommissionPlanChange}
                                        placeholder="Card Range"
                                       // value={commissionPlan.filter((item) => item.value === formData.ccode)}
                                        error={formErrors.planName}
                                        // options={commissionPlan}
                                    />
                                </div>
                                <div className="mb16 col-6">
                                    <MaterialInput
                                        name="planName"
                                        type="select"
                                       // onChange={handleCommissionPlanChange}
                                        placeholder="Select Week"
                                       // value={commissionPlan.filter((item) => item.value === formData.ccode)}
                                        error={formErrors.planName}
                                        // options={commissionPlan}
                                    />
                                </div>

                      
                      
                      
                </div>
               <div className="flex space-between">
                <Text size="md" color="color15">Select Date & Time</Text>
                <div className="flex"> <Text size="md" color="color15">Always</Text>
                   <input type="checkbox"></input>
                </div>
               
               </div>
                
                 <div className="flex space-between">
                 <div className="mb16 col-6">
                                    <MaterialInput
                                        name="planName"
                                        type="Date"
                                       // onChange={handleCommissionPlanChange}
                                        placeholder="Start Date"
                                       // value={commissionPlan.filter((item) => item.value === formData.ccode)}
                                        error={formErrors.planName}
                                        // options={commissionPlan}
                                    />
                                </div>
                                <div className="mb16 col-6" >
                                    <MaterialInput
                                        name="planName"
                                        type="Date"
                                       // onChange={handleCommissionPlanChange}
                                        placeholder="End Date"
                                       // value={commissionPlan.filter((item) => item.value === formData.ccode)}
                                        error={formErrors.planName}
                                        // options={commissionPlan}
                                    />
                                </div>
                 </div>
                 <div className="flex space-between">
                  <div className="mb16 col-6">
                                    <MaterialInput
                                        name="planName"
                                        type="select"
                                       // onChange={handleCommissionPlanChange}
                                        placeholder="Start Time"
                                       // value={commissionPlan.filter((item) => item.value === formData.ccode)}
                                        error={formErrors.planName}
                                        // options={commissionPlan}
                                    />
                                </div>
                                <div className="mb16 col-6" style={{gap:"11px"}}>
                                    <MaterialInput
                                        name="planName"
                                        type="select"
                                       // onChange={handleCommissionPlanChange}
                                        placeholder="End Time"
                                       // value={commissionPlan.filter((item) => item.value === formData.ccode)}
                                        error={formErrors.planName}
                                        // options={commissionPlan}
                                    />
                                </div>
                 </div>





              </div>

              <div className="modal-footer justify-start">
              <ButtonSolid primary add_user onClick={handleAddNewPlan}>Add Plan</ButtonSolid>
              </div>
    
          </div>
        </div>
      </ModalWrapper>
    );
  }
);

export default BlockCardRangeModal;
