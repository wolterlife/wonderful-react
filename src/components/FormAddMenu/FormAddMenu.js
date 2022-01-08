import React from 'react';
import './FormAddMenu.scss';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';

const FormAddMenu = () => {
  return (
    <form className="form-add-menu">
      <div className="form-add-menu__container">
        <p className="form-add-menu__title">Добавление в меню</p>
        <div className="form-add-menu__section">
          <RadioGroup
            className="form-add-menu__section__radio-button"
            row
            aria-label="type-of-product"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Пицца" control={<Radio />} label="Пицца" />
            <FormControlLabel value="Напитки" control={<Radio />} label="Напитки" />
            <FormControlLabel value="Дессерты" control={<Radio />} label="Дессерты" />
            <FormControlLabel value="Закуски" control={<Radio />} label="Закуски" />
          </RadioGroup>
        </div>
        <div className="form-add-menu__section">
          <TextField
            className="form-add-menu__section__input--short"
            label="Название товара"
            variant="filled"
            color="warning"
          />
          <TextField
            className="form-add-menu__section__input--short"
            label="Цена"
            variant="filled"
            color="warning"
          />
        </div>
        <div className="form-add-menu__section">
          <TextField
            className="form-add-menu__section__input--long"
            label="Описание / состав"
            variant="filled"
            color="warning"
            fullWidth
          />
        </div>
        <div className="form-add-menu__section">
          <TextField
            className="form-add-menu__section__input--long"
            label="Ссылка на картинку"
            variant="filled"
            color="warning"
            fullWidth
          />
        </div>
        <div className="form-add-menu__section">
          <div className="form-add-menu__section__input--long form-add-menu__button">
            <Button
              style={{
                borderColor: '#0fff23',
                color: '#0fff23',
              }}
              variant="outlined"
              className="form-add-menu__button"
            >
              Добавить товар
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormAddMenu;
