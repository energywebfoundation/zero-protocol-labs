import { FormControl, TextField, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import SwitchLabels from 'apps/frontend/src/components/switch-label/switch-label';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import * as React from 'react';
import useStyles from './form-wizard-item-email-styles';

export interface IFormWizardItemEmailProps {
  isFilecoin?: boolean;
}

const FormWizardItemEmail: React.FC<IFormWizardItemEmailProps> = ({
  isFilecoin,
}) => {
  const styles = useStyles();

  return (
    <FormControl sx={{ width: '488px' }}>
      <Typography
        fontSize={variables.fontSize}
        color={isFilecoin ? variables.black : variables.white}
        ml={'15px'}
        mb={'8px'}
        fontWeight={600}
      >
        Email*{' '}
        <span className={styles.title}>Where we will send you the offer</span>
      </Typography>
      <TextField
        placeholder={'Your email adress'}
        inputProps={{
          className: isFilecoin ? styles.inputProps : styles.inputBitcoinProps,
        }}
      />
      <Box
        bgcolor={variables.white}
        mt={'8px'}
        borderRadius={'5px'}
        boxShadow={'0px 4px 10px rgba(160, 154, 198, 0.2)'}
        p={'24px 40px 32px 24px'}
      >
        <Typography
          fontSize={'16px'}
          color={isFilecoin ? variables.filcoinColor : variables.secondaryColor}
          fontWeight={700}
          mb={'4px'}
        >
          Preferred payment method
        </Typography>
        <Typography
          fontSize={'12px'}
          color={isFilecoin ? variables.black : variables.primaryColor}
          fontWeight={600}
          lineHeight={'16px'}
        >
          Needed to pair you with a seller that accepts your preferred payment
          method. When you’ll receive the offer, the seller will inform you what
          currencies they accept
        </Typography>
        <Box>
          <SwitchLabels labelName={'Wire transfer'} isFilecoin={isFilecoin} />
          <SwitchLabels labelName={'Crypto payment'} isFilecoin={isFilecoin} />
        </Box>
      </Box>
    </FormControl>
  );
};

export default FormWizardItemEmail;
