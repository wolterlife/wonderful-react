import React from 'react';
import './FormAuthSignIn.scss';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FormAuthSignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-form">
      <div className="auth-form__container">
        <p className="auth-form__title">Вход в аккаунт</p>
        <div className="auth-form__img-container">
          <img src="/img/key.png" alt="Ключ авторизации" className="auth-form__img" />
        </div>
        <div className="auth-form__section">
          <TextField
            className="auth-form__section__input--long"
            label="Email"
            variant="filled"
            type="email"
            color="warning"
          />
        </div>
        <div className="auth-form__section">
          <TextField
            className="auth-form__section__input--long"
            label="Пароль"
            variant="filled"
            type="password"
            color="warning"
          />
        </div>
        <div className="auth-form__section">
          <Button
            onClick={() => navigate('/')}
            style={{
              borderColor: '#0fff23',
              color: '#0fff23',
            }}
            variant="outlined"
            className="auth-form__button"
          >
            Войти
          </Button>
        </div>
        <div className="auth-form__section">
          <Button
            onClick={() => navigate('/registration')}
            style={{
              borderColor: '#ff7500',
              color: '#ff7500',
            }}
            variant="outlined"
            className="auth-form__button"
          >
            Регистрация
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormAuthSignIn;
