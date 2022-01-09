import React from 'react';
import './UserList.scss';
import { Button } from '@mui/material';

const UserList = () => {
  let data = localStorage.getItem('listUsers');
  data = JSON.parse(data);
  const res = data.map(function (item) {
    return (
      <tr key={item.id}>
        <td className="user-list__table__item">{item.id}</td>
        <td className="user-list__table__item">{item.email}</td>
        <td className="user-list__table__item">{item.firstName}</td>
        <td className="user-list__table__item">{item.secondName}</td>
        <td className="user-list__table__item">{item.address}</td>
        <td className="user-list__table__item">{item.phoneNumber}</td>
        <td className="user-list__table__item">
          <Button type="button" variant="outlined">
            История заказов
          </Button>
          <Button type="button" variant="outlined">
            Удалить
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div className="user-list">
      <p className="user-list__title">Список пользователей</p>
      <table className="user-list__table" border="1">
        <tr>
          <th className="user-list__table__head">id</th>
          <th className="user-list__table__head">Email</th>
          <th className="user-list__table__head">Имя</th>
          <th className="user-list__table__head">Фамилия</th>
          <th className="user-list__table__head">Адрес</th>
          <th className="user-list__table__head">Номер телефона</th>
          <th className="user-list__table__head">Действие</th>
        </tr>
        {res}
      </table>
    </div>
  );
};

export default UserList;
