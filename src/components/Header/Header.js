import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';
import SignInLink from '../SignInLink';
import ButtonBack from '../ButtonBack/ButtonBack';

const Header = ({ showSignIn, showBack }) => {
  return (
    <header className="header">
      <div className="header__container">
        <img alt="" className="header__logo" src="img/logo-pizza.png" />
        {showSignIn && <SignInLink />}
        {showBack && <ButtonBack />}
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  showSignIn: PropTypes.bool.isRequired,
  showBack: PropTypes.bool.isRequired,
};
