import styled from "styled-components";

export const HeadingWrapper = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  padding: 28px;
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
        height: 35px;
        min-width: 135px;
        background-color: #F6F6F6;
        padding: 0 10px;
        border: 1px solid #f6f6f6;
    }
  }
`;