import React from 'react';
import './ShoppingBasket.scss';

const ShoppingBasket = () => {
  return (
    <div onClick={() => console.log('CHECKED')} className="shopping-basket">
      <p className="shopping-basket__text-total">2.50</p>
      <input
        className="shopping-basket__button"
        alt="Просмотреть корзину"
        src="img/icons/cart-mob.svg"
        type="image"
      />
    </div>
  );
};

export default ShoppingBasket;
