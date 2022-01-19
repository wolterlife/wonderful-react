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
  };

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
        <TableOrder order={currentOrder} callTotal={props.callTotal} total={props.total} />
      </div>
    </div>
  );
};

ViewPopUpOrder.propTypes = {
  callShow: PropTypes.func.isRequired,
};

export default ViewPopUpOrder;
