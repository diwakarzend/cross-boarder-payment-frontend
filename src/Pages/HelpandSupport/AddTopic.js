import React from 'react';
import { Heading, ButtonSolid } from '../../Components/styledConstants';
import MaterialInput from '../../Components/Common/Form';
import {TopicWrapper} from './style';

export default function AddNewTopic() {
    return (
        <div className="wrapper">
            <Heading size="xl" color="color3">Add New Topic</Heading>
            <TopicWrapper>
                <MaterialInput
                    name="topic"
                    type="text"
                    placeholder="Type New Topic"
                />
                <div className="btn-box">
                    <ButtonSolid primary xl className="mt30 full-width" type="button">
                        Submit
                    </ButtonSolid>
                </div>
            </TopicWrapper>
        </div>
    )
}