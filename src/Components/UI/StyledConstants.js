import styled from 'styled-components';

export const Logo = styled.span`
    font-size: 24px;
    font-weight: 600;
    color: ${props => props?.type == 'white' ? '#fff' : 'rgb(64, 81, 137)'};
    display: flex;
    align-items: center;
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        background-color: ${props => props?.type == 'white' ? '#fff' : 'rgb(64, 81, 137)'};
        border-radius: 50%;
        color: ${props => props?.type == 'white' ? 'rgb(64, 81, 137)' :'#fff' };
        position: relative;
        margin-right: 16px;
        transition: all .1s ease-in-out;
        &:after {
            content: '';
            width: 1px;
            height: 28px;
            background-color: ${props => props?.type == 'white' ? 'var(--ip-nav-link-color)' : 'rgb(64, 81, 137)'};
            position: absolute;
            right: -8px;
            top: 0;
            bottom: 0;
            margin: auto 0;
        }
    }
    .text {
        transition: all .1s ease-in-out;
        width: 87px;
    }
`
export const IconRefresh = styled.i`
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border-top: solid 1px currentColor;
    border-bottom: solid 1px currentColor;
    border-left: solid 1px transparent;
    border-right: solid 1px currentColor;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        left: 1px;
        top: 10px;
        width: 4px;
        height: 4px;
        border-top: solid 1px currentColor;
        border-left: solid 1px currentColor;
        transform: rotate(-22.5deg);
    }
`

export const TableWrapper = styled.div`
    overflow: auto;
    margin: 16px 0;
    .table {
        width: 100%;
        color: var(--ip-body-color);
        thead{
            th{
                background-color: #FFECAF;
            }
        }
        th {
            font-weight: 700;
            text-align: left;
            padding: 12px 10px;
        }
        td, th {
            &:first-child{
                padding-left: 30px;
            }
            &:last-child{
                padding-right: 30px;
            }
        }
        td{
            padding: 9px 10px;
            .payment-btn{
                width: 68px;
                height: 20px;
                border-radius: 10px;
                border:1px solid #DFDFDF;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 10px;
                font-weight: bold;
                cursor: pointer;
                transition: all .5s;
                margin-right: 4px;
                span{
                    width: 14px;
                    height: 14px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    margin-right: 2px;
                    background-color: #FF6600;
                    color: #fff;
                    padding: 1px 1px 0 0;
                }
                svg{
                    max-width:14px;
                    margin-right: 2px;
                }
                &:hover,&.active{
                    background: transparent linear-gradient(250deg, #053D36 0%, #085B51 100%);
                    border-color: #053D36;
                    color: #fff;
                }
            }
            .edit-btn{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border:1px solid #DFDFDF;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all .5s;
                font-size: 9px;
                cursor: pointer;
                &:hover,&.active{
                    background: transparent linear-gradient(250deg, #053D36 0%, #085B51 100%);
                    border-color: #053D36;
                    color: #fff;
                }
            }
        }
        tbody{
            tr{
                &:nth-child(even){
                    td{
                        background-color: #F8F8F8;
                    }
                }
            }
        }
        tr.active-tr {
            td, th {
                border-top: 1px solid var(--ip-border-color);
                border-bottom: none;
                &:first-child {
                    border-left: 1px solid var(--ip-border-color);
                }
                &:last-child {
                    border-right: 1px solid var(--ip-border-color);
                }
            }
            .toggle-icon:after {
                transform: rotate(0deg);
            }
        }
        tr.sub-tr {
            td {
                background: rgb(10 179 156 / 10%);
                border-top: 1px solid var(--ip-border-color);
                &:first-child {
                    border-left: 1px solid var(--ip-border-color);
                }
                &:last-child {
                    border-right: 1px solid var(--ip-border-color);
                }
            }
        }
        .toggle-icon {
            display: inline-block;
            margin-right: 10px;
            width: 20px;
            height: 20px;
            position: relative;
            border: 1px solid var(--ip-body-color);
            border-radius: 3px;
            cursor: pointer;
            &::before, &:after {
                content: '';
                width: calc(100% - 8px);
                height: 2px;
                background-color: var(--ip-body-color);
                border-radius: 1px;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                transition: transform 300ms ease-in-out;
            }
            &:after {
                transform: rotate(90deg);
            }
        }
    }
    .sub-tr-card-wrapper {
        gap: 16px;
    }
    .sub-tr-card {
        flex: 1;
        padding: 10px;
        & + .sub-tr-card {
            border-left: 1px solid rgb(10 179 156 / 30%);
        }
    }

    .sub-tr-card h4 {
        padding-bottom: 10px;
        font-size: 13px;
        text-align: center;
    }
    .sub-tr-card li {
        padding-bottom: 4px;
        display: flex;
        align-items: baseline;
    }
    .sub-tr-card strong {
        font-size: 12px;
        font-weight: 600;
        padding-right: 5px;
        white-space: nowrap;
    }
`

