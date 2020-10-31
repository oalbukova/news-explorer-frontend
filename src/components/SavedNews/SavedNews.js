import React from "react";

import './SavedNews.css';
import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import img06 from "../../images/image06.jpg";
import img01 from "../../images/image01.jpg";
import img05 from "../../images/image05.jpg";


function SavedNews() {

  return (
    <>
      <SavedNewsHeader/>
      <NewsCardList>
        <NewsCard
          img={img06}
          tag='Природа'
          src='https://zen.yandex.ru/'
          title='Национальное достояние – парки'
          text='В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'
          source='Дзен'
        />
        <NewsCard
          img={img01}
          tag='Природа'
          src='https://www.afisha.ru/'
          title='Лесные огоньки: история одной фотографии'
          text='Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
из местных чудес природы.'
          source='Афиша'
        />
        <NewsCard
          img={img05}
          tag='Тайга'
          src='https://zona.media/'
          title='«Первозданная тайга»: новый фотопроект Игоря Шпиленка'
          text='Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где теперь'
          source='Медиазона'
        />
        <NewsCard
          img={img06}
          tag='Парки'
          src='https://zen.yandex.ru/'
          title='Национальное достояние – парки'
          text='В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'
          source='Дзен'
        />
        <NewsCard
          img={img01}
          tag='Фотография'
          src='https://www.afisha.ru/'
          title='Лесные огоньки: история одной фотографии'
          text='Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
из местных чудес природы.'
          source='Афиша'
        />
      </NewsCardList>
    </>
  );
}

export default SavedNews;
