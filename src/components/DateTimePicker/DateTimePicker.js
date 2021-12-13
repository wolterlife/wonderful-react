import React from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ruLocale from 'date-fns/locale/ru';
import enLocale from 'date-fns/locale/en-US';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import { DesktopDateTimePicker } from '@mui/lab';
import './DateTimePicker.scss';

const localeMap = {
  en: enLocale,
  ru: ruLocale,
};

const DateTimePicker = () => {
  const [value, setValue] = React.useState(new Date());
  const [locale] = React.useState('ru');
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[locale]}>
      <DesktopDateTimePicker
        label="Выбрать дату и время"
        value={value}
        minDate={new Date('2017-01-01')}
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={params => (
          <TextField variant="filled" className="form__date-input" {...params} />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
