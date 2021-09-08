import { Box, Grid } from '@material-ui/core';
import { AnnualTransactionsDto } from '../../api';
import Info from '../info/info';
import dayjs from 'dayjs';

/* eslint-disable-next-line */
export interface FieldValueTransactionListProps {
  transactionList: Array<AnnualTransactionsDto>;
  generationPeriod: { fromDate: string; toDate: string };
}

export function FieldValueTransactionList({
  transactionList,
  generationPeriod,
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
                {shouldShowNote(generationPeriod.fromDate, value.year) ? (
                  <Info
                    popoverContent={`${value.year} consumption matched with generation according to Green-e Renewable Standard (Section III B. Vintage of Eligible Renewables)`}
                  >
                    {value.year}
                  </Info>
                ) : (
                  value.year
                )}
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
const shouldShowNote = (generationPeriodFromDate: string, year: number) => {
  if (!year || !dayjs(year).isValid()) {
    return false;
  } else {
    return dayjs(generationPeriodFromDate).get('year') > year;
  }
};

export default FieldValueTransactionList;
