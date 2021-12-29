import React from 'react';
import './HeaderWithButton.scss';
import SignInLink from '../SignInLink';

const HeaderWithButton = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img alt="" className="header__logo" src="img/logo-pizza.png" />
        <SignInLink />
      </div>
    </header>
  );
};

export default HeaderWithButton;
