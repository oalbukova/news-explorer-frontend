import React from "react";

import {NewsContext} from "../../contexts/NewsContext";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";


function SavedNews(props) {
  const {loggedIn, onCardClick} = props;
  const {savedNews} = React.useContext(NewsContext);

  return (
    <>
      <SavedNewsHeader loggedIn={loggedIn}/>
      {savedNews.length > 0 ? (
        <NewsCardList
          loggedIn={loggedIn}
          onCardClick={onCardClick}
          articlesToRender={savedNews}
        />
      ) : null}
    </>
  );
}

export default SavedNews;
