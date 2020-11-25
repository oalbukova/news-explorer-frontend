import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
  const {isLoading, onSearch, errSearchInput, clearSearchErr} = props;

  const keyword = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(keyword.current.value);
  }

  React.useEffect(() => {
    const localKeyword = localStorage.getItem('keyword');
    if (localKeyword) {
      keyword.current.value = localKeyword;
    }
  })

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
          ref={keyword}
          placeholder="Введите тему новости"
          name="search"
          disabled={isLoading}
          onChange={clearSearchErr}
          //required
        />
        <button className="search__button" type="submit" disabled={isLoading}>
          Искать
        </button>
      </form>
      <span
        className="search__span-error"
      >{errSearchInput}</span>
    </section>
  );
}

export default SearchForm;
