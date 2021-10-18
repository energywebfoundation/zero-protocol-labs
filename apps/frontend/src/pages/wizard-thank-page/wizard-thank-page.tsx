import { Button, Grid, Typography } from '@material-ui/core';
import { useSelectedProtocolStore } from '../../context';
import { ProtocolsEnum } from '../../utils';
import BitcoinGlobusImg from '../../assets/svg/globus.svg';
import FilecoinGlobusImg from '../../assets/svg/filecoinGlobus.svg';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import { useStyles } from './wizard-thank-page-styles';
import { ReactComponent as BitcoinIcon } from '../../assets/svg/enterArrowGreen.svg';
import { ReactComponent as FilecoinIcon } from '../../assets/svg/enterArrowBlue.svg';
import { useNavigate } from 'react-router';

export const WizardThankPage = () => {
  const selectedProtocol = useSelectedProtocolStore();
  const navigate = useNavigate();

  const isFilecoin = selectedProtocol === ProtocolsEnum.Filecoin;

  const styles = useStyles();

  return (
    <Grid
      className={styles.grid}
      bgcolor={
        isFilecoin ? variables.filcoinBackgroundColor : variables.primaryColor
      }
      style={{
        backgroundImage: `url(${
          isFilecoin ? FilecoinGlobusImg : BitcoinGlobusImg
        })`,
      }}
    >
      <Grid item></Grid>

      <Grid item>
        <Typography
          color={isFilecoin ? variables.filcoinColor : variables.secondaryColor}
          fontSize={'32px'}
          fontWeight={700}
          textAlign={'center'}
          mb={'12px'}
        >
          Thank you for submitting your request
        </Typography>
        <Typography
          color={isFilecoin ? variables.black : variables.white}
          fontSize={'20px'}
          fontWeight={500}
          textAlign={'center'}
        >
          Our team will be in contact with you very soon
        </Typography>
      </Grid>
      <Grid item>
        <Button
          className={isFilecoin ? styles.buttonFilecoin : styles.buttonBitcoin}
          endIcon={isFilecoin ? <FilecoinIcon /> : <BitcoinIcon />}
          onClick={() => navigate('/wizard')}
        >
          Back to beginning
        </Button>
      </Grid>
    </Grid>
  );
};

export default WizardThankPage;
