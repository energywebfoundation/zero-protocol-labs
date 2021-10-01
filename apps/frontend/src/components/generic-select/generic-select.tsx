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
import { makeStyles } from '@material-ui/styles';
import { variables } from 'libs/ui/theme/src';

const useStyles = makeStyles({
  menuItemStyles: {
    fontSize: '16px',
    fontWeight: 600,
    backgroundColor: variables.white,
    paddingLeft: '20px',
    '&:hover': {
      backgroundColor: variables.primaryColor,
      color: variables.white,
    },
  },
  iconStyles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '8px',
    width: '31px',
    height: '31px',
    borderRadius: '50%',
    backgroundColor: variables.white,
  },
  placeholderStyles: {
    fontSize: '18px',
    fontWeight: 600,
    padding: '0',
    marginLeft: '10px',
    borderRadius: '50px',
  },
  selectStyles: {
    '& svg': {
      marginRight: '24px',
    },
  },
  selectValueStyle: {
    fontWeight: 700,
    fontSize: '18px',
  },
  test: {
    '&:focus-visible': {
      outline: 'none',
    },
  },
});

const names = [
  { value: 'Filecoin', img: FilecoininIcon },
  { value: 'Bitcoin', img: BitcoinIcon },
];

export default function GenericSelect() {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const styles = useStyles();

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <FormControl sx={{ width: '496px' }}>
        <Typography
          fontSize={variables.fontSize}
          color={variables.white}
          ml={'15px'}
          mb={'8px'}
          fontWeight={600}
        >
          Protocol
        </Typography>
        <Select
          input={<OutlinedInput className={styles.test} />}
          className={styles.selectStyles}
          IconComponent={KeyboardArrowDownIcon}
          displayEmpty
          value={personName}
          onChange={handleChange}
          renderValue={(selected: any) => {
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
          {names.map((el) => (
            <MenuItem className={styles.menuItemStyles} value={el.value}>
              <span className={styles.iconStyles}>
                <img src={el.img} />
              </span>
              {el.value}
            </MenuItem>
          ))}
          <MenuItem className={styles.menuItemStyles}>Add Another</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
