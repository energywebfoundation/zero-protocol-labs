import { variables } from '@energyweb/zero-protocol-labs-theme';
import {
  FormControl,
  Typography,
  MenuItem,
  TextField,
  Button,
  Box,
} from '@material-ui/core';
import useStyles from './form-user-type.styles';
import React from 'react';
import BasicDatePicker from 'apps/frontend/src/components/date-picker/date-picker';
import GenericSelect from 'apps/frontend/src/components/generic-select/generic-select';
import { IGenericValueImage } from '../form-wizard-item-user-type';
import ButtonIcon from '../../../assets/svg/whiteArrow.svg';
import { DateEnergySection } from './DateEnergySection';
import { Info } from 'apps/frontend/src/components/info/info';
import { Dayjs } from 'dayjs';

interface FormUserTypeProps {
  isFilecoin?: boolean;
  id: number;
  handleFormikChange: (value: any) => void;
  setFieldValue: (name: string, value: any) => void;
  values: any;
}

export const countries: IGenericValueImage[] = [
  { value: 'England', shortName: 'GB' },
  { value: 'France', shortName: 'FR' },
  { value: 'Germany', shortName: 'GR' },
  { value: 'Norway', shortName: 'NW' },
  { value: 'Poland', shortName: 'PL' },
  { value: 'Russia', shortName: 'RS' },
  { value: 'Spain', shortName: 'SP' },
];

export const FormUserType: React.FC<FormUserTypeProps> = ({
  isFilecoin,
  handleFormikChange,
  setFieldValue,
  id,
  values,
}) => {
  const styles = useStyles();
  const [sectionOpen, setSectionOpen] = React.useState<boolean>(false);
  const buttonClick = () => setSectionOpen(!sectionOpen);

  const amountOfEnergyFields =
    values[`generalEndDate_${id}`] && values[`generalStartDate_${id}`]
      ? (values[`generalEndDate_${id}`] as Dayjs).year() -
        (values[`generalStartDate_${id}`] as Dayjs).year()
      : -1;

  return (
    <FormControl className={styles.form}>
      <Info
        isFilecoin={isFilecoin}
        color={variables.black}
        fontSize={variables.fontSize}
        fontWeight={600}
        hideTimeout={1000}
        popoverContentElement={<div>Miner IDs / Address </div>}
      >
        {isFilecoin && 'Miner IDs /'} Address
      </Info>
      <Box maxWidth={'100%'} mt={'13px'} mb={'19px'}>
        <TextField
          fullWidth
          name={`minerId_${id}`}
          onChange={handleFormikChange}
          value={values[`minerId_${id}`] ?? ''}
          InputProps={{
            className: isFilecoin ? styles.input : styles.inputBitcoun,
          }}
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
        <Box maxWidth={'100%'}>
          <GenericSelect
            isFilecoin={isFilecoin}
            handleChange={(event) => handleFormikChange(event)}
            name={`country_${id}`}
            value={values[`country_${id}`] ?? ''}
            placeholder={'Select regions'}
            bgColor={
              isFilecoin
                ? variables.filcoinColorLight
                : variables.inputBackgroundColor
            }
          >
            {countries.map((el: IGenericValueImage) => (
              <MenuItem
                className={
                  isFilecoin
                    ? styles.menuItemStylesFilecoin
                    : styles.menuItemStyles
                }
                value={el.value}
                key={el.value}
              >
                {el.value}
              </MenuItem>
            ))}
          </GenericSelect>
        </Box>
        <Box className={styles.wrapperDate}>
          <Box className={styles.blockDate}>
            <Typography
              color={variables.black}
              fontSize={variables.fontSize}
              fontWeight={600}
              mb={'8px'}
              ml={'14px'}
            >
              Generation start date
            </Typography>
            <BasicDatePicker
              isFilecoin={isFilecoin}
              value={values[`generalStartDate_${id}`] || ''}
              setValue={(value) =>
                setFieldValue(`generalStartDate_${id}`, value)
              }
            />
          </Box>
          <Box className={styles.blockDate}>
            <Typography
              color={variables.black}
              fontSize={variables.fontSize}
              fontWeight={600}
              mb={'8px'}
              ml={'14px'}
            >
              Generation end date
            </Typography>
            <BasicDatePicker
              isFilecoin={isFilecoin}
              value={values[`generalEndDate_${id}`] || ''}
              setValue={(value) => setFieldValue(`generalEndDate_${id}`, value)}
            />
          </Box>
          <Box className={styles.blockBtn}>
            <Button
              onClick={buttonClick}
              className={
                isFilecoin ? styles.buttonStyle : styles.buttonGreenStyle
              }
            >
              <img
                className={`${sectionOpen && styles.icon}`}
                src={ButtonIcon}
              />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box bgcolor={variables.white}>
        {sectionOpen && (
          <Box p={' 0 8px 8px 8px'} mt={'16px'}>
            <DateEnergySection
              id={id}
              handleFormikChange={handleFormikChange}
              isFilecoin={isFilecoin}
              setFieldValue={setFieldValue}
              amountOfFields={amountOfEnergyFields}
              values={values}
            />
          </Box>
        )}
      </Box>
    </FormControl>
  );
};
