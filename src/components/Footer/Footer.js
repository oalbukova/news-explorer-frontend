import React from "react";
import {Link} from "react-router-dom";
import fb from "../../images/fb.svg";
import github from "../../images/github.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">
        &#169; 2020 Supersite, Powered by News API
      </p>
      <nav className="footer__content-social">
        <ul className="footer__links footer__links_words">
          <li>
            <Link className="footer__link" to="/">
              Главная
            </Link>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://praktikum.yandex.ru/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Яндекс.Практикум
            </a>
          </li>
        </ul>
        <ul className="footer__links footer__links_social">
          <li>
            <a
              className="footer__icon footer__icon_github"
              href="https://github.com/oalbukova/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="footer__icon footer__icon_fb"
                src={github}
                alt="github"
                lang="en"
              />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/profile.php?id=100000391942588/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="footer__icon footer__icon_fb"
                src={fb}
                alt="facebook"
                lang="en"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
