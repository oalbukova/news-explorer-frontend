import React from "react";

import "./NewsCard.css";
import like from "../../images/like.svg";
import likeActive from "../../images/like-active.svg";
import likeHover from "../../images/like-hover.svg";
import btnDel from "../../images/del.svg";
import btnDelHover from "../../images/del-hover.svg";
import { useLocation } from "react-router-dom";

function NewsCard(props) {
  const { pathname } = useLocation();
  const [isHover, setIsHover] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  const action = `${
    pathname === "/"
      ? "Войдите, чтобы сохранять статьи"
      : "Убрать из сохранённых"
  }`;
  const tooltipClassName = `${
    pathname === "/" ? "tooltip__text" : "tooltip__text tooltip__text_save-news"
  }`;
  const btnImg = `${pathname === "/" ? like : btnDel}`;
  const btnImgHover = `${pathname === "/" ? likeHover : btnDelHover}`;
  const btnHover = `${isHover ? btnImgHover : btnImg}`;
  const btnActive = `${isLiked ? likeActive : btnHover}`;
  const btnClick = `${pathname === "/" ? btnActive : btnHover}`;
  const tagVisibility = `${pathname === "/" ? "none" : "block"}`;

  function handleLikeHover() {
    setIsHover(!isHover);
  }

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return (
    <li className="card">
      <img
        className="card__img"
        src={props.img}
        alt={"Изображение " + props.tag}
      />
      <span className="card__tag" style={{ display: tagVisibility }}>
        {props.tag}
      </span>
      <button
        className="tooltip"
        type="button"
        onClick={handleLikeClick}
        onMouseEnter={handleLikeHover}
        onMouseLeave={handleLikeHover}
        style={{ backgroundImage: "url(" + btnClick + ")" }}
      >
        <span className={tooltipClassName}>{action}</span>
      </button>
      <a className="card__caption" href={props.src} rel="noreferrer noopener">
        <div className="card__info">
          <span className="card__date">2 августа, 2019</span>
          <h3 className="card__title">{props.title}</h3>
          <p className="card__text">{props.text}</p>
        </div>
        <span className="card__sourse">{props.source}</span>
      </a>
    </li>
  );
}

export default NewsCard;
