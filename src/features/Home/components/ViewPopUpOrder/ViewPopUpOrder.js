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
        {props.orderAvaible && (
          <TableOrder
            callPopUp={props.callShow}
            ordInfo={props.ordInfo}
            cart={props.cart}
            callTotal={props.callTotal}
            total={props.total}
          />
        )}
      </div>
    </div>
  );
};

ViewPopUpOrder.propTypes = {
  callShow: PropTypes.func.isRequired,
  orderAvaible: PropTypes.bool.isRequired,
  ordInfo: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  callTotal: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default ViewPopUpOrder;
