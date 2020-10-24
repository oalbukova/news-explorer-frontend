import React from "react";
import {NavLink} from "react-router-dom";
import Navigation from '../Navigation/Navigation.js';
import './Header.css';

function Header() {
  const [isTransparent, setIsTransparent] = React.useState(false);
  const backgroundHeader = `${isTransparent ? "#1A1B22" : "transparent" }`;
  
  function changeBackground() {
    setIsTransparent(!isTransparent);
  }

  // const [textColor, setTextColor] = React.useState('white');
  //
  // const changeTextColor= () => {
  //   const grey = '#1A1B22';
  //   setTextColor(grey);
  // }

  return (
    <div className="header"
         style={{backgroundColor: backgroundHeader}}>
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
