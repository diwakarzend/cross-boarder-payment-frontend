import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { removeOverlay, getAuthToken } from "../../utils/common";
import { Button, ModalWrapper } from "../../Components/UI/StyledConstants";
import MaterialInput from "../../Components/Common/Form";
import { Text, ButtonSolid } from "../../Components/styledConstants";
import IconMobile from "../../assests/images/Icons/IconMobile";
import { MerchantWrapper } from "./style";
import Tabs from "../../Components/Tabs";
import { formValidation } from "../../utils/formValidation";


const initialFormData = Object.freeze({
    userName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    dob: "",
    email: "",
    address1: "",
    state: "",
    city: "",
    pincode: "",
    country: "India",
    langKey: "en",
    role: "",
    aadhaarName: "",
    aadhaarNumber: "",
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
    const [isPersonalDetailActive, setIsPersonalDetailActive] = useState(true)
    const [isIdVerificationActive, setisIdVerificationActive] = useState(true)
    const [stateData, setStateData] = useState([]);
    const [cityLists, setCityLists] = useState([]);
    const [roles, setRoles] = useState([]);
    const history = useHistory();


    useEffect(() => {
        if (editUserData) {
            updateFormData({
                ...editUserData,
            });
        }
    }, [editUserData]);

    const fetchState = () => {
        const successHandler = ({ state, roles }) => {

            setStateData(state);
            setRoles(roles)
        };

        const options = {
            headers: {
                Authorization: getAuthToken(),
                "api-Authorization": getAuthToken("api-Authorization"),
            },
        };

        const promise1 = axios
            .get(`${urls.login.BASE_URL}${urls.User.GET_STATE}`, options)
            .catch(() => "");

        const promise2 = axios
            .get(
                `${urls.login.BASE_URL}${urls.User.GET_ROLE}`, options)
            .catch(() => "");

        axios
            .all([promise1, promise2])
            .then(
                axios.spread((...responses) => {
                    setStateData(responses)
                    console.log('rr', responses)
                    const state = responses[0] && responses[0].data.data;
                    const roles = responses[1] && responses[1].data.data;

                    successHandler({
                        state,
                        roles,
                    });
                })
            )
            .catch((errors) => {
                console.log("responseOne errors", errors);
            });
    };

    useEffect(() => {
        fetchState();
    }, []);

    const handleChange = (event) => {
        const re = /^[0-9\b]+$/;
        const onlyAlphabets = /^[A-Za-z\s]*$/;
        if (event.target.name == "phoneNumber") {
            if (event.target.value === "" || re.test(event.target.value)) {
                updateFormData({
                    ...formData,
                    [event.target.name]: event.target.value,
                });
            }
        } else if (event.target.name == "firstName" || event.target.name == "lastName") {
            if (event.target.value === "" || onlyAlphabets.test(event.target.value)) {
                updateFormData({
                    ...formData,
                    [event.target.name]: event.target.value,
                });
            }
        } else {
            updateFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
        }
        setFormErrors({ ...formErrors, [event.target.name]: "" });
    };

    const handleDateChange = (date) => {
        setDate(date);
        updateFormData({
            ...formData,
            ["dob"]: moment(date).format('YYYY-MM-DD'),
        });
        setFormErrors({ ...formErrors, ["dob"]: "" });
    };

    const updateUser = () => {
        const api = new Request("", successHandler, errorHandler, false);
        return api.post(`${urls.login.BASE_URL}${urls.User.UPDATE_USER}`, formData);
    };

    const errorHandler = (error) => {
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

    const handlePersonalDetails = () => {
        setIsPersonalDetailActive(false);
        setisIdVerificationActive(true)
    }

    const handleSubmit = () => {
        var requiredFormData = _.omit(formData, ['aadhaarName', 'panName']);
        const errors = formValidation(requiredFormData);
        if (!!errors && Object.keys(errors).length != 0) {
            setFormErrors(errors);
            return;
        }
        const successHandler = (res) => {
            if (res) {
                setisIdVerificationActive(false)
                setMerchatCreated(true)
            }
        }

        const errorHandler = () => { };
        var payload = _.omit(formData, ['aadhaarName', 'panName']);


        const api = new Request("", successHandler, errorHandler, false);
        return api.post(`${urls.login.BASE_URL}${urls.User.CREATE_NEW_USER}`, payload);
    }

    const stateOptions = [];
    stateData.map((state) => {
        stateOptions.push({ label: state.stateName, value: state.stateCode, id: state.stateId });
    })

    const handleRoleChange = (option) => {
        updateFormData({
            ...formData,
            ["role"]: option.value,
        });
    };

    const handleStateChange = (option) => {
        updateFormData({
            ...formData,
            ["state"]: option.value,
        });
        getCity(option.id);
    };

    const getCity = (stateid) => {
        const successHandler = (res) => {
            if (res) {
                let cities = [];
                if (res.data) {
                    res.data.forEach((element) => {
                        let obj = {};
                        obj["label"] = element.cityName;
                        obj["value"] = element.cityCode;
                        cities.push(obj);
                    });
                }
                setCityLists(cities);
            }
        };
        const errorHandler = () => { };

        const api = new Request("", successHandler, errorHandler, false);
        return api.get(`${urls.login.BASE_URL}${urls.User.GET_CITY}/${stateid}`);
    };

    const handleCityChange = (option) => {
        updateFormData({
            ...formData,
            ["city"]: option.value,
        });
    }
    return (
        <MerchantWrapper>
            <div className="flex gap16 item-center heading-box">
                <Text color="color3" as="h2" className="border-r-dash pr10" size="xl" fw="bold">Add New User</Text>
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
                        <Text color="color3" as="h2" className="pr10" size="rg" fw="bold">Personal Details</Text>
                        {/* <div className="box">
                            <div className={isIdVerificationActive ? "active" : "disabled"}>
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
                        </div> */}
                    </div>
                    {isPersonalDetailActive && <><div className="flex space-between">
                        <div className="mb16 col-6">
                            <MaterialInput
                                name="role"
                                type="select"
                                onChange={handleRoleChange}
                                placeholder="Select role"
                                value={roles.filter((item) => item.value === formData.role)}
                                error={formErrors.role}
                                options={roles}
                            />
                        </div>
                    </div>

                        <div className="flex space-between">
                            <div className="mb16 col-6">
                                <MaterialInput
                                    name="firstName"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    value={formData?.firstName}
                                    error={formErrors.firstName}
                                />
                            </div>
                            <div className="mb16 col-6">
                                <MaterialInput
                                    name="lastName"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    value={formData?.lastName}
                                    error={formErrors.lastName}
                                />
                            </div>
                        </div>
                        <div className="flex space-between">
                            <div className="mb16 col-6">
                                <MaterialInput
                                    name="userName"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="User Name"
                                    value={formData?.userName}
                                    error={formErrors.userName}
                                />
                            </div>
                            <div className="mb16 col-6">
                                <MaterialInput
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    value={formData?.password}
                                    error={formErrors.password}
                                />
                            </div>
                        </div>
                        <div className="flex space-between">
                            <div className="mb16 col-6">
                                <MaterialInput
                                    name="dob"
                                    type="date"
                                    onChange={handleDateChange}
                                    placeholder="Date Of Birth"
                                    value={date}
                                    error={formErrors.dob}
                                    showMonthDropdown
                                    showYearDropdown
                                    peekNextMonth
                                    dropdownMode="select"
                                />
                            </div>
                            <div className="mb16 col-6">
                                <MaterialInput
                                    wrapperClassName="username"
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
                                    maxLength="10"
                                    name="phoneNumber"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    value={formData?.phoneNumber}
                                    error={formErrors.phoneNumber}
                                />

                            </div>
                            <div className="mb16 col-6">
                                <MaterialInput
                                    wrapperClassName="username"
                                    name="address1"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="Address"
                                    value={formData?.address1}
                                    error={formErrors.address1}
                                />

                            </div>
                        </div>
                        <div className="flex space-between">
                            <div className="mb16 col-6">
                                <MaterialInput
                                    name="State"
                                    type="select"
                                    onChange={handleStateChange}
                                    placeholder="State"
                                    value={stateOptions.filter((item) => item.value === formData.state)}
                                    options={stateOptions}
                                    error={formErrors.state}
                                />

                            </div>
                            <div className="mb16 col-6">
                                <MaterialInput
                                    name="city"
                                    type="select"
                                    onChange={handleCityChange}
                                    placeholder="City"
                                    value={cityLists.filter((item) => item.value === formData.city)}
                                    error={formErrors.city}
                                    options={cityLists}
                                />

                            </div>
                        </div>
                        <div className="flex space-between">
                            <div className="col-6">
                                <MaterialInput
                                    name="pincode"
                                    maxLength="6"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="Pin Code"
                                    value={formData?.pincode}
                                    error={formErrors.pincode}
                                />

                            </div>
                            <div className="mb16 col-6">
                                <MaterialInput
                                    name="country"
                                    type="text"
                                    placeholder="Country"
                                    value={formData?.country}
                                    error={formErrors.country}
                                />

                            </div>
                        </div>

                        {/* <div className="flex">
                            <ButtonSolid primary xl className="mt30 col-6" onClick={handlePersonalDetails}>
                                Continue
                            </ButtonSolid>
                        </div> */}
                    </>
                    }
                    {isIdVerificationActive &&
                        <>
                            <div className="track-check">
                                <Text color="color3" as="h2" className="pr10" size="rg" fw="bold">ID Verification</Text>
                            </div>
                            <div className="flex space-between">
                                <div className="mb16 col-6">
                                    <MaterialInput

                                        name="panName"
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="Name of the PAN holder"
                                        error={formErrors.panName}
                                    />
                                </div>
                                <div className="mb16 col-6">
                                    <MaterialInput

                                        name="panNumber"
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="PAN Number"
                                        value={formData?.panNumber}
                                        error={formErrors.panNumber}
                                    />
                                </div>
                            </div>
                            <div className="flex space-between">
                                <div className="mb16 col-6">
                                    <MaterialInput

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

                                        name="aadhaarNumber"
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="Aadhaar Number"
                                        value={formData?.aadhaarNumber}
                                        error={formErrors.aadhaarNumber}
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <ButtonSolid primary xl className="mt30 col-6" onClick={handleSubmit}>
                                    Continue
                                </ButtonSolid>
                            </div>
                            {/* <div className="tab-box">
                                <div className={`box ${activeTab === 'PAN_VERIFICATION' ? 'active' : ''}`}>
                                    <div className="icon"></div>
                                    <div className="label">
                                        <label>PAN Verification</label>
                                        <span>PAN can be verified online by filling out</span>
                                    </div>
                                </div>

                                <div className={`box ${activeTab === 'AADHAAR_VERIFICATION' ? 'active' : ''}`}>
                                    <div className="icon"></div>
                                    <div className="label">
                                        <label>Aadhaar Verification</label>
                                        <span>Aadhaar can be verified online by filling out</span>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="">
                                {
                                    activeTab === 'PAN_VERIFICATION' &&
                                    <>
                                        <div className="card-heading">
                                            <Text as="h2" color="color3">PAN Verification</Text>
                                        </div>
                                        <div className="flex space-between">
                                            <div className="mb16 col-6">
                                                <MaterialInput
                
                                                    name="panName"
                                                    type="text"
                                                    onChange={handleChange}
                                                    placeholder="Name of the PAN holder"
                                                    error={formErrors.panName}
                                                />
                                            </div>
                                            <div className="mb16 col-6">
                                                <MaterialInput
                
                                                    name="panNumber"
                                                    type="text"
                                                    onChange={handleChange}
                                                    placeholder="PAN Number"
                                                    value={formData?.panNumber}
                                                    error={formErrors.panNumber}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <ButtonSolid primary xl className="mt30 col-6" onClick={() => setActiveTab('AADHAAR_VERIFICATION')}>
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
                
                                                    name="aadhaarNumber"
                                                    type="text"
                                                    onChange={handleChange}
                                                    placeholder="Aadhaar Number"
                                                    value={formData?.aadhaarNumber}
                                                    error={formErrors.aadhaarNumber}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <ButtonSolid primary xl className="mt30 col-6" onClick={handleSubmit}>
                                                Continue
                                            </ButtonSolid>
                                        </div>
                                    </>
                                }
                            </div> */}
                        </>
                    }
                    {
                        merchatCreated &&
                        <div className="success-container">
                            <div className="border"></div>
                            <Text as="h2" color="color3">Successfully Account Created</Text>
                            <ButtonSolid primary xl className="mt30 col-6" onClick={() => history.push('/users-list')}>
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

