/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './OrderList.scss';
import { Button } from '@mui/material';
import PopUpPersonInfo from '../PopUpPersonInfo';
import PopUpOrderInfo from '../PopUpOrderInfo';
// eslint-disable-next-line import/named
import { database, ref, onValue, set } from '../../../../util/firebase';

const OrderList = () => {
  const [isShowPersonInfo, setPersonInfoVisible] = useState(false);
  const [isShowOrderInfo, setOrderInfoVisible] = useState(false);
  const [currentClient, setClient] = useState();
  const [data, setData] = useState([]);

  // get data from firebase
  useEffect(() => {
    onValue(ref(database, 'orders/'), snapshot => {
      if (snapshot.val() !== null) setData(Object.values(snapshot.val()));
    });
  }, []);

  const dellOrder = item => {
    data.splice(data.indexOf(item), 1);
    set(ref(database, 'orders/'), data);
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
    // save data
    data[data.indexOf(oldItem)].status = newStatus;
    set(ref(database, 'orders/'), data);
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
