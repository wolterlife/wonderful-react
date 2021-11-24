import React from 'react';

const ChooseMenu = () => {
  return (
    <div>
      <hr className="line-second" />
      <hr className="line-first" />
      <div className="menu-d">
        <ul className="menu-main">
          <li className="menu-li">
            <a href="">e</a>
          </li>
          <li className="menu-li" onBlur={() => colorBack(1)} onFocus={() => colorChange(1)}>
            <a href="#pizza" id="img_1">
              Пицца
            </a>
          </li>
          <li className="menu-li" onBlur={() => colorBack(2)} onFocus={() => colorChange(2)}>
            <a href="#drinks" id="img_2">
              Напитки
            </a>
          </li>
          <li className="menu-li" onBlur={() => colorBack(3)} onFocus={() => colorChange(3)}>
            <a href="#desserts" id="img_3">
              Десерты
            </a>
          </li>
          <li className="menu-li" onBlur={() => colorBack(4)} onFocus={() => colorChange(4)}>
            <a href="#snacks" id="img_4">
              Закуски
            </a>
          </li>
          <li className="menu-li" onBlur={() => colorBack(5)} onFocus={() => colorChange(5)}>
            <a href="" id="img_5">
              Купоны
            </a>
          </li>
        </ul>
      </div>
      <div className="choose">
        <a href="#pizza">
          <img
            alt=""
            className="choose-img"
            id="m_1"
            onBlur={() => colorBack(1)}
            onFocus={() => colorChange(1)}
            src="img/neon-choose/pizza.png"
          />
        </a>
        <a href="#drinks">
          <img
            alt=""
            className="choose-img"
            id="m_2"
            onBlur={() => colorBack(2)}
            onFocus={() => colorChange(2)}
            src="img/neon-choose/drinks.png"
          />
        </a>
        <a href="#desserts">
          <img
            alt=""
            className="choose-img"
            id="m_3"
            onBlur={() => colorBack(3)}
            onFocus={() => colorChange(3)}
            src="img/neon-choose/desserts.png"
          />
        </a>
        <a href="#snacks">
          <img
            alt=""
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
    </div>
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

export default ChooseMenu;
