import { FC } from 'react';
import { Box } from '@material-ui/core';
import SwitchLabels from '../../components/switch-label/switch-label';
import { WireTransferInstructions } from '../../components/wire-transfer-instructions';
import { CryptoPaymentInstructions } from '../../components/crypto-payment-instructions';
import { useProductOfferPaymentEffects } from './product-offer-payment.effects';
import { useStyles } from './product-offer-payment.style';

export const ProductOfferPayment: FC = () => {
  const classes = useStyles();

  const { wirePayment, cryptoPayment, handleWirePayment, handleCryptoPayment } =
    useProductOfferPaymentEffects();

  return (
    <Box>
      <Box className={classes.switchWrapper}>
        <SwitchLabels
          labelName={'I’ll pay with a Wire transfer'}
          boxProps={{ className: classes.switch, mr: 8 }}
          checked={wirePayment}
          setChecked={handleWirePayment}
        />
        <SwitchLabels
          labelName={'I’ll pay with crypto'}
          boxProps={{ className: classes.switch }}
          checked={cryptoPayment}
          setChecked={handleCryptoPayment}
        />
      </Box>
      {wirePayment && <WireTransferInstructions />}
      {cryptoPayment && <CryptoPaymentInstructions />}
    </Box>
  );
};
