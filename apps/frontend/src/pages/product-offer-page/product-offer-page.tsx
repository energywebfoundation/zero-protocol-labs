import { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Box, Avatar, Typography } from '@material-ui/core';
import UserAvatar from 'components/user-avatar/user-avatar';
import Breadcrumbs from 'components/breadcrumbs/breadcrumbs';
import PageSection from 'components/page-section/page-section';
import NotificationStrip from 'components/notification-strip/notification-strip';
import FieldLabel from 'components/field-label/field-label';
import FieldValue from 'components/field-value/field-value';
import avatarImage from 'assets/images/avatar.png';

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
  label: {
    fontSize: 12,
    lineHeight: '15px',
    color: '#f6efff',
    fontWeight: 700,
  },
  value: {
    fontSize: 20,
    lineHeight: '24px',
    color: '#00d08a',
    fontWeight: 700,
  },
  infoItem: {
    marginBottom: 10,
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
            <Grid container>
              <Grid item xs={4}>
                <Box display="flex" justifyContent="space-between">
                  <UserAvatar
                    image={avatarImage}
                    name="John Smith"
                    name2="Monsoon Carbon"
                    position="Sales manager"
                  />
                  <Box>
                    <Box className={classes.infoItem}>
                      <FieldLabel
                        width={'200px'}
                        mb={'9px'}
                        labelText={'Request ID'}
                        className={classes.label}
                      />
                      <FieldValue
                        valueText={'#1234567890'}
                        className={classes.value}
                      />
                    </Box>
                    <Box className={classes.infoItem}>
                      <FieldLabel
                        width={'200px'}
                        mb={'5px'}
                        labelText={'Offer ID'}
                        className={classes.label}
                      />
                      <FieldValue
                        valueText={'#ABC4567DEF'}
                        className={classes.value}
                      />
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className={classes.infoItem}>
                  <FieldLabel
                    width={'200px'}
                    mb={'9px'}
                    labelText={'Product summary'}
                    className={classes.label}
                  />
                  <FieldValue
                    valueText={'EAC / I-REC / Future / France  / Solar'}
                    className={classes.value}
                  />
                </Box>
                <Box className={classes.infoItem}>
                  <FieldLabel
                    width={'200px'}
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
            </Grid>
          </PageSection>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductOfferPage;
