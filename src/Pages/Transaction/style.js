import styled from "styled-components";

export const HeadingWrapper = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  padding: 32px;
  justify-content: space-between;
`;

export const FilterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 0 28px 28px;
    align-items: center;
  .search{
    display: flex;
    align-items: center;
    gap: 10px;
    label{
        font-size: 13px;
        font-weight: 500;
    }
    .field{
        display: flex;
        gap: 10px;
    }
    select, input {
      
        min-width: 135px;
        padding: 0 10px;
        border: 1px solid #f6f6f6;
        border: 1px solid rgb(223, 223, 223);
        border-radius: 5px;
        font-size: 15px;
        color: rgb(0, 0, 0);
        font-weight: 400;
        height: 50px;
        padding: 0px 20px 0px 15px;
        width: 100%;
        position: relative;
        z-index: 1;
        outline: none;

    }
  }
`;