import { Box, Typography } from '@material-ui/core';
import PaperBox from '../paper-box/paper-box';
import FieldLabel from '../field-label/field-label';
import FieldValue from '../field-value/field-value';
import FieldValueTransactionList from '../field-value-transaction-list/field-value-transaction-list';
import FieldValueList from '../field-value-list/field-value-list';
import { AnnualTransactionsDto, FilecoinNodeDto } from '../../api';

/* eslint-disable-next-line */
export interface BuyerInformationProps {
  buyerName: string;
  buyerId: string;
  filecoinMinerIdList: FilecoinNodeDto[];
  recsAmount: Array<AnnualTransactionsDto>;
  generationPeriod: { fromDate: string; toDate: string };
}

export const BuyerInformation = ({
  generationPeriod,
  buyerName,
  buyerId,
  filecoinMinerIdList = [],
  recsAmount = [],
}: BuyerInformationProps) => (
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
      <Box display={'flex'} alignItems={'flex-start'} mb={2}>
        <FieldLabel labelText={'Buyer ID'} />
        <FieldValue copyToClipboardEnabled valueText={buyerId} />
      </Box>
      <Box display={'flex'} alignItems={'flex-start'} mb={2}>
        <FieldLabel labelText={'Filecoin Miner IDs'} />
        <FieldValueList valueList={filecoinMinerIdList.map((el) => el.id)} />
      </Box>
      <Box display={'flex'} alignItems={'flex-start'} mb={2}>
        <FieldLabel labelText={'Buyer Name'} />
        <FieldValue valueText={buyerName} />
      </Box>
      <Box display={'flex'} mb={2}>
        <FieldLabel labelText={'Total amount of RECs'} />
        <FieldValueTransactionList
          transactionList={recsAmount}
          generationPeriod={generationPeriod}
        />
      </Box>
    </PaperBox>
  </Box>
);

export default BuyerInformation;
