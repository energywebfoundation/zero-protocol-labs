import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@material-ui/lab';
import useStyles from './date-picker-styles';

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  const styles = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        inputFormat="yyyy/MM/dd"
        InputProps={{ className: styles.input }}
        label=""
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
