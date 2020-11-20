
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

export default function NewsCardList(props) {
  const { loggedIn, onCardClick, articlesToRender, savedNews } = props;

  return (
    <ul className="card-list__cards">
      {articlesToRender.map((article, index) => (
        <NewsCard
          article={article}
          key={index}
          loggedIn={loggedIn}
          savedNews={savedNews}
          onCardClick={onCardClick}
        />
      ))}
    </ul>
  );
}
