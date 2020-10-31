import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import "./App.css";

function App() {
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);

  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);

  function handleRegisterClick() {
    setIsRegisterPopupOpen(true);
  }

  function handleLoginClick() {
    setIsLoginPopupOpen(true);
  }

  function closeAllPopups() {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
    setIsTooltipOpen(false);
  }

  function handleEscClose(e) {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  }

  function handlerOverlayClick(e) {
    if (e.target.classList.contains("popup")) {
      closeAllPopups();
    }
  }

  React.useEffect(() => {
    window.addEventListener("keydown", handleEscClose);
    window.addEventListener("mousedown", handlerOverlayClick);

    return () => {
      window.removeEventListener("mousedown", handlerOverlayClick);
      window.removeEventListener("keydown", handleEscClose);
    };
  });

  function changePopupToRegister() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(true);
  }

  function changePopupToInfoTooltip() {
    setIsTooltipOpen(true);
    setIsRegisterPopupOpen(false);
  }

  function changePopupToLogin() {
    setIsLoginPopupOpen(true);
    setIsRegisterPopupOpen(false);
  }

  function changePopupFromInfoTooltip() {
    setIsTooltipOpen(false);
    setIsLoginPopupOpen(true);
  }

  const [isMobile, setIsMobile] = React.useState(false);

  function changeBackground() {
    setIsMobile(!isMobile);
  }

  const overlay = `${isMobile ? "mobile-menu_active" : "mobile-menu"}`;

  return (
    <div className="app">
      <div className={overlay}></div>
      <Switch>
        <Route exact path="/" onRegister={handleRegisterClick}>
          <div className="app__elem-background">
            <Header
              onLogin={handleLoginClick}
              changeBackground={changeBackground}
              isMobile={isMobile}
            />
            <SearchForm />
          </div>
          <Main />
        </Route>
        <Route path="/saved-news">
          <Header isMobile={isMobile} changeBackground={changeBackground} />
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
      <Register
        onClose={closeAllPopups}
        changePopup={changePopupToLogin}
        changePopupToInfoTooltip={changePopupToInfoTooltip}
        isOpen={isRegisterPopupOpen}
      />
      <Login
        onClose={closeAllPopups}
        changePopup={changePopupToRegister}
        isOpen={isLoginPopupOpen}
      />
      <InfoTooltip
        onClose={closeAllPopups}
        changePopup={changePopupFromInfoTooltip}
        isOpen={isTooltipOpen}
      />
    </div>
  );
}

export default App;
