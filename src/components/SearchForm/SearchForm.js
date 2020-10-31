import React from "react";

import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <h1 className="search__title">Что творится в мире?</h1>
      <p className="search__subtitle">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном
        кабинете.
      </p>
      <form className="search__form" method="get" action="#">
        <input
          className="search__input"
          id="search-input"
          type="text"
          required
          placeholder="Введите тему новости"
          name="search"
          pattern="[A-Za-zА-Яа-яЁё -]*"
          minLength="2"
          maxLength="50"
        />
        <button className="search__button" type="submit">
          Искать
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
