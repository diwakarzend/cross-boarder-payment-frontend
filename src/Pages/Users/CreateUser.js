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

const AddMerchant = () => {
    const [formData, updateFormData] = useState(initialFormData);
    const [errors, updateError] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [date, setDate] = useState("");
    const [merchatCreated, setMerchatCreated] = useState(false);
    const [isIdVerificationActive, setisIdVerificationActive] = useState(false)
    const [stateData, setStateData] = useState([]);
    const [cityLists, setCityLists] = useState([]);
    const [roles, setRoles] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const idVerificatonRole = ['PTM_MERCHANT', 'PTM_AGENT']
        if (idVerificatonRole.includes(formData.role)) {
            setisIdVerificationActive(true)
        } else {
            setisIdVerificationActive(false)
        }
    }, [formData.role])

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
        setFormErrors({});
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

    const handleSubmit = () => {
        let requiredFormData;
        if (isIdVerificationActive) {
            requiredFormData = _.omit(formData, ['aadhaarName', 'panName']);
        } else {
            requiredFormData = _.omit(formData, ['aadhaarName', 'aadhaarNumber', 'panName', 'panNumber']);
        }
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

        const api = new Request("", successHandler, errorHandler, false);
        return api.post(`${urls.login.BASE_URL}${urls.User.CREATE_NEW_USER}`, requiredFormData);
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
            {!merchatCreated && <div className="flex gap16 item-center heading-box">
                <Text color="color3" as="h2" className="border-r-dash pr10" size="xl" fw="bold">Add New User</Text>
                <Text color="color3" size="md">Share your details and we will get back to you.</Text>
            </div> }
            <div className="merchant-content">
                <div className="merchant-body">
                    {!merchatCreated && <>
                        <div className="track-check">
                        <Text color="color3" as="h2" className="pr10" size="rg" fw="bold">Personal Details</Text>
                    </div>
                    <div className="flex space-between">
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
                    </>
                    }
                    {!merchatCreated && isIdVerificationActive &&
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
                                        value={formData?.panName}
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
                        </>
                    }
                    {!merchatCreated && <div className="flex">
                        <ButtonSolid primary xl className="mt30 col-6" onClick={handleSubmit}>
                            Continue
                        </ButtonSolid>
                    </div>}
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

