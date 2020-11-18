import React from "react";
import {NewsContext} from "../../contexts/NewsContext";
import {useLocation} from "react-router-dom";

import "./NewsCard.css";

function NewsCard(props) {
  const {loggedIn, onCardClick, article} = props;
  const {keyword, title, description, publishedAt, url, urlToImage, source} = article;
  const [isClicked, setIsClicked] = React.useState(false);
  const {savedNews} = React.useContext(NewsContext);
  const {pathname} = useLocation();

  const isSaved = loggedIn
    && savedNews.some((i) => i.publishedAt === article.publishedAt
      && i.title === article.title);

  const dayOptions = {
    month: "long",
    day: "numeric",
  };
  const date = new Date(publishedAt);
  const dayAndMonth = date.toLocaleString("ru", dayOptions);
  const fullDate = dayAndMonth + ", " + date.getFullYear();

  const tooltipClassName = `${
    pathname === "/" ? "tooltip__text" : "tooltip__text tooltip__text_save-news"
  }`;

  const tooltipImgClassName = `${
    pathname === "/" ? `"tooltip tooltip_save" ${isSaved ? "tooltip tooltip_save-active" : "tooltip tooltip_save"}` : "tooltip tooltip_trash"
  }`;

  const tooltipText =
    (!loggedIn)
      ? "Войдите, чтобы сохранять статьи"
      : `${isSaved && "Убрать из сохранённых"}`;

  function handleCardClick() {
    onCardClick(article);
    setIsClicked(!isClicked);
  }

  return (
    <li className="card">
      <img
        className="card__img"
        src={urlToImage} alt={title}
      />
      {pathname === "/saved-news" &&
      <span className="card__tag">{keyword}</span>
      }
      <button
        type="button"
        className={tooltipImgClassName}
        onClick={handleCardClick}
      >
        {(!loggedIn || (loggedIn && isSaved)) &&
        <span className={tooltipClassName}>{tooltipText}</span>
        }
      </button>
      <a className="card__caption" href={url} rel="noreferrer noopener" target="_blank">
        <div className="card__info">
          <span className="card__date">{fullDate}</span>
          <h3 className="card__title">{title}</h3>
          <p className="card__text">{description}</p>
        </div>
        <span className="card__sourse">{pathname === "/" ? source.name : source}</span>
      </a>
    </li>
  );
}

export default NewsCard;
