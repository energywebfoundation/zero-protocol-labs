import { FC, useState } from 'react';
import clsx from 'clsx';
import { useFormik } from 'formik';
import {
  Grid,
  Box,
  Paper,
  Typography,
  FormLabel,
  TextField,
  Button,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import SwitchLabels from 'apps/frontend/src/components/switch-label/switch-label';
import { WireTransferInformation } from '../wire-transfer-information';
import { CryptoPaymentInformation } from '../crypto-payment-information';
import { ReactComponent as AddNoteIcon } from 'apps/frontend/src/assets/svg/add-note.svg';
import { ReactComponent as EditIcon } from 'apps/frontend/src/assets/svg/edit.svg';
import { ReactComponent as SendIcon } from 'apps/frontend/src/assets/svg/send-message.svg';
import { useStyles } from './accepted-offer.style';

export const AcceptedOffer: FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [wirePayment, setWirePayment] = useState(true);
  const [cryptoPayment, setCryptoPayment] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const uploadButtonText = isMobile
    ? 'Upload payment recipe'
    : 'Upload document';

  const formik = useFormik({
    initialValues: {
      recAddress: '',
      email: '',
      name: '',
      vat: '',
      address: '',
      crypto: '',
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
        <Box>
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
        <Box className={classes.switchWrapper}>
          <SwitchLabels
            labelName={'I’ll pay with a Wire transfer'}
            boxProps={{ className: classes.switch, mr: 8 }}
            checked={wirePayment}
            setChecked={() => {
              setWirePayment(!wirePayment);
              setCryptoPayment(!cryptoPayment);
            }}
          />
          <SwitchLabels
            labelName={'I’ll pay with crypto'}
            boxProps={{ className: classes.switch }}
            checked={cryptoPayment}
            setChecked={() => {
              setCryptoPayment(!cryptoPayment);
              setWirePayment(!wirePayment);
            }}
          />
        </Box>
        <Box>
          <Typography className={classes.wireTransferTitle}>
            Wire Transfer instructions
          </Typography>
        </Box>
        <Grid container>
          {cryptoPayment && (
            <Grid container sx={{ mt: { xs: 2, md: 3 }, mb: { xs: 0, md: 1 } }}>
              <Grid item xs={12} md={6} className={classes.fieldWrapper}>
                <FormLabel className={classes.label}>
                  Payment Transaction URL
                </FormLabel>
                <TextField
                  fullWidth
                  id="crypto"
                  name="crypto"
                  className={classes.field}
                  value={formik.values.crypto}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={classes.formDescriptionItem}>
                  <Typography className={classes.descriptionTitle}>
                    [Optional]
                  </Typography>
                  <Typography className={classes.descriptionText}>
                    URL of the payment transaction pubblicly accessible in a
                    blockchain explorer
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          )}
          {wirePayment ? (
            <Grid item xs={12} md={6} sx={{ pr: { xs: 0, md: 1, lg: 7.2 } }}>
              <WireTransferInformation
                accountHolder="Monsoon Carbon LTD"
                iban="FR12500A08170648489890"
                swift="FRECR/23"
                amount="15"
                currency="USD"
                transferConcept="Zero Offer #ABC4567DEF"
                boxProps={{ sx: { mt: { xs: 2 }, mb: { xs: 2 } } }}
              />
            </Grid>
          ) : (
            <Grid item xs={12} md={6} sx={{ pr: { xs: 0, md: 1, lg: 7.2 } }}>
              <CryptoPaymentInformation
                blockchain="Ethereum or EnergyWebChain"
                address="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
                transferConcept="Zero Offer #ABC4567DEF"
                amountAndCurrency={
                  <>
                    <span>15 DAI or USDC or USDT</span> <br />
                    <span>0,004647732835923 ETH (@3227.41 USD/ETH)</span>{' '}
                    <span>1,832844574780059 EWT ( @8.25 USD/EWT)</span>
                  </>
                }
                boxProps={{ sx: { mt: { xs: 0, md: 2 } } }}
              />
            </Grid>
          )}
          {wirePayment && (
            <Grid item xs={12} md={6} sx={{ pl: { xs: 0, md: 1, lg: 3 } }}>
              <Box
                className={classes.wireTransfer}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                sx={{ mt: { xs: 0, md: 2 } }}
              >
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  <Typography className={classes.dropTitle}>
                    Drag and drop payment receipt
                  </Typography>
                  <Typography
                    color="primary"
                    fontSize={14}
                    lineHeight="16px"
                    textAlign="center"
                    fontWeight={600}
                  >
                    or
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  className={classes.uploadButton}
                  classes={{ endIcon: classes.endIcon }}
                  endIcon={<AddNoteIcon />}
                >
                  {uploadButtonText}
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
      </Paper>
      <Box className={classes.buttonsGroup}>
        <Button
          variant="contained"
          className={classes.button}
          classes={{ endIcon: classes.endIcon }}
          endIcon={<EditIcon />}
        >
          Edit data
        </Button>
        <Button
          variant="contained"
          className={clsx(classes.button, classes.buttonDark)}
          classes={{ endIcon: classes.endIcon }}
          endIcon={<SendIcon />}
        >
          Submit Information
        </Button>
      </Box>
    </Box>
  );
};
