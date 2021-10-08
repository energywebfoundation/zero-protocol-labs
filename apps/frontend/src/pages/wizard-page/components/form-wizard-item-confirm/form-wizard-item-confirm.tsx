import {
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { Box } from '@material-ui/system';
import { variables } from 'libs/ui/theme/src';
import * as React from 'react';
import useStyles from './form-wizard-item-confirm-styles';

export interface FormWizardItemConfirmProps {
  isFilecoin?: boolean;
}

const FormWizardItemConfirm: React.FC<FormWizardItemConfirmProps> = ({
  isFilecoin,
}) => {
  const styles = useStyles();

  return (
    <FormControl sx={{ width: '488px' }}>
      <Box
        display={'flex'}
        p={'24px 20px 24px 24px'}
        bgcolor={variables.white}
        borderRadius={'5px'}
        boxShadow={'0px 4px 10px rgba(160, 154, 198, 0.2)'}
      >
        <Box>
          <Typography
            fontSize={'12px'}
            color={isFilecoin ? variables.black : variables.primaryColor}
            fontWeight={isFilecoin ? 400 : 700}
            mb={'10px'}
          >
            Email
          </Typography>
          <Typography
            fontSize={'12px'}
            color={variables.black}
            fontWeight={isFilecoin ? 400 : 700}
          >
            Payment
          </Typography>
        </Box>
        <Box ml={'50px'}>
          <Typography
            fontSize={'16px'}
            color={isFilecoin ? variables.filcoinColor : variables.primaryColor}
            fontWeight={700}
          >
            owner@Filevaults.io
          </Typography>
          <Typography
            fontSize={'16px'}
            color={isFilecoin ? variables.filcoinColor : variables.primaryColor}
            fontWeight={700}
          >
            Wire transfer or Crypto
          </Typography>
        </Box>
      </Box>
      <Box
        className={
          isFilecoin ? styles.tableWrapper : styles.tableBitcoinWrapper
        }
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Miner ID</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Period</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{
                backgroundColor: `${
                  isFilecoin
                    ? variables.filcoinColorLight
                    : variables.inputBackgroundColor
                } !important`,
              }}
            >
              <TableCell>f0112027 </TableCell>
              <TableCell>France</TableCell>
              <TableCell>2020/11/01 {'>'}2021/06/01</TableCell>
              <TableCell>3 Mwh</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>f0212014 </TableCell>
              <TableCell>Norway</TableCell>
              <TableCell>2020/11/01 {'>'} 2021/06/01</TableCell>
              <TableCell>8 Mwh</TableCell>
            </TableRow>
            <TableRow
              sx={{
                backgroundColor: `${
                  isFilecoin
                    ? variables.filcoinColorLight
                    : variables.inputBackgroundColor
                } !important`,
              }}
            >
              <TableCell>f0314016 </TableCell>
              <TableCell>Belgium</TableCell>
              <TableCell>2020/11/01 {'>'} 2021/06/01</TableCell>
              <TableCell>6 Mwh</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Typography
          fontSize={'12px'}
          color={isFilecoin ? variables.black : variables.white}
          fontWeight={400}
          textAlign={'center'}
          width={'90%'}
          lineHeight={'16px'}
          mt={'16px'}
        >
          Double check the email! Expect to receive an email to the address you
          provided within the next 2 days, with a proposal of the RECs to
          decarbonize your electricity consumption.
        </Typography>
      </Box>
    </FormControl>
  );
};

export default FormWizardItemConfirm;
