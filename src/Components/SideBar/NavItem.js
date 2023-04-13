import React from "react";
import { NavLink } from "react-router-dom";
import { isEmpty } from "../../utils/common";
import { IconMap } from "./constants";
import { NavItemWreapper } from "./style";

export default function NavItem({
  navData = {},
  subNavLength = 0,
  className = "",
  activeIndex,
  onNavItemClick = () => {},
}) {
  const setListClass = () => {
    let cls = className;
    if (!isEmpty(navData?.subNav)) {
      cls += " has-dropdown";
    }
    if (navData?.active) {
      cls += " active";
    }
    return cls;
  };

  return (
    <NavItemWreapper
      className={setListClass()}
      subNavLength={subNavLength}
      onClick={
        !isEmpty(navData?.subNav) ? () => onNavItemClick(activeIndex) : () => {}
      }
    >
      {navData.link ? (
        <NavLink to={navData.link} className="nav-link">
          <i className="icon">{navData?.icon && IconMap[navData.icon]}</i>
          <span className="nav-title">{navData.title}</span>
        </NavLink>
      ) : (
        <a className="nav-link">
          <i className="icon">{navData?.icon && IconMap[navData.icon]}</i>
          <span className="nav-title">{navData.title}</span>
        </a>
      )}
      {navData.subNav && (
        <ul className="sub-menu-wrapper">
          {navData.subNav.map((subNavData, i) => (
            <NavItem key={`sub-nav-${i}`} navData={subNavData} />
          ))}
        </ul>
      )}
    </NavItemWreapper>
  );
}
