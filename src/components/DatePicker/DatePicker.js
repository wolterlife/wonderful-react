import React, { useState, forwardRef } from 'react';
import './DatePicker.scss';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import { addDays, subDays } from 'date-fns';

registerLocale('ru', ru);

const DateChoose = () => {
  const [startDate, setStartDate] = useState(new Date());
  // eslint-disable-next-line react/prop-types
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button type="button" className="customInput" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <DatePicker
      withPortal
      fixedHeight
      dateFormat="dd/MM/yyyy"
      locale="ru"
      selected={startDate}
      todayButton="[Заказать на сегодня]"
      onChange={date => setStartDate(date)} // mb change to startDate => setStartDate(startDate)
      // 7 day order limit
      includeDateIntervals={[{ start: subDays(new Date(), 1), end: addDays(new Date(), 7) }]}
      customInput={<CustomInput />}
    />
  );
};

export default DateChoose;
