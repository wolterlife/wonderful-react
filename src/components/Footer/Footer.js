import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a className="footer__link" href="">
          <p>Правовая информация</p>
        </a>
        <a className="footer__link" href="">
          <p>Обратная связь</p>
        </a>
        <p className="footer__paragraph">NEON PIZZA 2021 - 2022</p>
      </div>
      <div className="footer__social-media-block">
        <Link to="/wonderful-react/admin" className="footer__img-container" href="">
          <img className="footer__img" src="img/footer/facebook.png" alt="facebook" />
        </Link>
        <Link to="/wonderful-react/admin" className="footer__img-container" href="">
          <img className="footer__img" src="img/footer/instagram.png" alt="instagram" />
        </Link>
        <Link to="/wonderful-react/admin" className="footer__img-container" href="">
          <img className="footer__img" src="img/footer/twitter.png" alt="twitter" />
        </Link>
        <Link to="/wonderful-react/admin" className="footer__img-container" href="">
          <img className="footer__img" src="img/footer/youtube.png" alt="youtube" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
