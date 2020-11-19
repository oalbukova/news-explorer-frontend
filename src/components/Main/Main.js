import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NotFoundNews from "../NotFoundNews/NotFoundNews";
import About from "../About/About";
import { NewsContext } from "../../contexts/NewsContext";
import { NEWS_IN_ROW } from "../../utils/config";
import "./Main.css";

export default function Main(props) {
  const {
    loggedIn,
    isLoading,
    onCardClick,
    onShowMore,
    isSearchOk,
    currentRow,
    isErr,
  } = props;

  const { news, savedNews } = React.useContext(NewsContext);
  const articlesToRender = news.slice(0, (currentRow + 1) * NEWS_IN_ROW);

  return (
    <div className="main">
      {isLoading && <Preloader />}
      {isSearchOk && (
        <section className="main__card-list">
          {articlesToRender.length ? (
            <>
              <h2 className="main__card-title">Результаты поиска</h2>
              <NewsCardList
                articlesToRender={articlesToRender}
                loggedIn={loggedIn}
                savedNews={savedNews}
                onCardClick={onCardClick}
                currentRow={currentRow}
              />
              {articlesToRender.length !== news.length && (
                <button
                  className="main__btn"
                  type="button"
                  onClick={onShowMore}
                >
                  Показать еще
                </button>
              )}
            </>
          ) : (
            <NotFoundNews
              title="Ничего не найдено"
              text="К сожалению по вашему запросу ничего не найдено."
            />
          )}
        </section>
      )}
      {isErr && (
        <NotFoundNews
          title="Во время запроса произошла ошибка."
          text="Возможно, проблема с соединением или сервер недоступен.
              Подождите немного и попробуйте ещё раз"
        />
      )}
      <About />
    </div>
  );
}
