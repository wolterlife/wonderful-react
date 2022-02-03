import React from 'react';
import './ListOfMenu.scss';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const ListOfMenu = props => {
  const LOCAL_STORAGE_KEYS = {
    LIST_OF_MENU: 'list',
  };
  const { cart } = props;
  let list;

  if (localStorage.getItem(LOCAL_STORAGE_KEYS.LIST_OF_MENU) == null) {
    list = {
      pizza: [
        {
          id: 0,
          title: 'Пеперони',
          consist: 'Томатный соус, пикантная пепперони, сыр моцарелла',
          img: 'https://i.imgur.com/pqhMsLg.png',
          type: 'Пиццы',
          price: 2.55,
        },
        {
          id: 1,
          title: 'Гавайская',
          consist: 'Очень много кукурузы и ананасов',
          img: 'https://i.imgur.com/QIB8pPB.png',
          type: 'Пиццы',
          price: 2.55,
        },
        {
          id: 5,
          title: 'Барбекю',
          consist: 'Острые колбаски, перец халапеньо, соус барбекю',
          img: 'https://i.imgur.com/EvNLHGQ.png',
          type: 'Пиццы',
          price: 2.55,
        },
        {
          id: 6,
          title: 'Мексиканская',
          consist: 'Колбаски, кукуруза, сыр, помидоры',
          img: 'https://i.imgur.com/nmLwzJ2.png',
          type: 'Пиццы',
          price: 2.55,
        },
        {
          id: 11,
          title: 'Мексиканская',
          consist: 'Колбаски, кукуруза, сыр, помидоры',
          img: 'https://i.imgur.com/nmLwzJ2.png',
          type: 'Пиццы',
          price: 2.55,
        },
      ],
      drinks: [
        {
          id: 2,
          title: 'Святой эликсир',
          consist: 'Самый святой эликсир из самых необычных компонентов',
          img: 'https://i.imgur.com/BbW6cR4.png',
          type: 'Напитки',
          price: 6.2,
        },
        {
          id: 7,
          title: 'Вода',
          consist: 'Самая простая вода',
          img: 'https://i.imgur.com/BbW6cR4.png',
          type: 'Напитки',
          price: 6.2,
        },
      ],
      snacks: [
        {
          id: 8,
          title: 'Левая палочка твикс',
          consist: 'Крылья в хрустящей панировке обжаренные самым лучшим способом',
          img: 'https://i.imgur.com/pqhMsLg.png',
          type: 'Закуски',
          price: 3.2,
        },
        {
          id: 3,
          title: 'Сочные куриные крылья',
          consist: 'Крылья в хрустящей панировке обжаренные самым лучшим способом',
          img: 'https://i.imgur.com/pqhMsLg.png',
          type: 'Закуски',
          price: 3.2,
        },
        {
          id: 9,
          title: 'Правая палочка твикс',
          consist: 'Крылья в хрустящей панировке обжаренные самым лучшим способом',
          img: 'https://i.imgur.com/pqhMsLg.png',
          type: 'Закуски',
          price: 3.2,
        },
      ],
      desserts: [
        {
          id: 4,
          title: 'Мороженное рожок',
          consist: 'Шарики из натуральных продуктов способные менять жизнь',
          img: 'https://i.imgur.com/x6zA4ko.png',
          type: 'Десерты',
          price: 1,
        },
        {
          id: 12,
          title: 'Мороженное фисташковое',
          consist: 'Шарики из натуральных продуктов способные менять жизнь',
          img: 'https://i.imgur.com/4Ei7cMX.png',
          type: 'Десерты',
          price: 2.1,
        },
        {
          id: 13,
          title: 'Мороженное в глазури',
          consist: 'Шарики из натуральных продуктов способные менять жизнь',
          img: 'https://i.imgur.com/LK43Evt.png',
          type: 'Десерты',
          price: 2.6,
        },
      ],
    };
    localStorage.setItem(LOCAL_STORAGE_KEYS.LIST_OF_MENU, JSON.stringify(list));
  } else list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.LIST_OF_MENU));

  const addToCart = item => {
    let idx = 0;
    switch (item.type) {
      case 'Пиццы':
        idx = cart.pizza.findIndex(e => e.title === item.title);
        if (idx > -1) {
          cart.pizza[idx].quantity += 1;
        } else {
          cart.pizza.push(item);
          cart.pizza[cart.pizza.indexOf(item)].quantity = 1;
        }
        break;
      case 'Напитки':
        idx = cart.drinks.findIndex(e => e.title === item.title);
        if (idx > -1) {
          cart.drinks[idx].quantity += 1;
        } else {
          cart.drinks.push(item);
          cart.drinks[cart.drinks.indexOf(item)].quantity = 1;
        }
        break;
      case 'Десерты':
        idx = cart.desserts.findIndex(e => e.title === item.title);
        if (idx > -1) {
          cart.desserts[idx].quantity += 1;
        } else {
          cart.desserts.push(item);
          cart.desserts[cart.desserts.indexOf(item)].quantity = 1;
        }
        break;
      case 'Закуски':
        idx = cart.snacks.findIndex(e => e.title === item.title);
        if (idx > -1) {
          cart.snacks[idx].quantity += 1;
        } else {
          cart.snacks.push(item);
          cart.snacks[cart.snacks.indexOf(item)].quantity = 1;
        }
        break;
      default:
    }
    props.callCart(cart);
    props.callTotal(item.price + props.total);
  };

  // eslint-disable-next-line array-callback-return,consistent-return
  const resPizza = list.pizza.map(item => {
    if (item.id !== undefined)
      return (
        <div key={item.id} className="card">
          <div className="card__container">
            <img src={item.img} alt="product-item" className="card__img" />
            <p className="card__title">{item.title}</p>
            <p className="card__consist">{item.consist}</p>
          </div>
          <div className="card__actions">
            <p className="card__price">{item.price.toFixed(2)} BYN</p>
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
  const resDrinks = list.drinks.map(item => {
    if (item.id !== undefined)
      return (
        <div key={item.id} className="card">
          <div className="card__container">
            <img src={item.img} alt="product-item" className="card__img" />
            <p className="card__title">{item.title}</p>
            <p className="card__consist">{item.consist}</p>
          </div>
          <div className="card__actions">
            <p className="card__price">{item.price.toFixed(2)} BYN</p>
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
  const resSnacks = list.snacks.map(item => {
    if (item.id !== undefined)
      return (
        <div key={item.id} className="card">
          <div className="card__container">
            <img src={item.img} alt="product-item" className="card__img" />
            <p className="card__title">{item.title}</p>
            <p className="card__consist">{item.consist}</p>
          </div>
          <div className="card__actions">
            <p className="card__price">{item.price.toFixed(2)} BYN</p>
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
  const resDesserts = list.desserts.map(item => {
    if (item.id !== undefined)
      return (
        <div key={item.id} className="card">
          <div className="card__container">
            <img src={item.img} alt="product-item" className="card__img" />
            <p className="card__title">{item.title}</p>
            <p className="card__consist">{item.consist}</p>
          </div>
          <div className="card__actions">
            <p className="card__price">{item.price.toFixed(2)} BYN</p>
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
  callTotal: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  cart: PropTypes.object.isRequired,
};
