import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`

export const HeaderWrapper = styled.header`
    height: 70px;
    background-color: var(--ip-white-bg);
    box-shadow: 0 1px 2px rgb(56 65 74 / 15%);
    padding: 0 24px 0 8px;
    left: 250px;
    top: 0;
    right: 0;
    z-index: 9;
    .user-name{
        display: flex;
        align-items: center;
        text-transform: capitalize;
    }
    .profile-wraper {
        // padding: 0 24px;
        // margin-bottom: 15px;
        font-family: "Roboto", sans-serif;
        .profile{
            position: relative;
        }
        .link {
          border-radius: 10px 10px 0 10px;
          background-color: #fff;
          padding: 6px 9px;
          cursor: pointer;
          &.active {
            border-radius: 10px 10px 0 0;
            i {
              transform: rotate(180deg);
            }
          }
        }
        .image {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 18px;
          margin-right: 10px;
          /* background: transparent linear-gradient(252deg, #ff6600 0%, #692cff 100%)
            0% 0% no-repeat padding-box; */
            background: var(--ip-black);
            text-transform: uppercase;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .name {
          font-size: 15px;
          line-height: 20px;
          color: #292929;
          margin-bottom: 1px;
          font-weight: 500;
          text-transform: capitalize;
        }
        .role {
          font-size: 12px;
          line-height: 14px;
          color: #085b51;
          font-weight: 500;
          text-transform: uppercase;
        }
        .dropdown {
          i {
            font-size: 16px;
          }
        }
        .dropdownList {
          background-color: #fff;
          border-radius: 0 0 10px 10px;
          overflow: hidden;
          display: none;
          position : absolute;
          left: 0;
          right: 0;
          bottom: -45px;
          box-shadow: rgba(56, 65, 74, 0.15) 0px 1px 2px;
          z-index: 1;
          &.active {
            display: block;
          }
          li {
            list-style: none;
            padding: 10px 12px;
            cursor: pointer;
            font-size: 14px;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            &:hover {
              color: #fff;
              background: var(--ip-black);
            }
          }
        }
      }
    .header-hamburger {
        border: none;
        background-color: transparent;
        padding: 16px;
        height: 100%;
        cursor: pointer;
    }
    .hamburger-icon {
        width: 20px;
        height: 14px;
        position: relative;
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        span {
            background-color: var(--ip-black);
            position: absolute;
            border-radius: 2px;
            transition: .3s cubic-bezier(.8, .5, .2, 1.4);
            width: 100%;
            height: 2px;
            display: block;
            left: 0px;

            &:nth-child(1) {
                top: 0;
                width: 80%;
            }

            &:nth-child(2) {
                top: 6px;
            }

            &:nth-child(3) {
                bottom: 0;
                width: 60%;
            }
        }

        .vertical-menu-btn:hover &:not(.open) {
            span {

                &:nth-child(1) {
                    top: -1px;
                }

                &:nth-child(3) {
                    bottom: -1px;
                }
            }
        }

        &.open {
            transform: rotate(-90deg);

            span {

                &:nth-child(1) {
                    left: 1px;
                    top: 5px;
                    width: 20px;
                    transform: rotate(90deg);
                    transition-delay: 150ms;
                }

                &:nth-child(2) {
                    left: 3px;
                    top: 13px;
                    width: 10px;
                    transform: rotate(45deg);
                    transition-delay: 50ms;
                }

                &:nth-child(3) {
                    left: 9px;
                    top: 13px;
                    width: 10px;
                    transform: rotate(-45deg);
                    transition-delay: 100ms;
                }
            }
        }
    }
    .header-right {
        .user-info {
            background-color: var(--ip-topbar-user-bg);
            height: 100%;
            position: relative;
            margin-left: 10px;
            &:hover {
                .user-info-dropdown {
                    visibility: visible;
                    transform: translateY(0);
                    z-index: 9;
                    opacity: 1;
                }
            }
        }
        .user-info-inner {
            padding: 19px;
            border: none;
            background: none;
        }
        .short-name {
            background-color: var(--ip-white-bg);
            color: var(--ip-heading-color);
            text-transform: uppercase;
            flex: 0 0 32px;
            width: 32px;
            height: 32px;

        }
        .user-full-name {
            color: var(--ip-heading-color);
        }
        .user-role {
            font-size: 11px;
            color: var(--text-grey);
        }
        .primary-btn{
            height: 45px;
            border-radius: 23px;
            i{
                margin-right: 12px;
                font-size: 15px;
                font-weight: 400;
            }
        }
        .round-btn{
            width: 45px;
            height: 45px;
            margin-left: 10px;
            border-radius: 50%;
            border:1px solid #053D36;
            display: flex;
            justify-content: center;
            align-items: center;
            background: none;
            i{
                font-size: 20px;
            }
        }
    }
    .user-wallet {
        color: var(--ip-heading-color);
        strong {
            font-weight: 500;
            font-size: 16px;
            margin-right: 10px;
        }
        .fa {
            font-size: 16px;
            &.loading {
                animation-name: ${spin};
                animation-duration: 1s;
                animation-iteration-count: infinite;
            }
        }
    }
`

export const UserInfoWrapper = styled.div`
    box-shadow: 0 5px 10px rgb(30 32 37 / 12%);
    position: absolute;
    right: 0;
    top: 100%;
    z-index: -1;
    visibility: hidden;
    opacity: 0;
    min-width: 100%;
    padding: 8px 0;
    margin: 0;
    font-size: 13px;
    color: var(--ip-body-color);
    text-align: left;
    list-style: none;
    background-color: var(--ip-dropdown-bg);
    background-clip: padding-box;
    border: var(--ip-dropdown-border-width) solid var(--ip-border-color);
    border-radius: 4px;
    transform: translateY(10px);
    transition: all 300ms ease-in;
    h6 {
        padding: 8px 20px;
        line-height: 20px;
        color: var(--text-grey);
    }
    li {
        padding: 8px 20px;
        line-height: 20px;
        cursor: pointer;
        font-size: 13px;
        color: var(--ip-dropdown-link-color);
        &:hover {
            color: var(--ip-dropdown-link-hover-color);
            background-color: var(--ip-dropdown-link-hover-bg);
        }
    }
`