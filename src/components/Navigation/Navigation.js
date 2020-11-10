import React from "react";
import {
  NavLink,
  useLocation
} from "react-router-dom";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import "./Navigation.css";

function Navigation(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const {
    pathname
  } = useLocation();
  const {
    changeBackground,
    onLoginOpen,
    onSignOut,
    loggedIn,
  } = props;

  const btnImgClassName = `${
    pathname === "/"
      ? "navigation__signout"
      : "navigation__signout navigation__signout_loggedin"
  }`;
  const buttonClassName = `${
    pathname === "/"
      ? "navigation__button"
      : "navigation__button navigation__button_loggedin"
  }`;
  const linkClassName = `${
    pathname === "/"
      ? "navigation__link"
      : "navigation__link navigation__link_loggedin"
  }`;

  function logOut() {
    onSignOut();
    changeBackground();
  }

  return (
    <nav className="navigation">
      {/*{pathname === "/" ? (*/}
      <>
        <NavLink
          exact
          to="/"
          activeClassName="navigation__link_active"
          className={linkClassName}
        >
          Главная
        </NavLink>
      </>
      {loggedIn || pathname === "/saved-news" ? (
          <>
            <NavLink
              exact
              to="/saved-news"
              activeClassName="navigation__link_active-black"
              className={linkClassName}
              onClick={changeBackground}
            >
              Сохранённые статьи
            </NavLink>
            <button
              className={buttonClassName}
              onClick={onSignOut}
            >
              {currentUser.name}
              <div className={btnImgClassName}/>
            </button>
          </>
        ) :
        <button className={buttonClassName} onClick={onLoginOpen}>
          Авторизоваться
        </button>
      }

      {/*//  : (*/}
      {/*//   <>*/}
      {/*//     <NavLink*/}
      {/*//       exact*/}
      {/*//       to="/"*/}
      {/*//       activeClassName="navigation__link_active"*/}
      {/*//       className={linkClassName}*/}
      {/*//       onClick={changeBackground}*/}
      {/*//     >*/}
      {/*//       Главная*/}
      {/*//     </NavLink>*/}
      {/*//     <NavLink*/}
      {/*//       exact*/}
      {/*//       to="/saved-news"*/}
      {/*//       activeClassName="navigation__link_active-black"*/}
      {/*//       className={linkClassName}*/}
      {/*//     >*/}
      {/*//       Сохранённые статьи*/}
      {/*//     </NavLink>*/}
      {/*//     <NavLink*/}
      {/*//       className={buttonClassName}*/}
      {/*//       exact*/}
      {/*//       to="/"*/}
      {/*//       onClick={changeBackground}*/}
      {/*//     >*/}
      {/*//       Грета*/}
      {/*//       <div className={btnImgClassName} />*/}
      {/*//     </NavLink>*/}
      {/*//   </>*/}
      {/*// )}*/}
    </nav>
  );
}

export default Navigation;
