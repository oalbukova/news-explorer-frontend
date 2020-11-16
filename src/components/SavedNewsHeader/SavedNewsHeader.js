import React from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import { NewsContext } from '../../contexts/NewsContext';

import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  const currentUser = React.useContext(CurrentUserContext);
  const { savedNews } = React.useContext(NewsContext);

  return (
    <section className="news-info">
      <p className="news-info__subtitle">Сохранённые статьи</p>
      <h3 className="news-info__title">{currentUser.name}, у вас {savedNews.length} сохранённых статей</h3>
      <p className="news-info__key">
        По ключевым словам:&nbsp;
        <span className="news-info__key_bold">
           и 2-м другим
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
