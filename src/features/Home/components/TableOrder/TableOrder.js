/* eslint-disable react-hooks/rules-of-hooks,no-param-reassign */
import React from 'react';
import { Button } from '@mui/material';
import './TableOrder.scss';
import { useNavigate } from 'react-router-dom';

const TableOrder = prop => {
  const navigate = useNavigate();

  const acceptFoo = () => {
    console.log(prop.ordInfo);
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser != null) {
      currentUser.orderHistory.push(prop.ordInfo); // order history local currentUser
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
  };
  // добавить change all user list

  const goToInputFields = () => {
    prop.callPopUp(false);
    navigate('#delivery');
  };

  // eslint-disable-next-line array-callback-return,consistent-return
  const resPizza = prop.cart.pizza.map(item => {
    const [quantity, setQuantity] = React.useState(item.quantity);

    if (item.id !== undefined && quantity !== 0)
      return (
        <tr key={item.id}>
          <td className="order-table__item">{item.title}</td>
          <td className="order-table__item">{quantity}</td>
          <td className="order-table__item">{item.price.toFixed(2)}</td>
          <td className="order-table__item">
            <img className="order-table__img" src={item.img} alt="product" />
          </td>
          <td className="order-table__actions">
            <Button
              style={{
                backgroundColor: '#ff6c00',
              }}
              onClick={() => {
                setQuantity(quantity + 1);
                item.quantity = quantity + 1;
                prop.callTotal(prop.total + item.price);
              }}
              className="order-table__button--green"
              type="button"
              variant="contained"
            >
              +
            </Button>
            <Button
              style={{
                backgroundColor: '#707070',
              }}
              onClick={() => {
                setQuantity(quantity - 1);
                item.quantity = quantity - 1;
                prop.callTotal(prop.total - item.price);
              }}
              className="order-table__button--red"
              type="button"
              variant="contained"
            >
              -
            </Button>
          </td>
        </tr>
      );
  });

  // eslint-disable-next-line array-callback-return,consistent-return
  const resDrinks = prop.cart.drinks.map(item => {
    const [quantity, setQuantity] = React.useState(item.quantity);

    if (item.id !== undefined && quantity !== 0)
      return (
        <tr key={item.id}>
          <td className="order-table__item">{item.title}</td>
          <td className="order-table__item">{quantity}</td>
          <td className="order-table__item">{item.price.toFixed(2)}</td>
          <td className="order-table__item">
            <img className="order-table__img" src={item.img} alt="product" />
          </td>
          <td className="order-table__actions">
            <Button
              style={{
                backgroundColor: '#ff6c00',
              }}
              onClick={() => {
                setQuantity(quantity + 1);
                item.quantity = quantity + 1;
                prop.callTotal(prop.total + item.price);
              }}
              className="order-table__button--green"
              type="button"
              variant="contained"
            >
              +
            </Button>
            <Button
              style={{
                backgroundColor: '#707070',
              }}
              onClick={() => {
                setQuantity(quantity - 1);
                item.quantity = quantity - 1;
                prop.callTotal(prop.total - item.price);
              }}
              className="order-table__button--red"
              type="button"
              variant="contained"
            >
              -
            </Button>
          </td>
        </tr>
      );
  });

  // eslint-disable-next-line array-callback-return,consistent-return
  const resDeserts = prop.cart.desserts.map(item => {
    const [quantity, setQuantity] = React.useState(item.quantity);

    if (item.id !== undefined && quantity !== 0)
      return (
        <tr key={item.id}>
          <td className="order-table__item">{item.title}</td>
          <td className="order-table__item">{quantity}</td>
          <td className="order-table__item">{item.price.toFixed(2)}</td>
          <td className="order-table__item">
            <img className="order-table__img" src={item.img} alt="product" />
          </td>
          <td className="order-table__actions">
            <Button
              style={{
                backgroundColor: '#ff6c00',
              }}
              onClick={() => {
                setQuantity(quantity + 1);
                item.quantity = quantity + 1;
                prop.callTotal(prop.total + item.price);
              }}
              className="order-table__button--green"
              type="button"
              variant="contained"
            >
              +
            </Button>
            <Button
              style={{
                backgroundColor: '#707070',
              }}
              onClick={() => {
                setQuantity(quantity - 1);
                item.quantity = quantity - 1;
                prop.callTotal(prop.total - item.price);
              }}
              className="order-table__button--red"
              type="button"
              variant="contained"
            >
              -
            </Button>
          </td>
        </tr>
      );
  });

  // eslint-disable-next-line array-callback-return,consistent-return
  const resSnacks = prop.cart.snacks.map(item => {
    const [quantity, setQuantity] = React.useState(item.quantity);

    if (item.id !== undefined && quantity !== 0)
      return (
        <tr key={item.id}>
          <td className="order-table__item">{item.title}</td>
          <td className="order-table__item">{quantity}</td>
          <td className="order-table__item">{item.price.toFixed(2)}</td>
          <td className="order-table__item">
            <img className="order-table__img" src={item.img} alt="product" />
          </td>
          <td className="order-table__actions">
            <Button
              style={{
                backgroundColor: '#ff6c00',
              }}
              onClick={() => {
                setQuantity(quantity + 1);
                item.quantity = quantity + 1;
                prop.callTotal(prop.total + item.price);
              }}
              className="order-table__button--green"
              type="button"
              variant="contained"
            >
              +
            </Button>
            <Button
              style={{
                backgroundColor: '#707070',
              }}
              onClick={() => {
                setQuantity(quantity - 1);
                item.quantity = quantity - 1;
                prop.callTotal(prop.total - item.price);
              }}
              className="order-table__button--red"
              type="button"
              variant="contained"
            >
              -
            </Button>
          </td>
        </tr>
      );
  });

  return (
    <>
      <table className="order-table" border="1">
        <tbody>
          <tr>
            <th className="order-table__head">Название</th>
            <th className="order-table__head">Кол-во</th>
            <th className="order-table__head">Цена за штуку</th>
            <th className="order-table__head">Картинка</th>
            <th className="order-table__head">Действие</th>
          </tr>
          {resPizza}
          {resDrinks}
          {resDeserts}
          {resSnacks}
        </tbody>
      </table>
      <hr />
      <div className="section">
        <p className="section__total">Итого: {Math.abs(prop.total).toFixed(2)} </p>
        {prop.ordInfo !== undefined ? (
          <Button
            onClick={acceptFoo}
            style={{
              width: 'auto',
            }}
            variant="contained"
            className="section__button"
          >
            Оплатить
          </Button>
        ) : (
          <a href="#delivery" onClick={goToInputFields} className="section__button">
            Заполнить данные о доставке
          </a>
        )}
      </div>
    </>
  );
};

export default TableOrder;
