import styled from 'styled-components';

export const DashboardWrapper = styled.div`
    &.analysis-and-statistics {
        .transaction-analysis {
            margin-right: 24px;
            flex: 0 0 70%;
            max-width: 70%;
        }
        .overall-statistics {
            flex: 1;
            .card-body {
                padding: 10px;
            }
            .overall-chart {
                width: 180px;
                margin: 0 auto;
                padding-top: 16px;
                strong {
                    margin-left: 24px;
                }
            }
        }
    }
`
export const DashboardFilterWrapper = styled.div`
    &:before{
        content: "";
        width: 100%;
        height: 171px;
        position: absolute;
        background-image: url(../images/db-bg.jpg);
    }
    &:after{
        content: "";
        width: 100%;
        position: absolute;
        height: 171px;
        background-image: url(../images/db-heading.png);
        background-repeat: no-repeat;
    }
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 171px;
    .filter-btn{
        height: 30px;
        color:#fff;
        font-size: 13px;
        font-weight: 700;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 25px;
        font-family: 'Roboto', sans-serif;
        white-space: nowrap;
        border: none;
        &:hover,&.active{
            color:#fff;
            background: #ED1C24;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.17);
            outline:none;
        }
    }
    .left{
        gap:5px;
        z-index: 1;
        padding-right: 32px;
        padding-top: 30px;
    }
    .heading{
        z-index:1;
        padding-left: 32px;
        padding-top: 30px;
    }
`

export const DashboardContentWrapper = styled.div`
    display: flex;
    padding: 0 32px;
    z-index: 1;
    position: relative;
    top: -53px;
    justify-content: space-between;
    gap: 10px;
    .left{
        flex-basis: 65%;
    }
    .right{
        flex-basis: 35%;
    }
`
export const DashBoardDetailWrapper = styled.div`
    background: #fff;
    padding: 20px;
    margin-bottom: 30px;
    .top{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 1px dashed #cdcdcd;
        padding-bottom: 20px;
        .left-box{
            display: flex;
            align-items: flex-end;
            gap: 20px;
            .balance {
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
        }
    }
    .bottom {
        display: flex;
        padding-top: 20px;
        .box{
            flex: 1;
            border-right: 1px dashed #cdcdcd;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            &:last-child{
                border: none;
            }
            .count{
                width: 30%;
            }
        }
    }
`

export const DashBoardTransactionWrapper  =  styled.div`
    background: #fff;
    .box{
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }

`

export const DashBoardPaymentWrapper  =  styled.div`
    .container{
        margin-bottom: 10px;
    }
    .top {
        background: #FFE9EA;
        padding: 20px;
        .transaction-box{
            display: flex;
            align-items: center;
            justify-content : space-between;
        }
    }
    .payment-mode{
        background: #fff;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        .box{
            border-left: 1px dotted #cdcdcd;
            padding-left: 20px;
            flex:1;
            &:first-child {
                padding-left: 0;
                border: none;
            }
        }
    }
`

export const DashBoardChartWrapper = styled.div`
    background: #fff;
    padding: 20px;
    .box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 80px;
    }
`