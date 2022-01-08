import React from 'react';
import PromoCreate from '../PromoCreate';
import PromoList from '../PromoList';
import './PromoAll.scss';

const PromoAll = () => {
  return (
    <div className="promo-all-container">
      <PromoCreate />
      <PromoList />
    </div>
  );
};

export default PromoAll;
