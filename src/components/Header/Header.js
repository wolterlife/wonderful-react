import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <img alt="" className="header__logo" src="img/logo-pizza.png" />
        <a href="" className="header__sign-in-link sign-in-link">
          <div className="sign-in-link__wrapper">
            <img alt="" className="sign-in-link__icon" src="img/login.png" />
            <p className="sign-in-link__title">Вход</p>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
