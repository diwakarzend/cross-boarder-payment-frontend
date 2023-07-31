import React, { useState } from "react";
import {Text,InputWrapper,ButtonSolid, TableWarpper} from "../../Components/styledConstants";
import search from "../../assests/images/Search.svg"
import IconUpload from "../../assests/images/Icons/IconUpload"

 const BlockCardRange =()=>{
    const[ipAddress,setIpAddress]= useState('')


    const filterData =()=>{

    }

   
    return(
        <>
         
         <div className="flex title-wrapper space-between mb16">
            
                <div className="search-wrapper">
                <Text  as="h4"  fs="20" fw="bold" color="color15"  style={{marginBottom:"14.5px",fontSize:"xl"}}>Block Card Range</Text>
                    
                        <input name="ipAddress" value={ipAddress} className="searchvalue" onChange={(e) => setIpAddress(e.target.value)} type="text" placeholder='Card Bin' />
                        <img src={search} alt="" onClick={() => filterData()} />
                </div>
                <div> <ButtonSolid className="btn"   primary  style={{marginRight :"10px"}}>Add Rule</ButtonSolid>
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
                                    <th className="text-left">
                                        <Text size="sm" fw="medium" color="color7">
                                            Card Range
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="sm" fw="medium" color="color7">
                                            Start Date
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="sm" fw="medium" color="color7">
                                            End Date
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="sm" fw="medium" color="color7">
                                            start Time
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="sm" fw="medium" color="color7">
                                            End Time
                                        </Text>
                                    </th>
                                    <th className="text-left">
                                        <Text size="sm" fw="medium" color="color7">
                                            Block Period
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

            <div className="flex space-between" style={{alignItems:"center",marginTop:"27px"}}>

            <div className="upload-wrapper">
                <Text  as="h4"  fs="20" fw="bold" color="color15"  style={{marginBottom:"14.5px",fontSize:"xl"}}>Add Bulk Rules for IP Address</Text>
                    
                <ButtonSolid secondary className="btn" style={{width:"150px",fontSize:"13px"}}  >Get Sample CSV</ButtonSolid>
                </div>
                <div className="">
             <div className="upload_file flex space-between" style={{alignItems:"center"}}>
                <div className="flex" style={{alignItems:"center",cursor:"pointer"}}> 
                    <input className="file" id="upload" type="file"/>
             <IconUpload/>
             <label style={{marginLeft:"9px",cursor:"pointer"}} htmlFor="upload">Upload Document</label>
             </div>
            
                
             <ButtonSolid primary className="btn" style={{fontSize:"13px"}}  >Submitt</ButtonSolid>

             </div>
              
              <div className=" flex space-between" style ={{marginTop:"14px"}}>
              <Text size="sm" color="color15">Please upload documents only in 'CSV' format.</Text>
                <Text size="xxxsm" color="color15"><span>Note:</span>f Always True Flag is checked then Date,
                 Time, Week does not need<span style={{display:"block"}}> to be filled but if it is not then all the
                 required fields will have to be filled.
                    </span></Text>
              </div>
               
               
               </div>
              
            </div>
        
        
        
        </>
    )






}
export default BlockCardRange;