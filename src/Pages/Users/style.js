import styled from "styled-components";


export const MerchantWrapper = styled.div`
    padding: 0 32px;
    min-height: 80%;
    .merchant-content{
        display: flex;
        justify-content: center;
    }
    .merchant-body{
        flex-basis: 70%;
        display: flex;
        flex-direction: column;
    }
    .heading-box{
        padding-top: 30px;
    }
    .track-check{
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
        .box{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 15px;
            flex: 0 0 100px;
        }
        .border{
            border: 1px dashed #ccc;
            width: 77%;
            height: 1px;
            align-self: center;
        }
        .disabled{
            height: 35px;
            width: 35px;
            background: #cdcdcd;
            border-radius: 50%;
            align-items: center;
            display: flex;
            justify-content: center;
            .check {
                display: inline-block;
                transform: rotate(45deg);
                height: 18px;
                width: 7px;
                border-bottom: 2px solid #fff;
                border-right: 2px solid #fff;
              }
        }
        .active{
            height: 35px;
            width: 35px;
            background: #40B816;
            border-radius: 50%;
            align-items: center;
            display: flex;
            justify-content: center;
            .check {
                display: inline-block;
                transform: rotate(45deg);
                height: 18px;
                width: 7px;
                border-bottom: 3px solid #fff;
                border-right: 3px solid #fff;
              }
        }
        
    }
    .tab-box {
        display: flex;
        gap: 20px;
        justify-content: space-between;
        .box {
            display: flex;
            gap: 10px;
            padding: 20px;
            background: #fff;
            align-items: center;
            &.active {
                background: #FFE9EA;  
                label{
                    color: #ED1C24;
                }
            }
        }
        .icon{
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: #fff;
        }
        .label{
            display: flex;
            flex-direction: column;
            label{
                color: #000;
                font-size: 15px;
                font-weight: 500;
            }
            span {
                color: #707070;
                font-size: 12px;
            }
        }
    }
    .card-heading{
        display: flex;
        justify-content: center;
        margin: 40px 0;
        position: relative;
        &:before{
            content: "";
            border-bottom: 1px dotted rgb(192, 192, 192);
            width: 100%;
            position: absolute;
            top: 12px;
        }
    }
    .success-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 100px;
        .border{
            background: #000;
            height: 1px;
            width: 35%;
            margin-bottom: 40px;
        }
    
    }
    
    
`

export const Wrapper = styled.div`
  border-radius: 5px;
  background-color: #f7f8f9;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.17);
`;

export const AddManageAdminWrapper = styled.div`
  .form-wrapper {
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.17);
    padding: 49px 52px;
    margin-top: -8px;
    position: relative;
  }
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
    .search-wrapper{
        width: 89%;
        justify-content: space-around;
    }
`;