import React from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ruLocale from 'date-fns/locale/ru';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import { DesktopDateTimePicker } from '@mui/lab';
import './DateTimePicker.scss';

const DateTimePicker = () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
      <DesktopDateTimePicker
        label="Выбрать дату и время"
        value={value}
        color="warning"
        minDate={new Date('2022-01-01')}
        mask=""
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={params => (
          <TextField color="warning" variant="filled" className="form__date-input" {...params} />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
