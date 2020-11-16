import React from "react";
import {useFormWithValidation} from "../../utils/useFormWithValidation";
import "./SearchForm.css";

function SearchForm(props) {
  const { onSearch, isLoading, onChange, value } = props;
  const searchField = useFormWithValidation();
  function handleSubmit(evt) {
    const { value, setErrMsg } = searchField;
    evt.preventDefault();
    onSearch(value, setErrMsg);
  };

  return (
    <section className="search">
      <h1 className="search__title">Что творится в мире?</h1>
      <p className="search__subtitle">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном
        кабинете.
      </p>
      <form className="search__form" method="get" action="#" onSubmit={handleSubmit}>
        <input
          className="search__input"
          id="search-input"
          type="text"
          required
          value={value || ""}
          onChange={onChange}
          {...searchField}
          placeholder="Введите тему новости"
          name="search"
          pattern="[A-Za-zА-Яа-яЁё -]*"
          minLength="2"
          maxLength="50"
          disabled={isLoading}
        />
        <button className="search__button" type="submit" disabled={isLoading}>
          Искать
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
