import React from 'react';
import './FormAuthRegistration.scss';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const FormAuthRegistration = () => {
  function addUser() {
    console.log('new user');
  }

  return (
    <form className="registration">
      <div className="registration__container">
        <p className="registration__title">Регистрация</p>
        <div className="registration__section">
          <TextField
            className="registration__section__input--long"
            label="Email"
            variant="filled"
            fullWidth
            type="email"
            color="warning"
          />
        </div>
        <div className="registration__section">
          <TextField
            className="registration__section__input--short"
            label="Пароль"
            variant="filled"
            color="warning"
            type="password"
          />
          <TextField
            className="registration__section__input--short"
            label="Подтвердите пароль"
            variant="filled"
            color="warning"
            type="password"
          />
        </div>
        <div className="registration__section">
          <TextField
            className="registration__section__input--short"
            label="Имя"
            variant="filled"
            color="warning"
          />
          <TextField
            className="registration__section__input--short"
            label="Фамилия"
            variant="filled"
            color="warning"
          />
        </div>
        <div className="registration__section">
          <TextField
            className="registration__section__input--short"
            label="Адрес"
            variant="filled"
            color="warning"
          />
          <TextField
            className="registration__section__input--short"
            label="Номер телефона"
            variant="filled"
            color="warning"
          />
        </div>
        <div className="registration__section">
          <Link to="/admin" className="registration__section__input--short registration__button">
            <Button
              onClick={() => addUser()}
              style={{
                borderColor: '#0fff23',
                color: '#0fff23',
              }}
              variant="outlined"
              className="registration__button"
            >
              Создать аккаунт
            </Button>
          </Link>
          <Link to="/signIn" className="registration__section__input--short registration__button">
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
          </Link>
        </div>
      </div>
    </form>
  );
};

export default FormAuthRegistration;