export const Button = styled.button`
    height: 40px;
    border-radius: 20px;
    font-size: 15px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    font-family: 'Roboto', sans-serif;
    white-space: nowrap;
    border: none;
    color:#fff;
    /* background: transparent linear-gradient(249deg, rgba(255, 102, 0, 1) 0%, rgba(105, 44, 255, 1) 100%) 0% 0% no-repeat padding-box; */
    background: var(--ip-common-gradient);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.17);
    &:hover,&.active{
        outline:none;
    }
    &.btn-success {
        color: var(--ip-btn-success-color);
        background-color: var(--ip-btn-success-bg);
        border-color: var(--ip-btn-success-bg);
    }
    &.btn-soft-success {
        color: var(--ip-btn-soft-success-color);
        background-color: var(--ip-btn-soft-success-bg);
        border-color: var(--ip-btn-soft-success-bg);
    }
    &.btn-soft-danger {
        color: #f06548;
        background-color: rgba(240,101,72,.1);
        border-color: transparent;
    }
    &.btn-danger {
        color: #fff;
        background-color: #f06548;
        border-color: #f06548;
    }
    &.btn-light {
        color: #000;
        background-color: #f3f6f9;
        border-color: #f3f6f9;
    }
    &.btn-sm {
        font-size: 11.375px;
        line-height: 17.0625px;
        padding: 4px 8px;
        border-radius: 3.2px;
    }
    .icon{
        width: 13px;
        height: 13px;
        display: inline-block;
        vertical-align: middle;
    }
    &.close{
        width: 10px;
        font-size: 26px;
    }
`
export const BorderBtn = styled.button`
    outline:1px solid rgba(5, 61, 54, 1);
    height: 40px;
    color:#fff;
    font-size: 15px;
    font-weight: 700;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    font-family: 'Roboto', sans-serif;
    white-space: nowrap;
    border: none;
    i{
        margin-right: 7px;
    }
    span{
        margin-right: 4px;
    }
    &:hover,&.active{
        color:#fff;
        background: #000;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.17);
        outline:none;
        .icon{
            fill:#fff;
        }
    }
`
export const FilterFormWrapper = styled.div`
    .form-item {
        flex: 0 0 19%;
        
    }
    .form-action{
        button{
            height: 50px;
            border-radius: 25px;
        }
    }
`

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1055;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    background-color: rgba(0,0,0,.7);
    .modal-dialog {
        position: relative;
        max-width: 600px;
        margin: 50px auto;
        transform: translateY(0);
        border-radius: 20px;
        transition: transform .3s ease-out,-webkit-transform .3s ease-out;
        overflow: hidden;
    }
    .modal-content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-clip: padding-box;
        border: 1px solid var(--ip-border-color);
        border-radius: 8px;
        outline: 0;
    }
    .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 40px;
        border-radius: 20px 20px 0 0;
        .modal-title{
            font-size: 20px;
            color:#063151;
            font-weight: 700;
            display: flex;
            align-items: center;
            .icon{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                color:#fff;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 10px;
                font-weight: 400;
                background-color: #FF6600;
            }
        }
        + .done,+ .fail{
            text-align: left;
            display: inline-block;
            background-color: #39C10024;
            max-width: 248px;
            padding: 0 15px;
            color: #39C100 !important;
            font-size: 15px;
            line-height: 24px;
            border-radius: 40px;
            margin: 0 auto;
            p{
                padding: 4px 0;
            }
        }
    }
    .payment-title{
        font-size: 30px;
        line-height: 38px;
        margin-bottom: 6px;
        font-weight: 700;
    }
    .payment-sub-title{
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 22px;
    }
    .thank-btn{
        width: 163px;
        height: 36px;
        border-radius: 20px;
        color:#fff;
        font-size: 25px;
        border: none;
        background: #FF6600;
        margin-bottom: 20px;
    }
    .quick-payment-successfull{
        padding-bottom: 20px;
    }
    .modal-body {
        position: relative;
        flex: 1;
        padding: 20px 40px;
        width: 100%;
        &.no-footer{
            max-height: calc(100vh - 90px);
        }
        .label-name{
            font-weight: 700;
        }
        .otp-form-wrapper{
            margin:10px -40px -20px;
            padding: 20px 40px 30px;
            box-shadow: 0 10px 50px #0000001A;
            background: #FFF8E1;
            .otp-input{
                min-width: 58px;
                height: 58px;
                border-radius: 50%;
                border:1px solid #8B9CA899;
                background-color: #fff;
                font-size: 25px;
                text-align: center;
                outline: none;
                &.filed{
                    background-color: #FFECAF;
                    border-color: #FFECAF;
                }
            }
        }
        .modal-footer{
            padding-bottom: 10px;
        }
        .loader{
            max-width: 20px;
            margin-left: 10px;
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
    }
    .modal-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px 40px 40px;
        border-radius: 0 0 20px 20px;
        &.justify-start{
            justify-content: flex-start;
        }
        &.justify-center{
            justify-content: center;
        }
        button{
            height: 50px;
            border-radius: 30px;
            padding: 0 25px;
        }
    }
