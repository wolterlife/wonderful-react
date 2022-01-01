import React from 'react';
import './UserList.scss';

const UserList = () => {
  return (
    <div className="user-list">
      <p className="user-list__title">Список пользователей</p>
      <table className="user-list__table" border="1">
        <tr>
          <th>id</th>
          <th>Email</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Адрес</th>
          <th>Номер телефона</th>
        </tr>
        <tr>
          <td>1</td>
          <td>wolter.important@gmail.com</td>
          <td>Денис</td>
          <td>Бобрик</td>
          <td>пр-т Фрунзе 33</td>
          <td>375336484222</td>
          <td>
            <button type="button">Список заказов</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
        </tr>
      </table>
    </div>
  );
};

export default UserList;
