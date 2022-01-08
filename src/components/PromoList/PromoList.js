import React from 'react';
import './PromoList.scss';
import { Button } from '@mui/material';

const PromoList = () => {
  return (
    <div className="promo-list">
      <table className="promo-list__table" border="1">
        <tr>
          <th>id</th>
          <th>Промокод</th>
          <th>%</th>
        </tr>
        <tr>
          <td>1</td>
          <td>#PIZZAFREE</td>
          <td>10</td>
          <td>
            <Button type="button" variant="outlined">
              Удалить
            </Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>#PIZZAFREE</td>
          <td>10</td>
          <td>
            <Button type="button" variant="outlined">
              Удалить
            </Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>#PIZZAFREE</td>
          <td>10</td>
          <td>
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
