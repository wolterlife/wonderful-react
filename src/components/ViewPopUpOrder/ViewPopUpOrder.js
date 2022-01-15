/* eslint-disable no-unused-vars */
import React from 'react';
import './ViewPopUpOrder.scss';
import { Button } from '@mui/material';

const ViewPopUpOrder = () => {
  const currentOrder = {
    id: Date.now(),
    status: 'Не выполнен',
    items: {
      pizza: [
        {
          id: 0,
          name: 'Пеперони',
          quantity: 4,
          price: 2.55,
          img: 'https://i.imgur.com/JOcK5zi.png',
        },
        {
          id: 1,
          name: 'Афганская',
          quantity: 3,
          price: 2.55,
          img: 'https://i.imgur.com/JOcK5zi.png',
        },
      ],
    },
  };

  const incr = item => {
    // eslint-disable-next-line no-param-reassign
    item.quantity += 1;
    console.log(item);
  };

  const decr = item => {
    // eslint-disable-next-line no-param-reassign
    if (item.quantity !== 0) item.quantity -= 1;
    console.log(item);
  };

  console.log(currentOrder);
  // eslint-disable-next-line array-callback-return,consistent-return
  const resPizza = currentOrder.items.pizza.map(function show(item) {
    if (item.id !== undefined)
      return (
        <tr key={item.id}>
          <td className="order__table-item">{item.name}</td>
          <td className="order__table-item">{item.quantity}</td>
          <td className="order__table-item">{item.price}</td>
          <td className="order__table-item">
            <img className="order__table-img" src={item.img} alt="product" />
          </td>
          <td className="order__table-actions">
            <Button
              style={{
                backgroundColor: '#0a8d0a',
              }}
              onClick={() => incr(item)}
              className="order__table-button--green"
              type="button"
              variant="contained"
            >
              +
            </Button>
            <Button
              style={{
                backgroundColor: '#ff0000',
              }}
              onClick={() => decr(item)}
              className="order__table-button--red"
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
    <div className="PopUpOrder">
      <div className="container">
        <div className="top-container">
          <p className="form__text">Корзина</p>
          <input alt="Закрыть" src="img/icons/close-circle.svg" type="image" />
        </div>
        <hr />
        <table className="order__table" border="1">
          <tbody>
            <tr>
              <th className="order__table-head">Название</th>
              <th className="order__table-head">Кол-во</th>
              <th className="order__table-head">Цена за штуку</th>
              <th className="order__table-head">Картинка</th>
              <th className="order__table-head">Действие</th>
            </tr>
            {resPizza}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewPopUpOrder;
