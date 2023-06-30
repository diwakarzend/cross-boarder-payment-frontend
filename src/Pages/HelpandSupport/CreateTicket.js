import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Heading, ButtonSolid, Text } from '../../Components/styledConstants';
import MaterialInput from '../../Components/Common/Form';
import { getCategory, getStatus, getPriority, getRequestType, createTicket } from '../../utils/api';
import { formValidation } from "../../utils/formValidation";
import { QuestionWrapper, SuccessWrapper } from './style';



export default function CreateTicket(props) {
    const initialFormData = {
        category: "",
        status: "",
        priority: "",
        requestType: "",
        requesterName: props?.location?.state || '',
        email: "",
        assignee: "",
        summary: "",
        description: "",
        remark: "",
    };
    console.log('ppp', props?.location?.state)
    const [category, setCategory] = useState([]);
    const [status, setStatus] = useState([]);
    const [priority, setPriority] = useState([]);
    const [requestType, setRequestType] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [formData, updateFormData] = useState(initialFormData);
    const [ticketCreated, setTicketCreated] = useState(false);
    const history = useHistory();

    const getCategoryRequest = () => {
        getCategory().then((res) => {
            if (res?.data?.data) {
                const categoryData = res?.data?.data.map((ele) => ({ label: ele.categoryName, value: ele.categoryName }))
                setCategory(categoryData);
            }
        }).catch((error) => {
            console.log(`Error in getting the category ${error}`)
        });
    };

    const getStatusRequest = () => {
        getStatus().then((res) => {
            if (res?.data?.data) {
                const statusData = res?.data?.data.map((ele) => ({ label: ele.statusName, value: ele.statusName }))
                setStatus(statusData);
            }
        }).catch((error) => {
            console.log(`Error in getting the status ${error}`)
        });
    };

    const getPriorityRequest = () => {
        getPriority().then((res) => {
            if (res?.data?.data) {
                const priorityData = res?.data?.data.map((ele) => ({ label: ele, value: ele }))
                setPriority(priorityData);
            }
        }).catch((error) => {
            console.log(`Error in getting the request type ${error}`)
        });
    };

    const getTypeRequest = () => {
        getRequestType().then((res) => {
            if (res?.data?.data) {
                const requestData = res?.data?.data.map((ele) => ({ label: ele, value: ele }))
                setRequestType(requestData);
            }
        }).catch((error) => {
            console.log(`Error in getting the priority ${error}`)
        });
    };

    useEffect(() => {
        getCategoryRequest();
        getStatusRequest();
        getPriorityRequest();
        getTypeRequest();
    }, [])

    const handleSelectChange = (option, e) => {
        updateFormData({
            ...formData,
            [e.name]: option.value,
        });
        setFormErrors({});
    };

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setFormErrors({});
    };

    const handleSubmit = () => {
        const errors = formValidation(formData);
        if (!!errors && Object.keys(errors).length != 0) {
            setFormErrors(errors);
            return;
        }
        const encodedData = encodeURIComponent(JSON.stringify(formData));
        createTicket(encodedData).then((res) => {
            if (res?.data?.message === 'SUCCESS') {
                setTicketCreated(true)
            }
        }).catch((error) => {
            console.log(`Error in creating the ticket ${error}`)
        });
    }

    return (
        <div className="wrapper">
            {!ticketCreated && <><Heading size="xl" color="color3">Create Ticket</Heading>
                <QuestionWrapper>
                    <div className="flex space-between">
                        <div className="mb20 col-6">
                            <MaterialInput
                                name="category"
                                type="select"
                                placeholder="Category"
                                onChange={(option, e) => handleSelectChange(option, e)}
                                value={category.filter((item) => item.value === formData.category)}
                                error={formErrors.category}
                                options={category}
                            />
                        </div>
                        <div className="mb20 col-6">
                            <MaterialInput
                                name="requestType"
                                type="select"
                                placeholder="Request Type"
                                onChange={(option, e) => handleSelectChange(option, e)}
                                value={requestType.filter((item) => item.value === formData.requestType)}
                                error={formErrors.requestType}
                                options={requestType}
                            />
                        </div>
                    </div>
                    <div className="flex space-between">
                        <div className="mb20 col-6">
                            <MaterialInput
                                name="requesterName"
                                type="text"
                                placeholder="Requester Name"
                                onChange={handleChange}
                                value={formData.requesterName}
                                error={formErrors.requesterName}
                            />
                        </div>
                        <div className="mb20 col-6">
                            <MaterialInput
                                name="email"
                                type="text"
                                placeholder="Email ID"
                                error={formErrors.email}
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex space-between">
                        <div className="mb20 col-6">
                            <MaterialInput
                                name="assignee"
                                type="text"
                                placeholder="Select Assignee"
                                value={formData.assignee}
                                error={formErrors.assignee}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb20 col-6">
                            <MaterialInput
                                name="priority"
                                type="select"
                                placeholder="Priority"
                                onChange={(option, e) => handleSelectChange(option, e)}
                                value={priority.filter((item) => item.value === formData.priority)}
                                error={formErrors.priority}
                                options={priority}
                            />
                        </div>
                    </div>
                    <div className="flex space-between">
                        <div className="mb20 col-12">
                            <MaterialInput
                                name="summary"
                                type="text"
                                placeholder="Summary"
                                value={formData.summary}
                                error={formErrors.summary}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex space-between">
                        <div className="mb20 col-6">
                            <MaterialInput
                                name="description"
                                type="text"
                                placeholder="Description"
                                value={formData.description}
                                error={formErrors.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb20 col-6">
                            <MaterialInput
                                name="remark"
                                type="text"
                                placeholder="Remark"
                                value={formData.remark}
                                error={formErrors.remark}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex space-between">
                        <div className="mb20 col-6">
                            <MaterialInput
                                name="status"
                                type="select"
                                placeholder="Ticket Status"
                                onChange={(option, e) => handleSelectChange(option, e)}
                                value={status.filter((item) => item.value === formData.status)}
                                error={formErrors.status}
                                options={status}
                            />
                        </div>
                        {/* <div className="mb20 col-6">
                        <MaterialInput
                            name="lastName"
                            type="upload"
                            placeholder="Image"
                        />
                    </div> */}
                    </div>
                    <div className="btn-box">
                        <ButtonSolid primary xl className="mt30 full-width" type="button" onClick={handleSubmit}>
                            Submit
                        </ButtonSolid>
                    </div>
                </QuestionWrapper>
            </>
            }
            {
                ticketCreated &&
                <SuccessWrapper>
                    <div className="border"></div>
                    <Text as="h2" color="color3">Successfully Ticket Created</Text>
                    <ButtonSolid primary xl className="mt30 col-6" onClick={() => history.push('/ticket-list')}>
                        Back To Ticket List
                    </ButtonSolid>
                </SuccessWrapper>
            }
        </div>
    )
}