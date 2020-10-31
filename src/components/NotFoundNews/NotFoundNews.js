import React from "react";

import './NotFoundNews.css';
import noResult from '../../images/not-found.svg'

function NotFoundNews() {

  return (
    <section className='not-found-news'>
      <img className='not-found-news__img' src={noResult} alt='Ничего не найдено'/>
      <h3 className='not-found-news__title'>Ничего не найдено</h3>
      <p className='not-found-news__text'>К сожалению по вашему запросу
        ничего не найдено.</p>
    </section>
  )
    ;
}

export default NotFoundNews;
