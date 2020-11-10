import React from "react";

import me from "../../images/me.jpg";
import "./About.css";

function About() {
  return (
    <section className="about">
      <img className="about__img" alt="Фото автора" src={me} />
      <div className="about__info">
        <h3 className="about__title">Об авторе</h3>
        <p className="about__text">
          Меня зовут Ольга Альбукова и этот сайт - моя дипломная работа по
          профессии Веб-разработчик на Веб-факультете Яндекс.Практикум.
        </p>
        <p className="about__text">
          Обучение в Яндекс.Практикум позволило мне за 10 месяцев с 0 освоить:
        </p>
        <ul className="about__description">
          <li className="about__description-item">
            Кроссбраузерную и adaptive/responsive верстку (HTML, CSS) интернет
            приложений по методологии БЭМ.
          </li>
          <li className="about__description-item">
            Современные возможности языка JavaScript для программирования
            интерфейса пользователя и динамики сайта в объектно-ориентированной
            парадигме.
          </li>
          <li className="about__description-item">React.</li>
          <li className="about__description-item">
            Бэкэнд проекта (Node.js, Express.js, MongoDB, Nginx).
          </li>
          <li className="about__description-item">Сборку с помощью Webpack.</li>
          <li className="about__description-item">
            Диплой сайт на удаленный сервер.
          </li>
          <li className="about__description-item">
            Различные инструменты для разработки и отладки ПО (WebStorm, VSCode,
            Git, Figma, Avocode, dev tools, Postman).
          </li>
          <li className="about__description-item">
            Линтинг кода при помощи ESLint и стиль синтаксиса Airbnb.
          </li>
          <li className="about__description-item">
            Навыки коммуникаций в среде взаимодействия разработчиков Slack.
          </li>
          <li className="about__description-item">
            Четкое представление понятие дедлайн))))
          </li>
        </ul>
        <p className="about__text">
          Спасибо всей команде Яндекс.Практикум за отличный обучающий продукт!
        </p>
      </div>
    </section>
  );
}

export default About;
