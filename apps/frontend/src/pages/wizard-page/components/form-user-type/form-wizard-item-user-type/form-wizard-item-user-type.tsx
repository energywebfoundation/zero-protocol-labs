import {
  FormControl,
  Typography,
  SelectChangeEvent,
  MenuItem,
  TextField,
} from '@material-ui/core';
import { Box } from '@material-ui/system';
import BasicDatePicker from 'apps/frontend/src/components/date-picker/date-picker';
import GenericSelect from 'apps/frontend/src/components/generic-select/generic-select';
import Info from 'apps/frontend/src/components/info/info';
import { variables } from 'libs/ui/theme/src';
import * as React from 'react';
import useStyles from './form-wizard-item-user-type-styles';

export interface FormWizardItemUserTypeProps {
  isFilecoin?: boolean;
}

interface namesType {
  value: string;
  img?: string;
}

const names: namesType[] = [
  { value: 'Storage Provider' },
  { value: 'Application Developer' },
  { value: 'Crypto user or hodler' },
];

const countries: namesType[] = [
  { value: 'England' },
  { value: 'France' },
  { value: 'Germany' },
  { value: 'Norway' },
  { value: 'Poland' },
  { value: 'Russia' },
  { value: 'Spain' },
];

const FormWizardItemUserType: React.FC<FormWizardItemUserTypeProps> = ({
  isFilecoin,
}) => {
  const styles = useStyles();
  const [userType, setUserType] = React.useState<string>();
  const [country, setCountry] = React.useState<string>();

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value, name },
    } = event;

    name === 'user-type' ? setUserType(value) : setCountry(value);
  };

  return (
    <FormControl sx={{ width: '496px' }}>
      <Typography
        fontSize={variables.fontSize}
        color={isFilecoin ? variables.black : variables.white}
        ml={'15px'}
        mb={'8px'}
        fontWeight={600}
      >
        User type
      </Typography>
      <GenericSelect
        isFilecoin={isFilecoin}
        handleChange={handleChange}
        name="user-type"
        value={userType}
        placeholder={'I am ...'}
        bgColor={variables.white}
      >
        {names.map((el: namesType, index) => (
          <MenuItem
            className={
              isFilecoin ? styles.menuItemStylesFilecoin : styles.menuItemStyles
            }
            value={el.value}
            key={index}
          >
            {el.value}
          </MenuItem>
        ))}
      </GenericSelect>
      <FormControl className={styles.formStyle}>
        <Info
          isFilecoin={isFilecoin}
          color={variables.black}
          fontSize={variables.fontSize}
          fontWeight={600}
          hideTimeout={1000}
          popoverContentElement={<div>Miner IDs / Address fdfsdsd </div>}
        >
          Miner IDs / Address fdfsdsd
        </Info>
        <Box width={464} maxWidth={'100%'} mt={'13px'} mb={'19px'}>
          <TextField
            InputProps={{
              className: styles.input,
            }}
            fullWidth
            id="fullWidth"
          />
        </Box>
        <Box>
          <Typography
            color={variables.black}
            fontSize={variables.fontSize}
            fontWeight={600}
            mb={'13px'}
          >
            Country
          </Typography>
          <Box width={464} maxWidth={'100%'}>
            <GenericSelect
              isFilecoin={isFilecoin}
              handleChange={handleChange}
              name="country-type"
              value={country}
              placeholder={'Select regions'}
              bgColor={variables.filcoinColorLight}
            >
              {countries.map((el: namesType, index) => (
                <MenuItem value={el.value} key={index}>
                  {el.value}
                </MenuItem>
              ))}
            </GenericSelect>
          </Box>
          <Box
            display={'flex'}
            mt={'24px'}
            alignItems={'flex-end'}
            justifyContent={'space-between'}
          >
            <Box>
              <Typography
                color={variables.black}
                fontSize={variables.fontSize}
                fontWeight={600}
                mb={'8px'}
              >
                Generation start date
              </Typography>
              <BasicDatePicker />
            </Box>
            <Box>
              <Typography
                color={variables.black}
                fontSize={variables.fontSize}
                fontWeight={600}
                mb={'8px'}
              >
                Generation end date
              </Typography>
              <BasicDatePicker />
            </Box>
            <Box>
              <GenericSelect />
            </Box>
          </Box>
        </Box>
      </FormControl>
    </FormControl>
  );
};

export default FormWizardItemUserType;
