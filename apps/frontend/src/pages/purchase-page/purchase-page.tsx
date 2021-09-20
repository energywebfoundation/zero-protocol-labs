import { Grid, Typography } from '@material-ui/core';
import { usePurchasePageEffects } from './purchase-page.effects';
import PageSection from '../../components/page-section/page-section';
import TableList from '../../components/table-list/table-list';
import Loading from '../../components/loading/loading';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { makeStyles } from '@material-ui/styles';
import PurchaseBuyerInformation from '../../components/purchase-buyer-information/purchase-buyer-information';

export const useStyles = makeStyles((theme) => ({
  pdTop: {
    paddingTop: '16px',
  },
}));

export interface PurchasePageProps {}

export const PurchasePage = () => {
  const { isFetching, isFetched, data } = usePurchasePageEffects();
  console.log(data, 'data');
  return !isFetching && isFetched && data ? (
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
              fromDate: data.certificate.generationStart,
              toDate: data.certificate.generationEnd,
            }}
            buyerId={data.buyer.id}
            buyerName={data.buyer.name}
            filecoinMinerIdList={data.filecoinNodes}
            recsAmount={data.recsTransactions}
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
              <TableList
                data={data.certificate}
                recsSold={data.recsSold}
                sellerId={data.seller.id}
              />
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
