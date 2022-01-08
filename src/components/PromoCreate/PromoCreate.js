import React from 'react';
import { Button, TextField } from '@mui/material';
import './PromoCreate.scss';
// Добавить стили в отдельный файл!!!
const PromoCreate = () => {
  return (
    <div className="promo-form">
      <div className="promo-form__container">
        <p className="promo-form__title">Добавление промокода</p>
        <div className="promo-form__section">
          <TextField
            className="promo-form__section__input--long"
            label="Промокод"
            variant="filled"
            type="email"
            color="warning"
          />
        </div>
        <div className="promo-form__section">
          <TextField
            className="promo-form__section__input--long"
            label="Процент снижения цены"
            variant="filled"
            color="warning"
          />
        </div>
        <div className="promo-form__section">
          <Button
            style={{
              borderColor: '#0fff23',
              color: '#0fff23',
            }}
            variant="outlined"
            className="promo-form__button"
          >
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromoCreate;
