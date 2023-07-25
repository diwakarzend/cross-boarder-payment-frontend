import React, { useState, memo, useEffect } from "react";
import Request from "../../utils/Request";
import { formValidation } from "../../utils/formValidation";

import urls from "../../utils/urls";
import { removeOverlay ,getAuthToken} from "../../utils/common";
import "./AddNewPlanForm.css";
import {
  AlertWrapper,
  BorderBtn,
  Button,
  ModalWrapper,

} from "../../Components/UI/StyledConstants";
import {ButtonSolid } from "../../Components/styledConstants"
import { AlertMessage } from "../../Components/UI/AlertMessage";
import ErrorMessage from "../../Components/UI/ErrorMessage";
import MaterialInput from "../../Components/Common/Form";
import { editMerchantCommissionPlan } from "../../utils/api";

const initialFormData = Object.freeze({
 
    plan:{ planName:"",
  payIn:"",
  payOut:""}
});

const EditMerchantCommissionForm = memo(
  ({
    setIsOpen,
    // setStatus,
    editUserData,
    status = false,
    updatemerchant,
    setEditData,
    setTrackUpdate
  }) => {
    const [isPopupVisible, handlePopUp] = useState(false);
    const [formData, updateFormData] = useState();
    const [formErrors, setFormErrors] = useState({});
    const [success, setSuccess] = useState("");
    const [commissionPlan,setCommissionPlan] = useState([])
  
    

    const [alertMessage, setAlertMessage] = useState({
      type: "",
      messageList: [],
    });

    useEffect(() =>{
        const newObj = {
            userUuid:updatemerchant.userUuid,
            ccode:updatemerchant.plan?.ccode,
            name:updatemerchant.name,
            planName:updatemerchant?.plan?.planName
        }

        updateFormData(newObj)
    },[])

    const closePopUpHandler=()=>{
        setIsOpen(false)

    }
     
    const handleChange = (event) => {
      updateFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
    console.log("formData", formData);

    const handleEditPlan = (event) => {
      event.preventDefault();

      console.log("formData", formData);

      const {planName, payInCommission, payOutCommision} = formData;
      const errors = formValidation(formData);

      // /^[A-Za-z]{4}\d{7}$/.test('HDFC0001236')

      console.log("errors", errors, formData);

      if (!!errors && Object.keys(errors).length != 0) {
        setFormErrors(errors);
      } else {
        setFormErrors({});

  const   editmerchant = {
        userUuid: formData.userUuid,
        ccode:formData.ccode
    }

        editMerchantCommissionPlan(editmerchant.userUuid ,editmerchant.ccode).then((res)=>{
          setEditData(res)
          console.log("edit",res)
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
    const handleCommissionPlanChange =(option)=>{
        updateFormData({
            ...formData,
            ccode: option.value,
        });

       console.log(formData);
    }
    const newData = [];
    const getCommissionPlans = () => {
        const successHandler = (res) => {
            
            if (res.data && res.data.content) {
                res.data.content.map((val) =>{
                   const newObj = {
                    label:val.planName,
                    value:val.ccode
                   }
                   newData.push(newObj)
                })
                setCommissionPlan([...newData]);
               
                //  console.log("plannee",commissionPlan)
            }
        };
        const options = {
            headers: {
                Authorization: getAuthToken(),
                "api-Authorization": getAuthToken("api-Authorization"),
            },
        };
        
        const api = new Request("", successHandler, false);
        return api.get(`${urls.login.BASE_URL}${urls.commission.GET_COMMISSION_PLAN}?pageNo=${1}&pageSize=${100}`,options);
        // return api.post(`${Config.apis.admin.USER_LIST}?pageNo=${currentPage}&pageSize=${pageSize}`, params);
    };

    console.log("test",commissionPlan)
    useEffect(()=>{
           getCommissionPlans();
    },[])
    return (
      <ModalWrapper>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header flex justify-between item-center">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit New Plan
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
                <div className="flex gap  flex-wrap">
                <div className="mb16">
                          <MaterialInput
                          className="form-input"
                            wrapperClassName="MerchantName"
                            maxLength="10"
                            name="planName"
                            type="text"
                            placeholder="Merchant Name"
                          //  onChange ={handleChange}
                            value={formData?.name}
                            error={formErrors.planName}
                          />
                        </div>
                    
                        <div className="mb16 col-6">
                                    <MaterialInput
                                        name="planName"
                                        type="select"
                                        onChange={handleCommissionPlanChange}
                                        placeholder="Commission Plan"
                                        value={commissionPlan.filter((item) => item.value === formData.ccode)}
                                        error={formErrors.planName}
                                        options={commissionPlan}
                                    />
                                </div>
                </div>
              </div>

              <div className="modal-footer justify-start">
              <ButtonSolid primary add_user onClick={handleEditPlan}>Edit Plan</ButtonSolid>
              </div>
    
          </div>
        </div>
      </ModalWrapper>
    );
  }
);

export default EditMerchantCommissionForm;
