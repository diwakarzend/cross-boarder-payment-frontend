import React, { useState, useEffect } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { removeOverlay } from "../../utils/common";
import { Button, ModalWrapper } from "../../Components/UI/StyledConstants";
import MaterialInput from "../../Components/Common/Form";
import { Text, ButtonSolid } from "../../Components/styledConstants";
import IconMobile from "../../assests/images/Icons/IconMobile";
import { MerchantWrapper } from "./style";
import Tabs from "../../Components/Tabs";

const initialFormData = Object.freeze({
    address: "",
    dob: "",
    email: "",
    langKey: "en",
    otp: "",
    phoneNumber: "",
    pincode: "",
    role: "",
    tenantId: 0,
    userName: "",
    state: "",
    city: "",
    country: "",
    aadhaarName: "",
    aadhaarCard: "",
    panName: "",
    panNumber: "",
});

const AddMerchant = (props) => {
    const {
        editUserData,
        userToBeEdit,
        closePopUpHandler,
        fetchUsersData,
    } = props;
    const [formData, updateFormData] = useState(initialFormData);
    const [editFormData, updateEditFormData] = useState(initialFormData);
    const [errors, updateError] = useState([]);
    const [success, updateSuccess] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [date, setDate] = useState("");
    const [activeTab, setActiveTab] = useState('PAN_VERIFICATION');
    const [merchatCreated, setMerchatCreated] = useState(false);


    useEffect(() => {
        if (editUserData) {
            updateFormData({
                ...editUserData,
            });
        }
    }, [editUserData]);

    const handleChange = (event) => {
        updateFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        setFormErrors({ ...formErrors, [event.target.name]: "" });
    };

    const handleDateChange = (date) => {
        setDate(date);
        updateFormData({
            ...formData,
            ["dob"]: new Date(date),
        });
        setFormErrors({ ...formErrors, ["dob"]: "" });
    };

    const onTabClick = (tabValue) => {
        // if(tabValue === "PAN_VERIFICATION") {
        //     getListing(1);
        // }
        setActiveTab(tabValue);
    }

    const updateUser = () => {
        const api = new Request("", successHandler, errorHandler, false);
        return api.post(`${urls.login.BASE_URL}${urls.User.UPDATE_USER}`, formData);
    };

    const errorHandler = (error) => {
        // {"timestamp":"2021-09-18T06:25:35.505+00:00","status":401,"error":"Unauthorized","message":"","path":"/api/users"}
        const errors = [];
        if (error && error.status == 400) {
            if (error.fieldErrors && error.fieldErrors instanceof Array) {
                error.fieldErrors.forEach((item) =>
                    errors.push(`${item.field}: ${item.message}`)
                );
            }
            if (errors.length > 0) {
                updateError(errors);
                window.scrollTo(100, 100);
            }
        } else if (error && error.status == 401) {
            updateError([error.error]);
            window.scrollTo(100, 100);
        }
    };

    const successHandler = (data) => {
        if (!data.success) {
            updateError([data.msg]);
        } else {
            updateError([]);
            updateSuccess(data.msg);
            closePopUpHandler();
            removeOverlay();
            fetchUsersData();
        }
    };

    const submitFormHandler = (event) => {
        debugger
        event.preventDefault();

        if (editUserData) {
            updateUser();
        }

        // formData.userName = formData.phoneNumber;

        // pricingToken;

        const api = new Request("", successHandler, errorHandler, false);
        return api.post(urls.login.BASE_URL + urls.User.CREATE_NEW_USER, formData);
    };

    let errorHTML = "";
    let errorStyles = "";
    let successStyles = "";
    if (errors.length > 0) {
        errorHTML = errors.map((val) => <li key={val}>{val}</li>);
        errorStyles = {
            color: "red",
            fontSize: "14px",
            marginTop: "26px",
        };
    } else {
        successStyles = {
            color: "green",
            fontSize: "14px",
            marginTop: "26px",
        };
    }

    console.log("editUserData", editUserData);

    return (
        <MerchantWrapper>
            <div className="flex gap16 item-center heading-box">
                <Text color="color3" as="h2" className="border-r-dash pr10" size="xl">Add New Merchant</Text>
                <Text color="color3" size="md">Share your details and we will get back to you.</Text>
            </div>
            <div className="merchant-content">
                {/* <div className="modal-header">
                    <h4 className="modal-title">Add User</h4>
                    <button
                        type="button"
                        className="close close-btn"
                        onClick={closePopUpHandler}
                    >
                        <span aria-hidden="true"><i className="fa fa-times" aria-hidden="true"></i> Cancel </span>
                    </button>
                </div> */}
                <div className="merchant-body">
                    <div className="track-check">
                        <div className="box">
                            <div className="active">
                                <div className="check"></div>
                            </div>
                            <label>Personal Details</label>
                        </div>
                        <div className="border"></div>
                        <div className="box">
                            <div className="disabled">
                                <div className="check"></div>
                            </div>
                            <label>ID Verification</label>
                        </div>
                    </div>
                    {true && <form onSubmit={submitFormHandler}>
                        <div className="flex space-between">
                            <div className="mb16 col-6">
                                <MaterialInput
                                    wrapperClassName="userName"
                                    icon={<IconMobile />}
                                    maxLength="10"
                                    name="userName"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    value={formData?.userName}
                                    error={formErrors.userName}
                                />
                            </div>
                            <div className="mb16 col-6">
                                <MaterialInput
                                    wrapperClassName="phoneNumber"
                                    icon={<IconMobile />}
                                    maxLength="10"
                                    name="phoneNumber"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    value={formData?.phoneNumber}
                                    error={formErrors.phoneNumber}
                                />
                            </div>
                        </div>
                        <div className="flex space-between">
                            <div className="mb16 col-6">
                                <MaterialInput
                                    wrapperClassName="username"
                                    icon={<IconMobile />}
                                    name="dob"
                                    type="date"
                                    onChange={handleDateChange}
                                    placeholder="Date Of Birth"
                                    value={date}
                                    error={formErrors.dob}
                                />
                            </div>
                            <div className="mb16 col-6">
                                <MaterialInput
                                    wrapperClassName="username"
                                    icon={<IconMobile />}
                                    name="email"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="Email ID"
                                    value={formData?.email}
                                    error={formErrors.email}
                                />
                            </div>
                        </div>
                        <div className="flex space-between">
                            <div className="mb16 col-6">
                                <MaterialInput
                                    wrapperClassName="username"
                                    icon={<IconMobile />}
                                    name="address"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="Address"
                                    value={formData?.address}
                                    error={formErrors.address}
                                />
                            </div>
                            <div className="mb16 col-6">
                                <MaterialInput
                                    wrapperClassName="username"
                                    icon={<IconMobile />}
                                    name="State"
                                    type="select"
                                    onChange={handleChange}
                                    placeholder="State"
                                    value={formData?.state}
                                    error={formErrors.state}
                                />

                            </div>
                        </div>
                        <div className="flex space-between">
                            <div className="mb16 col-6">
                                <MaterialInput
                                    wrapperClassName="username"
                                    icon={<IconMobile />}
                                    name="city"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="City"
                                    value={formData?.city}
                                    error={formErrors.city}
                                />
                            </div>
                            <div className="mb16 col-6">
                                <MaterialInput
                                    wrapperClassName="username"
                                    icon={<IconMobile />}
                                    name="pincode"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="Pin Code"
                                    value={formData?.pincode}
                                    error={formErrors.pincode}
                                />
                            </div>
                        </div>
                        <div className="flex space-between">
                            <div className="col-6">
                                <MaterialInput
                                    wrapperClassName="username"
                                    icon={<IconMobile />}
                                    name="country"
                                    type="select"
                                    onChange={handleChange}
                                    placeholder="Country"
                                    value={formData?.country}
                                    error={formErrors.country}
                                />
                            </div>
                        </div>

                        <div className="flex">
                            <ButtonSolid primary xl className="mt30 col-6" type="submit">
                                Continue
                            </ButtonSolid>
                        </div>
                    </form>
                    }
                    {false &&
                        <>
                            <div className="tab-box">
                                <div className="box">
                                    <div className="icon"></div>
                                    <div className="label">
                                        <label>PAN Verification</label>
                                        <span>PAN can be verified online by filling out</span>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="icon"></div>
                                    <div className="label">
                                        <label>Aadhaar Verification</label>
                                        <span>Aadhaar can be verified online by filling out</span>
                                    </div>
                                </div>
                            </div>
                            {/* <Tabs onTabClick={onTabClick} activeTab={activeTab} tablist={[{ value: 'PAN_VERIFICATION', label: 'PAN Verification' }, { value: 'AADHAAR_VERIFICATION', label: 'Aadhaar Verification' }]} /> */}

                            <div className="">
                                {
                                    activeTab === 'PAN_VERIFICATION' &&
                                    <>
                                        <div className="card-heading">
                                            <Text as="h2" color="color3">PAN Verification</Text>
                                        </div>
                                        <div className="flex space-between">
                                            <div className="mb16 col-6">
                                                <MaterialInput
                                                    icon={<IconMobile />}
                                                    maxLength="10"
                                                    name="panName"
                                                    type="text"
                                                    onChange={handleChange}
                                                    placeholder="Name of the PAN holder"
                                                    value={formData?.userName}
                                                    error={formErrors.userName}
                                                />
                                            </div>
                                            <div className="mb16 col-6">
                                                <MaterialInput
                                                    icon={<IconMobile />}
                                                    maxLength="10"
                                                    name="panNumber"
                                                    type="text"
                                                    onChange={handleChange}
                                                    placeholder="PAN Number"
                                                    value={formData?.phoneNumber}
                                                    error={formErrors.phoneNumber}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <ButtonSolid primary xl className="mt30 col-6" type="submit">
                                                Continue
                                            </ButtonSolid>
                                        </div>
                                    </>
                                }
                                {
                                    activeTab === 'AADHAAR_VERIFICATION' &&
                                    <>
                                        <div className="card-heading">
                                            <Text as="h2" color="color3">Aadhaar Verification</Text>
                                        </div>
                                        <div className="flex space-between">
                                            <div className="mb16 col-6">
                                                <MaterialInput
                                                    icon={<IconMobile />}
                                                    maxLength="10"
                                                    name="aadhaarName"
                                                    type="text"
                                                    onChange={handleChange}
                                                    placeholder="Name of the Aadhaar holder"
                                                    value={formData?.aadhaarName}
                                                    error={formErrors.aadhaarName}
                                                />
                                            </div>
                                            <div className="mb16 col-6">
                                                <MaterialInput
                                                    icon={<IconMobile />}
                                                    maxLength="10"
                                                    name="aadhaarCard"
                                                    type="text"
                                                    onChange={handleChange}
                                                    placeholder="Aadhaar Number"
                                                    value={formData?.aadhaarCard}
                                                    error={formErrors.aadhaarCard}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <ButtonSolid primary xl className="mt30 col-6" type="submit">
                                                Continue
                                            </ButtonSolid>
                                        </div>
                                    </>
                                }
                            </div>
                        </>
                    }
                    {
                        merchatCreated &&
                        <div className="success-container">
                            <div className="border"></div>
                            <Text as="h2" color="color3">Successfully Account Created</Text>
                            <ButtonSolid primary xl className="mt30 col-6" type="submit">
                                Back To Merchant List
                            </ButtonSolid>
                        </div>
                    }
                </div>
            </div>
        </MerchantWrapper>
    );
};

export default AddMerchant;

