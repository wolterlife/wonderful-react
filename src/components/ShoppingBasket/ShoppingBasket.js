import React from 'react';
import './ShoppingBasket.scss';

const ShoppingBasket = () => {
  return (
    <div className="shopping-basket">
      <input
        alt="Просмотреть корзину"
        onClick="openCart(false)"
        src="img/icons/cart-mob.svg"
        type="image"
      />
    </div>
  );
};

export default ShoppingBasket;
