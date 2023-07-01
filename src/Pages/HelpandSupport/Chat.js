import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { ButtonSolid, Heading } from '../../Components/styledConstants';
import Logo from '../../assests/images/Icons/IconLogo'
import { getChatMessage, sendChatMessage } from '../../utils/api';
import { ChatWrapper } from "./style";

export default function Chat(props) {
    const [chat, setChat] = useState([]);
    const [message, setMessage] = useState('');
    const userData = useSelector((state) => state?.login?.userData);

    const getChatMessageRequest = () => {
        getChatMessage().then((res) => {
            if (res?.data?.data) {
                setChat(res?.data?.data?.content);
            }
        }).catch((error) => {
            console.log(`Error in getting the chat message ${error}`)
        });
    };

    useEffect(() => {
        const timer = setInterval(() => {
            getChatMessageRequest();
        }, 3000)
        return () => {
            clearInterval(timer);
        }
    }, [])

    const sendChatMessageRequest = (e) => {
        e.preventDefault();
        const form = document.querySelector('.form');
        var formData = new FormData(form);
        formData.append("from", userData?.uuid);
        // formData.append("to", "0b0fb4ea-55c7-4af2-9622-2035c6956996");
        formData.append("to", props?.location?.state?.assignee);
        formData.append("message", message);
        sendChatMessage(formData).then((res) => {
            if (res?.data?.code === '0000') {
                setMessage('');
            }
        }).catch((error) => {
            console.log(`Error in getting the chat message ${error}`)
        });
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
        if (event.keyCode == 13 && event.shiftKey == false) {
            sendChatMessageRequest(event);
            scrollToBottom()
        }
    }

    useEffect(() => {
        getChatMessageRequest();
    }, [])

    useEffect(() => {
        scrollToBottom()
    }, [chat.length])

    const scrollToBottom = () => {
        const data = document.querySelector('.chat-container');
        data.scrollTo(0, data.scrollHeight)
    }

    return (
        <div className="wrapper">
            <Heading size="xl" color="color3" className='mb20'>Ticket Chat Details</Heading>
            <ChatWrapper>
                <div className='left'>
                    <ul>
                        <li>
                            <span>Ticket ID</span>
                            <span className='detail'>{props?.location?.state?.ticketId}</span>
                        </li>
                        <li>
                            <span>Ticket Date</span>
                            <span className='detail'>{props?.location?.state?.createdAt}</span>
                        </li>
                        <li>
                            <span>Issue Category</span>
                            <span className='detail'>{props?.location?.state?.category}</span>
                        </li>
                        <li>
                            <span>Request Type</span>
                            <span className='detail'>{props?.location?.state?.requestType}</span>
                        </li>
                        <li>
                            <span>Discription</span>
                            <span className='detail'>{props?.location?.state?.description}</span>
                        </li>
                        <li>
                            <span>Issue Status</span>
                            <span className='detail'>{props?.location?.state?.status}</span>
                        </li>
                        <li>
                            <span>Last Update</span>
                            <span className='detail'>{props?.location?.state?.updatedAt}</span>
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
                    <ul className='chat-container'>
                        {chat.map((ele) => {
                            if (ele?.toId === userData?.uuid) {
                                return <li key={ele.createdAt} className='sender'><img src='../../images/userimg.png' /><span>{ele.message}</span></li>
                            } else {
                                return <li key={ele.createdAt} className='receiver'><span>{ele.message}</span><Logo /></li>
                            }
                        })}
                        {/* <li className='receiver'><span>Hi! How can I help you? </span><Logo /></li>
                        <li className='sender'><img src='../../images/userimg.png' /><span>I cannot see my balance and history after logging in</span></li>
                        <li className='receiver'><span>Don't worry! This may be due to some technical issues on the our end</span><Logo /></li> */}
                    </ul>
                    <div className='chat-box'>
                        <form className='form' onSubmit={sendChatMessageRequest}>
                            <textarea placeholder='Type your message here...' value={message} onChange={handleChange} onKeyDown={handleChange}></textarea>
                            <ButtonSolid primary rg type='submit'>Submit</ButtonSolid>
                        </form>
                    </div>
                </div>

            </ChatWrapper>
        </div>
    )
}