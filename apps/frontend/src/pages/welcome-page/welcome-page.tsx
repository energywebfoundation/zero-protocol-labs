import { variables } from '@energyweb/zero-protocol-labs-theme';
import {
  Grid,
  Typography,
  Box,
  SelectChangeEvent,
  Button,
} from '@material-ui/core';
import { useStyles } from './welcome-page-styles';
import GenericSelect from '../../components/generic-select/generic-select';
import { Form, Formik } from 'formik';

const option1 = [
  { value: 'Regiontest0', label: 'Regiontest0' },
  { value: 'Regiontest1', label: 'Regiontest1' },
  { value: 'Regiontest2', label: 'Regiontest2' },
];

const option2 = [
  { value: 'Devicetest0', label: 'Devicetest0' },
  { value: 'Devicetest1', label: 'Devicetest1' },
  { value: 'Devicetest2', label: 'Devicetest2' },
];

export const WelcomePage = () => {
  const styles = useStyles();

  const handleElemChange = (
    event: SelectChangeEvent,
    setFieldValue: (name: string, value: any) => void
  ) => {
    const {
      target: { value, name },
    } = event;

    setFieldValue(name, value);
  };

  return (
    <Grid className={styles.wrapper}>
      <Grid item className={styles.welcomeBlock}>
        <Typography
          color={variables.secondaryColor}
          fontSize={'40px'}
          fontWeight={700}
          textAlign={'center'}
          lineHeight={'51px'}
          mb="5px"
          pt="105px"
        >
          Welcome to Zero Protocol Labs
        </Typography>
        <Typography
          color={variables.white}
          fontSize={'24px'}
          fontWeight={600}
          lineHeight={'30px'}
          textAlign={'center'}
          mb="48px"
        >
          the global search engine for buying Renewable Energy
        </Typography>

        <Formik
          initialValues={{ region: '', deviceType: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {({ setFieldValue, values }) => (
            <Form autoComplete="off" className={styles.form}>
              <Box mr="16px" width="100%">
                <Typography
                  fontSize={variables.fontSize}
                  ml={'15px'}
                  mb={'8px'}
                  fontWeight={600}
                  color={variables.purpleText}
                >
                  Regions
                </Typography>
                <GenericSelect
                  handleChange={(event) =>
                    handleElemChange(event, setFieldValue)
                  }
                  name="region"
                  value={values.region}
                  placeholder={''}
                  bgColor={variables.inputBackgroundColor}
                  options={option1}
                />
              </Box>
              <Box width="100%">
                <Typography
                  fontSize={variables.fontSize}
                  ml={'15px'}
                  mb={'8px'}
                  fontWeight={600}
                  color={variables.purpleText}
                >
                  Device type
                </Typography>
                <GenericSelect
                  handleChange={(event) =>
                    handleElemChange(event, setFieldValue)
                  }
                  name="deviceType"
                  value={values.deviceType}
                  placeholder={''}
                  bgColor={variables.inputBackgroundColor}
                  options={option2}
                />

                <Button
                  sx={{ height: '48px' }}
                  variant="contained"
                  type="submit"
                >
                  Search
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default WelcomePage;
