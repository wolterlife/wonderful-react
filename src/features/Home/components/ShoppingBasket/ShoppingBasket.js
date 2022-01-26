import React from 'react';
import './ShoppingBasket.scss';
import propTypes from 'prop-types';
import ViewPopUpOrder from '../ViewPopUpOrder';

const ShoppingBasket = ({ callPopUp, total, cart, isPopUpVisible }) => {
  const showCart = () => {
    callPopUp(true);
  };

  return (
    <>
      <div onClick={showCart} className="shopping-basket">
        <p className="shopping-basket__text-total">{Math.abs(total).toFixed(2)}</p>
        <input
          className="shopping-basket__button"
          alt="Просмотреть корзину"
          src="img/icons/cart-mob.svg"
          type="image"
        />
      </div>
      {isPopUpVisible && (
        <ViewPopUpOrder orderAvaible={false} callShow={callPopUp} cart={cart} total={total} />
      )}
    </>
  );
};

export default ShoppingBasket;

ShoppingBasket.propTypes = {
  total: propTypes.number.isRequired,
  callPopUp: propTypes.func.isRequired,
  cart: propTypes.object.isRequired,
  isPopUpVisible: propTypes.bool.isRequired,
};
