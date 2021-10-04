import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from '@material-ui/core';
import * as React from 'react';
import BitcoinIcon from '../../assets/svg/bitcoinIcon.svg';
import FilecoininIcon from '../../assets/svg/filecoinIcon.svg';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { variables } from 'libs/ui/theme/src';
import useStyles from './generic-select-styles';
import { useDispatch } from 'react-redux';
import { changeProtocolStatus } from '../../store/app.slice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export interface GenericSelectProps {
  bgColor: string;
}

interface namesType {
  value: string;
  img: string;
}

const names: namesType[] = [
  { value: 'Filecoin', img: FilecoininIcon },
  { value: 'Bitcoin', img: BitcoinIcon },
];

export default function GenericSelect({ bgColor }: GenericSelectProps) {
  const dispatch = useDispatch();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const styles = useStyles();
  const isFilecoint = useSelector((state: RootState) => state.app.isFilecoin);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
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
          color={isFilecoint ? variables.black : variables.white}
          ml={'15px'}
          mb={'8px'}
          fontWeight={600}
        >
          Protocol
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
          value={personName}
          onChange={handleChange}
          MenuProps={{ disablePortal: true }}
          renderValue={(selected: string[]) => {
            if (selected.length === 0) {
              return (
                <span className={styles.placeholderStyles}>
                  Choose the Protocol
                </span>
              );
            }

            return (
              <span className={styles.selectValueStyle}>
                {selected.join(', ')}
              </span>
            );
          }}
        >
          {names.map((el: namesType, index) => (
            <MenuItem
              className={styles.menuItemStyles}
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
            className={`${styles.menuItemStyles} ${styles.addAnotherStyles}`}
          >
            Add Another
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
