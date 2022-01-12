import React from 'react';
import './FormChangeUser.scss';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FormChangeUser = () => {
  const navigate = useNavigate();
  const currentData = JSON.parse(localStorage.getItem('currentUser'));
  const [email, setEmail] = React.useState(currentData.email);
  const [password, setPassword] = React.useState('');
  const [checkPassword, setCheckPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState(currentData.firstName);
  const [secondName, setSecondName] = React.useState(currentData.secondName);
  const [address, setAddress] = React.useState(currentData.address);
  const [phoneNumber, setPhoneNumber] = React.useState(currentData.phoneNumber);

  const isUserUnique = checkedEmail => {
    let oldData = localStorage.getItem('listUsers');
    if (oldData != null) oldData = JSON.parse(oldData);
    if (currentData.email !== email) return !oldData.some(user => user.email === checkedEmail);
    return true;
  };

  const exitUser = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  const replaceUser = () => {
    let oldData = localStorage.getItem('listUsers');
    if (oldData != null) oldData = JSON.parse(oldData);
    currentData.firstName = firstName;
    currentData.secondName = secondName;
    currentData.address = address;
    currentData.phoneNumber = phoneNumber;
    oldData[currentData.id - 1] = currentData;
    localStorage.setItem('currentUser', JSON.stringify(currentData));
    localStorage.setItem('listUsers', JSON.stringify(oldData));
  };

  const changeUser = () => {
    // check empty values
    if (
      email.length === 0 ||
      firstName.length === 0 ||
      secondName.length === 0 ||
      address.length === 0 ||
      phoneNumber.length === 0
    )
      console.log('Заполнены не все поля');
    else {
      // check email
      if (isUserUnique(email)) {
        currentData.email = email;
      } else console.log('Почта уже зарегистрирована');

      // check password
      if (password.length > 0 || checkPassword.length > 0) {
        if (password === checkPassword) {
          currentData.password = password;
        } else console.log('Пароли не совпадают');
      }
      replaceUser();
    }
  };

  const dellUser = () => {
    let oldData = localStorage.getItem('listUsers');
    if (oldData != null) oldData = JSON.parse(oldData);
    oldData.splice(oldData.indexOf(currentData), 1, {});
    localStorage.setItem('listUsers', JSON.stringify(oldData));
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <form className="change-profile">
      <div className="change-profile__container">
        <p className="change-profile__title">Смена данных профиля</p>
        <div className="change-profile__section">
          <TextField
            className="change-profile__section__input--long"
            label="Email"
            variant="filled"
            fullWidth
            type="email"
            color="warning"
            onChange={e => setEmail(e.target.value)}
            defaultValue={currentData.email}
          />
        </div>
        <div className="change-profile__section">
          <TextField
            className="change-profile__section__input--short"
            label="Новый пароль"
            variant="filled"
            color="warning"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          <TextField
            className="change-profile__section__input--short"
            label="Повторите пароль"
            variant="filled"
            color="warning"
            type="password"
            onChange={e => setCheckPassword(e.target.value)}
          />
        </div>
        <div className="change-profile__section">
          <TextField
            className="change-profile__section__input--short"
            label="Имя"
            variant="filled"
            color="warning"
            onChange={e => setFirstName(e.target.value)}
            defaultValue={currentData.firstName}
          />
          <TextField
            className="change-profile__section__input--short"
            label="Фамилия"
            variant="filled"
            color="warning"
            onChange={e => setSecondName(e.target.value)}
            defaultValue={currentData.secondName}
          />
        </div>
        <div className="change-profile__section">
          <TextField
            className="change-profile__section__input--short"
            label="Адрес"
            variant="filled"
            color="warning"
            onChange={e => setAddress(e.target.value)}
            defaultValue={currentData.address}
          />
          <TextField
            className="change-profile__section__input--short"
            label="Номер телефона"
            variant="filled"
            color="warning"
            onChange={e => setPhoneNumber(e.target.value)}
            defaultValue={currentData.phoneNumber}
          />
        </div>
        <div className="change-profile__section">
          <div className="change-profile__section__input--short change-profile__button">
            <Button
              onClick={changeUser}
              style={{
                borderColor: '#0fff23',
                color: '#0fff23',
              }}
              variant="outlined"
              className="change-profile__button"
            >
              Изменить профиль
            </Button>
          </div>
          <div className="change-profile__section__input--short change-profile__button">
            <Button
              onClick={dellUser}
              style={{
                borderColor: '#ff0f0f',
                color: '#ff0f0f',
              }}
              variant="outlined"
              className="change-profile__button"
            >
              Удалить аккаунт
            </Button>
          </div>
        </div>
        <div className="change-profile__section">
          <Button
            onClick={exitUser}
            style={{
              borderColor: '#ff7500',
              color: '#ff7500',
            }}
            variant="outlined"
            className="change-profile__button"
          >
            Выйти из аккаунта
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormChangeUser;
