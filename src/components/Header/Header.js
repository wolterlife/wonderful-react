import React from 'react';
import './Header.scss';
import SignInLink from '../SignInLink';

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <img alt="" className="header__logo" src="img/logo-pizza.png" />
        <SignInLink />
      </div>
    </header>
  );
};

export default Header;
