import React from "react";

import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import { NewsContext } from "../../contexts/NewsContext";

function SavedNews(props) {
  const { loggedIn, onCardClick } = props;
  const { savedNews } = React.useContext(NewsContext);

  return (
    <>
      <SavedNewsHeader loggedIn={loggedIn} />
      <NewsCardList
        loggedIn={loggedIn}
        onCardClick={onCardClick}
        newsToRender={savedNews}
      />
    </>
  );
}

export default SavedNews;
