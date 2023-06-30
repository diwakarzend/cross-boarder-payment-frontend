import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --font: 'Roboto', sans-serif;
    --ip-body-font-size: 13px;
    --ip-body-bg: #f3f3f9;
    --ip-white-bg:#fff;
    --ip-white-color:#fff;
    --ip-body-color: #212529;
    --ip-body-color-rgb: 33,37,41;
    --ip-vertical-menu-bg: #fff;
    --ip-vertical-menu-item-color: #6d7080;
    --ip-vertical-menu-item-hover-color: #032d28;
    --ip-vertical-menu-item-active-color: #032d28;
    --ip-vertical-menu-sub-item-color: #7c7f90;
    --ip-vertical-menu-sub-item-hover-color: #032d28;
    --ip-vertical-menu-sub-item-active-color: #032d28;
    --ip-vertical-menu-title-color: #919da9;
    --ip-vertical-menu-bg-dark: #00286F;
    --ip-nav-link-color: #fff;
    --ip-vertical-menu-item-hover-color-dark: #fff;
    --ip-vertical-menu-item-active-color-dark: #fff;
    --ip-vertical-menu-sub-item-color-dark: #abb9e8;
    --ip-vertical-menu-sub-item-hover-color-dark: #fff;
    --ip-vertical-menu-sub-item-active-color-dark: #fff;
    --ip-vertical-menu-title-color-dark: #838fb9;
    --ip-vertical-submenu-title-bg-dark: rgba(41, 41, 41, .4);
    --ip-vertical-submenu-active-bg: var(--ip-vertical-menu-bg-dark);
    --ip-header-bg: #fff;
    --ip-header-item-color: #e9ecef;
    --ip-header-bg-dark: #032d28;
    --ip-header-item-color-dark: #b0c4d9;
    --ip-topbar-search-bg: #f3f3f9;
    --ip-topbar-user-bg: #f3f3f9;
    --ip-topbar-user-bg-dark: #52639c;
    --ip-footer-bg: #fff;
    --ip-footer-color: #98a6ad;
    --ip-topnav-bg: #fff;
    --ip-topnav-item-color: #6d7080;
    --ip-topnav-item-color-active: #032d28;
    --ip-twocolumn-menu-iconview-bg: #fff;
    --ip-twocolumn-menu-bg: #fff;
    --ip-twocolumn-menu-iconview-bg-dark: var(--ip-vertical-menu-bg-dark);
    --ip-twocolumn-menu-bg-dark: #435590;
    --ip-twocolumn-menu-item-color-dark: var(--ip-vertical-menu-item-color-dark);
    --ip-twocolumn-menu-item-active-color-dark: #fff;
    --ip-twocolumn-menu-item-active-bg-dark: rgba(255, 255, 255, 0.15);
    --ip-boxed-body-bg: #e5e5f2;
    --ip-heading-color: #495057;
    --ip-light: #f3f6f9;
    --ip-light-rgb: 243,246,249;
    --ip-dark: #212529;
    --ip-dark-rgb: 33,37,41;
    --ip-link-color: #032d28;
    --ip-link-hover-color: #032d28;
    --ip-border-color: #e9ebec;
    --ip-dropdown-bg: #fff;
    --ip-dropdown-link-color: #212529;
    --ip-dropdown-link-hover-color: #1e2125;
    --ip-dropdown-link-hover-bg: #f3f6f9;
    --ip-dropdown-border-width: 0px;
    --ip-card-bg: #fff;
    --ip-card-cap-bg: #fff;
    --ip-card-logo-dark: block;
    --ip-card-logo-light: none;
    --ip-modal-bg: #fff;
    --ip-nav-tabs-link-active-color: #495057;
    --ip-nav-tabs-link-active-bg: #f3f3f9;
    --ip-accordion-button-active-color: #3a497b;
    --ip-progress-bg: #eff2f7;
    --ip-toast-background-color: rgba(255, 255, 255, 0.85);
    --ip-toast-border-color: rgba(0, 0, 0, 0.1);
    --ip-toast-header-border-color: rgba(0, 0, 0, 0.05);
    --ip-list-group-hover-bg: #f3f6f9;
    --ip-popover-bg: #fff;
    --ip-pagination-hover-bg: #eff2f7;
    --ip-input-bg: #fff;
    --ip-input-border: #ced4da;
    --ip-input-focus-border: #a0a8c4;
    --ip-input-disabled-bg: #eff2f7;
    --ip-input-group-addon-bg: #eff2f7;
    --ip-input-check-border: var(--ip-input-border);
    --ip-primary-btn-color:#fff;
    --ip-primary-btn-bg:#065b51;
    --ip-primary-btn-hover-bg:#065b51;
    --ip-red: #FF2121;
    --ip-green: #0ab39c;
    --text-grey:#878a99;
    --h1: 24px;
    --h2: 20px;
    --h3: 18px;
    --h4: 16px;
    --h5: 16px;
    --h6: 14px;
    --p: 13px;
    --ip-btn-success-color: #fff;
    --ip-btn-success-bg: #065b51;
    --ip-btn-soft-success-color: #065b51;
    --ip-btn-soft-success-bg: #e6eeed;
    --ip-black:#000;
    --ip-common-gradient: transparent linear-gradient(252deg, #193d7d 0%,#00ffff 100%) 0% 0% no-repeat padding-box;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body,#app{
    height:100vh;
  }
  body{
    font-family: var(--font);
    font-size: var(--ip-body-font-size);
    color:var(--ip-body-color-rgb);
    background: var(--ip-body-bg);
    line-height:1.2;
    font-weight:400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scrollbar-width: thin;
    ::-webkit-scrollbar {
      width: 10px;
    }
    &.desktop_nav_small {
      .main-content {
        margin-left: 50px;
        > header {
          left: 50px;
        }
      }
      .breadcrumb {
        h4{
          left: 105px !important;
        }
      }
    }
  }
  img{
    max-width: 100%;
    height: auto;
  }
  input, 
  button {
    font-family: var(--font);
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
  }
  button, 
  img, 
  a, 
  select {
    outline: none;
    user-select: none;
    text-transform: none;
  }
  [type=button], 
  [type=reset], 
  [type=submit], 
  button {
    -webkit-appearance: button;
  }
  [type=button]:not(:disabled), 
  [type=reset]:not(:disabled), 
  [type=submit]:not(:disabled), 
  button:not(:disabled) {
    cursor: pointer;
  }
  ul, li {
    list-style: none;
  }
  table {
    caption-side: bottom;
    border-collapse: collapse;
}
  .mb4{
    margin-bottom:4px;
  }
  .mb8{
    margin-bottom:8px;
  }
  .mb10{
    margin-bottom:10px;
  }
  .mb12{
    margin-bottom:12px;
  }
  .mb16{
    margin-bottom:16px;
  }
  .mb20{
    margin-bottom:20px;
  }
  .mb24{
    margin-bottom:24px;
  }
  .mb28{
    margin-bottom:28px;
  }
  .mb32{
    margin-bottom:32px;
  }
  .mb36{
    margin-bottom:36px;
  }
  .mb4{
    margin-bottom:4px;
  }
  .mt4{
    margin-top:4px;
  }
  .mt30{
    margin-top:30px;
  }
  .mr4{
    margin-right: 8px;
  }
  .mr10{
    margin-right: 10px;
  }
  .mt10{
    margin-top: 10px;
  }
  .mr8{
    margin-right: 8px;
  }
  .mr12{
    margin-right: 8px;
  }
  .mr16{
    margin-right: 8px;
  }
  .ml10{
    margin-left: 10px;
  }
  .ml30{
    margin-left: 30px;
  }
  .mr30{
    margin-right: 30px;
  }
  .p16 {
    padding: 16px;
  }
  .pb16{
    padding-bottom: 16px;
  }
  .pl16{
    padding-left: 16px;
  }
  .px16{
    padding: 0 16px;
  }
  .py8{
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .py4{
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .fs-13 {
    font-size: 13px;
  }
  .fs-15 {
    font-size: 15px;
  }
  .fs-16 {
    font-size: 16px;
  }

  .fw-medium {
    font-weight: 500;
  }
  .fw-bold {
    font-weight: 600;
  }

  .wrapper {
    padding: 32px;
    min-height: 80%;
  }
  .select__single-value{
    margin-top: 25px;
  }
  .mt24{
    margin-top: 24px;
  }
  .flex-center{
    justify-content: space-between;
  }
  h1{
    font-size:var(--h1);
  }
  h2{
    font-size:var(--h2);
  }
  h3{
    font-size:var(--h3);
  }
  h4{
    font-size:var(--h4);
  }
  h5{
    font-size:var(--h5);
  }
  h6{
    font-size:var(--h6);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight:500;
  }
  p{
    font-size:var(--p);
  }
  .text-left{
    text-align:left;
  }
  .text-center{
    text-align:center;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .rounded-full {
    border-radius: 50%;
  }
  .inputgroup{
    margin-bottom:20px;
    &.no-mb{
      margin-bottom: 0;
    }
    .validate-wrap{
      margin-top:6px;
    }
    .valdate{
      display: inline-block;
      cursor: pointer;
      color:#FF6600;
      font-size: 14px;
      margin-left: 8px;
    }
    .errortext,.error-msg{
      color:#FF2121;
      font-size: 15px;
      line-height: 19px;
      margin-top: 5px;
    }
  }
  .form-error {
    font-size:12px;
  }
  .floating-label-input{
    position: relative;
    z-index: 3;
    background-color: #fff;
    border-radius: 30px;
    .label{
      padding: 0 5px;
      font-size:16px;
      color: var(--ip-body-color);
      display: block;
      z-index: -1;
      transition: all .25s;
      position: absolute;
      top:15px;
      left:25px;
      background-color: #fff;
    }
    .form-control{
      padding: 0 30px;
      box-shadow:0 1px 2px #00000029;
      border-radius: 30px !important;
      &:focus,&.has-value,&:not(:placeholder-shown){
        border-color:var(--ip-input-focus-border);
        + label{
          top:-8px;
          font-size: 13px;
          line-height: 16px;
          color:#8B9CA8;
          z-index: 3;
        }
      }
    }
  }
  .form-control{
    font-size:15px;
    padding: 0 10px;
    border:1px solid #8B9CA899;
    width:100%;
    height:50px;
    border-radius: 30px;
    color: #000;
    font-weight: 400;
    outline: none;
    background-color: transparent;
    &.error{
      border-color: #FF2121;
    }
    &::placeholder { 
      color: #000;
      opacity: 1; 
    }
    &:-ms-input-placeholder { 
      color: #000;
    }
    &::-ms-input-placeholder { 
      color: #000;
    }
    
  }
  .form-textarea {
    height: 100px;
    padding: 14px;
    resize: none;
  }
  .wd248{
      width:248px;
      max-width: 100%;
      height: 50px;
      border-radius: 30px;
  }
  .primary-btn{
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
  }
  select{
    appearance: none;
    background: url('/images/down.png') no-repeat calc(100% - 15px) center;
    option:empty{
      display: none;
    }
  }
  .modal-dialog {
    background: #fff url('/images/modal-bg.png') no-repeat right bottom;
  }
  .border-btn{
    outline:1px solid rgba(5, 61, 54, 1);
    height: 40px;
    color:#fff;
    font-size: 15px;
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
        /* background: transparent linear-gradient(249deg, rgba(255, 102, 0, 1) 0%, rgba(105, 44, 255, 1) 100%) 0% 0% no-repeat padding-box; */
        background: #000;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.17);
        outline:none;
    }
  }
  .account-wrap{
    font-size:15px;
    padding: 5px 30px;
    width:100%;
    height:50px;
    border-radius: 30px;
    color: #000;
    font-weight: 400;
    outline: none;
    background-color: #F8F8F8;
    margin-bottom: 10px;
    .label{
      font-size: 13px;
      line-height: 16px;
      color: #8B9CA8;
    }
    .value{
      margin-top: 4px;
      font-weight: 500;
    }
  }
  .wd48{
    max-width:48%;
  }
  .flex{
    display:flex;
  }
  .flex-wrap{
    flex-wrap: wrap;
  }
  .space-between{
    justify-content:space-between;
  }
  .justify-center{
    justify-content:center;
  }
  .justify-end {
    justify-content: end;
  }
  .item-center{
    align-items:center;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .flex-column {
    flex-direction: column;
  }
  .gap4 {
    gap: 4px;
  }
  .gap16 {
    gap: 16px;
  }
  .error-msg, .form-error{
    color: var(--ip-red);
  }
  .success-msg{
    color: var(--ip-green); 
  }
  .reset-password{
    font-size:15px;
    color: #292929;
    text-decoration: underline;
    margin-top:11px;
    padding-bottom: 13px;
  }
  .alert {
    position: relative;
    padding: 13px 16px;
    margin-bottom: 16px;
    border-radius: 4px;
  }
  .alert-success {
    color: #088675;
    background-color: #daf4f0;
    border-color: #b6e8e1;
  }
  .alert-danger {
    color: #b44c36;
    background-color: #fde8e4;
    border-color: #fbd1c8;
}

  .alert-warning {
    color: #000000;
    background-color: #FFECAF;
    border-color: #FFECAF;
    font-size: 15px;
    line-height: 19px;
    padding: 16px 18px;
    border-radius: 50px;
    position: relative;
    &:after{
      content: '';
      width: 0;
      height: 0;
      border-top: 8px solid #FFECAF;
      border-right: 12px solid transparent;
      position: absolute;
      top:100%;
      left: 30px;
    }
  }
  .back-btn{
    border-radius: 30px;
    background-color: #F8F8F8;
    border:none;
    padding: 0 10px;
    height: 24px;
    color:#000;
    font-size: 15px;
    margin-top: 30px;
    span{
      margin-right: 5px;
    }
  }
  .close-btn{
    border-radius: 30px;
    background-color: #F8F8F8;
    box-shadow: 0 1px 2px #00000029;
    border:none;
    padding: 0 10px;
    height: 24px;
    color:#000;
    font-size: 15px;
    span{
      margin-right: 5px;
    }
  }
 
  .col-6{
    flex:0 0 calc(50% - 10px) !important;
  }
  /* Auth Layout CSS */
  .main-content {
    margin-left: 265px;
    padding: 0px;
    position: relative;
    transition: all .1s ease-out;
    height: 100%;
    background: #fff url('/images/cb_3ddesign.png') no-repeat right bottom;
  }
  .card-wrapper {
    position: relative;
    display: flex;
    word-wrap: break-word;
    background-color: var(--ip-card-bg);
    background-clip: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgb(56 65 74 / 15%);
    margin-bottom: 20px;
    border-radius: 20px;
  }
  @media print {
    .sidebar, .card-header {
      display: none;
    }
     
  }
  .card-inner-header{
    padding: 20px 24px 0;
  }
  .card-header {
    border-radius: 4px 4px 0 0;
    padding: 16px;
    .card-title{
      font-size: 20px;
      line-height: 45px;
      color: #063151;
      font-weight: bold;
    }
    &.lr0{
      padding: 0 0 20px;
    }
    .form-control{
        border-radius: 20px;
    }
    .left{
      width:220px;
    }
    .right{
      .form-control{
        outline: none;
        &:focus{
          outline: none;
        }
      }
      .form-group{
        &:first-child{
          .form-control{
            border-right: none;
            border-radius: 20px 0 0 20px;
          }
        }
        &:nth-child(2){
          .form-control{
            border-left: none;
            border-radius: 0 20px 20px 0;
          }
        }
      }
    }
    .filter-table{
      width: calc(100% - 220px);
    }
    .csv-link{
      background-color: #692CFF;
      padding: 5px 10px;
      border-radius: 16px;
      margin-left: 8px;
      color:#fff;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 12px;
      font-weight: 500;
    }
    .tab-List {
      margin: -16px -8px;
      display: flex;
      .tab-item {
        padding: 16px;
        font-weight: 500;
        color: var(--ip-link-color);
        position: relative;
        &.active {
          &:after {
            transform: scale(1);
          }
        }
        &:after {
          content: "";
          background: #032d28;
          height: 1px;
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 0;
          transition: all 250ms ease 0s;
          transform: scale(0);
        }
      }
    }
  }
  .row {
    display: flex;
    margin: 0 -12px;
    [class*="col-"] {
      padding: 0 12px;
    }
  }
  .col-1 {
    flex: 0 0 calc(100% * 1 / 12);
  }
  .col-2 {
    flex: 0 0 calc(100% * 2 / 12);
  }
  .col-3 {
    flex: 0 0 calc(100% * 3 / 12);
  }
  .col-4 {
    flex: 0 0 calc(100% * 4 / 12);
  }
  .col-5 {
    flex: 0 0 calc(100% * 5 / 12);
  }
  .col-6 {
    flex: 0 0 calc(100% * 6 / 12);
  }
  .col-7 {
    flex: 0 0 calc(100% * 7 / 12);
  }
  .col-8 {
    flex: 0 0 calc(100% * 8 / 12);
  }
  .col-9 {
    flex: 0 0 calc(100% * 9 / 12);
  }
  .col-10 {
    flex: 0 0 calc(100% * 10 / 12);
  }
  .col-11 {
    flex: 0 0 calc(100% * 11 / 12);
  }
  .col-12 {
    flex: 0 0 calc(100% * 12 / 12);
  }
  .pb0{
    padding-bottom: 0 !important;
  }
  .pt0{
    padding-top: 0 !important;
  }
  .sidebar-overlay {
    display: none;
  }
  .w-full{
    width: 100%;
  }
  .login-form-inner{ 
    .logo-wrapper{
      background: url('/images/login-bg.svg') no-repeat center top;
    }
    &.max400{
      max-width: 400px;
      border-radius: 30px;
      padding: 25px 50px 45px;
      background:#fff url('/images/sucess-bg.png') no-repeat center bottom;
      h4{
        font-size: 30px;
        line-height: 45px;
        font-weight: bold;
        margin-bottom: 8px;
      }
      p{
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 40px;
      }
      .primary-btn{
        width: 100%;
        height: 50px;
        font-size: 20px;
      }
    }
  }
  .form-heading {
        color: var(--ip-white-color);
        padding: 61px 16px 58px;
        background: url('/images/login-banner.svg') no-repeat center top;
        background-size: 100%;
        p {
            margin: 16px 0;
            color: rgba(255,255,255,.5);
        }
    }
    .login-form {
        position: relative;
        z-index: 2;
        height: 100%;
    }
    .login-form-inner {
        // max-width: 900px;
        margin: 0 auto;
        box-shadow: 0 10px 50px #0000001A;
        background-color: var(--ip-white-bg);
        border-radius: 20px 20px 0 20px;
        height: 100%;
    }
    .logo-icon {
        max-width: 200px;
    }
    .logo-wrapper {
        width: 55%;
        padding: 0;
        h3{
            font-size: 40px;
            line-height: 45px;
            font-weight: 700;
        }
        p {
            font-size: 20px;
            line-height: 25px;
        }
    }
    .form-text-wrapper{
        padding: 0;
        width: 45%;
        display: flex;
        align-items: center;
        justify-content: center;
        .title{
            font-size: 20px;
            line-height: 24px;
            font-weight: 500;
        }
        .form-text-inner{
            width: 60%;
        }

       .eye-icon{
          position: absolute;
          right: 10px;
          top: 9px;
        }
        .cross{
          right: 10px;
          top:9px;
          cursor: pointer;

          &:after{
            content: '';
            width: 2px;
            height: 26px;
            background-color: #292929;
            border-right: 1px solid #fff;
            transform: rotate(-30deg);
            position: absolute;
            left: 12px;
          }
        }

         
        .primary-btn{
            width: 100%;
            height: 50px;
            border-radius: 30px;
            font-size: 20px;
        }
    }
    .footer-copy-text{
      font-size: 13px;
      margin:56px 0;
    }
  @media screen and (max-width: 768px) {
    body.nav_small {
      .sidebar-overlay {
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 98;
        background-color: rgba(0,0,0,.7);
      }
      .sidebar {
        transform: translateX(0);
      }      
    }
    .main-content {
      margin-left: 0;
      .header {
        left: 0;
        padding: 0;
      }
      .form-item {
        flex: 0 0 100%;
      }
      .form-action {
        width: 100%;
      }
      .filter-form {
        button {
          width: 100%;
        }
      }
      .table {
        th {
          white-space: nowrap;
        }
      }
      .card-header {
        &.dir-col-in-mobile {
          flex-direction: column;
          align-items: flex-start;
        }
        .filter-table {
          margin-top: 10px;
          overflow: auto;
          width: 100%;
        }
      }
      .card-body {
        .row {
          flex-direction: column;
          gap: 16px;
          > [className="col-"] {
            width: 100%;
            max-width: 100%;
          }
        }
      }
    }
  }
  // .pagination-nav{
  //   width: auto !important;
  //   min-width: 24px;
  //   padding: 0 2px !important;
  //   border:1px solid #053D36 !important;
  //   border-radius: 20px !important;
  //   background-color: #fff !important;
  //   font-size: 13px !important;
  //   color: #000 !important;
  //   &.active{
  //     background-color: #053D36 !important;
  //     color:#fff !important;
  //   }
  // }
  // .prev-btn,.next-btn{
  //   border:1px solid #053D36 !important;
  //   padding: 0 10px !important;
  //   border-radius: 20px !important;
  //   background-color: #fff !important;
  //   font-size: 13px !important;
  //   color: #000 !important;
  //   max-height: 24px;
  //   &.active{
  //     background-color: #053D36 !important;
  //     color:#fff !important;
  //   }
  //   &:before{
  //     display: none;
  //   }
  // }
  .threeLine{
    display: none !important;
  }
  .text-right{
    text-align: right;
  }
  .modal{
      background-color: #fff;
      position: absolute;
      right:0;
      top:0;
      min-height: 100vh;
      width: 465px;
      max-width: 80%;
      .modal-content{
        border:none;
      }
      .modal-header{
        padding: 30px 35px 15px;
      }
      .modal-body{
        padding: 10px 35px 20px;
        max-height: calc(100vh - 235px); 
        overflow: auto;
        scrollbar-width: thin;
        ::-webkit-scrollbar {
          width: 10px;
        }
      }
      .modal-footer{
        display: flex;
        border-radius: 0 !important;
        padding: 35px 35px 25px;
        background: #FFF8E1 url('/images/modal-bg.png') no-repeat calc(100% - 20px) 20px;
        button{
          height: 40px;
        }
      }
  }
  .full-width {
    width: 100%;
  }
  .inline-message {
    padding: 6px 14px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    width: 100%;
    &.error {
      background-color: rgba(240,17,2,0.04);
    }
    &.success {
      background-color: rgba(42, 201, 64,0.11);
    }
    .icon {
      margin-right: 10px;
      max-width: 16px;
    }
  }
  .pos-rel {
    position: relative;
  }
  .pointer {
    cursor: pointer;
  }
  .underline{
    text-decoration: underline;
  }
  .border-r-dash {
    border-right: 1px dashed #c0c0c0;
  }
  .pr10{
    padding-right: 10px;
  }
  .main-container{
    height: 100%;
  }
  .select__placeholder, .select__value-container .select__input-container{
    padding-top: 30px;
  }
`;
