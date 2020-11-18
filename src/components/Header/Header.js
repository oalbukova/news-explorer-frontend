import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import Navigation from "../Navigation/Navigation.js";
import "./Header.css";

function Header(props) {
  const {pathname} = useLocation();
  const {isMobile, changeBackground, onLoginOpen, loggedIn, onSignOut} = props;

  const logoClassName = `${
    pathname === "/" ? "header__logo" : "header__logo header__logo_loggedin"
  }`;

  const colorLogoSavedNews = `${
    isMobile ? logoClassName : "header__logo header__logo_mobile"
  }`;

  const logo = `${pathname === "/" ? "header__logo" : colorLogoSavedNews}`;

  const spanClassName = `${
    pathname === "/"
      ? "header__menu-span"
      : "header__menu-span header__menu-span_loggedin"
  }`;

  const border = `${
    pathname === "/"
      ? "inset 0px -1px 0px rgba(255, 255, 255, .2)"
      : "inset 0 -1px 0 #d1d2d6"
  }`;

  const handleClickLogo = () => {
    if (isMobile) {
      changeBackground();
    }
  };

  const headerClassName = `${
    pathname === "/"
      ? "header"
      : "header header_loggedin"
  }`;

  const backgroundHeader = `${isMobile ? "header header_mobile" : headerClassName}`;

  return (
    <div className={backgroundHeader} style={{boxShadow: border}}>
      <input
        type="checkbox"
        className="header__menu-toggle"
        id="header__menu-toggle"
      />
      <label htmlFor="header__menu-toggle" className="header__menu-button">
        <span className={spanClassName} onClick={changeBackground}/>
      </label>
      {pathname === "/" ? (
        <NavLink exact to="/" className={logo} lang="en">
          NewsExplorer
        </NavLink>
      ) : (
        <NavLink
          exact
          to="/"
          className={logo}
          lang="en"
          onClick={handleClickLogo}
        >
          NewsExplorer
        </NavLink>
      )}
      <Navigation changeBackground={changeBackground} onLoginOpen={onLoginOpen} loggedIn={loggedIn}
                  onSignOut={onSignOut}/>
    </div>
  );
}

export default Header;
