import React from 'react';
import './FormAuthRegistration.scss';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FormAuthRegistration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checkPassword, setCheckPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [secondName, setSecondName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  function addUser() {
    if (password === checkPassword) {
      const userData = [
        {
          email,
          password,
          firstName,
          secondName,
          address,
          phoneNumber,
          orderHistory: [],
        },
      ];
      let oldData = localStorage.getItem('listUsers');
      // check emails
      oldData = JSON.parse(oldData);
      console.log(oldData);
      //
      console.log(`OLD DATA: ${oldData}`);
      localStorage.setItem('listUsers', JSON.stringify(userData));
      navigate('/admin');
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
          <div className="registration__section__input--short registration__button">
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
          </div>
          <div className="registration__section__input--short registration__button">
            <Button
              onClick={() => navigate('/signIn')}
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
      </div>
    </form>
  );
};

export default FormAuthRegistration;
