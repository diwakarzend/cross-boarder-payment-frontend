import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { HeaderWrapper, UserInfoWrapper } from "./style";
import {
  fetchUserWallet,
  fetchUserWalletIfNeeded,
  loginResetStore,
} from "../../actions/Login";
import { IconRefresh } from "../UI/StyledConstants";
import { Text } from "../styledConstants";
import {
  printUserName,
  printUserNameShort,
  clearAuthToken,
} from "../../utils/common";

const userRole = {
  PTM_VENDOR: "VENDOR",
  PTM_ADMIN: "ADMIN",
  PTM_SUB_ADMIN: "SUB ADMIN",
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const ref = useRef(null);

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

  const handleActive = () => {
    setIsActive((current) => !current);
  };

  const logout = () => {
    clearAuthToken();
    dispatch(loginResetStore());
    history.push("/");
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isActive && ref.current && !ref.current.contains(e.target)) {
        handleActive(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isActive]);

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
          {/* <Text className="user-name" color="color3" size="xxl" fw="bold">{`${userData?.firstName} ${userData?.lastName}`}</Text> */}
          {/* <div className="user-wallet">
              <strong>Wallet Ballence {userWallet?.MAIN_WALLET?.toLocaleString("en-IN") || 0}</strong>
              <i className={`fa fa-refresh${isWalletLoading ? ' loading' : ''}`} aria-hidden="true" onClick={handleClick}></i>
            </div> */}
        </div>
        
        <div className="header-right flex item-center">
          {/* <button className="primary-btn" onClick={() => location.reload()}>
            <i className="fa fa-refresh" aria-hidden="true"></i> Refresh
          </button> */}
          {/* <button className="round-btn">
            <i className="fa fa-bullhorn"></i>
          </button>
          <button className="round-btn">
            <i className="fa fa-bell-o"></i>
          </button> */}
          <div className="profile-wraper" ref={ref}>
          <div className="profile">
            <div
              className={
                isActive
                  ? "link flex item-center space-between active"
                  : "link flex item-center space-between"
              }
              onClick={handleActive}
            >
              <div className="left flex item-center">
                <div className="image">{printUserNameShort(userData)}</div>
                <div className="text">
                  <div className="name">{printUserName(userData)}</div>
                  <div className="role">
                    {userData && userRole[userData.role]}
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
            </div>
            <div className={isActive ? "dropdownList active" : "dropdownList"}>
              <ul>
                <li onClick={() => logout()}>Logout</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
