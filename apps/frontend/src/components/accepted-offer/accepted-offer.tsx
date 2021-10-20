import { FC } from 'react';
import { useFormik } from 'formik';
import {
  Grid,
  Box,
  Paper,
  Typography,
  FormLabel,
  TextField,
} from '@material-ui/core';
import { useStyles } from './accepted-offer.style';

export const AcceptedOffer: FC = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      recAddress: '',
      email: '',
      name: '',
      vat: '',
      address: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box>
      <Paper className={classes.paper}>
        <Typography className={classes.title}>
          Thanks for accepting the offer.
        </Typography>
        <Typography className={classes.subTitle}>Next Steps:</Typography>
        <ul className={classes.list}>
          <li>
            Fill in the information needed to retire the certificates in your
            name and choose your favorite payment method
          </li>
          <li>
            You will receive a payment confirmation to your email{' '}
            <a href="mailto: owner@FileVaults.io">owner@FileVaults.io</a>
          </li>
          <li>
            Once your payment has been processed you’ll receive an email with
            your requested product within 5 business days
          </li>
        </ul>
      </Paper>
      <Paper className={classes.paper2}>
        <Box className={classes.formWrapper}>
          <form>
            <Grid container mb={1.5}>
              <Grid item xs={12} md={6} className={classes.fieldWrapper}>
                <FormLabel className={classes.label}>
                  REC Owner EWChain Address*
                </FormLabel>
                <TextField
                  fullWidth
                  id="recAddress"
                  name="recAddress"
                  className={classes.field}
                  value={formik.values.recAddress}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={classes.formDescriptionItem}>
                  <Typography className={classes.descriptionTitle}>
                    <strong>[Required]</strong>
                  </Typography>
                  <Typography className={classes.descriptionText}>
                    RECs are like NFTs and they will be sent to this blockchain
                    address you need to provide. <br />
                    Beware, this should be an Energy Web Chain address. Any
                    Ethereum address will work, but remember that you need to
                    connect your wallet to the Energy Web Chain.{' '}
                    <strong>Learn how</strong>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container mb={1.5}>
              <Grid item xs={12} md={6} className={classes.fieldWrapper}>
                <FormLabel className={classes.label}>Email</FormLabel>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  className={classes.field}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={classes.formDescriptionItem}>
                  <Typography className={classes.descriptionTitle}>
                    <strong>[Required]</strong>
                  </Typography>
                  <Typography className={classes.descriptionText}>
                    The email where we will send the payment receipt and the
                    link to download your RECs
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container mb={1.5}>
              <Grid item xs={12} md={6} className={classes.fieldWrapper}>
                <FormLabel className={classes.label}>
                  Company Name / individual
                </FormLabel>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  className={classes.field}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={classes.formDescriptionItem}>
                  <Typography className={classes.descriptionTitle}>
                    [Optional]
                  </Typography>
                  <Typography className={classes.descriptionText}>
                    The name of the company, individual, that should appear in
                    the official I-REC certificate as the final owner of the
                    claimed certificates. <br />
                    <strong>
                      Learn more about REC retirement and who sees this
                      information
                    </strong>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container mb={1.5}>
              <Grid item xs={12} md={6} className={classes.fieldWrapper}>
                <FormLabel className={classes.label}>VAT Nr</FormLabel>
                <TextField
                  fullWidth
                  id="vat"
                  name="vat"
                  className={classes.field}
                  value={formik.values.vat}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={classes.formDescriptionItem}>
                  <Typography className={classes.descriptionTitle}>
                    [Optional]
                  </Typography>
                  <Typography className={classes.descriptionText}>
                    if you want an invoice for the payment
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container mb={1.5}>
              <Grid item xs={12} md={6} className={classes.fieldWrapper}>
                <FormLabel className={classes.label}>
                  Address and other invoice data
                </FormLabel>
                <TextField
                  fullWidth
                  id="address"
                  name="address"
                  className={classes.field}
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={classes.formDescriptionItem}>
                  <Typography className={classes.descriptionTitle}>
                    [Optional]
                  </Typography>
                  <Typography className={classes.descriptionText}>
                    if you need to add information about your company for the
                    invoice.We value your privacy and security: this will be
                    visible only to the Seller, not on the REC certificates
                    themselves
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};
