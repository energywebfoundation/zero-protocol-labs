import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@material-ui/lab';
import useStyles from './date-picker-styles';
import { ReactComponent as CalendarIconLight } from '../../assets/svg/calendarIconLight.svg';
import { ReactComponent as CalendarIconDark } from '../../assets/svg/calendarIconDark.svg';
import { ReactComponent as CalendarIconWhite } from '../../assets/svg/calendarIconWhite.svg';
import { IFormStepItem } from '../formik-stepper/FormikCurrentStep';

interface IBasicDatePickerProps extends IFormStepItem {
  color?: string;
  isFilecoin?: boolean;
  calendar?: string;
  name?: string;
}

const BasicDatePicker: React.FC<IBasicDatePickerProps> = ({
  color,
  isFilecoin,
  calendar,
  setFieldValue,
  name
}) => {
  const [value, setValue] = React.useState(null);

  const styles = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        inputFormat="yyyy/MM/dd"
        InputProps={{
          className: `${
            isFilecoin
              ? color === 'darkBlue'
                ? styles.inputDark
                : styles.inputLight
              : color === 'darkBlue'
              ? styles.inputLightBitcoin
              : styles.inputDarkBitcoin
          }`,
        }}
        label=""
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          setFieldValue && setFieldValue(name, newValue)
        }}
        components={{
          OpenPickerIcon: isFilecoin
            ? calendar === 'white'
              ? CalendarIconWhite
              : CalendarIconLight
            : isFilecoin
            ? CalendarIconLight
            : CalendarIconDark,
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default BasicDatePicker;
