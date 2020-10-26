import React from "react";
import {NavLink} from "react-router-dom";
import Navigation from '../Navigation/Navigation.js';
import './Header.css';

function Header() {
  const [isMobile, setIsMobile] = React.useState(false);
  const backgroundHeader = `${isMobile ? "header header_mobile" : " header" }`;

  function changeBackground() {
    setIsMobile(!isMobile);
  }
  
  return (
    <div className={backgroundHeader}>
      <input
        type="checkbox"
        className="header__menu-toggle"
        id="header__menu-toggle"
      />
      <label
        htmlFor="header__menu-toggle"
        className="header__menu-button"
      >
        <span className="header__menu-span"
              onClick={changeBackground}/>
      </label>
      <NavLink exact to="/" className="header__logo" lang="en">NewsExplorer</NavLink>
      <Navigation/>
    </div>
  );
}

export default Header;
