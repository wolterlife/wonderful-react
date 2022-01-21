/* eslint-disable react/prop-types */
import React from 'react';
import './ShoppingBasket.scss';
import propTypes from 'prop-types';
import ViewPopUpOrder from '../ViewPopUpOrder';

const ShoppingBasket = props => {
  const showCart = () => {
    props.callPopUp(true);
  };

  return (
    <>
      <div onClick={showCart} className="shopping-basket">
        <p className="shopping-basket__text-total">{Math.abs(props.total).toFixed(2)}</p>
        <input
          className="shopping-basket__button"
          alt="Просмотреть корзину"
          src="img/icons/cart-mob.svg"
          type="image"
        />
      </div>
      {props.isPopUpVisible && (
        <ViewPopUpOrder
          orderAvaible={false}
          callShow={props.callPopUp}
          cart={props.cart}
          total={props.total}
        />
      )}
    </>
  );
};

export default ShoppingBasket;

ShoppingBasket.propTypes = {
  total: propTypes.number.isRequired,
};
