import React from 'react';
import { ButtonSolid, Heading } from '../../Components/styledConstants';
import Logo from '../../assests/images/Icons/IconLogo'
import { ChatWrapper } from "./style";

export default function Chat() {
    return (
        <div className="wrapper">
            <Heading size="xl" color="color3" className='mb20'>Ticket Chat Details</Heading>
            <ChatWrapper>
                <div className='left'>
                    <ul>
                        <li>
                            <span>Ticket ID</span>
                            <span className='detail'>P2P343</span>
                        </li>
                        <li>
                            <span>Name</span>
                            <span className='detail'>Manoj Kumar</span>
                        </li>
                        <li>
                            <span>Mobile No.</span>
                            <span className='detail'>9898989898</span>
                        </li>
                        <li>
                            <span>Ticket Date</span>
                            <span className='detail'>07 Apr 2023 | 10:50AM</span>
                        </li>
                        <li>
                            <span>Issue Category</span>
                            <span className='detail'>KYC</span>
                        </li>
                        <li>
                            <span>Request Type</span>
                            <span className='detail'>Issue</span>
                        </li>
                        <li>
                            <span>Discription</span>
                            <span className='detail'>if your money is deducted from your bank account for a failed payment, there is no need to worry as you money is absolutely safe with bank.</span>
                        </li>
                        <li>
                            <span>Issue Status</span>
                            <span>
                                <select>
                                    <option>Open</option>
                                    <option>Close</option>
                                </select>
                            </span>
                        </li>
                        <li>
                            <span>Last Update</span>
                            <span className='detail'>07 Apr 2023</span>
                        </li>
                        <li>
                            <span>Action</span>
                            <span>
                                <select>
                                    <option>Open</option>
                                    <option className='detail'>Close</option>
                                </select>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='right'>
                    <ul>
                        <li className='receiver'><span>Hi! How can I help you? </span><Logo /></li>
                        <li className='sender'><img src='../../images/userimg.png' /><span>I cannot see my balance and history after logging in</span></li>
                        <li className='receiver'><span>Don't worry! This may be due to some technical issues on the our end</span><Logo /></li>
                    </ul>
                    <div className='chat-box'>
                    <textarea></textarea>
                    <ButtonSolid primary rg>Submit</ButtonSolid>
                </div>
                </div>
                
            </ChatWrapper>
        </div>
    )
}