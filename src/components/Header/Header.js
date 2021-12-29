import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';
import SignInLink from '../SignInLink';

const Header = ({ isAuthorized }) => {
  return (
    <header className="header">
      <div className="header__container">
        <img alt="" className="header__logo" src="img/logo-pizza.png" />
        {!isAuthorized && <SignInLink />}
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};
