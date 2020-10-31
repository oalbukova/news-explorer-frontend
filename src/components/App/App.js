import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm'
import {Route, Switch} from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';

import Register from "../Register/Register";
import Login from "../Login/Login";

import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

import './App.css';

function App() {

  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(
    false
  );

  const [isLoginPopupOpen , setIsLoginPopupOpen] = React.useState(
    false
  );
  //
  // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
  //   false
  // );
  // const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  // const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
  //   false
  // );
  // const [
  //   isDeleteConfirmationPopupOpen,
  //   setIsDeleteConfirmationPopupOpen,
  // ] = React.useState(false);
  // const [selectedCard, setSelectedCard] = React.useState(false);
  // const [cards, setCards] = React.useState([]);
  // const [cardDelete, setCardDelete] = React.useState([]);
  // const [dataImage, setDataImage] = React.useState({});
  // const setImage = (card) => {
  //   setDataImage(card);
  //   handleCardClick();
  // };
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loginState, setLoginState] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  const [successToolTip, setSuccessToolTip] = React.useState(false);


  function handleLoginState(state) {
    setLoginState(state);
  }

  function handleSuccessToolTip() {
    setSuccessToolTip(true);
  }

  function handleTooltipOpen() {
    setIsTooltipOpen(true);
  }


  function signOut() {
    setLoggedIn(false);
  }


  function handleRegisterClick() {
    setIsRegisterPopupOpen(true);
  }

  function handleLoginClick() {
    setIsLoginPopupOpen(true);
  }

  // function handleEditProfileClick() {
  //   setIsEditProfilePopupOpen(true);
  // }
  //
  // function handleAddPlaceClick() {
  //   setIsAddPlacePopupOpen(true);
  // }
  //
  // function handleEditAvatarClick() {
  //   setIsEditAvatarPopupOpen(true);
  // }
  //
  // function handleCardClick() {
  //   setSelectedCard(true);
  // }
  //
  // function handleDeleteClick() {
  //   setIsDeleteConfirmationPopupOpen(true);
  // }
  //
  // function handleCardDelete(card) {
  //   setCardDelete(card);
  //   handleDeleteClick();
  // }

  function closeAllPopups() {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
    // setIsTooltipOpen(false);
    setTimeout(setSuccessToolTip, 2000, false);
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


  const [isMobile, setIsMobile] = React.useState(false);

  function changeBackground() {
    setIsMobile(!isMobile);
  }

  const overlay = `${isMobile ? "mobile-menu_active" : "mobile-menu"}`;

  return (
    <div className='app'>
      <div className={overlay}></div>
      <Switch>
        <Route exact path='/'>
          <div className='app__elem-background'>
            <Header
              onLogin ={handleLoginClick}
              changeBackground={changeBackground}
              isMobile={isMobile}/>
            <SearchForm/>
          </div>
          <Main/>
        </Route>
        <Route path='/saved-news'>
          <Header
            isMobile={isMobile}
            changeBackground={changeBackground}
          />
          <SavedNews/>
        </Route>
      </Switch>
      <Footer/>
      <Register
        name="register"
  //    openToolTip={handleTooltipOpen}
       // successToolTip={handleSuccessToolTip}
        onLoginState={handleLoginState}
        isLoading={isLoading}
        onClose={closeAllPopups}
        onLogin={handleLoginClick}
     //  isOpen={isRegisterPopupOpen}
      />
      <Login
        name="login"
     //   successToolTip={handleSuccessToolTip}
        onLoginState={handleLoginState}
        isLoading={isLoading}
        onClose={closeAllPopups}
       isOpen={isLoginPopupOpen}
      />
    </div>
  );
}

export default App;
