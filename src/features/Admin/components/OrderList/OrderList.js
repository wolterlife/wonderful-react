/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './OrderList.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PopUpPersonInfo from '../PopUpPersonInfo';
import PopUpOrderInfo from '../PopUpOrderInfo';
import { database, ref, get } from '../../../../util/firebase';

const OrderList = () => {
  const LOCAL_STORAGE_KEYS = {
    LIST_ORDERS: 'orders',
  };
  const [isShowPersonInfo, setPersonInfoVisible] = useState(false);
  const [isShowOrderInfo, setOrderInfoVisible] = useState(false);
  const [currentClient, setClient] = useState();

  // get data from firebase
  let data = [];

  function getData() {
    get(ref(database, 'orders/'))
      .then(snapshot => {
        if (snapshot.exists()) {
          data = Object.values(snapshot.val());
          console.log(data);
        } else {
          console.log('no data');
        }
      })
      .catch(error => console.log(error));
  }
  getData();
  //
  // if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.LIST_ORDERS)) !== null)
  //   data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.LIST_ORDERS));
  const navigate = useNavigate();

  const dellOrder = item => {
    data.splice(data.indexOf(item), 1);
    localStorage.setItem(LOCAL_STORAGE_KEYS.LIST_ORDERS, JSON.stringify(data));
    navigate('/admin'); // new render
  };

  const changeStatus = item => {
    const oldItem = item;
    let newStatus;
    switch (item.status) {
      case 'Не выполнен':
        newStatus = 'В обработке';
        break;
      case 'В обработке':
        newStatus = 'Доставлено';
        break;
      case 'Доставлено':
        newStatus = 'Отменён';
        break;
      case 'Отменён':
        newStatus = 'Не выполнен';
        break;
      default:
    }
    navigate('/admin');
    // save data
    data[data.indexOf(oldItem)].status = newStatus;
    localStorage.setItem(LOCAL_STORAGE_KEYS.LIST_ORDERS, JSON.stringify(data));
  };

  // eslint-disable-next-line no-loop-func,array-callback-return,consistent-return
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
            <Button
              type="button"
              variant="outlined"
              onClick={() => {
                setPersonInfoVisible(true);
                setClient(item);
              }}
            >
              Просмотреть
            </Button>
          </td>
          <td className="order-list__table-item">
            <Button
              type="button"
              variant="outlined"
              onClick={() => {
                setOrderInfoVisible(true);
                setClient(item);
              }}
            >
              Просмотреть
            </Button>
          </td>
          <td className="order-list__table-item--status">{item.status}</td>
          <td className="order-list__table-item">
            <Button type="button" variant="outlined" onClick={() => changeStatus(item)}>
              Статус
            </Button>
            <Button type="button" variant="outlined" onClick={() => dellOrder(item)}>
              Удалить
            </Button>
          </td>
        </tr>
      );
  });

  return (
    <>
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
      {isShowPersonInfo && (
        <PopUpPersonInfo callShow={setPersonInfoVisible} client={currentClient} />
      )}
      {isShowOrderInfo && <PopUpOrderInfo callShow={setOrderInfoVisible} client={currentClient} />}
    </>
  );
};

export default OrderList;
