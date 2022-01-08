import React from 'react';
import './ItemsList.scss';
import { Button } from '@mui/material';

const ItemsList = () => {
  return (
    <div className="user-list">
      <p className="user-list__title">Состав меню:</p>
      <table className="user-list__table" border="1">
        <tr>
          <th>id</th>
          <th>Email</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Адрес</th>
          <th>Номер телефона</th>
          <th>Действие</th>
        </tr>
        <tr>
          <td>1</td>
          <td>wolter.important@gmail.com</td>
          <td>Денис</td>
          <td>Бобрик</td>
          <td>пр-т Фрунзе 33</td>
          <td>375336484222</td>
          <td>
            <Button type="button" variant="outlined">
              История заказов
            </Button>
            <Button type="button" variant="outlined">
              Удалить
            </Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>wolter.important@gmail.com</td>
          <td>Денис</td>
          <td>Бобрик</td>
          <td>пр-т Фрунзе 33</td>
          <td>375336484222</td>
          <td>
            <Button type="button" variant="outlined">
              История заказов
            </Button>
            <Button type="button" variant="outlined">
              Удалить
            </Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>wolter.important@gmail.com</td>
          <td>Денис</td>
          <td>Бобрик</td>
          <td>пр-т Фрунзе 33</td>
          <td>375336484222</td>
          <td>
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

export default ItemsList;
