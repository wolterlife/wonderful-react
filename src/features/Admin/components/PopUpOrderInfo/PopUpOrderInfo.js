/* eslint-disable react/prop-types */
import React from 'react';
import './PopUpOrderInfo.scss';

const PopUpPersonalInfo = ({ callShow, client }) => {
  const type = ['pizza', 'drinks', 'desserts', 'snacks'];
  const res = [];

  for (let i = 0; i < type.length; i++)
    // eslint-disable-next-line array-callback-return,consistent-return
    res[i] = client.items[type[i]].map(item => {
      if (item.quantity > 0)
        return (
          <p key={item.title}>
            {item.title} x {item.quantity}
          </p>
        );
    });

  return (
    <div className="PopUpPersonalInfo">
      <div className="container">
        <div className="top-container">
          <p className="form__text">{client.ordFields.address}</p>
          <input
            alt="Закрыть"
            src="img/icons/close-circle.svg"
            type="image"
            onClick={() => callShow(false)}
          />
        </div>
        <hr />
        {res}
      </div>
    </div>
  );
};

export default PopUpPersonalInfo;
