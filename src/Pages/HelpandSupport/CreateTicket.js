import React from 'react';
import { Heading, ButtonSolid } from '../../Components/styledConstants';
import MaterialInput from '../../Components/Common/Form';
import { QuestionWrapper } from './style';

export default function CreateTicket() {
    return (
        <div className="wrapper">
            <Heading size="xl" color="color3">Create Ticket</Heading>
            <QuestionWrapper>
                <div className="flex space-between">
                    <div className="mb20 col-6">
                        <MaterialInput
                            name="firstName"
                            type="select"
                            placeholder="Category"
                        />
                    </div>
                    <div className="mb20 col-6">
                        <MaterialInput
                            name="lastName"
                            type="text"
                            placeholder="Request Type"
                        />
                    </div>
                </div>
                <div className="flex space-between">
                    <div className="mb20 col-6">
                        <MaterialInput
                            name="firstName"
                            type="text"
                            placeholder="Requester Name"
                        />
                    </div>
                    <div className="mb20 col-6">
                        <MaterialInput
                            name="lastName"
                            type="text"
                            placeholder="Email ID"
                        />
                    </div>
                </div>
                <div className="flex space-between">
                    <div className="mb20 col-6">
                        <MaterialInput
                            name="firstName"
                            type="text"
                            placeholder="Select Assignee"
                        />
                    </div>
                    <div className="mb20 col-6">
                        <MaterialInput
                            name="lastName"
                            type="text"
                            placeholder="Priority"
                        />
                    </div>
                </div>
                <div className="flex space-between">
                    <div className="mb20 col-12">
                        <MaterialInput
                            name="firstName"
                            type="text"
                            placeholder="Summary"
                        />
                    </div>
                </div>
                <div className="flex space-between">
                    <div className="mb20 col-6">
                        <MaterialInput
                            name="firstName"
                            type="text"
                            placeholder="Description"
                        />
                    </div>
                    <div className="mb20 col-6">
                        <MaterialInput
                            name="lastName"
                            type="text"
                            placeholder="Remark"
                        />
                    </div>
                </div>
                <div className="flex space-between">
                    <div className="mb20 col-6">
                        <MaterialInput
                            name="firstName"
                            type="select"
                            placeholder="Ticket Status"
                        />
                    </div>
                    <div className="mb20 col-6">
                        <MaterialInput
                            name="lastName"
                            type="upload"
                            placeholder="Image"
                        />
                    </div>
                </div>
                <div className="btn-box">
                    <ButtonSolid primary xl className="mt30 full-width" type="button">
                        Submit
                    </ButtonSolid>
                </div>
            </QuestionWrapper>
        </div>
    )
}