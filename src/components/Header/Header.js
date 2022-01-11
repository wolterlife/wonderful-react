import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';
import HeaderLink from '../HeaderLink';
import BackLink from '../BackLink/BackLink';

const Header = ({ isSignInVisible, isBackLinkVisible }) => {
  return (
    <header className="header">
      <div className="header__container">
        <img alt="" className="header__logo" src="img/logo-pizza.png" />
        {isSignInVisible && <HeaderLink />}
        {isBackLinkVisible && <BackLink />}
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  isSignInVisible: PropTypes.bool.isRequired,
  isBackLinkVisible: PropTypes.bool.isRequired,
};
