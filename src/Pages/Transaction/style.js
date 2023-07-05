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
    background: #000;
    color: #fff;
    padding: 28px;
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
        height: 35px;
        min-width: 135px;
        background-color: #F6F6F6;
        padding: 0 10px;
        border: 1px solid #f6f6f6;
    }
  }
`;

export const AdvanceFilterWrapper = styled.div`
    display: flex;
    justify-content:  space-between;
    width: 700px;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    position: absolute;
    z-index: 1;
    right: 30px;
    color: #000;
    border: 1px solid #ccc;
    flex-wrap: wrap;
    gap: 14px;
    box-shadow: 0px 0px 0px 1px #ccc;
    .box{
      display: flex;
      align-items: center;
      gap: 15px;
      label{
        font-size: 13px;
        font-weight: 500;
      }
      input, select {
        height: 35px;
        min-width: 135px;
        padding: 0px 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }
    .btn{
      background: transparent;
      border: none;
      font-size: 20px;
    }
    .heading-box{
      width: 100%;
    }
`;