`

export const TooltipWrapper = styled.div`
    position: relative;
    .tooltip {
        position: absolute;
        padding: 8px 16px;
        border: 1px solid transparent;
        border-radius: 4px;
        bottom: calc(100% + 8px);
        right: 0;
        &.tooltip-success {
            color: #088675;
            background-color: #daf4f0;
            border-color: #b6e8e1;
        }
        &.tooltip-danger {
            color: #b44c36;
            background-color: #fde8e4;
            border-color: #fbd1c8;
        }
    }
`
export const AlertWrapper = styled.div`
    &.alert {
        position: relative;
        padding: 8px 16px;
        margin-bottom: 16px;
        border: 1px solid transparent;
        border-radius: 4px;
        width: fit-content;
        &.alert-normal {
            color: #2859b5;
            background-color: #e1ebfd;
            border-color: #c2d6fb;
        }   
        &.alert-success {
            color: #0ab39c;
            background-color: rgb(10 179 156 / 10%);
            border-color: rgb(10 179 156 / 15%);
        }   
        &.alert-error {
            color: rgb(211 50 65);
            background-color: rgb(211 50 65 / 10%);
            border-color: rgb(211 50 65 / 20%);
        }
        ul {
            padding-left: 5px;
            li {
                list-style-type: disc;
                & + li {
                    margin-top: 5px;
                }
            }
        }   
    }
    
`

export const TabCardsWraper = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    .tab-card {
        padding: 20px 40px 20px 20px;
        border: 1px solid #E0E0E0;
        border-radius: 10px;
        background-color: #fff;
        position: relative;
        flex: 0 0 25%;
        min-height: 100px;
        &.active {
            border-color: var(--ip-vertical-menu-bg-dark);
        }
    }
    .tab-card-details {
        flex: 0 0 calc(75% - 20px);
        border: 1px solid #E0E0E0;
        border-radius: 10px;
        background-color: #f5f5f5;
        position: relative;
        display: flex;
        align-items: center;
        .details-data {
            padding: 20px;
            flex: 0 0 calc(33.33% - 20px);
        }
    }
    .title {
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
    }
    .text {
        font-size: 13px;
        line-height: 18px;
        font-weight: 400;
        height: 44px;
        margin-top: 5px;
    }
    .value {
        font-size: 18px;
        line-height: 22px;
        font-weight: 600;
        height: 44px;
    }
`