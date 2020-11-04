import React from "react";

import "./NewsCardList.css";
import NotFoundNews from "../NotFoundNews/NotFoundNews";
import { useLocation } from "react-router-dom";

function NewsCardList(props) {
  const { pathname } = useLocation();
  return (
    <div className="card-list">
      {pathname === "/" ? (
        <>
          <NotFoundNews />
          <h2 className="card-list__title">Результаты поиска</h2>
          <ul className="card-list__cards">{props.children}</ul>
          <button className="card-list__btn" type="button">
            Показать еще
          </button>
        </>
      ) : (
        <ul className="card-list__cards">{props.children}</ul>
      )}
    </div>
  );
}

export default NewsCardList;
