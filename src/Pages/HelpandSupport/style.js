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

export const ChatWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 70vh;
  .left{
    background: #fff;
    padding: 30px;
    max-width: 40%;
    flex: 1;
    ul{
    
      li{
        height: 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        &:nth-child(even) {
          background: #F6F6F6;
        }
        span{
          select{
            width: 100px;
            padding: 5px;
          }
          &.detail{
            width: 30%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: right;
            padding: 0 10px;
          }
        }
      }
    }
  }
  .right {
    background: #191919;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .chat-box{
      display: flex;
      flex-direction: column;
      gap: 10px;
      .form{
        display: flex;
        flex-direction: column;
        gap: 5px;display: flex;
        flex-direction: column;
        gap: 10px;
      }
      textarea{
        resize: none;
        height: 80px;
        padding: 5px;
        line-height: 20px;
        outline: none;
      }
      button {
        align-self: end;
      }
    }
    ul{
      display: flex;
      flex-direction: column;
      gap: 50px;
      height: 50vh;
      overflow: auto;
      padding: 20px;
      li{
        display: flex;
        max-width: 60%;
        gap: 10px;
        &.sender{
          span{
            min-height: 35px;
            align-items: center;
            display: flex;
            padding: 0 10px;
            color: #fff;
            background: #2A2A2A;
            line-height: 20px;
          }
          img{
            width: 30px;
            height: 30px;
          }
        }
        &.receiver{
          align-self: end;
          justify-content: flex-end;
          align-items: center;
          span{
            min-height: 35px;
            align-items: center;
            display: flex;
            padding: 0 10px;
            color: #fff;
            background: #707070;
            line-height: 20px;
          }
          svg{
            width: 30px;
            height: 30px;
          }
        }
      }
    }
    }
`;

export const SuccessWrapper = styled.div`
  text-align: center;
  padding: 50px 0;
`;
