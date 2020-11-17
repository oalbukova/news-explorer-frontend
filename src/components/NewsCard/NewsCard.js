import React from "react";
import {NewsContext} from '../../contexts/NewsContext';
import {useLocation} from 'react-router-dom';

import "./NewsCard.css";
import like from "../../images/like.svg";
import likeActive from "../../images/like-active.svg";
import likeHover from "../../images/like-hover.svg";
import btnDel from "../../images/del.svg";
import btnDelHover from "../../images/del-hover.svg";


function NewsCard(props) {
  const {loggedIn, onCardClick, article} = props;
  const {keyword, title, description, publishedAt, url, urlToImage, source} = article;
  const [isHover, setIsHover] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const {savedNews} = React.useContext(NewsContext);
  const {pathname} = useLocation();

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

  const tooltipClassName = `${
    pathname === "/" ? "tooltip__text" : "tooltip__text tooltip__text_save-news"
  }`;

  const tooltipText =
    (!loggedIn)
      ? 'Войдите, чтобы сохранять статьи'
      : `${isSaved && 'Убрать из сохранённых'}`;

  const btnImg = `${pathname === "/" ? like : btnDel}`;
  const btnImgHover = `${pathname === "/" ? likeHover : btnDelHover}`;
  const btnHover = `${isHover ? btnImgHover : btnImg}`;
  const btnActive = `${isClicked && loggedIn || isSaved ? likeActive : btnHover}`;
  const btnClick = `${pathname === "/" ? btnActive : btnHover}`;

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
        src={urlToImage} alt={title}
      />
      {pathname === '/saved-news' &&
      <span className="card__tag">{keyword}</span>
      }
      <button
        type='button'
        className='tooltip'
        onMouseEnter={handleLikeHover}
        onMouseLeave={handleLikeHover}
        onClick={handleCardClick}
        style={{backgroundImage: "url(" + btnClick + ")"}}
      >
        {(!loggedIn || (loggedIn && isSaved)) &&
        <span className={tooltipClassName}>{tooltipText}</span>
        }
      </button>
      <a className="card__caption" href={url} rel="noreferrer noopener" target='_blank'>
        <div className='card__info'>
          <span className="card__date">{fullDate}</span>
          <h3 className="card__title">{title}</h3>
          <p className="card__text">{description}</p>
        </div>
        <span className="card__sourse">{pathname === '/' ? source.name : source}</span>
      </a>
    </li>
  );
}

export default NewsCard;
