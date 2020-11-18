import React from "react";

import "./NotFoundNews.css";
import noResult from "../../images/not-found.svg";

function NotFoundNews(props) {
  const {title, text} = props

  return (
    <section className="not-found-news">
      <img
        className="not-found-news__img"
        src={noResult}
        alt={title}
      />
      <h3 className="not-found-news__title">{title}</h3>
      <p className="not-found-news__text">{text}</p>
    </section>
  );
}

export default NotFoundNews;
