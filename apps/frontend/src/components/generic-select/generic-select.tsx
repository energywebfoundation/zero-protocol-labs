import { OutlinedInput, Select, SelectChangeEvent } from '@material-ui/core';
import * as React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import useStyles from './generic-select-styles';

export interface IGenericSelectProps {
  bgColor?: string;
  placeholder?: string;
  value: string;
  handleChange?: (value: SelectChangeEvent) => void;
  isFilecoin?: boolean;
  name?: string;
}

const GenericSelect: React.FC<IGenericSelectProps> = ({
  placeholder,
  bgColor,
  children,
  value,
  handleChange,
  isFilecoin,
  name,
}) => {
  const styles = useStyles();

  return (
    <Select
      input={
        <OutlinedInput
          sx={{
            '& > div:first-of-type': {
              backgroundColor: bgColor,
              border: 'none',
            },
            width: '100%',
          }}
          className={styles.outlineStyles}
        />
      }
      className={styles.selectStyles}
      IconComponent={KeyboardArrowDownIcon}
      displayEmpty
      value={value || ''}
      name={name}
      onChange={handleChange}
      MenuProps={{ disablePortal: true }}
      renderValue={(selected: string) => {
        if (!selected) {
          return (
            <span
              className={`${
                isFilecoin
                  ? styles.placeholderFilecoinStyles
                  : styles.placeholderStyles
              }`}
            >
              {placeholder || ''}
            </span>
          );
        }

        return (
          <span
            className={`${
              isFilecoin
                ? styles.selectFilcoinValueStyle
                : styles.selectValueStyle
            }`}
          >
            {selected}
          </span>
        );
      }}
    >
      {children}
    </Select>
  );
};

export default GenericSelect;
