import React from 'react';
import './ListOfMenu.scss';
import Button from '@mui/material/Button';

const ListOfMenu = () => {
  return (
    <div className="list-of-menu">
      <p className="list-of-menu__title">Сделай свой выбор</p>
      <p className="list-of-menu__chapter" id="pizza">
        Пицца
      </p>
      <div className="list-of-menu__section">
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони</p>
            <p className="card__consist">Томатный соус, пикантная пепперони, сыр моцарелла</p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони</p>
            <p className="card__consist">
              Томатный соус, пикантная пепперони, сыр моцарелла и много чего ещё прекрасного, что
              должен попробовать каждый человек
            </p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони и супер длинное название</p>
            <p className="card__consist">Томатный соус, пикантная пепперони, сыр моцарелла</p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони и супер длинное название</p>
            <p className="card__consist">Томатный соус, пикантная пепперони, сыр моцарелла</p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони и супер длинное название</p>
            <p className="card__consist">Томатный соус, пикантная пепперони, сыр моцарелла</p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони и супер длинное название</p>
            <p className="card__consist">Томатный соус, пикантная пепперони, сыр моцарелла</p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
      </div>
      <p className="list-of-menu__chapter" id="drinks">
        Напитки
      </p>
      <div className="list-of-menu__section">
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони</p>
            <p className="card__consist">Томатный соус, пикантная пепперони, сыр моцарелла</p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони</p>
            <p className="card__consist">
              Томатный соус, пикантная пепперони, сыр моцарелла и много чего ещё прекрасного, что
              должен попробовать каждый человек
            </p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони и супер длинное название</p>
            <p className="card__consist">Томатный соус, пикантная пепперони, сыр моцарелла</p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
      </div>
      <p className="list-of-menu__chapter" id="desserts">
        Десерты
      </p>
      <div className="list-of-menu__section">
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони</p>
            <p className="card__consist">Томатный соус, пикантная пепперони, сыр моцарелла</p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони</p>
            <p className="card__consist">
              Томатный соус, пикантная пепперони, сыр моцарелла и много чего ещё прекрасного, что
              должен попробовать каждый человек
            </p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони и супер длинное название</p>
            <p className="card__consist">Томатный соус, пикантная пепперони, сыр моцарелла</p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
      </div>
      <p className="list-of-menu__chapter" id="snacks">
        Закуски
      </p>
      <div className="list-of-menu__section">
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони</p>
            <p className="card__consist">Томатный соус, пикантная пепперони, сыр моцарелла</p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони</p>
            <p className="card__consist">
              Томатный соус, пикантная пепперони, сыр моцарелла и много чего ещё прекрасного, что
              должен попробовать каждый человек
            </p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="card__container">
            <img src="img/items/p1.png" alt="product-item" className="card__img" />
            <p className="card__title">Пеперони и супер длинное название</p>
            <p className="card__consist">Томатный соус, пикантная пепперони, сыр моцарелла</p>
          </div>
          <div className="card__actions">
            <p className="card__price">2.35 BYN</p>
            <Button variant="contained" size="small" color="warning">
              Купить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfMenu;
