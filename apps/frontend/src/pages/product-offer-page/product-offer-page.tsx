import { FC, useState } from 'react';
import clsx from 'clsx';
import { Grid, Box, Button, Paper, Typography } from '@material-ui/core';
import { OfferSummaryBlock } from 'apps/frontend/src/components/offer-summary-block';
import { AcceptedOffer } from 'apps/frontend/src/components/accepted-offer';
import ProductSummaryBlock from 'apps/frontend/src/components/product-summary-block/product-summary-block';
import Breadcrumbs from 'apps/frontend/src/components/breadcrumbs/breadcrumbs';
import NotificationStrip from 'apps/frontend/src/components/notification-strip/notification-strip';
import { ReactComponent as MailIcon } from 'apps/frontend/src/assets/svg/mail.svg';
import { ReactComponent as CloseIcon } from 'apps/frontend/src/assets/svg/close.svg';
import { ReactComponent as OkIcon } from 'apps/frontend/src/assets/svg/ok.svg';
import { ProductSummaryDetails } from 'apps/frontend/src/components/product-summary-details';
import { DeclineOfferModal } from 'apps/frontend/src/components/modals';
import { useStyles } from './product-offer-page.style';

export const ProductOfferPage: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [offerAccepted, setOfferAccepted] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAcceptOffer = () => {
    setOfferAccepted(true);
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
          <OfferSummaryBlock />
          <ProductSummaryBlock />
          {offerAccepted ? (
            <AcceptedOffer />
          ) : (
            <>
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
                  onClick={handleAcceptOffer}
                  className={clsx(classes.button, classes.buttonDark)}
                  classes={{ endIcon: classes.endIcon }}
                  endIcon={<OkIcon />}
                >
                  Accept Offer
                </Button>
              </Box>
              <ProductSummaryDetails />
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ProductOfferPage;
