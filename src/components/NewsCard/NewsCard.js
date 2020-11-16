import React from "react";

import "./NewsCard.css";
import { NewsContext } from '../../contexts/NewsContext';
import like from "../../images/like.svg";
import likeActive from "../../images/like-active.svg";
import likeHover from "../../images/like-hover.svg";
import btnDel from "../../images/del.svg";
import btnDelHover from "../../images/del-hover.svg";
import { useLocation } from "react-router-dom";

function NewsCard(props) {
  const { pathname } = useLocation();
  const { loggedIn, onCardClick, article } = props;
  const { keyword, title, description, publishedAt, url, urlToImage, source } = article;
  const { savedNews } = React.useContext(NewsContext);

  const isSaved = loggedIn
    && savedNews.some((i) => i.publishedAt === article.publishedAt
      && i.title === article.title);
  const dayOptions = {
    month: 'long',
    day: 'numeric',
  };
  const date = new Date(publishedAt);
  const dayAndMonth = date.toLocaleString('ru', dayOptions);
  const fullDate = dayAndMonth + ', ' + date.getFullYear();
  const [isHover, setIsHover] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const tooltipClassName = `${
    pathname === "/" ? "tooltip__text" : "tooltip__text tooltip__text_save-news"
  }`;
  const btnImg = `${pathname === "/" ? like : btnDel}`;
  const btnImgHover = `${pathname === "/" ? likeHover : btnDelHover}`;
  const btnHover = `${isHover ? btnImgHover : btnImg}`;
  const btnActive = `${isClicked ? likeActive : btnHover}`;
  const btnClick = `${pathname === "/" ? btnActive : btnHover}`;
  const tagVisibility = `${pathname === "/" ? "none" : "block"}`;
  // const tooltipText = `${
  //   pathname === "/"
  //     ? "Войдите, чтобы сохранять статьи"
  //     : "Убрать из сохранённых"
  // }`;
  const tooltipText =
    (!loggedIn)
      ? 'Войдите, чтобы сохранять статьи'
      : `${isSaved && 'Убрать из сохранённых'}`;
  function handleLikeHover() {
    setIsHover(!isHover);
  }
  function handleCardClick() {
    onCardClick(article);
    setIsClicked(!isClicked);
  }

  return (
    <li className="card">
      <img
        className="card__img"
        src={urlToImage}
        alt={title}
      />
      <span className="card__tag" style={{ display: tagVisibility }}>
        {keyword}
      </span>
      <button
        className="tooltip"
        type="button"
        onClick={handleCardClick}
        onMouseEnter={handleLikeHover}
        onMouseLeave={handleLikeHover}
        style={{ backgroundImage: "url(" + btnClick + ")" }}
      >
        <span className={tooltipClassName}>{tooltipText}</span>
      </button>
      <a className="card__caption" href={url} rel="noreferrer noopener">
        <div className="card__info">
          <span className="card__date">{fullDate}</span>
          <h3 className="card__title">{title}</h3>
          <p className="card__text">{description}</p>
        </div>
        <span className="card__sourse">{source.name}</span>
      </a>
    </li>
  );
}

export default NewsCard;
