import React from 'react';
import './InputForm.scss';
import { TextField, Button } from '@mui/material';

const InputForm = () => {
  return (
    <form className="form">
      <div className="form__container">
        <p className="form__title">Доставка до двери</p>
        <div className="form__section">
          <TextField
            className="form__section__input--short"
            id="filled-basic"
            label="Имя"
            variant="filled"
            sx={{}}
          />
          <TextField
            className="form__section__input--short"
            id="filled-basic"
            label="Фамилия"
            variant="filled"
          />
        </div>
        <div className="form__section">
          <TextField
            className="form__section__input--long"
            id="filled-basic"
            label="Адрес"
            variant="filled"
            fullWidth
          />
        </div>
        <div className="form__section">
          <TextField
            className="form__section__input--short"
            id="filled-basic"
            label="Номер телефона"
            fullWidth
            variant="filled"
          />
          <TextField
            className="form__section__input--short"
            id="filled-basic"
            label="Промокод (если есть)"
            fullWidth
            variant="filled"
          />
        </div>
        <p className="form__title">Дата и время:</p>
        <div className="form__section">
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
          <input className="form__date" name="time" type="datetime-local" />
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
