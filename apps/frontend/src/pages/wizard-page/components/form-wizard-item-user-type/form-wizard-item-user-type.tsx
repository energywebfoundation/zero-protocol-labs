import { Typography, MenuItem, Button } from '@material-ui/core';
import { Box } from '@material-ui/system';
import GenericSelect from 'apps/frontend/src/components/generic-select/generic-select';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import * as React from 'react';
import useStyles from './form-wizard-item-user-type-styles';
import { ReactComponent as Plus } from '../../../../assets/svg/plus.svg';
import { ReactComponent as PlusGreen } from '../../../../assets/svg/plusGreen.svg';
import {
  IFormStepItem,
  IFormStepSelectCallbackArgs,
} from 'apps/frontend/src/components/formik-stepper/FormikCurrentStep';
import FormUserType from './components/form-user-type';

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

const FormWizardItemUserType: React.FC<FormWizardItemUserTypeProps> = ({
  isFilecoin,
  setFieldValue,
  handleChange,
}) => {
  const styles = useStyles();
  const [userType, setUserType] = React.useState<string>('');

  const handleElemChange = ({
    event,
    setFieldValue,
  }: IFormStepSelectCallbackArgs) => {
    const {
      target: { value, name },
    } = event;
    setUserType(value);
    setFieldValue(name, value);
  };

  const [form, setForm] = React.useState<any>({
    elements: [
      <FormUserType
        isFilecoin={isFilecoin}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
      />,
    ],
  });

  const addAnother = (): void => {
    setForm({
      elements: [
        ...form.elements,
        <FormUserType
          isFilecoin={isFilecoin}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />,
      ],
    });
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
      {form.elements}
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

export default FormWizardItemUserType;
