import React from 'react';
import './UserList.scss';
import { Button } from '@mui/material';

const UserList = () => {
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
        <tr>
          <td className="user-list__table__item">1</td>
          <td className="user-list__table__item">wolter.important@gmail.com</td>
          <td className="user-list__table__item">Денис</td>
          <td className="user-list__table__item">Бобрик</td>
          <td className="user-list__table__item">пр-т Фрунзе 33</td>
          <td className="user-list__table__item">375336484222</td>
          <td className="user-list__table__item">
            <Button type="button" variant="outlined">
              История заказов
            </Button>
            <Button type="button" variant="outlined">
              Удалить
            </Button>
          </td>
        </tr>
        <tr>
          <td className="user-list__table__item">2</td>
          <td className="user-list__table__item">wolter.important@gmail.com</td>
          <td className="user-list__table__item">Денис</td>
          <td className="user-list__table__item">Бобрик</td>
          <td className="user-list__table__item">пр-т Фрунзе 33</td>
          <td className="user-list__table__item">375336484222</td>
          <td className="user-list__table__item">
            <Button type="button" variant="outlined">
              История заказов
            </Button>
            <Button type="button" variant="outlined">
              Удалить
            </Button>
          </td>
        </tr>
        <tr>
          <td className="user-list__table__item">3</td>
          <td className="user-list__table__item">wolter.important@gmail.com</td>
          <td className="user-list__table__item">Денис</td>
          <td className="user-list__table__item">Бобрик</td>
          <td className="user-list__table__item">пр-т Фрунзе 33</td>
          <td className="user-list__table__item">375336484222</td>
          <td className="user-list__table__item">
            <Button type="button" variant="outlined">
              История заказов
            </Button>
            <Button type="button" variant="outlined">
              Удалить
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default UserList;
