/* eslint-disable react/prop-types */
import React from 'react';
import './PopUpPersonInfo.scss';

const PopUpPersonalInfo = ({ callShow, client }) => {
  return (
    <div className="PopUpPersonalInfo">
      <div className="container">
        <div className="top-container">
          <p className="form__text">Клиент</p>
          <input
            alt="Закрыть"
            src="img/icons/close-circle.svg"
            type="image"
            onClick={() => callShow(false)}
          />
        </div>
        <hr />
        <p>
          {client.ordFields.firstName} {client.ordFields.secondName}
        </p>
        <p>{client.ordFields.address}</p>
        <p>{client.ordFields.phoneNumber}</p>
      </div>
    </div>
  );
};

export default PopUpPersonalInfo;
