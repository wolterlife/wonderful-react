/* eslint-disable no-unused-vars */
import React from 'react';
import './OrderList.scss';
import { Button } from '@mui/material';

const OrderList = () => {
  const LOCAL_STORAGE_KEYS = {
    LIST_ORDERS: 'orders',
  };

  let data = [];
  if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.LIST_ORDERS)) !== null)
    data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.LIST_ORDERS));

  const dellOrder = () => {};

  // eslint-disable-next-line array-callback-return,consistent-return
  const res = data.map(item => {
    if (item.id !== undefined)
      return (
        <tr key={item.id}>
          <td className="order-list__table-item">{item.id}</td>
          <td className="order-list__table-item">
            {!item.ordFields.isFastDelivery ? (
              item.ordFields.time.substr(4, 17)
            ) : (
              <p className="order-list__table-fast">Express</p>
            )}
          </td>
          <td className="order-list__table-item">
            <Button type="button" variant="outlined">
              Просмотреть
            </Button>
          </td>
          <td className="order-list__table-item">
            <Button type="button" variant="outlined">
              Просмотреть
            </Button>
          </td>
          <td className="order-list__table-item">{item.status}</td>
          <td className="order-list__table-item">
            <Button type="button" variant="outlined">
              Статус
            </Button>
            <Button type="button" variant="outlined">
              Удалить
            </Button>
          </td>
        </tr>
      );
  });

  return (
    <div className="order-list">
      <p className="order-list__title">Заказы</p>
      <table className="order-list__table" border="1">
        <tbody>
          <tr>
            <th className="order-list__table-head">Номер</th>
            <th className="order-list__table-head">Время</th>
            <th className="order-list__table-head">Клиент</th>
            <th className="order-list__table-head">Заказ</th>
            <th className="order-list__table-head">Статус</th>
            <th className="order-list__table-head">Действие</th>
          </tr>
          {res}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
