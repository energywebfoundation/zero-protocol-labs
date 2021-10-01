import { Grid, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { variables } from 'libs/ui/theme/src';
import { Link } from 'react-router-dom';
import GenericSelect from '../../components/generic-select/generic-select';
import { useStyles } from './wizard-page-styles';

export const WizardPage = () => {
  const styles = useStyles();
  return (
    <Grid container className={styles.gridStyle}>
      <Grid item xs={6} m={'0 auto'}>
        <Box
          mt={'70px'}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Typography
            color={variables.secondaryColor}
            fontSize={'32px'}
            fontWeight={700}
            textAlign={'center'}
          >
            Great! Let’s make your crypto green!
          </Typography>
          <Typography
            color={variables.white}
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
          <GenericSelect />
        </Box>
        <Box
          mt={'70px'}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Typography
            color={variables.secondaryColor}
            fontSize={'24px'}
            fontWeight={700}
            textAlign={'center'}
            lineHeight={'30px'}
          >
            What are RECs and why do you need them <br /> to make your crypto
            green?
          </Typography>
          <Typography
            color={variables.white}
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
            <Link className={styles.linkStyles} to={'*'}>
              read more
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WizardPage;
