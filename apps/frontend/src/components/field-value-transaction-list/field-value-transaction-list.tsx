import { Box, Grid } from '@material-ui/core';
import { AnnualTransactionsDto } from '../../api';

/* eslint-disable-next-line */
export interface FieldValueTransactionListProps {
  transactionList: Array<AnnualTransactionsDto>;
}

export function FieldValueTransactionList({
  transactionList,
}: FieldValueTransactionListProps) {
  const totalTransactions = transactionList.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  );
  return (
    <Box width={'100%'}>
      <Box
        pl={'13px'}
        color={'#2D1155'}
        mb={'14px'}
        fontWeight={700}
        fontSize={'16px'}
      >
        {totalTransactions} {totalTransactions === 1 ? 'REC' : 'RECs'}
      </Box>
      <Box
        borderRadius={'5px'}
        bgcolor={'#fff'}
        display={'flex'}
        px={'13px'}
        py={'7px'}
      >
        <Grid container>
          {transactionList.map((value, index) => (
            <Grid key={index} item sm={3}>
              <Box color={'#2D1155'} fontWeight={500}>
                {value.year}
              </Box>
              <Box color={'#2D1155'} fontWeight={700} fontSize={'16px'}>
                {value.amount} {value.amount === 1 ? 'REC' : 'RECs'}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default FieldValueTransactionList;
