import React from 'react';
import { FormControlLabel, Switch, Box, BoxProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { variables } from '@energyweb/zero-protocol-labs-theme';

interface FormWizardProps {
  checked: boolean;
  setChecked: (value: boolean) => void;
  boxProps?: BoxProps;
  labelName?: string;
  isFilecoin?: boolean;
  defaultValue?: boolean;
}

const useStyles = makeStyles(() => ({
  switch: {
    '& .MuiSwitch-thumb': {
      backgroundColor: variables.switchGrayColor,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      '& .MuiSwitch-thumb': {
        backgroundColor: variables.filcoinColor,
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: variables.switchBgColorBlue,
    },
    '& .MuiSwitch-switchBase + .MuiSwitch-track': {
      backgroundColor: variables.switchBgColorGray,
    },
  },
  switchBitcoin: {
    '& .MuiSwitch-thumb': {
      backgroundColor: variables.primaryColor,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      '& .MuiSwitch-thumb': {
        backgroundColor: variables.secondaryColor,
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: variables.secondaryColor,
    },
    '& .MuiSwitch-switchBase + .MuiSwitch-track': {
      backgroundColor: variables.primaryColor,
    },
  },
  lable: {
    fontWeight: 700,
    fontSize: variables.fontSize,
    color: variables.filcoinColor,
  },
  labelDisable: {
    fontWeight: 500,
    fontSize: variables.fontSize,
    color: variables.switchGrayColor,
  },
  lableBitcoin: {
    fontWeight: 700,
    fontSize: variables.fontSize,
    color: variables.primaryColor,
  },
  lableBitcoinDisable: {
    fontWeight: 500,
    fontSize: variables.fontSize,
    color: variables.primaryColor,
  },
}));

const SwitchLabel: React.FC<FormWizardProps> = ({
  labelName,
  isFilecoin,
  checked,
  setChecked,
  boxProps,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles();

  return (
    <Box {...boxProps}>
      <FormControlLabel
        control={
          <Switch
            className={isFilecoin ? classes.switch : classes.switchBitcoin}
            checked={checked}
            onChange={(e) => handleChange(e)}
            value="checked"
            disableRipple
          />
        }
        label={''}
      />
      <span
        className={`${
          checked && isFilecoin
            ? classes.lable
            : checked && !isFilecoin
            ? classes.lableBitcoin
            : !checked && isFilecoin
            ? classes.labelDisable
            : classes.lableBitcoinDisable
        }`}
      >
        {labelName}
      </span>
    </Box>
  );
};
export default SwitchLabel;
