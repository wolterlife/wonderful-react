import React from 'react';
import './FormAuthSignIn.scss';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FormAuthSignIn = () => {
  const LOCAL_STORAGE_KEYS = {
    CURRENT_USER: 'currentUser',
    LIST_USERS: 'listUsers',
  };

  const navigate = useNavigate();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const auth = () => {
    let finded = false;
    let oldData = localStorage.getItem(LOCAL_STORAGE_KEYS.LIST_USERS);
    if (oldData != null) {
      oldData = JSON.parse(oldData);
      // eslint-disable-next-line no-restricted-syntax
      for (const key of oldData) {
        if (email === key.email && password === key.password && email != null && password != null) {
          finded = true;
          localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENT_USER, JSON.stringify(key));
          navigate('/admin');
        }
      }
      if (!finded) console.log('Почта/пароль введены неправильно');
    } else console.log('Пустая база данных');
  };

  return (
    <div className="auth-form">
      <div className="auth-form__container">
        <p className="auth-form__title">Вход в аккаунт</p>
        <div className="auth-form__img-container">
          <img src="/img/key.png" alt="Ключ авторизации" className="auth-form__img" />
        </div>
        <div className="auth-form__section">
          <TextField
            onChange={e => setEmail(e.target.value)}
            className="auth-form__section__input--long"
            label="Email"
            variant="filled"
            type="email"
            color="warning"
            fullWidth
          />
        </div>
        <div className="auth-form__section">
          <TextField
            onChange={e => setPassword(e.target.value)}
            className="auth-form__section__input--long"
            label="Пароль"
            variant="filled"
            type="password"
            color="warning"
            fullWidth
          />
        </div>
        <div className="auth-form__section">
          <Button
            onClick={auth}
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
