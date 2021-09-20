import { Box, Typography } from '@material-ui/core';
import PaperBox from '../paper-box/paper-box';
import FieldLabel from '../field-label/field-label';
import FieldValue from '../field-value/field-value';
import FieldValueTransactionList from '../field-value-transaction-list/field-value-transaction-list';
import FieldValueList from '../field-value-list/field-value-list';
import { AnnualTransactionsDto, FilecoinNodeDto } from '../../api';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  flexColumn: {
    '@media (max-width: 1027px)': {
      flexDirection: 'column',
      alignItems: 'baseline',
    },
  },
}));

export interface PurchaseBuyerInformationProps {
  buyerName: string;
  buyerId: string;
  filecoinMinerIdList: FilecoinNodeDto[];
  recsAmount: Array<AnnualTransactionsDto>;
  generationPeriod: { fromDate: string; toDate: string };
}

export const PurchaseBuyerInformation = ({
  generationPeriod,
  buyerName,
  buyerId,
  filecoinMinerIdList = [],
  recsAmount = [],
}: PurchaseBuyerInformationProps) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography
        lineHeight={'24px'}
        mb={3}
        color={'#2D1155'}
        fontSize={'20px'}
        fontWeight={700}
      >
        Buyer information
      </Typography>
      <PaperBox bgColor={'#F6EFFF'}>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Box className={classes.flexColumn} alignItems={'flex-start'} mb={2}>
            <FieldLabel labelText={'Buyer ID'} />
            <FieldValue copyToClipboardEnabled valueText={buyerId} />
          </Box>
          <Box display={'flex'}>
            <Box
              className={classes.flexColumn}
              alignItems={'flex-start'}
              mb={2}
            >
              <FieldLabel labelText={'Filecoin Miner IDs'} />
              <FieldValueList
                valueList={filecoinMinerIdList.map((el) => el.id)}
              />
            </Box>
            <Box
              className={classes.flexColumn}
              alignItems={'flex-start'}
              mb={2}
              ml={5.8}
            >
              <FieldLabel labelText={'Buyer Name'} />
              <FieldValue valueText={buyerName} />
            </Box>
          </Box>
          <Box className={classes.flexColumn} mb={2}>
            <FieldLabel labelText={'Total amount of RECs'} />
            <FieldValueTransactionList generationPeriod={generationPeriod} />
          </Box>
        </Box>
        <Box>
          <FieldValueTransactionList
            transactionList={recsAmount}
            generationPeriod={generationPeriod}
            showRec={false}
          />
        </Box>
      </PaperBox>
    </Box>
  );
};

export default PurchaseBuyerInformation;
