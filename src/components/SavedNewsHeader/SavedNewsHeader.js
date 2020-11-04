import React from "react";

import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <section className="news-info">
      <p className="news-info__subtitle">Сохранённые статьи</p>
      <h3 className="news-info__title">Грета, у вас 5 сохранённых статей</h3>
      <p className="news-info__key">
        По ключевым словам:
        <span className="news-info__key_bold">
          {" "}
          Природа, Тайга и 2-м другим
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
