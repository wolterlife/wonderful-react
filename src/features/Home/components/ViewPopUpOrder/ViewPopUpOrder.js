/* eslint-disable react/prop-types,no-restricted-syntax */
import React from 'react';
import './ViewPopUpOrder.scss';
import PropTypes from 'prop-types';
import TableOrder from '../TableOrder';

const ViewPopUpOrder = props => {
  const currentOrder = {
    id: Date.now(),
    status: 'Не выполнен',
    items: props.cart,
    total: 0,
  };

  function check() {
    let sum = 0;
    for (const key of currentOrder.items.pizza) sum += key.quantity * key.price;
    for (const key of currentOrder.items.drinks) sum += key.quantity * key.price;
    for (const key of currentOrder.items.desserts) sum += key.quantity * key.price;
    for (const key of currentOrder.items.snacks) sum += key.quantity * key.price;
    currentOrder.total = sum;
    console.log(currentOrder);
    console.log(props.cart);
  }
  check();

  return (
    <div className="PopUpOrder">
      <div className="container">
        <div className="top-container">
          <p className="form__text">Корзина</p>
          <input
            alt="Закрыть"
            src="img/icons/close-circle.svg"
            type="image"
            onClick={() => props.callShow(false)}
          />
        </div>
        <hr />
        <TableOrder order={currentOrder} />
      </div>
    </div>
  );
};

ViewPopUpOrder.propTypes = {
  callShow: PropTypes.func.isRequired,
};

export default ViewPopUpOrder;
