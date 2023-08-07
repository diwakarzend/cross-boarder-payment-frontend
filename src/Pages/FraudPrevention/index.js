import React from "react";
import { Wrapper } from "./style";
import Iconfraud1 from "../../assests/images/Icons/Iconfraud1"
import Iconfraud2 from "../../assests/images/Icons/Iconfraud2"
import Iconfraud3 from "../../assests/images/Icons/Iconfraud3";
import Iconfraud4 from "../../assests/images/Icons/Iconfraud4";
import Iconfraud5 from "../../assests/images/Icons/Iconfraud5";
import Iconfraud6 from "../../assests/images/Icons/Iconfraud6";
import Iconfraud7 from "../../assests/images/Icons/Iconfraud7";
import Iconfraud8 from "../../assests/images/Icons/Iconfraud8";
import Iconfraud9 from "../../assests/images/Icons/Iconfraud9";
import Iconfraud10 from "../../assests/images/Icons/Iconfraud10";
import { useState } from "react";
import BlockIpAdress from "./BlockIpAddress";
import BlockIssuerCounteries from "./BlockIssuerCountries";
import BlockEmailAdress from "./BlockEmailAdress";
import LimitTransactionAmmount from "./LimitTransactionAmmount";
import BlockCardRange from "./BlockCardRange";
import BlockCardMask from "./BlockCardMask";
import LimitCardTransaction from "./LimitCardTransaction";
import BlockPhoneNo from "./BlockPhoneNo";
import LimitTransactionAmmountVelocity from "./LimitTransactionAmountVelocity";
import BlockVirtualPaymentAddress from "./BlockVirtualPaymentAdress";

 const tabData = [
        {
          active: true,
          icon: <span><Iconfraud1 /></span>,
          name: "Block IP Addresses",
          id: "IP-Addresses",
          className: "tabBox"
        },
        {
          active: false,
          icon: <span><Iconfraud2 /></span>,
          name: "Block Issuer Countries",
          id: "Issuer-Countries",
          className: "tabBox"
        },
        {
          active: false,
          icon: <span><Iconfraud3 /></span>,
          name: "Block Email Addresses",
          id: "Email-Addresses",
          className: "tabBox"
        },
        {
          active: false,
          icon: <span><Iconfraud4 /></span>,
          name: "Limit Transaction Amount",
          id: "Transaction-Amount",
          className: "tabBox"
        },
        {
          active: false,
          icon: <span><Iconfraud5 /></span>,
          name: "Block Card Ranges",
          id: "Card-Ranges",
          className: "tabBox"
        },
        {
          active: false,
          icon: <span><Iconfraud6 /></span>,
          name: "Block Card Mask",
          id: "Card-Mask",
          className: "tabBox"
        },
        {
          active: false,
          icon: <span><Iconfraud7 /></span>,
          name: "Limit Card Transaction",
          id: "Card-Transaction",
          className: "tabBox"
        },
        {
          active: false,
          icon: <span><Iconfraud8 /></span>,
          name: "Block Phone Number",
          id: "Phone-Number",
          className: "tabBox"
        },
        {
          active: false,
          icon: <span><Iconfraud9 /></span>,
          name: "Limit Transaction Amount Velocity",
          id: "Amount-Velocity",
          className: "tabBox"
        },
        {
          active: false,
          icon: <span><Iconfraud10 /></span>,
          name: "Block Virtual Payment Addresses",
          id: "Payment-Addresses",
          className: "tabBox"
        },
      ];

export default function FraudPrevention() {
   const [activeTab, setActiveTab] = useState("IP-Addresses");
  
    return (
      <Wrapper className="FraudPrevention">
        <div className="flex text" > 
           <a><p>Overview</p></a> 
           <i class="fa-sharp fa-regular fa-angle-right"></i>
            <a><p>Fraud Prevention System</p></a>
        </div>
          
           <div className="table-wrapper">
              <p className="text-fraud">Fraud Prevention System</p>
                 <div className="flex tabs-wrapper">
                 {tabData.map((data,i)=>{
                  
                  return <div className={`${data?.className ? data?.className : ""} ${activeTab === data.id ? "active" : ""}`} key={data.id} onClick ={()=>setActiveTab(data.id)}>
                    <i className="icon" style={{display:"block"}}>{data.icon}</i>
                    <span className="text-block">{data.name}</span>

                   </div>
                 

               })} 
                 </div>
              

           </div>
           <div className="tab-container">
           {activeTab === "IP-Addresses" && (<BlockIpAdress />)}
           {activeTab === "Issuer-Countries" && (<BlockIssuerCounteries/>)}
           {activeTab === "Email-Addresses" && (<BlockEmailAdress/>)}
           {activeTab === "Transaction-Amount" && (<LimitTransactionAmmount/>)}
           {activeTab === "Card-Ranges" && (<BlockCardRange/>)}
           {activeTab === "Card-Mask" && (<BlockCardMask/>)}
           {activeTab === "Card-Transaction" && (<LimitCardTransaction/>)}
           {activeTab === "Phone-Number" && (<BlockPhoneNo/>)}
           {activeTab === "Amount-Velocity" && (<LimitTransactionAmmountVelocity/>)}
           {activeTab === "Payment-Addresses" && (<BlockVirtualPaymentAddress/>)}

           </div>

      </Wrapper>
    );
  }