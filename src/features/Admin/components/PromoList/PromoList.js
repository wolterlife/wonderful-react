import React from 'react';
import './PromoList.scss';
import { Button } from '@mui/material';

const PromoList = () => {
  return (
    <div className="promo-list">
      <table className="promo-list__table" border="1">
        <tr>
          <th className="promo-list__table__head">id</th>
          <th className="promo-list__table__head">Промокод</th>
          <th className="promo-list__table__head">%</th>
        </tr>
        <tr>
          <td className="promo-list__table__item">1</td>
          <td className="promo-list__table__item">#PIZZAFREE</td>
          <td className="promo-list__table__item">10</td>
          <td className="promo-list__table__item">
            <Button type="button" variant="outlined">
              Удалить
            </Button>
          </td>
        </tr>
        <tr>
          <td className="promo-list__table__item">2</td>
          <td className="promo-list__table__item">#PIZZAFREE</td>
          <td className="promo-list__table__item">10</td>
          <td className="promo-list__table__item">
            <Button type="button" variant="outlined">
              Удалить
            </Button>
          </td>
        </tr>
        <tr>
          <td className="promo-list__table__item">3</td>
          <td className="promo-list__table__item">#PIZZAFREE</td>
          <td className="promo-list__table__item">10</td>
          <td className="promo-list__table__item">
            <Button type="button" variant="outlined">
              Удалить
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PromoList;
