import {
  FormControl,
  Typography,
  MenuItem,
  TextField,
  Button,
} from '@material-ui/core';
import { Box } from '@material-ui/system';
import BasicDatePicker from 'apps/frontend/src/components/date-picker/date-picker';
import GenericSelect from 'apps/frontend/src/components/generic-select/generic-select';
import Info from 'apps/frontend/src/components/info/info';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import * as React from 'react';
import DateSection from './date-section';
import useStyles from './form-wizard-item-user-type-styles';
import ButtonIcon from '../../../../assets/svg/whiteArrow.svg';
import { ReactComponent as Plus } from '../../../../assets/svg/plus.svg';
import { ReactComponent as PlusGreen } from '../../../../assets/svg/plusGreen.svg';
import {
  IFormStepItem,
  IFormStepSelectCallbackArgs,
} from 'apps/frontend/src/components/formik-stepper/FormikCurrentStep';

export interface FormWizardItemUserTypeProps extends IFormStepItem {
  isFilecoin?: boolean;
}

export interface IGenericValueImage {
  value: string;
  img?: string;
}

const names: IGenericValueImage[] = [
  { value: 'Storage Provider' },
  { value: 'Application Developer' },
  { value: 'Crypto user or hodler' },
];

const countries: IGenericValueImage[] = [
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
  setFieldValue,
  handleChange
}) => {
  const styles = useStyles();
  const [userType, setUserType] = React.useState<string>('');
  const [country, setCountry] = React.useState<string>('');

  const [sectionOpen, setSectionOpen] = React.useState<boolean>(false);
  const buttonClick = () => {
    setSectionOpen(!sectionOpen);
  };
  const handleElemChange = ({
    event,
    setFieldValue,
  }: IFormStepSelectCallbackArgs) => {
    const {
      target: { value, name },
    } = event;
    name === 'user' ? setUserType(value) : setCountry(value);
    setFieldValue(name, value);
  };

  return (
    <Box display={'flex'} flexDirection={'column'}>
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
        handleChange={(event) => handleElemChange({ event, setFieldValue })}
        name="user"
        value={userType}
        placeholder={'I am ...'}
        bgColor={variables.white}
      >
        {names.map((el: IGenericValueImage) => (
          <MenuItem
            className={
              isFilecoin ? styles.menuItemStylesFilecoin : styles.menuItemStyles
            }
            value={el.value}
            key={el.value}
          >
            {el.value}
          </MenuItem>
        ))}
      </GenericSelect>
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
            name="address"
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
              handleChange={(event) => handleElemChange({ event, setFieldValue })}
              name="country"
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
                name="startDate"
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
                name="endDate"
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
            <DateSection
              isFilecoin={isFilecoin}
              setFieldValue={setFieldValue}
            />
          </Box>
        )}
      </Box>
      <Button
        className={
          isFilecoin ? styles.buttonAddStyle : styles.buttonGreenAddStyle
        }
        endIcon={isFilecoin ? <Plus /> : <PlusGreen />}
      >
        Add another Miner ID / Address
      </Button>
    </Box>
  );
};

export default FormWizardItemUserType;
