/* eslint-disable no-unused-vars,react/prop-types */
import React from 'react';
import './ListOfMenu.scss';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const ListOfMenu = props => {
  let list;
  const { cart } = props;

  if (localStorage.getItem('list') == null) {
    list = {
      pizza: [
        {
          id: 0,
          title: 'Пеперони',
          consist: 'Томатный соус, пикантная пепперони, сыр моцарелла',
          img: 'https://i.imgur.com/JOcK5zi.png',
          type: 'Пиццы',
          price: '2.55',
        },
        {
          id: 1,
          title: 'Гавайская',
          consist: 'Очень много ананасов',
          img: 'https://i.imgur.com/JOcK5zi.png',
          type: 'Пиццы',
          price: '2.55',
        },
      ],
      drinks: [
        {
          id: 2,
          title: 'Святой эликсир',
          consist: 'Самый святой эликсир из самых необычных компонентов',
          img: 'https://i.imgur.com/JOcK5zi.png',
          type: 'Напитки',
          price: '6.20',
        },
      ],
      snacks: [
        {
          id: 3,
          title: 'Сочные куриные крылья',
          consist: 'Крылья в хрустящей панировке обжаренные самым лучшим способом',
          img: 'https://i.imgur.com/JOcK5zi.png',
          type: 'Закуски',
          price: '3.20',
        },
      ],
      desserts: [
        {
          id: 4,
          title: 'Мороженное',
          consist: 'Шарики из натуральных продуктов способные менять жизнь',
          img: 'https://i.imgur.com/JOcK5zi.png',
          type: 'Десерты',
          price: '1.20',
        },
      ],
    };
    localStorage.setItem('list', JSON.stringify(list));
  } else list = JSON.parse(localStorage.getItem('list'));

  const addToCart = item => {
    switch (item.type) {
      case 'Пиццы':
        if (cart.pizza.includes(item)) cart.pizza[cart.pizza.indexOf(item)].quantity += 1;
        else {
          cart.pizza.push(item);
          cart.pizza[cart.pizza.indexOf(item)].quantity = 1;
        }
        break;
      case 'Напитки':
        if (cart.drinks.includes(item)) cart.drinks[cart.drinks.indexOf(item)].quantity += 1;
        else {
          cart.drinks.push(item);
          cart.drinks[cart.drinks.indexOf(item)].quantity = 1;
        }
        break;
      case 'Десерты':
        if (cart.desserts.includes(item)) cart.desserts[cart.desserts.indexOf(item)].quantity += 1;
        else {
          cart.desserts.push(item);
          cart.desserts[cart.desserts.indexOf(item)].quantity = 1;
        }
        break;
      case 'Закуски':
        if (cart.snacks.includes(item)) cart.snacks[cart.snacks.indexOf(item)].quantity += 1;
        else {
          cart.snacks.push(item);
          cart.snacks[cart.snacks.indexOf(item)].quantity = 1;
        }
        break;
      default:
    }
    props.callCart(cart);
  };

  // eslint-disable-next-line array-callback-return,consistent-return
  const resPizza = list.pizza.map(function show(item) {
    if (item.id !== undefined)
      return (
        <div key={item.id} className="card">
          <div className="card__container">
            <img src={item.img} alt="product-item" className="card__img" />
            <p className="card__title">{item.title}</p>
            <p className="card__consist">{item.consist}</p>
          </div>
          <div className="card__actions">
            <p className="card__price">{item.price} BYN</p>
            <Button
              onClick={() => addToCart(item)}
              variant="contained"
              size="small"
              color="warning"
            >
              Купить
            </Button>
          </div>
        </div>
      );
  });

  // eslint-disable-next-line array-callback-return,consistent-return
  const resDrinks = list.drinks.map(function show(item) {
    if (item.id !== undefined)
      return (
        <div key={item.id} className="card">
          <div className="card__container">
            <img src={item.img} alt="product-item" className="card__img" />
            <p className="card__title">{item.title}</p>
            <p className="card__consist">{item.consist}</p>
          </div>
          <div className="card__actions">
            <p className="card__price">{item.price} BYN</p>
            <Button
              onClick={() => addToCart(item)}
              variant="contained"
              size="small"
              color="warning"
            >
              Купить
            </Button>
          </div>
        </div>
      );
  });

  // eslint-disable-next-line array-callback-return,consistent-return
  const resSnacks = list.snacks.map(function show(item) {
    if (item.id !== undefined)
      return (
        <div key={item.id} className="card">
          <div className="card__container">
            <img src={item.img} alt="product-item" className="card__img" />
            <p className="card__title">{item.title}</p>
            <p className="card__consist">{item.consist}</p>
          </div>
          <div className="card__actions">
            <p className="card__price">{item.price} BYN</p>
            <Button
              onClick={() => addToCart(item)}
              variant="contained"
              size="small"
              color="warning"
            >
              Купить
            </Button>
          </div>
        </div>
      );
  });

  // eslint-disable-next-line array-callback-return,consistent-return
  const resDesserts = list.desserts.map(function show(item) {
    if (item.id !== undefined)
      return (
        <div key={item.id} className="card">
          <div className="card__container">
            <img src={item.img} alt="product-item" className="card__img" />
            <p className="card__title">{item.title}</p>
            <p className="card__consist">{item.consist}</p>
          </div>
          <div className="card__actions">
            <p className="card__price">{item.price} BYN</p>
            <Button
              onClick={() => addToCart(item)}
              variant="contained"
              size="small"
              color="warning"
            >
              Купить
            </Button>
          </div>
        </div>
      );
  });

  return (
    <div className="list-of-menu">
      <p className="list-of-menu__title">Сделай свой выбор</p>
      <p className="list-of-menu__chapter" id="pizza">
        Пицца
      </p>
      <div className="list-of-menu__section">{resPizza}</div>
      <p className="list-of-menu__chapter" id="drinks">
        Напитки
      </p>
      <div className="list-of-menu__section">{resDrinks}</div>
      <p className="list-of-menu__chapter" id="desserts">
        Десерты
      </p>
      <div className="list-of-menu__section">{resDesserts}</div>
      <p className="list-of-menu__chapter" id="snacks">
        Закуски
      </p>
      <div className="list-of-menu__section">{resSnacks}</div>
    </div>
  );
};

export default ListOfMenu;

ListOfMenu.propTypes = {
  callCart: PropTypes.func.isRequired,
};
