import React from 'react';
import './InputForm.scss';
import { Button, TextField } from '@mui/material';
import DateTimePicker from '../../../../components/DateTimePicker';

const InputForm = () => {
  const data = JSON.parse(localStorage.getItem('currentUser'));

  function checkField(num) {
    if (data == null) return '';
    switch (num) {
      case 1:
        return data.firstName;
      case 2:
        return data.secondName;
      case 3:
        return data.address;
      case 4:
        return data.phoneNumber;
      default:
        return '';
    }
  }
  return (
    <form className="form" id="delivery">
      <div className="form__container">
        <p className="form__title">Доставка до двери</p>
        <div className="form__section">
          <TextField
            className="form__section__input--short"
            label="Имя"
            variant="filled"
            color="warning"
            defaultValue={checkField(1)}
          />
          <TextField
            className="form__section__input--short"
            label="Фамилия"
            variant="filled"
            color="warning"
            defaultValue={checkField(2)}
          />
        </div>
        <div className="form__section">
          <TextField
            className="form__section__input--long"
            label="Адрес"
            variant="filled"
            fullWidth
            color="warning"
            defaultValue={checkField(3)}
          />
        </div>
        <div className="form__section">
          <TextField
            className="form__section__input--short"
            label="Номер телефона"
            fullWidth
            variant="filled"
            color="warning"
            defaultValue={checkField(4)}
          />
          <TextField
            className="form__section__input--short"
            label="Промокод (если есть)"
            fullWidth
            variant="filled"
            color="warning"
          />
        </div>
        <p className="form__title">Дата и время:</p>
        <div className="form__section">
          <DateTimePicker />
          <Button
            style={{
              borderColor: '#ff7500',
              color: '#ff7500',
            }}
            variant="outlined"
            className="form__button"
          >
            Как можно скорее
          </Button>
        </div>
        <div className="form__section">
          <Button
            style={{
              borderColor: '#0fff23',
              color: '#0fff23',
            }}
            variant="outlined"
            className="form__button"
          >
            Оформить заказ
          </Button>
          <Button
            style={{
              borderColor: '#ff0f0f',
              color: '#ff0f0f',
            }}
            variant="outlined"
            className="form__button"
          >
            Очистить корзину
          </Button>
        </div>
        <hr className="form__line" />
        <p className="form__total-text">
          Итого:
          <span className="form__price">
            <b id="price">2.50 руб.</b>
          </span>
        </p>
      </div>
    </form>
  );
};

export default InputForm;
