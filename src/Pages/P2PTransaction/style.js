import styled from "styled-components";

export const DetailsWrapper = styled.div`
  .flex {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
  }
  .label-name {
    font-weight: bold;
    min-width: 120px;
  }
  h5 {
    margin: 0;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .credited, .synced {
    text-transform: uppercase;
  }
  .credited {
    color: rgb(64,81,137);
  }
  .synced {
    color: rgb(247,184,75);
  }
  .payment-success{
    padding: 19px 18px 15px;
    background-color: #F8F8F8;
    border-radius: 5px;
    position: relative;
    .status{
      background-color: #00A838;
      border-top-left-radius: 5px;
      margin:-19px 0 10px -18px;
      position: relative;
      height: 24px;
      width: auto;
      display: flex;
      align-items: center;
      padding: 0 23px 0 18px;
      position: relative;
      color:#fff;
      font-size: 13px;
      font-weight: 700;
      max-width: 165px;
      &:after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        height: 0;
        border-top: 12px solid transparent;
        border-right: 15px solid #f8f8f8;
        border-bottom: 12px solid transparent;
      }
    }
    .paymnent-amount{
      font-size: 25px;
      line-height: 30px;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .payment-date{
      font-size: 10px;
    }
    .imps{
      position: absolute;
      top:19px;
      right: 18px;
    }
  }
`;
export const Title = styled.div`
  color:#063151;
  font-Size:15px;
  font-weight: bold;
  margin-bottom: 10px;
  position: relative;
  margin-top: 23px;
  padding-right: 10px;
  &::after{
    content: '';
    height: 1px;
    width: 100%;
    border-bottom: 1px dashed #0000001A;
    position:absolute;
    top:50%;
    transform: translateY(-50%);
    left: 0;

  }
  span{
    background-color: #fff;
    position: relative;
    z-index: 2;
  }
`
export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  position: relative;
  .form-group {
    flex: 0 0 240px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 0;
  }
  .form-action {
    .btn-common {
      margin-left: 20px;
    }
  }
  .csv-link {
    width: 39px;
    height: 39px;
    border-radius: 50%;
    background-color: #EAEEF2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaa;
    font-size: 20px;
    transition: all 500ms ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: rgb(41,156,219, .4);
      color: rgb(41,156,219, .8);
    }
  }
  
`;
