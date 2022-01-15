/* eslint-disable no-param-reassign,react-hooks/rules-of-hooks,no-restricted-syntax */
import React from 'react';
import { Button } from '@mui/material';
import './TableOrder.scss';

const TableOrder = prop => {
  const [total, setTotal] = React.useState(prop.order.total.toFixed(2));

  const getTotal = () => {
    let sum = 0;
    for (const key of prop.order.items.pizza) sum += key.quantity * key.price;
    for (const key of prop.order.items.drinks) sum += key.quantity * key.price;
    for (const key of prop.order.items.snacks) sum += key.quantity * key.price;
    for (const key of prop.order.items.desserts) sum += key.quantity * key.price;
    prop.order.total = sum;
    return sum.toFixed(2);
  };

  // eslint-disable-next-line array-callback-return,consistent-return
  const resPizza = prop.order.items.pizza.map(function show(item) {
    const [quantity, setQuantity] = React.useState(item.quantity);

    if (item.id !== undefined && quantity !== 0)
      return (
        <tr key={item.id}>
          <td className="order-table__item">{item.title}</td>
          <td className="order-table__item">{quantity}</td>
          <td className="order-table__item">{item.price}</td>
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
                setTotal(getTotal());
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
                  setTotal(getTotal());
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
  const resDrinks = prop.order.items.drinks.map(function show(item) {
    const [quantity, setQuantity] = React.useState(item.quantity);

    if (item.id !== undefined && quantity !== 0)
      return (
        <tr key={item.id}>
          <td className="order-table__item">{item.title}</td>
          <td className="order-table__item">{quantity}</td>
          <td className="order-table__item">{item.price}</td>
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
                setTotal(getTotal());
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
                  setTotal(getTotal());
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
  const resDeserts = prop.order.items.desserts.map(function show(item) {
    const [quantity, setQuantity] = React.useState(item.quantity);

    if (item.id !== undefined && quantity !== 0)
      return (
        <tr key={item.id}>
          <td className="order-table__item">{item.title}</td>
          <td className="order-table__item">{quantity}</td>
          <td className="order-table__item">{item.price}</td>
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
                setTotal(getTotal());
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
                  setTotal(getTotal());
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
  const resSnacks = prop.order.items.snacks.map(function show(item) {
    const [quantity, setQuantity] = React.useState(item.quantity);

    if (item.id !== undefined && quantity !== 0)
      return (
        <tr key={item.id}>
          <td className="order-table__item">{item.title}</td>
          <td className="order-table__item">{quantity}</td>
          <td className="order-table__item">{item.price}</td>
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
                setTotal(getTotal());
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
                  setTotal(getTotal());
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
      <p className="total">Итого: {total} </p>
    </>
  );
};

export default TableOrder;
