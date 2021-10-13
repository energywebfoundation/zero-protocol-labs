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
import { variables } from '@energyweb/zero-protocol-labs-theme';
import * as React from 'react';
import useStyles from './form-wizard-item-confirm-styles';
import { useOrderPageEffects } from '../../wizard-page.effects';

export interface IFormWizardItemConfirmProps {
  isFilecoin?: boolean;
  values: any;
}

const tableData = [
  {
    minerId: 'f0112027',
    region: 'France',
    period: '2020/11/01 > 2021/06/01',
    amount: '3 Mwh',
  },
  {
    minerId: 'f0212014',
    region: 'Norway',
    period: '2020/11/01 > 2021/06/01',
    amount: '8 Mwh',
  },
  {
    minerId: 'f0314016',
    region: 'Belgium',
    period: '2020/11/01 > 2021/06/01',
    amount: '6 Mwh',
  },
];

const FormWizardItemConfirm: React.FC<IFormWizardItemConfirmProps> = ({
  isFilecoin,
  values,
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
            {values.email}
          </Typography>
          <Typography
            fontSize={'16px'}
            color={isFilecoin ? variables.filcoinColor : variables.primaryColor}
            fontWeight={700}
          >
            {values.wire && values.crypto
              ? 'Wire transfer or Crypto'
              : values.wire
              ? 'Wire transfer'
              : 'Crypto'}
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
            {tableData.map((el, index) => {
              return (
                <TableRow key = {el.minerId}
                  className={
                    index % 2 === 0 && isFilecoin
                      ? styles.tableRowLight
                      : index % 2 === 0 && !isFilecoin
                      ? styles.tableRowDark
                      : ''
                  }
                >
                  <TableCell>{el.minerId}</TableCell>
                  <TableCell>{el.region}</TableCell>
                  <TableCell>{el.period}</TableCell>
                  <TableCell>{el.amount}</TableCell>
                </TableRow>
              );
            })}
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
