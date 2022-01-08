import React from 'react';
import './MenuTable.scss';
import { Button } from '@mui/material';

const MenuTable = () => {
  return (
    <div className="menu-list">
      <p className="menu-list__title">Состав меню:</p>
      <table className="menu-list__table" border="1">
        <tr>
          <th className="menu-list__table__head">id</th>
          <th className="menu-list__table__head">Название</th>
          <th className="menu-list__table__head">Тип</th>
          <th className="menu-list__table__head">Цена</th>
          <th className="menu-list__table__head">Картинка</th>
          <th className="menu-list__table__head">Действие</th>
        </tr>
        <tr>
          <td className="menu-list__table__item">1</td>
          <td className="menu-list__table__item">Пеперони</td>
          <td className="menu-list__table__item">Пицца</td>
          <td className="menu-list__table__item">2.35</td>
          <td className="menu-list__table__item">
            <img
              className="menu-list__table__item__img"
              src="https://i.imgur.com/JOcK5zi.png"
              alt="product"
            />
          </td>
          <td className="menu-list__table__item">
            <Button type="button" variant="outlined">
              Удалить
            </Button>
          </td>
        </tr>
        <tr>
          <td className="menu-list__table__item">2</td>
          <td className="menu-list__table__item">wolter.important@gmail.com</td>
          <td className="menu-list__table__item">Денис</td>
          <td className="menu-list__table__item">Бобрик</td>
          <td className="menu-list__table__item">пр-т Фрунзе 33</td>
          <td className="menu-list__table__item">
            <Button type="button" variant="outlined">
              Удалить
            </Button>
          </td>
        </tr>
        <tr>
          <td className="menu-list__table__item">3</td>
          <td className="menu-list__table__item">wolter.important@gmail.com</td>
          <td className="menu-list__table__item">Денис</td>
          <td className="menu-list__table__item">Бобрик</td>
          <td className="menu-list__table__item">пр-т Фрунзе 33</td>
          <td className="menu-list__table__item">
            <Button type="button" variant="outlined">
              Удалить
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MenuTable;
