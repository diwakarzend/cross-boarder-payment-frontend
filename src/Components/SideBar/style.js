import styled from "styled-components";

export const SidebarWrapper = styled.nav`
  width: 265px;
  z-index: 99;
  background: #101010;
  // border-right: 1px solid var(--ip-vertical-menu-bg-dark);
  bottom: 0;
  margin-top: 0;
  position: fixed;
  top: 0;
  box-shadow: 0 2px 4px rgb(15 34 58 / 12%);
  padding: 0 0 15px 0;
  transition: all 0.1s ease-out;
  @media (min-width: 768px) {
    &.collapsed {
      width: 50px;
      overflow: hidden;
      .logo {
        padding: 12px 4px;
        .icon {
          &:after {
            display: none;
          }
          margin-right: 0;
          width: 33px;
          height: 33px;
        }
        .text {
          opacity: 0;
          width: 0;
        }
      }
      .profile-wraper{
        padding: 0 0 0 4px;
        .link{
          padding-left: 5px;
          .image{ 
            max-width: 35px;
            min-width: 35px;
            height: 35px;
          }
        }
      }
      .menu-wrapper{
        padding-left: 4px;
      }
      .menu-wrapper > li > .nav-link {
        padding-left: 15px;
        padding-right: 15px;
      }
      .menu-wrapper > li > .nav-link .nav-title {
        display: none;
      }
    }
  }

  .logo {
    // height: 70px;
    padding: 24px 30px 0;
    transition: inherit;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    img {
      max-width: 130px;
    }
    .logo-text{
      width: 20%;
      color: #fff;
      font-weight: 600;
      font-size: 21px;
    }
  }
  .profile-wraper {
    padding: 0 24px;
    margin-bottom: 15px;
    font-family: "Roboto", sans-serif;
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
        background: var(--ip-common-gradient);
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
          background: var(--ip-common-gradient);
        }
      }
    }
  }
  .menu-wrapper {
    padding: 0 30px 0 30px;
    max-height: calc(100vh - 180px);
    overflow: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    > li {
      // width: 201px;
      margin-bottom: 5px;
      > .nav-link {
        display: flex;
        align-items: center;
        padding: 12px 10px;
        > .icon {
          flex: 0 0 18px;
          width: 18px;
          height: 18px;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        &.active {
          color: #F7F7F7;
          /* background: transparent
            linear-gradient(252deg, #ff6600 0%, #692cff 100%) 0% 0% no-repeat
            padding-box; */
            background: #ED1C24;
          .icon {
            fill: var(--ip-vertical-menu-item-active-color-dark);
          }
          .stroke {
            stroke: var(--ip-vertical-menu-item-active-color-dark);
          }
        }
      }
    }
  }

  .nav-link {
    color: var(--ip-nav-link-color);
    display: flex;
    padding: 6px 10px 6px 10px;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    border-radius: 5px;
    position: relative;
    font-family: "Roboto", sans-serif;
    color: #707070;
    .icon {
      fill: var(--ip-nav-link-color);
    }
    .stroke {
      stroke: var(--ip-nav-link-color);
    }
    svg {
      max-width: 20px;
      &.icon15 {
        max-width: 15px;
      }
    }

    .nav-title {
      white-space: nowrap;
    }
  }
  @media screen and (max-width: 768px) {
    transform: translateX(-250px);
  }
`;

export const NavItemWreapper = styled.li`
  &.has-dropdown {
    border-radius: 10px;
    > .nav-link {
      position: relative;
      &:after {
        content: "\f107";
        font-family: "fontawesome";
        color: inherit;
        position: absolute;
        top: 22px;
        right: 10px;
        line-height: 6px;
      }
    }
    &.active {
      > .nav-link {
        &:after {
          transform: rotate(180deg);
        }
        color: #fff;
      }
    }
    > .sub-menu-wrapper {
      padding: 0;
      height: 0;
      opacity: 0;
      transition: all 300ms ease;
      overflow: hidden;
      .nav-link{
        .icon{
          display: none;
        }
      }
    }
    &.active {
      // background: transparent linear-gradient(252deg,#193d7d4d 0%,#00ffff4d 100%) 0% 0% no-repeat padding-box;
      > .sub-menu-wrapper {
        height: auto;
        opacity: 1;
        padding-bottom: 10px;
        li {
          padding-left: 30px;
        }
        .nav-link {
          border-radius: 5px;
          &.active {
            background: #ED1C24;
            color: #F7F7F7;
            position: relative;
          }
        }
      }
      > .nav-link {
        color: var(--ip-vertical-menu-item-active-color-dark);
        border-radius: 0;
        g,
        path {
          fill: var(--ip-vertical-menu-item-active-color-dark);
        }
      }
    }
  }
`;
