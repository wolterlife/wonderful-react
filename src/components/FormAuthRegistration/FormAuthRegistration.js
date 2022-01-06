import React from 'react';
import './FormAuthRegistration.scss';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const FormAuthRegistration = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checkPassword, setCheckPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [secondName, setSecondName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  function addUser() {
    if (password === checkPassword) {
      const userData = {
        email,
        password,
        firstName,
        secondName,
        address,
        phoneNumber,
      };
      console.log('Регистрация успешна:');
      console.log(userData);
    } else console.log('Пароли не совпадают');
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
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="registration__section">
          <TextField
            className="registration__section__input--short"
            label="Пароль"
            variant="filled"
            color="warning"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          <TextField
            className="registration__section__input--short"
            label="Подтвердите пароль"
            variant="filled"
            color="warning"
            type="password"
            onChange={e => setCheckPassword(e.target.value)}
          />
        </div>
        <div className="registration__section">
          <TextField
            className="registration__section__input--short"
            label="Имя"
            variant="filled"
            color="warning"
            onChange={e => setFirstName(e.target.value)}
          />
          <TextField
            className="registration__section__input--short"
            label="Фамилия"
            variant="filled"
            color="warning"
            onChange={e => setSecondName(e.target.value)}
          />
        </div>
        <div className="registration__section">
          <TextField
            className="registration__section__input--short"
            label="Адрес"
            variant="filled"
            color="warning"
            onChange={e => setAddress(e.target.value)}
          />
          <TextField
            className="registration__section__input--short"
            label="Номер телефона"
            variant="filled"
            color="warning"
            onChange={e => setPhoneNumber(e.target.value)}
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
