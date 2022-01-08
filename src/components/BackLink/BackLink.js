import React from 'react';
import { Link } from 'react-router-dom';
import './BackLink.scss';

const BackLink = () => {
  return (
    <Link to="/" className="button-back">
      <img alt="Назад" className="button_back__image" src="img/back.png" />
    </Link>
  );
};

export default BackLink;
