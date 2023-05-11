import React, { Fragment, useState, useEffect } from "react";
import {ItemPerPageWrapper} from "./style";
import MaterialInput from "../Form";

const pageSizeOption =[
  {label:10 , value:10},  
  {label:50 , value:50},
  {label:100 , value:100},
  {label:500 , value:500},
]
 export default function ItemPerPage  ({ pageSize, getPageSize = () => {}, }) {  
  const changePageSize = (option) => {    
    getPageSize(option.value);
  };
  return (
    <ItemPerPageWrapper>
        <div className="flex flex-center gap28">
          <MaterialInput
            icon={""}
            type="select"
            name="pageSize"
            value={pageSizeOption.filter((item) => item.value == pageSize)}
            options={pageSizeOption}
            onChange={changePageSize}
            placeholder="Items"            
          />        
        </div>            
     </ItemPerPageWrapper>
  );
}
