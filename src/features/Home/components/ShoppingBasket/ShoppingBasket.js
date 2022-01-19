import React from 'react';
import './ShoppingBasket.scss';
import propTypes from 'prop-types';

const ShoppingBasket = props => {
  return (
    <div onClick={() => console.log('CHECKED')} className="shopping-basket">
      <p className="shopping-basket__text-total">{Math.abs(props.total).toFixed(2)}</p>
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

ShoppingBasket.propTypes = {
  total: propTypes.number.isRequired,
};
