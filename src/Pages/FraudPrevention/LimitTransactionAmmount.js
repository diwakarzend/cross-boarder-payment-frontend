import React, { useState } from "react";
import {Text,InputWrapper,ButtonSolid, TableWarpper} from "../../Components/styledConstants";
import search from "../../assests/images/Search.svg"
import IconUpload from "../../assests/images/Icons/IconUpload"
import ListTransactionAmountModal from "./ListTransactionAmountModal";

 const LimitTransactionAmmount =()=>{
    const[ipAddress,setIpAddress]= useState('')
    const [isOpen,setIsOpen] = useState(false)


    const filterData =()=>{

    }

   
    return(
        <>
         
         <div className="flex title-wrapper space-between mb16">
            
                <div className="search-wrapper">
                <Text  as="h4"  fs="20" fw="bold" color="color15"  style={{marginBottom:"14.5px",fontSize:"xl"}}>Limit Transaction Ammount</Text>
                    
                        <input name="ipAddress" value={ipAddress} className="searchvalue" onChange={(e) => setIpAddress(e.target.value)} type="text" placeholder='Ammount' />
                        <img src={search} alt="" onClick={() => filterData()} />
                </div>
                <div> <ButtonSolid className="btn"   primary  style={{marginRight :"10px"}} onClick={()=>setIsOpen(true)}>Add Rule</ButtonSolid>
                    <ButtonSolid secondary className="btn"  >Delete All</ButtonSolid></div>
    
                
            </div>

            <TableWarpper>

                <table className="table">
                    <thead>
                    <tr>
                          <th className="text-left">
                            <Text size="sm" fw="medium" color="color7">
                                Merchant
                            </Text>
                         </th>
                                    <th className="">
                                        <Text size="sm" fw="medium" color="color7">
                                            Currency
                                        </Text>
                                    </th>
                                    <th className="">
                                        <Text size="sm" fw="medium" color="color7">
                                            Min Amount
                                        </Text>
                                    </th>
                                    <th className="">
                                        <Text size="sm" fw="medium" color="color7">
                                            Mix Amount
                                        </Text>
                                    </th>
                                   
                                </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td colSpan={12} style={{ textAlign: 'center', height:"140px" }}>No data available  in the table</td>
                    </tr>
                    </tbody>

                </table>
            </TableWarpper>
            {isOpen ?<ListTransactionAmountModal setIsOpen ={setIsOpen}/>:""}
            </>
    )
 }
 export default LimitTransactionAmmount;