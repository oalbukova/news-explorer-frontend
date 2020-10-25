import React from "react";

import './NewsCard.css';
import like from '../../images/like.svg'
import likeActive from '../../images/like-active.svg'
import likeHover from '../../images/like-hover.svg'

function NewsCard(props) {

  const [isLiked, setIsLiked] = React.useState(false);
  const btnActive = `${isLiked ? likeActive : like}`;

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  const [isHover, setIsHover] = React.useState(false);
  let btnHover = `${isHover ? likeHover : btnActive}`;

  function handleLikeHover() {
    setIsHover(!isHover);
  }

  return (
    <li className="card">
      <div className="card__img" style={{backgroundImage: 'url(' + props.img + ')'}}>
        <span className="card__tag" style={{opacity: props.visibility}}>{props.tag}</span>
        <button className='tooltip' type="button" onClick={handleLikeClick}
                onMouseEnter={handleLikeHover}
                onMouseLeave={handleLikeHover}
                style={{backgroundImage: 'url(' + btnHover + ')'}} >
            <span className='tooltip__text'  style={{fontSize: props.size}}>{props.action}</span>
        </button>
      </div>
      <div className="card__caption">
        <div className="card__info">
          <span className='card__date'>{props.date}</span>
          <h3 className="card__title">{props.title}</h3>
          <p className="card__text">{props.text}</p>
        </div>
        <span className='card__sourse'>{props.source}</span>
      </div>
    </li>
  );
}

export default NewsCard;
