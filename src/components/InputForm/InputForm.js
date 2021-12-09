import React from 'react';
import './InputForm.scss';
import { TextField } from '@mui/material';

const InputForm = () => {
  return (
    <form className="form">
      <div className="form__container">
        <p className="form__title">Доставка до двери</p>
        <div className="form__section">
          <TextField
            className="form__section__input"
            id="outlined-basic"
            label="Имя"
            variant="outlined"
          />
          <TextField
            className="form__section__input"
            id="outlined-basic"
            label="Фамиилия"
            variant="outlined"
          />
        </div>
        <div className="form__section">
          <TextField
            className="form__section__input"
            id="outlined-basic"
            label="Адрес"
            variant="outlined"
            fullWidth="true"
          />
        </div>
        <div className="form__section">
          <TextField
            className="form__section__input"
            id="outlined-basic"
            label="Номер телефона"
            variant="outlined"
          />
        </div>
      </div>
    </form>
  );
};

export default InputForm;
