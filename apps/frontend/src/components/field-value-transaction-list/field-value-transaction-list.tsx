import { Box, Grid } from '@material-ui/core';
import { AnnualTransactionsDto } from '../../api';
import Info from '../info/info';
import dayjs from 'dayjs';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  styles: {
    "@media (max-width: 1024px)": {
      padding: '0'
    }
  }
});

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

  const classes = useStyles()

  return (
    <Box width={'100%'} maxWidth={'283px'}>
      <Box
        className={classes.styles}
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
                    hideTimeout={1000}
                    popoverContentElement={
                      <div>
                        {value.year} consumption matched with generation
                        according to{' '}
                        <a
                          style={{ color: '#fff' }}
                          target={'_blank'}
                          href="https://www.epa.gov/greenpower/green-power-partnership-eligible-generation-dates"
                          rel="noreferrer"
                        >
                          Green-e Renewable Standard (Section III B. Vintage of
                          Eligible Renewables)
                        </a>
                      </div>
                    }
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
