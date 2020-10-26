import React from "react";

import './NewsCardList.css';
import NotFoundNews from '../NotFoundNews/NotFoundNews'

function NewsCardList(props) {
  return (

    <section className='card-list'>
      <NotFoundNews/>
      <h2 className='card-list__title'>Результаты поиска</h2>
      <ul className="card-list__cards">
        {props.children}
      </ul>
      <button className='card-list__btn' type='button'>Показать еще</button>
    </section>
  )
    ;
}

export default NewsCardList;
