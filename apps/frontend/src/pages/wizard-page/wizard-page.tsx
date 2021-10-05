import { Grid, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { variables } from 'libs/ui/theme/src';
import { useSelector } from 'react-redux';
import GenericSelect from '../../components/generic-select/generic-select';
import { RootState } from '../../store/store';
import BitcoinGlobusImg from '../../assets/svg/globus.svg';
import FilecoinGlobusImg from '../../assets/svg/filecoinGlobus.svg';
import { useStyles } from './wizard-page-styles';
import CardReadMore from '../../components/card-reade-more/cardReadMore';

export const WizardPage = () => {
  const styles = useStyles();
  const isFilecoint = useSelector((state: RootState) => state.app.isFilecoin);

  return (
    <Grid
      bgcolor={
        isFilecoint ? variables.filcoinBackgroundColor : variables.primaryColor
      }
      container
      className={styles.gridStyle}
      style={{
        backgroundImage: `url(${
          isFilecoint ? FilecoinGlobusImg : BitcoinGlobusImg
        })`,
        position: 'relative',
      }}
    >
      <Grid item xs={6} m={'0 auto'}>
        <Box
          mt={'70px'}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Typography
            color={
              isFilecoint ? variables.filcoinColor : variables.secondaryColor
            }
            fontSize={'32px'}
            fontWeight={700}
            textAlign={'center'}
          >
            Great! Let’s make your crypto green!
          </Typography>
          <Typography
            color={isFilecoint ? variables.black : variables.white}
            fontSize={'20px'}
            fontWeight={500}
            textAlign={'center'}
            maxWidth={'383px'}
            mt={'12px'}
          >
            Congratulations on wanting to help the planet by buying Renewable
            Energy
          </Typography>
        </Box>
        <Box>
          <GenericSelect
            name={'Protocol'}
            placeholder={'Choose the Protocol'}
            bgColor={variables.white}
          />
        </Box>
        <Box
          mt={'70px'}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Typography
            color={
              isFilecoint ? variables.filcoinColor : variables.secondaryColor
            }
            fontSize={'24px'}
            fontWeight={700}
            textAlign={'center'}
            lineHeight={'30px'}
          >
            What are RECs and why do you need them <br /> to make your crypto
            green?
          </Typography>
          <Typography
            color={isFilecoint ? variables.black : variables.white}
            fontSize={'16px'}
            fontWeight={500}
            textAlign={'center'}
            maxWidth={'685px'}
            mt={'12px'}
            lineHeight={'24px'}
          >
            Recs or Renewable Energy Certificates are the only way to proove
            that you consumed renewable energy. They have different names in
            different regions: their general name is EAC or Energy Attribute
            Certificate, in Europe they are called GOs or Guarantees of Origin,
            and in the USA they are{' '}
            <span
              style={{
                color: isFilecoint
                  ? variables.purpleLight
                  : variables.secondaryColor,
              }}
            >
              read more
            </span>
          </Typography>
          <CardReadMore />
        </Box>
      </Grid>
    </Grid>
  );
};

export default WizardPage;
