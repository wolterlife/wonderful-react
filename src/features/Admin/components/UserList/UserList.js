/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './UserList.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PopUpHistoryInfo from '../PopUpHistoryInfo';

const UserList = () => {
  const LOCAL_STORAGE_KEYS = {
    LIST_USERS: 'listUsers',
  };
  const [showHistory, setHistoryVisible] = useState(false);
  const [selectedUser, setUser] = useState();

  let data = localStorage.getItem(LOCAL_STORAGE_KEYS.LIST_USERS);
  data = JSON.parse(data);
  const navigate = useNavigate();

  const dellUser = user => {
    data.splice(data.indexOf(user), 1, {});
    localStorage.setItem(LOCAL_STORAGE_KEYS.LIST_USERS, JSON.stringify(data));
    navigate('/admin'); // new render
  };

  // eslint-disable-next-line array-callback-return,consistent-return
  const res = data.map(function show(item) {
    if (item.id !== undefined)
      return (
        <tr key={item.id}>
          <td className="user-list__table__item">{item.id}</td>
          <td className="user-list__table__item">{item.email}</td>
          <td className="user-list__table__item">{item.firstName}</td>
          <td className="user-list__table__item">{item.secondName}</td>
          <td className="user-list__table__item">{item.address}</td>
          <td className="user-list__table__item">{item.phoneNumber}</td>
          <td className="user-list__table__item">
            <Button
              type="button"
              variant="outlined"
              onClick={() => {
                setHistoryVisible(true);
                setUser(item.orderHistory);
              }}
            >
              История заказов
            </Button>
            <Button type="button" variant="outlined" onClick={() => dellUser(item)}>
              Удалить
            </Button>
          </td>
        </tr>
      );
  });

  return (
    <>
      <div className="user-list">
        <p className="user-list__title">Список пользователей</p>
        <table className="user-list__table" border="1">
          <tbody>
            <th className="user-list__table__head">id</th>
            <th className="user-list__table__head">Email</th>
            <th className="user-list__table__head">Имя</th>
            <th className="user-list__table__head">Фамилия</th>
            <th className="user-list__table__head">Адрес</th>
            <th className="user-list__table__head">Номер телефона</th>
            <th className="user-list__table__head">Действие</th>
            {res}
          </tbody>
        </table>
      </div>
      {showHistory && <PopUpHistoryInfo callShow={setHistoryVisible} selectedUser={selectedUser} />}
    </>
  );
};

export default UserList;
