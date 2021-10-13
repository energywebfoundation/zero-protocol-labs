import { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Box } from '@material-ui/core';
import Breadcrumbs from 'components/breadcrumbs/breadcrumbs';
import PageSection from 'components/page-section/page-section';
import NotificationStrip from 'components/notification-strip/notification-strip';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: 72,
  },
  paper: {
    backgroundColor: '#421d77',
    padding: '16px 23px 43px 23px',
  },
  helperText: {
    color: '#f6efff',
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 700,
  },
  stripWrapper: {
    position: 'absolute',
    width: '100%',
    left: 0,
  },
}));

export const ProductOfferPage: FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.stripWrapper}>
        <NotificationStrip text="You're received an Offer" height={72} />
      </Box>

      <Grid container>
        <Grid item xs={12} className={classes.wrapper}>
          <Breadcrumbs
            breadcrumbList={['Product Offer', 'PurchaseID: [productId]']}
          />
          <PageSection
            headingText={'Offer Summary'}
            sectionHelpText="This offer was created for you by"
            paperClassName={classes.paper}
            helperTextClassName={classes.helperText}
          >
            Hello
          </PageSection>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductOfferPage;
