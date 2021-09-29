import { Grid, Typography } from '@material-ui/core';
import PageSection from '../../components/page-section/page-section';
import Loading from '../../components/loading/loading';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { makeStyles } from '@material-ui/styles';
import { useEffect, useState } from 'react';
import Purchase from './purchaseApi';
import TableListPurchase from '../../components/table-list-purchase/table-list-purchase';
import { useParams } from 'react-router';
import { PurchaseDto } from '@energyweb/zero-protocol-labs-api-client';
import PurchaseBuyerInformation from '../../components/purchase-buyer-information/purchase-buyer-information';

export const useStyles = makeStyles({
  pdTop: {
    paddingTop: '16px',
  },
});

export const PurchasePage = () => {
  const [data, setData] = useState<any>();
  const [transactionsData, settransactionsData] = useState<PurchaseDto[]>([]);
  const [isFetched, setisisFetched] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const init = async () => {
      setisisFetched(false);
      const result = await Purchase.getTransactions(productId);
      setData(result.data);
      setisisFetched(true);

      let transactions: PurchaseDto[] = [];

      for (const item of result.data.transactions) {
        const purchaseData = await Purchase.getPurchases(item.id);
        transactions.push(purchaseData.data);
      }
      settransactionsData(transactions);
    };
    init();
  }, [productId]);
  return isFetched && data && transactionsData ? (
    <Grid container>
      <Grid item xs={12}>
        <Breadcrumbs
          breadcrumbList={[
            'Product Offer',
            'PurchaseID: [productId]',
            'REC Delivery Proof',
          ]}
        />
        <PageSection headingText={'Purchase History'}>
          <PurchaseBuyerInformation
            generationPeriod={{
              fromDate: transactionsData[0]?.certificate.generationStart,
              toDate: transactionsData[0]?.certificate.generationEnd,
            }}
            buyerId={transactionsData[0]?.buyer.id}
            buyerName={transactionsData[0]?.buyer.name}
            filecoinMinerIdList={transactionsData[0]?.filecoinNodes}
            recsAmount={transactionsData[0]?.recsTransactions}
          />
          <Grid container>
            <Grid item xs={12}>
              <Typography
                mt={'30px'}
                mb={'18px'}
                fontWeight={700}
                fontSize={'20px'}
                color={'#2D1155'}
              >
                Purchase information
              </Typography>
              <TableListPurchase data={transactionsData} />
            </Grid>
          </Grid>
        </PageSection>
      </Grid>
    </Grid>
  ) : (
    <Loading />
  );
};

export default PurchasePage;
