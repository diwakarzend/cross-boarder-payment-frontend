import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { initPtpBankDtoObj, entityOptions, statusOptions } from './constants';
import { Button, ModalWrapper } from '../../Components/UI/StyledConstants';
import { AddBankEntityWrapper } from './style';
import { AddBankEntityRequest } from '../../utils/api';
import { isEmpty } from '../../utils/common';

export default function AddBankEntityModal({setModal, modalData = null}) {
    const [controls, setControls] = useState({...initPtpBankDtoObj});
    const [submitted, setSubmitted] = useState(false);
    const userData = useSelector((state) => state?.login?.userData);
    const changeHandler = (e) => {
        const {name, value} = e.target;
        const _controls = JSON.parse(JSON.stringify(controls));
        if(value === 'true') {
            _controls[name] = true;
        } else if(value === 'false') {
            _controls[name] = false;
        } else {
            _controls[name] = value;
        }
        setControls(_controls);
    }

    const validateForm = () => {
      let valid = true;
      Object.keys(controls).forEach((key, i) => {
        console.log("isEmpty(controls[key]) = ", isEmpty(controls[key]), key)
        if(['bankName', 'entityName'].includes(key) && isEmpty(controls[key])) {
          valid = false;
        }
      })
      return valid;
    }

    const onBankEntitySubmit = () => {
      setSubmitted(true);
      const _controls = JSON.parse(JSON.stringify(controls));
      _controls.userUUID = userData?.uuid;
      _controls.phone = userData?.userName;
      _controls.vpaId = userData?.userName;
      if(validateForm()) {
        AddBankEntityRequest([_controls], !isEmpty(modalData)).then(res => {
          console.log("res = ", res);
          if(res?.data?.success) {
            setModal({status: false, modalData: null});
            setSubmitted(false);
          }
        });
      } 
    }

    useEffect(() => {
      if(!isEmpty(modalData)) {
        setControls(modalData);
      }
    }, [modalData])

    console.log("controls = ", controls);

    return(
        <ModalWrapper>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className='modal-title'>Add Bank Entity</h4>
                <button
                  type="button"
                  className="close close-btn"
                  onClick={() => setModal({status: false, modalData: null})}
                >
                  <span aria-hidden="true"><i className="fa fa-times" aria-hidden="true"></i> Cancel </span>
            </button>
              </div>
              <div className="modal-body">
                <AddBankEntityWrapper>
                <div className="floating-label-group inputgroup">
                    <div className="floating-label-input">
                  <input 
                  className={controls.bankName !== "" ? "form-control has-value" : "form-control"}
                    name="bankName" 
                    type='text' 
                    value={controls.bankName} 
                    onChange={(e) => changeHandler(e)} 
                    />
                  <label className='label'>Bank Name</label>
                  {submitted && isEmpty(controls.bankName) &&
                    <div className='form-error'>Bank name field is required</div> 
                  }
                   </div>
                  </div>
                  <div className="floating-label-group inputgroup">
                    <div className="floating-label-input">
                    <input 
                      className={controls.entityName !== "" ? "form-control has-value" : "form-control"}
                      name="entityName" 
                      type='text' 
                      value={controls.entityName} 
                      onChange={changeHandler}
                    />
                    <label className='label'>Bank Entity Name</label>
                    {submitted && isEmpty(controls.entityName) &&
                      <div className='form-error'>Bank entity name field is required</div> 
                    }
                    </div>
                  </div>
                  <div className="floating-label-group inputgroup">
                    <div className="floating-label-input">
                    <select
                        name="isActive"
                        className={controls.isActive !== "" ? "form-control has-value" : "form-control"}
                        value={controls.isActive}
                        onChange={changeHandler}
                    >
                        <option value="">Select Status</option>
                        {statusOptions.map((option, i) => 
                            <option key={i} value={option.value}>{option.label}</option>
                        )}
                    </select>
                    <label className='label'>Status</label>
                    </div>
                  </div>
                  <div className="flex item-center justify-center gap16">
                    <Button className="btn-success wd248" onClick={onBankEntitySubmit}>Submit</Button>
                  </div>
                </AddBankEntityWrapper>
              </div>
            </div>
          </div>

        </ModalWrapper>
    )
}