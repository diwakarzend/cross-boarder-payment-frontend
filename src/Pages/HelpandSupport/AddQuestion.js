import React from 'react';
import { Heading, ButtonSolid } from '../../Components/styledConstants';
import MaterialInput from '../../Components/Common/Form';
import { QuestionWrapper } from './style';

export default function AddNewQuestion() {
    return (
        <div className="wrapper">
            <Heading size="xl" color="color3">Add New Questions</Heading>
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
                            type="select"
                            placeholder="Select Topic"
                        />
                    </div>
                </div>
                <div className="flex space-between">
                    <div className="mb20 col-6">
                        <MaterialInput
                            name="firstName"
                            type="select"
                            placeholder="Select User Type"
                        />
                    </div>
                </div>
                <div className="flex space-between">
                    <div className="mb20 col-6">
                        <MaterialInput
                            name="firstName"
                            type="text"
                            placeholder="Question"
                        />
                    </div>
                    <div className="mb20 col-6">
                        <MaterialInput
                            name="lastName"
                            type="text"
                            placeholder="Answer"
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