import styled from "styled-components";




export const Wrapper = styled.div`
  border-radius: 5px;
  background-color: #f7f8f9;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.17);
`;

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

export const TopicWrapper = styled.div`
    width: 50%;
    margin: 40px auto;
    .btn-box{
        width: 50%;
    }
`;

export const QuestionWrapper = styled.div`
    width: 50%;
    margin: 40px auto;
    .btn-box{
        width: 48%;
    }
`;

export const TabWrapper = styled.div`
  .filter-btn{
    border: none;
    background: transparent;
    padding: 15px;
    font-size: 13px;
    color: #707070;
    &.active{
        border-bottom: 3px solid #ED1C24;
        color: #000;
        font-weight: 500;
    }
  }
`;

export const TicketHeadingWrapper = styled.div`
  background: #FFE9EA;
  align-items: center;
  padding: 28px;
  padding-bottom: 0;
  justify-content: space-between;
  .btn-soft-success{
    background: #ED1C24;
    outline: 1px solid #ED1C24;
  }
`;