/* eslint-disable react/prop-types */
import React from 'react';
import './PopUpHistoryInfo.scss';

const PopUpHistoryInfo = ({ callShow, selectedUser }) => {
  console.log(selectedUser);
  const res = selectedUser.map(item => {
    return (
      <div key={item.id}>
        <p>
          {item.id} || {item.ordFields.address} || {item.ordFields.firstName}{' '}
          {item.ordFields.secondName}
        </p>
      </div>
    );
  });
  return (
    <div className="PopUpHistoryInfo">
      <div className="container">
        <div className="top-container">
          <p className="form__text">История заказов</p>
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

export default PopUpHistoryInfo;
