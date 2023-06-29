import styled from "styled-components";

export const Wrapper = styled.div`
     width: inherit;
   .react-datepicker__header {
        background: transparent linear-gradient(70deg, #FFF8E6 0%, #FBF8FF 100%) 0% 0% no-repeat padding-box;
   }
   .react-datepicker__day--selected {
        background: #8B9CA8;
   }
   .react-datepicker-popper {
     z-index: 3;
   }
   .react-datepicker__input-container .date-picker-input {
          height: auto;
          border: 1px solid #DFDFDF;
          border-radius: 5px;
          font-size: 15px;
          color: #000;
          font-weight: 400;
          height: 50px;
          background: transparent;
          padding: 0 20px 0 15px;
          width: 100%;
          position: relative;
          z-index: 1;
          outline: none;
   }
   .react-datepicker__month-select, .react-datepicker__year-select {
          padding: 0 30px;
          font-size: 12px;
          height: 35px;
          margin-top: 20px;
   }
   .react-datepicker__navigation-icon {
          position: relative;
          top: 0;
          right: 0;
   }
`