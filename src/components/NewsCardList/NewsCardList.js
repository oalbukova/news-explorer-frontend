import React from "react";

import './NewsCardList.css';


function NewsCardList(props) {

  return (
    <section className='card-list'>
      <h2 className='card-list__title'>Результаты поиска</h2>
      <ul className="card-list__cards">
        {props.children}
      </ul>
    </section>
  );
}

export default NewsCardList;
