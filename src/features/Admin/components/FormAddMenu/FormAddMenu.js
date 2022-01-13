/* eslint-disable no-unused-vars */
import React from 'react';
import './FormAddMenu.scss';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FormAddMenu = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem('list'));
  const [type, setType] = React.useState();
  const [title, setTitle] = React.useState();
  const [price, setPrice] = React.useState();
  const [consist, setConsist] = React.useState();
  const [img, setImg] = React.useState();

  const addItem = () => {
    const currentItem = {
      id: 0,
      title,
      consist,
      img,
      type,
      price,
    };
    // generate id
    currentItem.id =
      data.pizza.length + data.snacks.length + data.drinks.length + data.desserts.length;

    // add new item in menu
    switch (type) {
      case 'Пиццы':
        data.pizza.push(currentItem);
        localStorage.setItem('list', JSON.stringify(data));
        navigate('/admin');
        break;
      case 'Напитки':
        data.drinks.push(currentItem);
        localStorage.setItem('list', JSON.stringify(data));
        navigate('/admin');
        break;
      case 'Десерты':
        data.desserts.push(currentItem);
        localStorage.setItem('list', JSON.stringify(data));
        navigate('/admin');
        break;
      case 'Закуски':
        data.snacks.push(currentItem);
        localStorage.setItem('list', JSON.stringify(data));
        navigate('/admin');
        break;
      default:
        console.log('Не выбрано');
    }
  };

  return (
    <form className="form-add-menu">
      <div className="form-add-menu__container">
        <p className="form-add-menu__title">Добавление в меню</p>
        <div className="form-add-menu__section">
          <RadioGroup
            className="form-add-menu__section__radio-button"
            row
            aria-label="type-of-product"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              onChange={() => setType('Пиццы')}
              value="Пиццы"
              control={<Radio />}
              label="Пиццы"
            />
            <FormControlLabel
              onChange={() => setType('Напитки')}
              value="Напитки"
              control={<Radio />}
              label="Напитки"
            />
            <FormControlLabel
              onChange={() => setType('Десерты')}
              value="Десерты"
              control={<Radio />}
              label="Десерты"
            />
            <FormControlLabel
              onChange={() => setType('Закуски')}
              value="Закуски"
              control={<Radio />}
              label="Закуски"
            />
          </RadioGroup>
        </div>
        <div className="form-add-menu__section">
          <TextField
            onChange={e => setTitle(e.target.value)}
            className="form-add-menu__section__input--short"
            label="Название товара"
            variant="filled"
            color="warning"
          />
          <TextField
            onChange={e => setPrice(e.target.value)}
            className="form-add-menu__section__input--short"
            label="Цена"
            variant="filled"
            color="warning"
          />
        </div>
        <div className="form-add-menu__section">
          <TextField
            onChange={e => setConsist(e.target.value)}
            className="form-add-menu__section__input--long"
            label="Описание / состав"
            variant="filled"
            color="warning"
            fullWidth
          />
        </div>
        <div className="form-add-menu__section">
          <TextField
            onChange={e => setImg(e.target.value)}
            className="form-add-menu__section__input--long"
            label="Ссылка на картинку"
            variant="filled"
            color="warning"
            fullWidth
          />
        </div>
        <div className="form-add-menu__section">
          <div className="form-add-menu__section__input--long form-add-menu__button">
            <Button
              onClick={addItem}
              style={{
                borderColor: '#0fff23',
                color: '#0fff23',
              }}
              variant="outlined"
              className="form-add-menu__button"
            >
              Добавить товар
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormAddMenu;
