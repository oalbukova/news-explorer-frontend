import React from "react";

import "./NewsCardList.css";
import NotFoundNews from "../NotFoundNews/NotFoundNews";
import NewsCard from "../NewsCard/NewsCard";
import {useLocation} from "react-router-dom";
import { NewsContext } from '../../contexts/NewsContext';

function NewsCardList(props) {
  const { news, savedNews } = React.useContext(NewsContext);
  const {pathname} = useLocation();
  const {
    onShowMore,
    loggedIn,
    onCardClick,
    currentNews,
    isSearchOk,
    isErr
  } = props;

  return (
    <div className="card-list">
      {
        isSearchOk && currentNews.length ? (
          <>
            <h2 className="card-list__title">Результаты поиска</h2>
            <ul className="card-list__cards">
              {currentNews.map((article, index) => (
                <NewsCard
                  article={article}
                  key={index}
                />
              ))}
            </ul>
            {
              currentNews.length !== news.length &&
              (<button className="card-list__btn" type="button" onClick={onShowMore}>
                Показать еще
              </button>)
            }
          </>
        ) : <NotFoundNews
          title='Ничего не найдено'
          text='К сожалению по вашему запросу ничего не найдено.'
        />
      }
      {
        isErr && <NotFoundNews
          title='Во время запроса произошла ошибка.'
          text='Возможно, проблема с соединением или сервер недоступен.
              Подождите немного и попробуйте ещё раз'
        />
      }
    </div>
  )
}

export default NewsCardList;
