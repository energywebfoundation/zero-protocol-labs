import { FC, useState } from 'react';
import clsx from 'clsx';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import ProductSummaryBlock from 'apps/frontend/src/components/product-summary-block/product-summary-block';
import UserAvatar from 'apps/frontend/src/components/user-avatar/user-avatar';
import Breadcrumbs from 'apps/frontend/src/components/breadcrumbs/breadcrumbs';
import PageSection from 'apps/frontend/src/components/page-section/page-section';
import NotificationStrip from 'apps/frontend/src/components/notification-strip/notification-strip';
import FieldLabel from 'apps/frontend/src/components/field-label/field-label';
import FieldValue from 'apps/frontend/src/components/field-value/field-value';
import Info from 'apps/frontend/src/components/info/info';
import avatarImage from 'apps/frontend/src/assets/images/avatar.png';
import { ReactComponent as MailIcon } from 'apps/frontend/src/assets/svg/mail.svg';
import { ReactComponent as CloseIcon } from 'apps/frontend/src/assets/svg/close.svg';
import { ReactComponent as OkIcon } from 'apps/frontend/src/assets/svg/ok.svg';
import { ProductSummaryDetails } from 'apps/frontend/src/components/product-summary-details';
import { DeclineOfferModal } from 'apps/frontend/src/components/modals';
import { useStyles } from './product-offer-page.style';

export const ProductOfferPage: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DeclineOfferModal open={open} handleClose={handleClose} />
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
          <Box className={classes.buttonsGroup}>
            <Button
              variant="contained"
              className={classes.button}
              classes={{ endIcon: classes.endIcon }}
              endIcon={<MailIcon />}
            >
              Contact Support
            </Button>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              className={classes.button}
              classes={{ endIcon: classes.endIcon }}
              endIcon={<CloseIcon />}
            >
              Decline Offer
            </Button>
            <Button
              variant="contained"
              className={clsx(classes.button, classes.buttonDark)}
              classes={{ endIcon: classes.endIcon }}
              endIcon={<OkIcon />}
            >
              Accept Offer
            </Button>
          </Box>
          <ProductSummaryDetails />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductOfferPage;
