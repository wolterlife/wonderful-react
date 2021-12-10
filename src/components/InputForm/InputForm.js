import React from 'react';
import './InputForm.scss';
import { TextField, Button } from '@mui/material';
import DateChoose from '../DatePicker/DatePicker';

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
          <DateChoose />
        </div>
        <Button variant="outlined" className="form__button">
          Доставить как можно скорее
        </Button>
      </div>
    </form>
  );
};

export default InputForm;
