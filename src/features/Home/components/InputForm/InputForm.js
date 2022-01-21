/* eslint-disable react/prop-types */
import React from 'react';
import './InputForm.scss';
import { Button, TextField } from '@mui/material';
import DateTimePicker from '../../../../components/DateTimePicker';
import ViewPopUpOrder from '../ViewPopUpOrder';

const InputForm = props => {
  const data = JSON.parse(localStorage.getItem('currentUser'));
  const [isFastDelivery, setFastDelivery] = React.useState(false);
  const [statusButton, setStatusButton] = React.useState('#232323');

  const [firstName, setFirstName] = React.useState(data != null ? data.firstName : '');
  const [secondName, setSecondName] = React.useState(data != null ? data.secondName : '');
  const [address, setAddress] = React.useState(data != null ? data.address : '');
  const [phoneNumber, setPhoneNumber] = React.useState(data != null ? data.phoneNumber : '');
  const [promo, setPromo] = React.useState('');
  const [time, setTime] = React.useState(Date());

  // input fields
  let orderFields = {
    firstName,
    secondName,
    address,
    phoneNumber,
    promo,
    isFastDelivery,
    time,
  };

  // generate new order
  const currentOrder = {
    id: Date.now(),
    ordFields: orderFields,
    status: 'Не выполнен',
    items: props.cart,
  };

  // fastDelivery button
  const fastDelivery = () => {
    if (isFastDelivery) {
      setFastDelivery(false);
      setStatusButton('#232323');
    } else {
      setFastDelivery(true);
      setStatusButton('#653E1D');
    }
  };

  // check default fields
  const checkField = num => {
    if (data == null) return '';
    switch (num) {
      case 1:
        return data.firstName;
      case 2:
        return data.secondName;
      case 3:
        return data.address;
      case 4:
        return data.phoneNumber;
      default:
        return '';
    }
  };

  // show popUp view and take data from input form
  const openCart = () => {
    orderFields = {
      firstName,
      secondName,
      address,
      phoneNumber,
      promo,
      isFastDelivery,
      time,
    };
    props.callOrder(currentOrder);
    props.callPopUp(true);
  };

  //
  const clearCart = () => {
    props.callTotal(0);
    props.callCart({ pizza: [], drinks: [], desserts: [], snacks: [] });
  };

  return (
    <form className="form" id="delivery">
      <div className="form__container">
        <p className="form__title">Доставка до двери</p>
        <div className="form__section">
          <TextField
            className="form__section__input--short"
            label="Имя"
            variant="filled"
            color="warning"
            defaultValue={checkField(1)}
            onChange={e => setFirstName(e.target.value)}
          />
          <TextField
            className="form__section__input--short"
            label="Фамилия"
            variant="filled"
            color="warning"
            defaultValue={checkField(2)}
            onChange={e => setSecondName(e.target.value)}
          />
        </div>
        <div className="form__section">
          <TextField
            className="form__section__input--long"
            label="Адрес"
            variant="filled"
            fullWidth
            color="warning"
            defaultValue={checkField(3)}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div className="form__section">
          <TextField
            className="form__section__input--short"
            label="Номер телефона"
            fullWidth
            variant="filled"
            color="warning"
            defaultValue={checkField(4)}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <TextField
            className="form__section__input--short"
            label="Промокод (если есть)"
            fullWidth
            variant="filled"
            color="warning"
            onChange={e => setPromo(e.target.value)}
          />
        </div>
        <p className="form__title">Дата и время:</p>
        <div className="form__section">
          <DateTimePicker isDisable={isFastDelivery} callDate={setTime} />
          <Button
            style={{
              borderColor: '#ff7500',
              color: '#ff7500',
              backgroundColor: statusButton,
            }}
            variant="outlined"
            className="form__button"
            onClick={fastDelivery}
          >
            Как можно скорее
          </Button>
        </div>
        <div className="form__section">
          <Button
            onClick={openCart}
            style={{
              borderColor: '#0fff23',
              color: '#0fff23',
            }}
            variant="outlined"
            className="form__button"
          >
            Оформить заказ
          </Button>
          <Button
            onClick={clearCart}
            style={{
              borderColor: '#ff0f0f',
              color: '#ff0f0f',
            }}
            variant="outlined"
            className="form__button"
          >
            Очистить корзину
          </Button>
        </div>
        <hr className="form__line" />
        <p className="form__total-text">
          Итого:
          <span className="form__price">
            <b id="price">{Math.abs(props.total).toFixed(2)} руб.</b>
          </span>
        </p>
      </div>
      {props.isPopUpVisible && (
        <ViewPopUpOrder
          orderAvaible
          ordFields={orderFields}
          callShow={props.callPopUp}
          callOrder={props.callOrder}
          ordInfo={props.ordInfo}
          callCart={props.callCart}
          callTotal={props.callTotal}
          cart={props.cart}
          total={props.total}
        />
      )}
    </form>
  );
};

export default InputForm;
