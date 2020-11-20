import React from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {NewsContext} from '../../contexts/NewsContext';
import {getSavedArticlesText, getKeywordsText} from '../../utils/utils'

import "./SavedNewsHeader.css";

function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const {savedNews} = React.useContext(NewsContext);
  const {loggedIn} = props;

  const keywords = loggedIn ? savedNews.map(item => item.keyword) : [];

  const keywordsSorted = [...new Set(keywords)]
    .map(value => {
      const item = {};
      item.keyword = value;
      item.quantity = keywords.filter(str => str === value).length;
      return item;
    })
    .sort((a, b) => b.quantity - a.quantity)
    .map(item => item.keyword);

  const keywordsToRender = keywordsSorted.length <= 3
    ? keywordsSorted.join(', ')
    : `${keywordsSorted
      .slice(0, 2)
      .join(', ')} и ${keywordsSorted
      .slice(2)
      .length}${getKeywordsText(keywordsSorted.length - 2)}`;

  return (
    <section className="news-info">
      <p className="news-info__subtitle">Сохранённые статьи</p>
      <h3 className="news-info__title">{currentUser.name}, у
        вас {savedNews.length > 0 ? savedNews.length + ' ' : 'нет '}
        {getSavedArticlesText(savedNews.length)}</h3>
      {(savedNews.length > 0) ?
        <p className="news-info__key">
          По ключевым словам:&nbsp;
          <span className="news-info__key_bold">
          {keywordsToRender}
        </span>
        </p>
        : null}
    </section>
  );
}

export default SavedNewsHeader;
