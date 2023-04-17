import styled from 'styled-components'; 

export const LoginFormWrapper = styled.div`
    height: 100%;
    .login-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 491px;
        /* &:before {
            content: '';
            background: linear-gradient(to right,#364574,#405189);
            opacity: 0.9;
            position: absolute;
            height: 100%;
            width: 100%;
            right: 0;
            bottom: 0;
            left: 0;
            top: 0;
        } */
        img {
            width: 100%;
            position: absolute;
            bottom: 0;
            margin-left: 50%;
            transform: translateX(-50%);
        }
    }
    .banner{
        background-image: url(../images/cb_backbg.png);
        background-size: cover;
        flex: 1;
    }
    .form-group{
        height: 100%;
    }
    .inner-box{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content:  center;
    }
    .form-text-wrapper{
        background-image: url(../images/cb_3ddesign.png);
        background-size: contain;
    }
    .logo{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
    .text-box {
        display:flex;
        flex-direction: column;
        align-items: center;
        height: 100px;
        justify-content: center;
        gap: 20px;
    }
    .banner-box{
        position: relative;
    }
    .banner-text {
        position: absolute;
        top: 70px;
        color: #fff;
        left: 110px;
        font-size: 20px;
        width: 50%;
        font-weight: 500;
    }
    .banner-heading {
        top: 150px;
        font-size: 35px;
        width: 32%;
        line-height: 35px;
        font-weight: 600;
    }
    .icon-eye {
        height: 20px;
        position: absolute;
        right: 20px;
        top: 33px;
        &:after {
          content: "";
          position: absolute;
          width: 26px;
          height: 1px;
          background-color: #828282;
          left: -3px;
          top: 8px;
          transform: rotate(-45deg);
        }
        &.active {
          &:after {
            display: none;
          }
        }
        img {
          max-width: 23px;
        }
      }
`;