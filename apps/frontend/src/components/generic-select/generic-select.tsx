import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from '@material-ui/core';
import * as React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { variables } from 'libs/ui/theme/src';
import useStyles from './generic-select-styles';
import { useDispatch } from 'react-redux';
import { changeProtocolStatus } from '../../store/app.slice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import BitcoinIcon from '../../assets/svg/bitcoinIcon.svg';
import FilecoininIcon from '../../assets/svg/filecoinIcon.svg';
import FormUserType from '../../pages/wizard-page/components/form-user-type/form-user-type';
export interface GenericSelectProps {
  bgColor?: string;
  placeholder?: string;
  name?: string;
}

interface namesType {
  value: string;
  img: string;
}

const names: namesType[] = [
  { value: 'Filecoin', img: FilecoininIcon },
  { value: 'Bitcoin', img: BitcoinIcon },
];

const GenericSelect: React.FC<GenericSelectProps> = ({
  placeholder,
  name,
  bgColor,
  children,
}) => {
  const dispatch = useDispatch();
  const [personeName, setPersonName] = React.useState<string[]>([]);
  const isFilecoin = useSelector((state: RootState) => state.app.isFilecoin);
  const styles = useStyles(isFilecoin);

  const handleChange = (event: SelectChangeEvent<typeof personeName>) => {
    const {
      target: { value },
    } = event;
    dispatch(changeProtocolStatus(event.target.value === 'Filecoin'));
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <FormControl sx={{ width: '496px' }}>
        <Typography
          fontSize={variables.fontSize}
          color={isFilecoin ? variables.black : variables.white}
          ml={'15px'}
          mb={'8px'}
          fontWeight={600}
        >
          {name}
        </Typography>
        <Select
          input={
            <OutlinedInput
              sx={{
                '& > div:first-of-type': {
                  backgroundColor: bgColor,
                  border: 'none',
                },
              }}
              className={styles.outlineStyles}
            />
          }
          className={styles.selectStyles}
          IconComponent={KeyboardArrowDownIcon}
          displayEmpty
          value={personeName}
          onChange={handleChange}
          MenuProps={{ disablePortal: true }}
          renderValue={(selected: string[]) => {
            if (selected.length === 0) {
              return (
                <span className={styles.placeholderStyles}>{placeholder}</span>
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
                {selected.join(', ')}
              </span>
            );
          }}
        >
          {names.map((el: namesType, index) => (
            <MenuItem
              className={
                isFilecoin
                  ? styles.menuItemStylesFilecoin
                  : styles.menuItemStyles
              }
              value={el.value}
              key={index}
            >
              <span className={styles.iconStyles}>
                <img src={el.img} />
              </span>
              {el.value}
            </MenuItem>
          ))}
          <MenuItem
            className={`${
              isFilecoin ? styles.menuItemStylesFilecoin : styles.menuItemStyles
            } ${styles.addAnotherStyles}`}
          >
            Add Another
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default GenericSelect;
