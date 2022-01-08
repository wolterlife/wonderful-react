import React from 'react';
import './NavigationMenu.scss';

const NavigationMenu = () => {
  return (
    <nav>
      <div className="navigation-menu__container">
        <ul className="navigation-menu__list">
          <li className="navigation-menu__item">
            <a href="#pizza" className="navigation-menu__link">
              <p className="navigation-menu__link__text">Пицца</p>
              <img alt="Пицца" className="choose-img" src="img/neon-choose/pizza.png" />
            </a>
          </li>
          <li className="navigation-menu__item">
            <a href="#drinks" className="navigation-menu__link">
              <p className="navigation-menu__link__text">Напитки</p>
              <img alt="Пицца" className="choose-img" src="img/neon-choose/drinks.png" />
            </a>
          </li>
          <li className="navigation-menu__item">
            <a href="#desserts" className="navigation-menu__link">
              <p className="navigation-menu__link__text">Десерты</p>
              <img alt="Пицца" className="choose-img" src="img/neon-choose/desserts.png" />
            </a>
          </li>
          <li className="navigation-menu__item">
            <a href="#snacks" className="navigation-menu__link">
              <p className="navigation-menu__link__text">Закуски</p>
              <img alt="Пицца" className="choose-img" src="img/neon-choose/snacks.png" />
            </a>
          </li>
          <li className="navigation-menu__item">
            <a href="#delivery" className="navigation-menu__link">
              <p className="navigation-menu__link__text">Доставка</p>
              <img alt="Пицца" className="choose-img" src="img/neon-choose/gift.png" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;
