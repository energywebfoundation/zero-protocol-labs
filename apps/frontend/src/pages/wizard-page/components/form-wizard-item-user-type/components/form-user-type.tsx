import { variables } from '@energyweb/zero-protocol-labs-theme';
import {
  FormControl,
  Typography,
  MenuItem,
  TextField,
  Button,
} from '@material-ui/core';
import useStyles from './form-user-type-styles';
import Info from '../../../../../components/info/info';
import { Box } from '@material-ui/system';
import React from 'react';
import {
  IFormStepItem,
  IFormStepSelectCallbackArgs,
} from 'apps/frontend/src/components/formik-stepper/FormikCurrentStep';
import BasicDatePicker from 'apps/frontend/src/components/date-picker/date-picker';
import GenericSelect from 'apps/frontend/src/components/generic-select/generic-select';
import { IGenericValueImage } from '../form-wizard-item-user-type';
import ButtonIcon from '../../../../../assets/svg/whiteArrow.svg';
import DateSection from '../date-section';
import {useState} from 'react';

interface IFormUserType {
  isFilecoin?: boolean;
  id: number;
}

export const countries: IGenericValueImage[] = [
  { value :"England",shortName:"GB" },
  { value :"France",shortName:"FR" },
  { value :"Germany",shortName:"GR" },
  { value :"Norway",shortName:"NW" },
  { value :"Poland",shortName:"PL" },
  { value :"Russia",shortName: "RS"},
  { value :"Spain",shortName:"SP" },
];

const FormUserType: React.FC<IFormUserType & IFormStepItem> = ({
  isFilecoin,
  handleChange,
  setFieldValue,
  id,
}) => {
  const styles = useStyles();
  const [sectionOpen, setSectionOpen] = React.useState<boolean>(false);
  const buttonClick = () => {
    setSectionOpen(!sectionOpen);
    
  };
  const [country, setCountry] = React.useState<string>('');

  const handleElemChange = ({
    event,
    setFieldValue,
  }: IFormStepSelectCallbackArgs) => {
    const {
      target: { value, name },
    } = event;

    setCountry(value);
    setFieldValue(name, value);
  };

  return (
    <>
      <FormControl className={styles.form} sx={{ width: '488px' }}>
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
        <Box width={464} maxWidth={'100%'} mt={'13px'} mb={'19px'}>
          <TextField
            name={`minerId_${id}`}
            onChange={handleChange}
            InputProps={{
              className: isFilecoin ? styles.input : styles.inputBitcoun,
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
              handleChange={(event) =>
                handleElemChange({ event, setFieldValue })
              }
              name={`country_${id}`}
              value={country}
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
          <Box
            display={'flex'}
            mt={'24px'}
            alignItems={'flex-end'}
            justifyContent={'space-between'}
          >
            <Box width={'192px'}>
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
                name={`start_${id}_0`}
                setFieldValue={setFieldValue}
              />
            </Box>
            <Box width={'192px'}>
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
                name={`end_${id}_0`}
                setFieldValue={setFieldValue}
              />
            </Box>
            <Box>
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
      </FormControl>
      <Box bgcolor={variables.white}>
        {sectionOpen && (
          <Box p={' 0 8px 8px 8px'}>
            <DateSection handleChange ={handleChange}
              id={id}
              isFilecoin={isFilecoin}
              setFieldValue={setFieldValue}
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default FormUserType;
