import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="div-header">
        <img alt="" className="logo" src="img/logo-pizza.png" />
        <a href="">
          <div className="button-card">
            <img alt="" className="icon" src="img/login.png" />
            <p className="card-text">Вход</p>
          </div>
        </a>
      </div>
      <hr className="line-first" />
      <hr className="line-second" />
    </div>
  );
};

export default Header;
