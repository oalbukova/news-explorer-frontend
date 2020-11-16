import React from "react";
import {NewsContext} from "../../contexts/NewsContext";
import {NEWS_IN_ROW} from "../../utils/config"
import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";

function Main(props) {
  const {
    currentRow,
    isLoading,
    onSearch,
    loggedIn,
    onCardClick,
    onShowMore,
    isSearchOk,
    isErr
  } = props;
  const {news, savedNews} = React.useContext(NewsContext);
  const currentNews = news.slice(0, (currentRow + 1) * NEWS_IN_ROW);

  return (
    <div className="main">
      {isLoading ? (<Preloader/>) :
        <NewsCardList
          isSearchOk={isSearchOk}
          currentNews={currentNews}
          loggedIn={loggedIn}
          savedNews={savedNews}
          onCardClick={onCardClick}
          currentRow={currentRow}
          onShowMore={onShowMore}
        />
      }
      <About/>
    </div>
  );
}

export default Main;
