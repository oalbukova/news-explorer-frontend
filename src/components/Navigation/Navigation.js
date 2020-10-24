import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';
import signOut from '../../images/signout.svg';
// import logout from '../../images/logout.svg';

function Navigation() {

  return (
    <nav className="navigation">
      <NavLink exact to="/" activeClassName="navigation__link_active" className='navigation__link' style={isBackgroundWhite ? blackText : whiteText}>Главная</NavLink>
      <NavLink exact to="/saved-news" activeClassName="navigation__link_active" className="navigation__link">Сохранённые статьи</NavLink>
      <button className="navigation__button">Грета
        <img className='navigation__signout' src={signOut} alt='Выход'/></button>
    </nav>
);
}

export default Navigation;
