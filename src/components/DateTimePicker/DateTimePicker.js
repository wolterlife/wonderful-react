import React from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ruLocale from 'date-fns/locale/ru';
import PropTypes from 'prop-types';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import { DesktopDateTimePicker } from '@mui/lab';
import './DateTimePicker.scss';

const DateTimePicker = props => {
  const [value, setValue] = React.useState(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
      <DesktopDateTimePicker
        disabled={props.isDisable}
        label="Выбрать дату и время"
        value={value}
        color="warning"
        minDate={new Date('2022-01-01')}
        mask=""
        onChange={newValue => {
          setValue(newValue);
          props.callDate(newValue);
        }}
        renderInput={params => (
          <TextField color="warning" variant="filled" className="form__date-input" {...params} />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;

DateTimePicker.propTypes = {
  isDisable: PropTypes.bool.isRequired,
  callDate: PropTypes.func.isRequired,
};
