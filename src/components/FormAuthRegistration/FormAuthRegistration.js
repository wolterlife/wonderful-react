import React from 'react';
import './FormAuthRegistration.scss';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FormAuthRegistration = () => {
  const LOCAL_STORAGE_KEYS = {
    CURRENT_USER: 'currentUser',
    LIST_USERS: 'listUsers',
  };

  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checkPassword, setCheckPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [secondName, setSecondName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const isUserUnique = (checkedEmail, allUsers) => {
    return !allUsers.some(user => user.email === checkedEmail);
  };

  const addUser = () => {
    if (password === checkPassword) {
      // Create object for new user (take all data from input form)
      const userData = {
        id: 0,
        email,
        password,
        firstName,
        secondName,
        address,
        phoneNumber,
        orderHistory: [],
      };

      // if user first create template for user
      let oldData = localStorage.getItem(LOCAL_STORAGE_KEYS.LIST_USERS);
      if (oldData != null) oldData = JSON.parse(oldData);
      else oldData = [{}];

      // check empty values
      if (
        email.length === 0 ||
        firstName.length === 0 ||
        secondName.length === 0 ||
        address.length === 0 ||
        phoneNumber.length === 0 ||
        password.length === 0
      )
        console.log('Пустое поле');
      else if (isUserUnique(email, oldData)) {
        console.log('REGISTRATION SUCCESSFUL');
        oldData.push(userData);
        userData.id = oldData.length; // create id
        localStorage.setItem(LOCAL_STORAGE_KEYS.LIST_USERS, JSON.stringify(oldData));
        localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENT_USER, JSON.stringify(userData));
        navigate('/wonderful-react/');
      } else console.log('Аккаунт уже существует (используйте другой email)');
    } else console.log('Пароли не совпадают');
  };

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
              onClick={addUser}
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
              onClick={() => navigate('/wonderful-react/signIn')}
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
