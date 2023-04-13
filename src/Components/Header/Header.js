import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { HeaderWrapper, UserInfoWrapper } from "./style";
import {
  fetchUserWallet,
  fetchUserWalletIfNeeded,
  loginResetStore,
} from "../../actions/Login";
import { IconRefresh } from "../UI/StyledConstants";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(fetchUserWallet());
  };

  function clickHambergerHandler() {
    const sidebarElement = document.querySelector(".sidebar");
    let bodyClass = "nav_small";
    let navClass = "";
    if (screen.width > 1024) {
      bodyClass = "desktop_nav_small";
      navClass = "collapsed";
    }
    if (document.body.classList.value != bodyClass) {
      document.body.classList.add(bodyClass);
      sidebarElement.classList.add(navClass);
    } else {
      document.body.classList.remove(bodyClass);
      sidebarElement.classList.remove(navClass);
    }
  }

  //Mounting Phase
  // useEffect(() => {
  //   dispatch(fetchUserWalletIfNeeded());
  // }, []);

  const userData = useSelector((state) => state?.login?.userData);
  const userWallet = useSelector((state) => state?.login?.userWallet);
  const isWalletLoading = useSelector((state) => state?.login?.isWalletLoading);
  return (
    <>
      <HeaderWrapper className="header flex space-between">
        <div className="header-left flex item-center">
          <button
            className="header-hamburger"
            type="button"
            onClick={clickHambergerHandler}
          >
            <span className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          {/* <div className="user-wallet">
              <strong>Wallet Ballence {userWallet?.MAIN_WALLET?.toLocaleString("en-IN") || 0}</strong>
              <i className={`fa fa-refresh${isWalletLoading ? ' loading' : ''}`} aria-hidden="true" onClick={handleClick}></i>
            </div> */}
        </div>
        <div className="header-right flex item-center">
          <button className="primary-btn" onClick={() => location.reload()}>
            <i className="fa fa-refresh" aria-hidden="true"></i> Refresh
          </button>
          <button className="round-btn">
            <i className="fa fa-bullhorn"></i>
          </button>
          <button className="round-btn">
            <i className="fa fa-bell-o"></i>
          </button>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
