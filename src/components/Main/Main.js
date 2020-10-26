import React from "react";
import NewsCardList from '../NewsCardList/NewsCardList'

import './Main.css';
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import img08 from '../../images/image08.jpg'
import img04 from '../../images/image04.jpg'
import img07 from '../../images/image07.jpg'

function Main() {

  return (
    <div className='main'>
      <Preloader/>
      <NewsCardList>
        <NewsCard
          img={img08}
          tag=''
          visibility='0'
          action = 'Войдите, чтобы сохранять статьи'
          size = '10px'
          date='2 августа, 2019'
          title='Национальное достояние – парки'
          text='В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'
          source='Лента.ру'
        />
        <NewsCard
          img={img04}
          tag='Природа'
          visibility='0'
          action = 'Войдите, чтобы сохранять статьи'
          size = '10px'
          date='2 августа, 2019'
          title='Лесные огоньки: история одной фотографии'
          text='Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
из местных чудес природы.'
          source='Медуза'
        />
        <NewsCard
          img={img07}
          tag='Природа'
          visibility='1'
          action = 'Войдите, чтобы сохранять статьи'
          size = '10px'
          date='2 августа, 2019'
          title='«Первозданная тайга»: новый фотопроект Игоря Шпиленка'
          text='Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где теперь'
          source='Риа'
        />
      </NewsCardList>
      <About/>
    </div>
  );
}

export default Main;
