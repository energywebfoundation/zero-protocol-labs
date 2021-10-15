import { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Box, Typography, Paper } from '@material-ui/core';
import ProductSummaryBlock from 'apps/frontend/src/components/product-summary-block/product-summary-block';
import UserAvatar from 'apps/frontend/src/components/user-avatar/user-avatar';
import Breadcrumbs from 'apps/frontend/src/components/breadcrumbs/breadcrumbs';
import PageSection from 'apps/frontend/src/components/page-section/page-section';
import NotificationStrip from 'apps/frontend/src/components/notification-strip/notification-strip';
import FieldLabel from 'apps/frontend/src/components/field-label/field-label';
import FieldValue from 'apps/frontend/src/components/field-value/field-value';
import Info from 'apps/frontend/src/components/info/info';
import avatarImage from 'apps/frontend/src/assets/images/avatar.png';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: 72,
  },
  sectionPaper: {
    backgroundColor: '#421d77',
    padding: '16px 23px 43px 23px',
    [theme.breakpoints.down('md')]: {
      padding: '16px 25px 43px 25px',
    },
  },
  helperText: {
    color: '#f6efff',
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 700,
    marginBottom: -8,
  },
  headingTextClassName: {
    textTransform: 'capitalize',
  },
  wrapperClassName: {
    padding: 0,
  },
  stripWrapper: {
    position: 'absolute',
    width: '100%',
    left: 0,
  },
  label: {
    fontSize: 12,
    lineHeight: '15px',
    color: '#f6efff',
    fontWeight: 700,
  },
  value: {
    fontSize: 20,
    lineHeight: '24px',
    color: '#fff',
    fontWeight: 700,
    '& span': {
      fontSize: 12,
      lineHeight: '15px',
      fontWeight: 500,
      marginLeft: 4,
      position: 'relative',
      top: -2,
    },
  },
  primary: {
    color: '#00d08a',
  },
  payment: {
    fontSize: 18,
  },
  infoItem: {
    marginBottom: 10,
    '& .MuiSvgIcon-root': {
      fill: '#fff',
      marginLeft: 3,
      top: 0,
    },
  },
  mainInfoWrapper: {
    paddingRight: 64,
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      height: '100%',
    },
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
    },
  },
  mainInfo: {
    [theme.breakpoints.down('lg')]: {
      paddingLeft: 67,
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      alignSelf: 'center',
      width: '100%',
      maxWidth: 350,
      margin: '21px 0 17px 0',
    },
  },
  secondaryInfo: {
    [theme.breakpoints.down('lg')]: {
      marginBottom: 17,
    },
  },
  secondaryInfoWrapper: {
    paddingLeft: 24,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      width: '100%',
      maxWidth: 350,
      margin: '0 auto',
    },
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
            paperClassName={classes.sectionPaper}
            wrapperClassName={classes.wrapperClassName}
            headingTextClassName={classes.headingTextClassName}
            helperTextClassName={classes.helperText}
          >
            <Grid container>
              <Grid item xs={12} md={6} lg={4} xl={4}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  className={classes.mainInfoWrapper}
                >
                  <UserAvatar
                    image={avatarImage}
                    name="John Smith"
                    name2="Monsoon Carbon"
                    position="Sales manager"
                  />
                  <Box className={classes.mainInfo}>
                    <Box className={classes.infoItem}>
                      <FieldLabel
                        labelText={'Request ID'}
                        className={classes.label}
                        sx={{ marginBottom: '9px' }}
                      />
                      <Typography
                        className={clsx(classes.value, classes.primary)}
                      >
                        #1234567890
                      </Typography>
                    </Box>
                    <Box className={classes.infoItem}>
                      <FieldLabel
                        sx={{ marginBottom: { xs: '9px', md: '5px' } }}
                        labelText={'Offer ID'}
                        className={classes.label}
                      />
                      <Typography
                        className={clsx(classes.value, classes.primary)}
                      >
                        #ABC4567DEF
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={8}
                xl={8}
                className={classes.secondaryInfoWrapper}
              >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    xl={6}
                    className={classes.secondaryInfo}
                  >
                    <Box className={classes.infoItem}>
                      <Info
                        boxProps={{ display: 'flex ' }}
                        popoverContent="Product summary"
                      >
                        <FieldLabel
                          mb={'9px'}
                          labelText={'Product summary'}
                          className={classes.label}
                        />
                      </Info>
                      <Typography className={classes.value}>
                        EAC / I-REC / Future / France / Solar
                      </Typography>
                    </Box>
                    <Box className={classes.infoItem}>
                      <FieldLabel
                        mb={'5px'}
                        labelText={'Offer Reserved until'}
                        className={classes.label}
                      />
                      <FieldValue
                        valueText={'2021-08-01'}
                        className={classes.value}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6} xl={6}>
                    <Grid container spacing={4}>
                      <Grid item>
                        <Box className={classes.infoItem}>
                          <FieldLabel
                            mb={'11px'}
                            labelText={'Quantity'}
                            className={classes.label}
                          />
                          <Typography className={classes.value}>
                            3 MWh
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item>
                        <Box className={classes.infoItem}>
                          <Info
                            boxProps={{ display: 'flex ' }}
                            popoverContent="Price"
                          >
                            <FieldLabel
                              mb={'11px'}
                              labelText={'Price'}
                              className={classes.label}
                            />
                          </Info>
                          <Typography className={classes.value}>
                            5 <span>$ / MWh</span>
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item>
                        <Box className={classes.infoItem}>
                          <FieldLabel
                            mb={'11px'}
                            labelText={'Total to Pay'}
                            className={classes.label}
                          />
                          <Typography className={classes.value}>
                            15 $
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box maxWidth={260} className={classes.infoItem}>
                      <FieldLabel
                        mb="7px"
                        labelText={'Accepted Payment methods'}
                        className={classes.label}
                      />
                      <Typography
                        className={clsx(classes.value, classes.payment)}
                      >
                        Wire Tranfer (SEPA-EU) <br />
                        Crypto: DAI, USDC, USDT, ETH, EWT
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </PageSection>
          <ProductSummaryBlock />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductOfferPage;
