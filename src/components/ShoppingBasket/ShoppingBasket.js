import React from 'react';
import './ShoppingBasket.scss';

const ShoppingBasket = () => {
  return (
    <div className="shopping-basket-container">
      <p className="shopping-basket__text-total">2.44</p>
      <input
        className="shopping-basket__button"
        alt="Просмотреть корзину"
        onClick="openCart(false)"
        src="img/icons/cart-mob.svg"
        type="image"
      />
    </div>
  );
};

export default ShoppingBasket;
