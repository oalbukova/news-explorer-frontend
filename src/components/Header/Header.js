import React from "react";
import {NavLink} from "react-router-dom";
import Navigation from '../Navigation/Navigation.js';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <input
        type="checkbox"
        className="header__menu-toggle"
        id="header__menu-toggle"
      />
      <label
        htmlFor="header__menu-toggle"
        className="header__menu-button"
      >
        <span className="header__menu-span"/>
      </label>
      <NavLink exact to="/" className="header__logo" lang="en">NewsExplorer</NavLink>
      <Navigation/>
    </div>
  );
}

export default Header;
