import PaperBox from '../paper-box/paper-box';
import { Box, Typography } from '@material-ui/core';
import FieldLabel from '../field-label/field-label';
import FieldValue from '../field-value/field-value';
import FieldValueMultiline from '../field-value-multiline/field-value-multiline';

/* eslint-disable-next-line */
export interface SellerInformationProps {
  name: string;
  contactPerson: string;
  addressFirstLine: string;
  addressSecondLine?: string;
}

export const SellerInformation = ({
  addressFirstLine,
  addressSecondLine,
  name,
  contactPerson,
}: SellerInformationProps) => (
  <Box height={'100%'}>
    <Typography
      mb={3}
      fontWeight={700}
      lineHeight={'24px'}
      color={'#2D1155'}
      fontSize={'20px'}
    >
      Seller information
    </Typography>
    <PaperBox customHeight={'calc(100% - 48px)'} bgColor={'#F6EFFF'}>
      <Box display={'flex'} alignItems={'center'} mb={2}>
        <FieldLabel labelText={'Seller Name'} />
        <FieldValue valueText={name} />
      </Box>
      <Box display={'flex'} alignItems={'start'} mb={2}>
        <FieldLabel labelText={'Address'} />
        <FieldValueMultiline
          textValues={[addressFirstLine, addressSecondLine]}
        />
      </Box>
      <Box display={'flex'} alignItems={'center'} mb={2}>
        <FieldLabel labelText={'Contact Person'} />
        <FieldValue valueText={contactPerson} />
      </Box>
    </PaperBox>
  </Box>
);

export default SellerInformation;
