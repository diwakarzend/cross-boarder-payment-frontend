import React from 'react';
import { isEmpty } from '../../../utils/common';
import { AlertWrapper } from '../StyledConstants';

export const AlertMessage = ({alertMessage}) => {
    const {type = '', messageList = []} = alertMessage;
    return(
        <>
            {
                !isEmpty(messageList) 
                ? <AlertWrapper className={`alert alert-${type}`}>
                    {
                        <ul>
                            {messageList.map((val) => <li key={val}>{val}</li>)}
                        </ul> 
                    }
                </AlertWrapper>
                : <></>

            }
        </>
        
    )
}