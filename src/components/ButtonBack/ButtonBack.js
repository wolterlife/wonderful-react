import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonBack.scss';

const ButtonBack = () => {
  return (
    <Link to="/" className="button-back">
      <img alt="Назад" className="button_back__image" src="img/back.png" />
    </Link>
  );
};

export default ButtonBack;
