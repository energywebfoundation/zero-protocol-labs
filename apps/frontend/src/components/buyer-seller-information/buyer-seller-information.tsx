import { Grid } from '@material-ui/core';
import BuyerInformation from '../buyer-information/buyer-information';
import SellerInformation from '../seller-information/seller-information';
import {
  AnnualTransactionsDto,
  BuyerDto,
  FilecoinNodeDto,
  SellerDto,
} from '../../api';

/* eslint-disable-next-line */
export interface BuyerSellerInformationProps {
  recsTransactions: AnnualTransactionsDto[];
  buyer: BuyerDto;
  seller: SellerDto;
  filecoinMinerIdList: FilecoinNodeDto[];
}

export const BuyerSellerInformation = ({
  buyer,
  seller,
  recsTransactions,
  filecoinMinerIdList,
}: BuyerSellerInformationProps) => (
  <Grid columnGap={3} wrap={'nowrap'} container>
    <Grid item sm={6}>
      <SellerInformation
        contactPerson={seller.contactPerson}
        name={seller.name}
        addressFirstLine={seller.addressLine1}
        addressSecondLine={seller.addressLine2}
      />
    </Grid>
    <Grid item sm={6}>
      <BuyerInformation
        buyerId={buyer.id}
        buyerName={buyer.name}
        filecoinMinerIdList={filecoinMinerIdList}
        recsAmount={recsTransactions}
      />
    </Grid>
  </Grid>
);

export default BuyerSellerInformation;
