import React from 'react';
import './SignInLink.scss';

const SignInLink = () => {
  return (
    <a href="" className="header__sign-in-link sign-in-link">
      <div className="sign-in-link__wrapper">
        <img alt="" className="sign-in-link__icon" src="img/login.png" />
        <p className="sign-in-link__title">Вход</p>
      </div>
    </a>
  );
};

export default SignInLink;
