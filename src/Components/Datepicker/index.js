import React from "react";
import DatePicker from "react-datepicker";
import { Wrapper } from "./style";

import "react-datepicker/dist/react-datepicker.css";

const ReactDatePicker = (props) => {
  return (
    <Wrapper>
      <DatePicker className="date-picker-input" dateFormat="dd-MM-yyyy"  {...props} />
    </Wrapper>
  );
};

export default ReactDatePicker;