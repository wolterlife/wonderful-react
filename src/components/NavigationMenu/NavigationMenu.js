import React from 'react';
import './NavigationMenu.scss';

const NavigationMenu = () => {
  return (
    <nav>
      <div className="navigation-menu__container">
        <ul className="navigation-menu__list">
          <li className="navigation-menu__item">
            <a href="" className="navigation-menu__link">
              e
            </a>
          </li>
          <li
            className="navigation-menu__item"
            onBlur={() => colorBack(1)}
            onFocus={() => colorChange(1)}
          >
            <a href="#pizza" className="navigation-menu__link">
              Пицца
            </a>
          </li>
          <li
            className="navigation-menu__item"
            onBlur={() => colorBack(2)}
            onFocus={() => colorChange(2)}
          >
            <a href="#drinks" className="navigation-menu__link">
              Напитки
            </a>
          </li>
          <li
            className="navigation-menu__item"
            onBlur={() => colorBack(3)}
            onFocus={() => colorChange(3)}
          >
            <a href="#desserts" className="navigation-menu__link">
              Десерты
            </a>
          </li>
          <li
            className="navigation-menu__item"
            onBlur={() => colorBack(4)}
            onFocus={() => colorChange(4)}
          >
            <a href="#snacks" className="navigation-menu__link">
              Закуски
            </a>
          </li>
          <li
            className="navigation-menu__item"
            onBlur={() => colorBack(5)}
            onFocus={() => colorChange(5)}
          >
            <a href="" className="navigation-menu__link">
              Купоны
            </a>
          </li>
        </ul>
      </div>
      <div className="choose">
        <a href="#pizza">
          <img
            alt="Пицца"
            className="choose-img"
            id="m_1"
            onBlur={() => colorBack(1)}
            onFocus={() => colorChange(1)}
            src="img/neon-choose/pizza.png"
          />
        </a>
        <a href="#drinks">
          <img
            alt="Напитки"
            className="choose-img"
            id="m_2"
            onBlur={() => colorBack(2)}
            onFocus={() => colorChange(2)}
            src="img/neon-choose/drinks.png"
          />
        </a>
        <a href="#desserts">
          <img
            alt="Десерты"
            className="choose-img"
            id="m_3"
            onBlur={() => colorBack(3)}
            onFocus={() => colorChange(3)}
            src="img/neon-choose/desserts.png"
          />
        </a>
        <a href="#snacks">
          <img
            alt="Закуски"
            className="choose-img"
            id="m_4"
            onBlur={() => colorBack(4)}
            onFocus={() => colorChange(4)}
            src="img/neon-choose/snacks.png"
          />
        </a>
        <a href="">
          <img
            alt=""
            className="choose-img"
            id="m_5"
            onBlur={() => colorBack(5)}
            onFocus={() => colorChange(5)}
            src="img/neon-choose/gift.png"
          />
        </a>
      </div>
    </nav>
  );
};

function colorChange(param) {
  console.log(param);
  // document.getElementById(`m_${param.toString()}`).style.filter = 'invert(1)';
  // document.getElementById(`img_${param.toString()}`).style.borderBottom = '3px solid #00a0ff';
  // document.getElementById(`img_${param.toString()}`).style.color = '#ffffff';
} // change color in visual choosing menu

function colorBack(param) {
  console.log(param);

  // document.getElementById(`m_${param.toString()}`).style.filter = 'invert(0)';
  // document.getElementById(`img_${param.toString()}`).style.borderBottom = '3px solid #ff6c00';
  // document.getElementById(`img_${param.toString()}`).style.color = '#b4b4b4';
} // back color in visual choosing menu

export default NavigationMenu;
