import { Grid, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { variables } from 'libs/ui/theme/src';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import BitcoinGlobusImg from '../../assets/svg/globus.svg';
import FilecoinGlobusImg from '../../assets/svg/filecoinGlobus.svg';
import { useStyles } from './wizard-page-styles';
import CardReadMore from '../../components/card-reade-more/cardReadMore';
import FormWizard from './components/form-user-type/form-wizard/form-wizard';

export const WizardPage = () => {
  const styles = useStyles();
  const isFilecoin = useSelector((state: RootState) => state.app.isFilecoin);

  return (
    <Grid
      bgcolor={
        isFilecoin ? variables.filcoinBackgroundColor : variables.primaryColor
      }
      container
      className={styles.gridStyle}
      style={{
        backgroundImage: `url(${
          isFilecoin ? FilecoinGlobusImg : BitcoinGlobusImg
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
              isFilecoin ? variables.filcoinColor : variables.secondaryColor
            }
            fontSize={'32px'}
            fontWeight={700}
            textAlign={'center'}
          >
            Great! Let’s make your crypto green!
          </Typography>
          <Typography
            color={isFilecoin ? variables.black : variables.white}
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
        <FormWizard isFilecoin={isFilecoin} />
        <Box
          mt={'70px'}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Typography
            color={
              isFilecoin ? variables.filcoinColor : variables.secondaryColor
            }
            fontSize={'24px'}
            fontWeight={700}
            textAlign={'center'}
            lineHeight={'30px'}
          >
            {isFilecoin
              ? 'More info About RECs for Filecoin miners'
              : 'What are RECs and why do you need them to make your crypto green?'}
          </Typography>
          <Typography
            color={isFilecoin ? variables.black : variables.white}
            fontSize={'16px'}
            fontWeight={500}
            textAlign={'center'}
            maxWidth={'685px'}
            mt={'12px'}
            lineHeight={'24px'}
          >
            {isFilecoin
              ? 'Sed gravida et aliquam aliquam. Vitae at sed facilisis pharetra. Pharetra massa ut risus, risus leo, amet fringilla eu. Et pellentesque mi in magna cursus tincidunt arcu pellentesque diam. Ipsum euismod platea vestibulum nisl. Malesuada elementum facilisis vitae sagittis feugiat non nisl. Urna purus amet, sit tempus molestie.'
              : 'Recs or Renewable Energy Certificates are the only way to proovethat you consumed renewable energy. They have different names indifferent regions: their general name is EAC or Energy AttributeCertificate, in Europe they are called GOs or Guarantees of Origin,and in the USA they are'}
            <span
              style={{
                color: isFilecoin
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
