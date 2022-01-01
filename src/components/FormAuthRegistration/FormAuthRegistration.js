import React from 'react';
import './FormAuthRegistration.scss';
import { Button, TextField } from '@mui/material';

const FormAuthRegistration = () => {
  return (
    <form className="registration">
      <div className="registration__container">
        <p className="registration__title">Регистрация</p>
        <div className="registration__section">
          <TextField
            className="registration__section__input--long"
            id="filled-basic"
            label="Email"
            variant="filled"
            fullWidth
          />
        </div>
        <div className="registration__section">
          <TextField
            className="registration__section__input--short"
            id="filled-basic"
            label="Имя"
            variant="filled"
          />
          <TextField
            className="registration__section__input--short"
            id="filled-basic"
            label="Фамилия"
            variant="filled"
          />
        </div>
        <div className="registration__section">
          <TextField
            className="registration__section__input--short"
            id="filled-basic"
            label="Номер телефона"
            variant="filled"
          />
          <TextField
            className="registration__section__input--short"
            id="filled-basic"
            label="Адрес"
            variant="filled"
          />
        </div>
        <div className="registration__section">
          <Button
            style={{
              borderColor: '#0fff23',
              color: '#0fff23',
            }}
            variant="outlined"
            className="registration__button"
          >
            Создать аккаунт
          </Button>
          <Button
            style={{
              borderColor: '#ff7500',
              color: '#ff7500',
            }}
            variant="outlined"
            className="registration__button"
          >
            Вернуться ко входу
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormAuthRegistration;
