import React from "react";
import {Route, Switch, Redirect, useHistory, useLocation} from "react-router-dom";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"; // импортируем HOC
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import {register, authorize, getContent} from "../../utils/MainApi";
import * as NewsApi from "../../utils/NewsApi";
import "./App.css";

function App() {
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);

//  const [selectedCard, setSelectedCard] = React.useState(false);
  // const [cards, setCards] = React.useState([]);
  // const [cardDelete, setCardDelete] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
//  const [loginState, setLoginState] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [registrationErr, setRegistrationErr] = React.useState('');
  const history = useHistory();
  const {pathname} = useLocation();

  // function handleLoginState(state) {
  //   setLoginState(state);
  // }

  function openRegisterPopup() {
    setIsRegisterPopupOpen(true);
  }

  function openLoginPopup() {
    setIsLoginPopupOpen(true);
  }

  function openTooltipPopup() {
    setIsTooltipOpen(true);
  }

  function closeRegisterPopup() {
    setIsRegisterPopupOpen(false);
  }

  function closeLoginPopup() {
    setIsLoginPopupOpen(false);
  }

  function closeTooltipPopup() {
    setIsTooltipOpen(false);
  }

  function closeAllPopups() {
    closeRegisterPopup();
    closeLoginPopup();
    closeTooltipPopup();
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
    closeLoginPopup();
    openRegisterPopup();
  }

  function changePopupToInfoTooltip() {
    openTooltipPopup();
    closeRegisterPopup();
  }

  function changePopupToLogin() {
    openLoginPopup();
    closeRegisterPopup();
  }

  function changePopupFromInfoTooltip() {
    closeTooltipPopup();
    openLoginPopup();
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getContent(jwt).then((res) => {
        setLoggedIn(true);
        setCurrentUser(res.data);
      })
        .catch((err) => console.log(err));
    }
  }, []);


  function signOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/");
    setCurrentUser({});
  }

  console.log(loggedIn)

  // function tokenCheck() {
  //   const jwt = localStorage.getItem("jwt");
  //   if (jwt) {
  //     getContent(jwt).then((res) => {
  //       if (res) {
  //         setLoggedIn(true);
  //         setUserData({
  //           id: res.data._id,
  //           email: res.data.email,
  //         });
  //         setCurrentUser(res.data);
  //       } else {
  //         localStorage.removeItem("jwt");
  //         history.push("/");
  //       }
  //     })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //   }
  // }
  //
  // React.useEffect(() => {
  //   tokenCheck();
  // }, []);
  //
  function handleRegister({email, password, name}) {
    setIsLoading(true);
    register(email, password, name)
      .then((res) => {
        changePopupToInfoTooltip();
        //  setDisabled(true);
      })
      .catch((err) => {
        setRegistrationErr(err.message);
      //  setDisabled(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // function handleLogin({email, password}) {
  //   setIsLoading(true);
  //   login(email, password)
  //         .then((res) => {
  //          if (res && res.token) {
  //            localStorage.setItem('loggedIn', 'true');
  //             setLoggedIn(true);
  //          //   tokenCheck();
  //             closeLoginPopup();
  //           } else {
  //             setRegistrationErr(res.message)
  //           }
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         })
  //         .finally(() => {
  //           setIsLoading(false);
  //         });
  //     }

  //     .then((data) => {
  //       getContent(data)
  //         .then((res) => {
  //           setCurrentUser(res.data);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //           setRegistrationErr(err.message);
  //         });
  //       setLoggedIn(true);
  //       closeLoginPopup();
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       setRegistrationErr(err.message);
  //     });
  // };


  // function handleLogin({email, password}) {
  //   setDisabled(true);
  //   authorize(email, password)
  //     .then(res => {
  //       if (res.data) {
  //         localStorage.setItem('loggedIn', 'true');
  //         setCurrentUser(res.data);
  //         setLoggedIn(true);
  //         closeLoginPopup();
  //       } else {
  //         setRegistrationErr(res.message)
  //       }
  //     })
  //     .catch(error => console.log(error));
  // }

  function handleLogin({email, password}) {
    setIsLoading(true);
    authorize(email, password)
      .then(data => {
        getContent(data)
          .then((res) => setCurrentUser(res.data))
          .catch((err) =>
            setRegistrationErr(err.message))
        setLoggedIn(true);
        closeLoginPopup();
        // setDisabled(true);
      })
      .catch((err) => {
        setRegistrationErr(err.message);
     //   setDisabled(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // React.useEffect(() => {
  //   getContent()
  //     .then(res => {
  //       if (res.data && loggedIn === 'true') {
  //         setCurrentUser(res.data);
  //         setLoggedIn(true);
  //       } else if (loggedIn === 'true') {
  //         localStorage.removeItem('loggedIn');
  //       }
  //     })
  //     .catch(error => console.log(error));
  // }, []);


  const [isMobile, setIsMobile] = React.useState(false);

  function changeBackground() {
    setIsMobile(!isMobile);
  }

  const overlay = `${isMobile ? "mobile-menu_active" : "mobile-menu"}`;

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {pathname === '/' ? (
            <>
              <div className={overlay}></div>
              <div className="app__elem-background">
                <Header
                  onLoginOpen={openLoginPopup}
                  changeBackground={changeBackground}
                  isMobile={isMobile}
                  onSignOut={signOut}
                  loggedIn={loggedIn}
                />
                <SearchForm/>
              </div>
            </>
          ) :
          <Header
            onSignOut={signOut}
            loggedIn={loggedIn}
            changeBackground={changeBackground}
          />
        }
        <Register
          onClose={closeRegisterPopup}
          changePopup={changePopupToLogin}
          changePopupToInfoTooltip={changePopupToInfoTooltip}
          isOpen={isRegisterPopupOpen}
          handleRegister={handleRegister}
          registrationErr={registrationErr}
          setRegistrationErr={setRegistrationErr}
          isLoading={isLoading}
        />
        <Login
          onLogin={handleLogin}
          onClose={closeLoginPopup}
          changePopup={changePopupToRegister}
          isOpen={isLoginPopupOpen}
          registrationErr={registrationErr}
          setRegistrationErr={setRegistrationErr}
          disabled={disabled}
          isLoading={isLoading}
        />
        <InfoTooltip
          onClose={closeTooltipPopup}
          changePopup={changePopupFromInfoTooltip}
          isOpen={isTooltipOpen}
        />
        <Switch>
          <Route exact path="/" onRegister={openRegisterPopup}>
            <Main/>
          </Route>
          <ProtectedRoute
            path="/saved-news"
            loggedIn={loggedIn}
            //   onSignOut={signOut}
            // openLoginPopup={openLoginPopup}
            //isMobile={isMobile}
            //   changeBackground={changeBackground}
            component={SavedNews}
            onLoginOpen={openLoginPopup}
          />
          <Route>
            <Redirect to="/"/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
