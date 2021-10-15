import {
  Typography,
  MenuItem,
  Button,
  SelectChangeEvent,
  Box,
} from '@material-ui/core';
import GenericSelect from 'apps/frontend/src/components/generic-select/generic-select';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import * as React from 'react';
import useStyles from './form-wizard-item-user-type.styles';
import { ReactComponent as Plus } from '../../assets/svg/plus.svg';
import { ReactComponent as PlusGreen } from '../../assets/svg/plusGreen.svg';
import { FormUserType } from './components/form-user-type';
import { useMemo, useState } from 'react';
import { WizardFormValues } from '../../pages/wizard-page/WizardPage.effects';

export interface FormWizardItemUserTypeProps {
  handleFormikChange: (value: any) => void;
  setFieldValue: (name: string, value: any) => void;
  isFilecoin?: boolean;
  values: WizardFormValues;
}

export interface IGenericValueImage {
  value: string;
  img?: string;
  shortName?: string;
}

const userTypes: IGenericValueImage[] = [
  { value: 'Storage Provider' },
  { value: 'Application Developer' },
  { value: 'Crypto user or hodler' },
];

export const FormWizardItemUserType: React.FC<FormWizardItemUserTypeProps> = ({
  isFilecoin,
  setFieldValue,
  handleFormikChange,
  values,
}) => {
  const styles = useStyles();
  const [amountOfItems, setAmountOfItems] = useState(1);
  const arrayOfItemsIds = useMemo(
    () => Array.from(Array(amountOfItems).keys()),
    [amountOfItems]
  );

  const handleElemChange = (event: SelectChangeEvent) => {
    const {
      target: { value, name },
    } = event;
    setFieldValue(name, value);
  };

  const addAnother = () => setAmountOfItems((prev) => prev + 1);

  return (
    <Box display={'flex'} flexDirection={'column'} className={styles.wrapper}>
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
        handleChange={(event) => handleElemChange(event)}
        name="userType"
        value={values.userType}
        placeholder={'I am ...'}
        bgColor={variables.white}
      >
        {userTypes.map((el: IGenericValueImage) => (
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
      {arrayOfItemsIds.map((id) => (
        <FormUserType
          key={id}
          id={id}
          isFilecoin={isFilecoin}
          handleFormikChange={handleFormikChange}
          setFieldValue={setFieldValue}
          values={values}
        />
      ))}
      <Button
        onClick={addAnother}
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
