import { FC } from 'react';
import { Grid, Box, Typography, FormLabel, TextField } from '@material-ui/core';
import { CryptoPaymentInformation } from '../../components/crypto-payment-information';
import { useCryptoPaymentInstructionsEffects } from './crypto-payment-instructions.effects';
import { useStyles } from './crypto-payment-instructions.style';

export const CryptoPaymentInstructions: FC = () => {
  const classes = useStyles();
  const { form } = useCryptoPaymentInstructionsEffects();

  return (
    <>
      <Box>
        <Typography className={classes.title}>
          Crypto Payment instructions
        </Typography>
      </Box>
      <Grid container>
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
              value={form.values.crypto}
              onChange={form.handleChange}
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
      </Grid>
    </>
  );
};
