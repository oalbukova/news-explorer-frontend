import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import img08 from "../../images/image08.jpg";
import img04 from "../../images/image04.jpg";
import img07 from "../../images/image07.jpg";

function Main() {
  return (
    <div className="main">
      <Preloader />
      <NewsCardList>
        <NewsCard
          img={img08}
          src="https://lenta.ru/"
          title="Национальное достояние – парки"
          text="В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе."
          source="Лента.ру"
        />
        <NewsCard
          img={img04}
          src="https://meduza.io/"
          title="Лесные огоньки: история одной фотографии"
          text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
из местных чудес природы."
          source="Медуза"
        />
        <NewsCard
          img={img07}
          src="https://ria.ru/"
          title="«Первозданная тайга»: новый фотопроект Игоря Шпиленка"
          text="Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где теперь"
          source="Риа"
        />
      </NewsCardList>
      <About />
    </div>
  );
}

export default Main;
