import React from 'react';
import './HeaderLink.scss';
import { Link } from 'react-router-dom';

const HeaderLink = () => {
  let link = '/signIn';
  let title = 'Вход';
  const data = JSON.parse(localStorage.getItem('currentUser'));
  if (data != null) {
    link = '/profile';
    title = data.firstName;
  }
  return (
    <Link to={link} className="sign-in-link">
      <div className="sign-in-link__wrapper">
        <img alt="" className="sign-in-link__icon" src="img/login.png" />
        <p className="sign-in-link__title">{title}</p>
      </div>
    </Link>
  );
};

export default HeaderLink;
