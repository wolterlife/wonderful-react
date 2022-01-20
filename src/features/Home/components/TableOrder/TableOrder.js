/* eslint-disable no-param-reassign,react-hooks/rules-of-hooks,no-restricted-syntax */
import React from 'react';
import { Button } from '@mui/material';
import './TableOrder.scss';

const TableOrder = prop => {
  const acceptFoo = () => {
    console.log(prop.ordInfo);
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
                if (quantity !== 0) {
                  setQuantity(quantity - 1);
                  item.quantity = quantity - 1;
                  prop.callTotal(prop.total - item.price);
                }
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
                if (quantity !== 0) {
                  setQuantity(quantity - 1);
                  item.quantity = quantity - 1;
                  prop.callTotal(prop.total - item.price);
                }
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
                if (quantity !== 0) {
                  setQuantity(quantity - 1);
                  item.quantity = quantity - 1;
                  prop.callTotal(prop.total - item.price);
                }
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
                if (quantity !== 0) {
                  setQuantity(quantity - 1);
                  item.quantity = quantity - 1;
                  prop.callTotal(prop.total - item.price);
                }
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
        <Button
          onClick={acceptFoo}
          style={{
            width: 'auto',
          }}
          variant="contained"
          className="form__button"
        >
          Подтвердить
        </Button>
      </div>
    </>
  );
};

export default TableOrder;
