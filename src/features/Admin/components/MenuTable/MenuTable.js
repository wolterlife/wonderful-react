import React from 'react';
import './MenuTable.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MenuTable = () => {
  const data = JSON.parse(localStorage.getItem('list'));
  const navigate = useNavigate();

  const dellItem = item => {
    switch (item.type) {
      case 'Пиццы':
        data.pizza[data.pizza.indexOf(item)] = {};
        break;
      case 'Напитки':
        data.drinks[data.drinks.indexOf(item)] = {};
        break;
      case 'Закуски':
        data.snacks[data.snacks.indexOf(item)] = {};
        break;
      case 'Десерты':
        data.desserts[data.desserts.indexOf(item)] = {};
        break;
      default:
        console.log('Error');
    }
    localStorage.setItem('list', JSON.stringify(data));
    navigate('/admin');
  };

  // eslint-disable-next-line array-callback-return,consistent-return
  const resPizza = data.pizza.map(function show(item) {
    if (item.id !== undefined)
      return (
        <tr key={item.id}>
          <td className="menu-list__table__item">{item.id}</td>
          <td className="menu-list__table__item">{item.title}</td>
          <td className="menu-list__table__item">{item.consist}</td>
          <td className="menu-list__table__item">{item.type}</td>
          <td className="menu-list__table__item">{item.price}</td>
          <td className="menu-list__table__item">
            <img className="menu-list__table__item__img" src={item.img} alt="product" />
          </td>
          <td className="menu-list__table__item">
            <Button
              onClick={() => dellItem(item)}
              className="menu-list__table__item__button"
              type="button"
              variant="outlined"
            >
              Удалить
            </Button>
          </td>
        </tr>
      );
  });

  // eslint-disable-next-line array-callback-return,consistent-return
  const resDrinks = data.drinks.map(function show(item) {
    if (item.id !== undefined)
      return (
        <tr key={item.id}>
          <td className="menu-list__table__item">{item.id}</td>
          <td className="menu-list__table__item">{item.title}</td>
          <td className="menu-list__table__item">{item.consist}</td>
          <td className="menu-list__table__item">{item.type}</td>
          <td className="menu-list__table__item">{item.price}</td>
          <td className="menu-list__table__item">
            <img className="menu-list__table__item__img" src={item.img} alt="product" />
          </td>
          <td className="menu-list__table__item">
            <Button
              onClick={() => dellItem(item)}
              className="menu-list__table__item__button"
              type="button"
              variant="outlined"
            >
              Удалить
            </Button>
          </td>
        </tr>
      );
  });

  // eslint-disable-next-line consistent-return,array-callback-return
  const resSnacks = data.snacks.map(function show(item) {
    if (item.id !== undefined)
      return (
        <tr key={item.id}>
          <td className="menu-list__table__item">{item.id}</td>
          <td className="menu-list__table__item">{item.title}</td>
          <td className="menu-list__table__item">{item.consist}</td>
          <td className="menu-list__table__item">{item.type}</td>
          <td className="menu-list__table__item">{item.price}</td>
          <td className="menu-list__table__item">
            <img className="menu-list__table__item__img" src={item.img} alt="product" />
          </td>
          <td className="menu-list__table__item">
            <Button
              onClick={() => dellItem(item)}
              className="menu-list__table__item__button"
              type="button"
              variant="outlined"
            >
              Удалить
            </Button>
          </td>
        </tr>
      );
  });

  // eslint-disable-next-line consistent-return,array-callback-return
  const resDesserts = data.desserts.map(function show(item) {
    if (item.id !== undefined)
      return (
        <tr key={item.id}>
          <td className="menu-list__table__item">{item.id}</td>
          <td className="menu-list__table__item">{item.title}</td>
          <td className="menu-list__table__item">{item.consist}</td>
          <td className="menu-list__table__item">{item.type}</td>
          <td className="menu-list__table__item">{item.price}</td>
          <td className="menu-list__table__item">
            <img className="menu-list__table__item__img" src={item.img} alt="product" />
          </td>
          <td className="menu-list__table__item">
            <Button
              onClick={() => dellItem(item)}
              className="menu-list__table__item__button"
              type="button"
              variant="outlined"
            >
              Удалить
            </Button>
          </td>
        </tr>
      );
  });

  return (
    <div className="menu-list">
      <p className="menu-list__title">Состав меню:</p>
      <table className="menu-list__table" border="1">
        <tbody>
          <tr>
            <th className="menu-list__table__head">id</th>
            <th className="menu-list__table__head">Название</th>
            <th className="menu-list__table__head">Описание</th>
            <th className="menu-list__table__head">Тип</th>
            <th className="menu-list__table__head">Цена</th>
            <th className="menu-list__table__head">Картинка</th>
            <th className="menu-list__table__head">Действие</th>
          </tr>
          <tr>
            <td className="table__divider" colSpan="7">
              Пиццы
            </td>
          </tr>
          {resPizza}
          <tr>
            <td className="table__divider" colSpan="7">
              Напитки
            </td>
          </tr>
          {resDrinks}
          <tr>
            <td className="table__divider" colSpan="7">
              Закуски
            </td>
          </tr>
          {resSnacks}
          <tr>
            <td className="table__divider" colSpan="7">
              Десерты
            </td>
          </tr>
          {resDesserts}
        </tbody>
      </table>
    </div>
  );
};

export default MenuTable;
