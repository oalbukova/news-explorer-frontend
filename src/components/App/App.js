import React from "react";
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { NewsContext } from "../../contexts/NewsContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"; // импортируем HOC
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as mainApi from "../../utils/MainApi";
import * as newsApi from "../../utils/NewsApi";
import "./App.css";

function App() {
  const escape = require("escape-html");
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);

  //  const [selectedCard, setSelectedCard] = React.useState(false);
  const [news, setNews] = React.useState([]);
  const [savedNews, setSavedNews] = React.useState([]);
  const [currentRow, setCurrentRow] = React.useState(0);
  const [searchErr, setSearchErr] = React.useState("");
  const [isSearchOk, setSearchOk] = React.useState(false);
  // const [cardDelete, setCardDelete] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  //  const [loginState, setLoginState] = React.useState(false);
  // const [disabled, setDisabled] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [registrationErr, setRegistrationErr] = React.useState("");
  // const [searchErr, setSearchQuery] = React.useState('');
  // const [searchErr, setSearchErr] = React.useState('');
  const history = useHistory();
  const { pathname } = useLocation();

  // function handleLoginState(state) {
  //   setLoginState(state);
  // }

  function clearSearchErr() {
    setSearchErr("");
  }

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
    setRegistrationErr("");
  }

  function closeLoginPopup() {
    setIsLoginPopupOpen(false);
    setRegistrationErr("");
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

  function handleShowMore() {
    setCurrentRow(currentRow + 1);
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .getContent(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res.data);
          getSavedNews();
        })
        .catch((err) => console.log(err));
    }
  }, []);

  React.useEffect(() => {
    const localStorageNews = JSON.parse(localStorage.getItem("news"));
    if (localStorageNews && localStorageNews.length) {
      setNews(localStorageNews);
      setSearchOk(true);
    }
  }, []);

  function signOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/");
    setCurrentUser({});
  }

  function handleSearchNews(keyword) {
    if (!keyword) {
      setSearchErr("Нужно ввести ключевое слово");
      return;
    }
    setIsLoading(true);
    setSearchOk(false);
    setNews([]);
    setCurrentRow(0);
    newsApi
      .getNews(keyword)
      .then((res) => {
        const news = res.articles.map((item) => ({ ...item, keyword }));
        setNews(news);
        localStorage.setItem("news", JSON.stringify(news));
        setSearchOk(true);
        //  setSearchErr(false);
      })
      .catch((err) => {
        console.log(`Ошибка при загрузке новостей: ${err}`);
        //  setSearchErr(true);
      })
      .finally(() => setIsLoading(false));
  }

  function handleRegister({ email, password, name }) {
    setIsLoading(true);
    mainApi
      .register(email, escape(password), name)
      .then((res) => {
        if (res.data) {
          changePopupToInfoTooltip();
        } else {
          setRegistrationErr(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);
    mainApi
      .authorize(email, escape(password))
      .then((data) => {
        mainApi
          .getContent(data)
          .then((res) => setCurrentUser(res.data))
          .catch((err) => setRegistrationErr(err.message));
        setLoggedIn(true);
        closeLoginPopup();
        getSavedNews();
      })
      .catch((err) => {
        setRegistrationErr(err.message);
      })
      .finally(() => setIsLoading(false));
  }

  // function handleLogin({email, password}) {
  //   setIsLoading(true);
  //   mainApi.authorize(email, escape(password))
  //     .then(data => {
  //       if (res.data) {
  //         localStorage.setItem('loggedIn', 'true');
  //         setCurrentUser(res.data);
  //         setLoggedIn(true);
  //         closeLoginPopup();
  //       } else {
  //         setRegistrationErr(res.message);
  //         setDisabled(true);
  //       }
  //     })
  //     .catch(error => console.log(error))
  //     .finally(() => setIsLoading(false));
  // }
  function getSavedNews() {
    mainApi
      .getSavedNews()
      .then((news) => setSavedNews(news.data))
      .catch((err) =>
        console.log(`Ошибка при загрузке сохранённых новостей: ${err.message}`)
      );
  }

  function handleArticleClick(article) {
    if (!loggedIn) return setIsRegisterPopupOpen(true);
    const saved = savedNews.find(
      (i) => i.publishedAt === article.publishedAt && i.title === article.title
    );
    if (!saved) {
      mainApi
        .saveArticle(article)
        .then(newArticle => setSavedNews([newArticle.data, ...savedNews]))
        .catch((err) => console.log(err));
      return;
    }
    handleDeleteArticle(saved);
  }

  function handleDeleteArticle(article) {
    mainApi
      .deleteArticle(article._id)
      .then(() =>
        setSavedNews(savedNews.filter((item) => item._id !== article._id))
      )
      .catch((err) => console.log(`Ошибка при удалении карточки: ${err}`));
  }

  function changeBackground() {
    setIsMobile(!isMobile);
  }

  const overlay = `${isMobile ? "mobile-menu_active" : "mobile-menu"}`;

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <NewsContext.Provider value={{ news, savedNews }}>
        <div className="app">
          {pathname === "/" ? (
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
                <SearchForm
                  onSearch={handleSearchNews}
                  isLoading={isLoading}
                  searchErr={searchErr}
                  clearSearchErr={clearSearchErr}
                />
              </div>
            </>
          ) : (
            <Header
              isMobile={isMobile}
              onSignOut={signOut}
              loggedIn={loggedIn}
              changeBackground={changeBackground}
            />
          )}
          <Switch>
            <Route exact path="/" onRegister={openRegisterPopup}>
              <Main
                onSearch={handleSearchNews}
                loggedIn={loggedIn}
                isLoading={isLoading}
                isError={searchErr}
                isSearchOk={isSearchOk}
                currentRow={currentRow}
                onCardClick={handleArticleClick}
                onShowMore={handleShowMore}
              />
            </Route>
            <ProtectedRoute
              path="/saved-news"
              onCardClick={handleDeleteArticle}
              loggedIn={loggedIn}
              component={SavedNews}
              openLoginPopup={openLoginPopup}
            />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
          <Footer />
          <Register
            onClose={closeRegisterPopup}
            isOpen={isRegisterPopupOpen}
            changePopup={changePopupToLogin}
            changePopupToInfoTooltip={changePopupToInfoTooltip}
            handleRegister={handleRegister}
            registrationErr={registrationErr}
            setRegistrationErr={setRegistrationErr}
            isLoading={isLoading}
          />
          <Login
            onClose={closeLoginPopup}
            isOpen={isLoginPopupOpen}
            changePopup={changePopupToRegister}
            onLogin={handleLogin}
            registrationErr={registrationErr}
            setRegistrationErr={setRegistrationErr}
            isLoading={isLoading}
          />
          <InfoTooltip
            onClose={closeTooltipPopup}
            changePopup={changePopupFromInfoTooltip}
            isOpen={isTooltipOpen}
          />
        </div>
      </NewsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
