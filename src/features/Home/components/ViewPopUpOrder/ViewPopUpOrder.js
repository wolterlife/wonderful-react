/* eslint-disable react/prop-types,no-restricted-syntax */
import React from 'react';
import './ViewPopUpOrder.scss';
import PropTypes from 'prop-types';
import TableOrder from '../TableOrder';

const ViewPopUpOrder = props => {
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
        <TableOrder
          ordInfo={props.ordInfo}
          cart={props.cart}
          callTotal={props.callTotal}
          total={props.total}
        />
      </div>
    </div>
  );
};

ViewPopUpOrder.propTypes = {
  callShow: PropTypes.func.isRequired,
};

export default ViewPopUpOrder;
