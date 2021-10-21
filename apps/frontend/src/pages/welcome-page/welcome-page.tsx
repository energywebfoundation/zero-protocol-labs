import React, { useState } from 'react';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import {
  Grid,
  Typography,
  Box,
  SelectChangeEvent,
  TextField,
  Button,
  Tabs,
  Tab,
} from '@material-ui/core';
import { useStyles } from './welcome-page-styles';
import GenericSelect from '../../components/generic-select/generic-select';
import { Form, Formik } from 'formik';
import BasicDatePicker from '../../components/date-picker/date-picker';
import GenericSubmitButton from '../../components/generic-submit-button/generic-submit-button';
import SearchIcon from '@material-ui/icons/Search';
import { ReactComponent as LeftArrowIcon } from '../../assets/svg/leftArrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/svg/rightArrow.svg';

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

const option3 = [
  { value: 'Producttest0', label: 'Producttest0' },
  { value: 'Producttest1', label: 'Producttest1' },
  { value: 'Producttest2', label: 'Producttest2s' },
];

export const WelcomePage = () => {
  const styles = useStyles();

  const [testDay, setDay] = useState<any>(new Date());

  const handleElemChange = (
    event: SelectChangeEvent,
    setFieldValue: (name: string, value: any) => void
  ) => {
    const {
      target: { value, name },
    } = event;

    setFieldValue(name, value);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const handleBackStep = () => setValue((s) => s - 1);
  const handleNextStep = () => setValue((s) => s + 1);

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
          initialValues={{ region: '', deviceType: '', productType: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {({ setFieldValue, values }) => (
            <Form autoComplete="off">
              <Box className={styles.formBlock}>
                <Box mr="16px" width="100%">
                  <Box mb="16px">
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
                  <Box display="flex">
                    <Box width="100%" mr="16px">
                      <Typography
                        fontSize={variables.fontSize}
                        ml={'15px'}
                        fontWeight={600}
                        color={variables.purpleText}
                        mb={'8px'}
                      >
                        Product Type
                      </Typography>
                      <GenericSelect
                        handleChange={(event) =>
                          handleElemChange(event, setFieldValue)
                        }
                        name="productType"
                        value={values.productType}
                        placeholder={''}
                        bgColor={variables.inputBackgroundColor}
                        options={option3}
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
                        Energy amount
                      </Typography>
                      <TextField
                        classes={{ root: styles.input }}
                        fullWidth
                        name={'amount'}
                        placeholder="Amount"
                        InputProps={{
                          endAdornment: (
                            <span className={styles.amountSpan}>MWh</span>
                          ),
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box width="100%" mb="16px">
                  <Box mb="16px">
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
                  </Box>
                  <Box display="flex" className={styles.dateBlock}>
                    <Box width="100%" mr="21px">
                      <Typography
                        color={variables.purpleText}
                        fontSize={variables.fontSize}
                        fontWeight={600}
                        mb={'8px'}
                        ml={'14px'}
                      >
                        Generation start date
                      </Typography>
                      <BasicDatePicker
                        value={testDay}
                        setValue={(value) =>
                          setFieldValue(`generalStartDate`, value)
                        }
                      />
                    </Box>
                    <Box width="100%">
                      <Typography
                        color={variables.purpleText}
                        fontSize={variables.fontSize}
                        fontWeight={600}
                        mb={'8px'}
                        ml={'14px'}
                      >
                        Generation end date
                      </Typography>
                      <BasicDatePicker
                        value={testDay}
                        setValue={(value) =>
                          setFieldValue(`generalEndtDate`, value)
                        }
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-end" mt="16px">
                <Box width="340px">
                  <GenericSubmitButton
                    name="Search"
                    bgColor={variables.white}
                    color={variables.primaryColor}
                    hoverBgColor={variables.secondaryColor}
                    hoverColor={variables.white}
                    iconColor={variables.secondaryColor}
                    hoverIconColor={variables.primaryColor}
                    icon={<SearchIcon />}
                  />
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Grid>
      <Grid item>
        <Box width="100%" bgcolor={variables.white}>
          <Button
            sx={{ height: '0px' }}
            disabled={value === 0}
            variant="contained"
            onClick={handleBackStep}
            startIcon={<LeftArrowIcon />}
          ></Button>

          <Button
            sx={{ height: '0px' }}
            disabled={value === 8}
            variant="contained"
            onClick={handleNextStep}
            endIcon={<RightArrowIcon />}
          ></Button>
          <Tabs
            value={value}
            onChange={handleChange}
            scrollButtons={false}
            aria-label="scrollable force tabs example"
            variant="scrollable"
          >
            <Box
              width="289px"
              height="385px"
              mr="10px"
              sx={{ border: '1px solid red' }}
            >
              <Typography>Myriad marketplaces</Typography>
              <Typography
                sx={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
                width="100%"
                fontSize="16px"
                fontWeight="500"
                color={'red'}
              >
                Zerofdbzggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
              </Typography>
            </Box>
            <Box
              minWidth="289px"
              height="385px"
              sx={{ border: '1px solid red' }}
            >
              <Typography>Myriad marketplaces</Typography>
              <Typography
                width="100%"
                fontSize="16px"
                fontWeight="500"
                color={variables.white}
              >
                Zero
              </Typography>
            </Box>
            <Box
              minWidth="289px"
              height="385px"
              sx={{ border: '1px solid red' }}
            >
              <Typography>Myriad marketplaces</Typography>
              <Typography
                width="100%"
                fontSize="16px"
                fontWeight="500"
                color={variables.white}
              >
                Zero
              </Typography>
            </Box>
            <Box
              minWidth="289px"
              height="385px"
              sx={{ border: '1px solid red' }}
            >
              <Typography>Myriad marketplaces</Typography>
              <Typography
                width="100%"
                fontSize="16px"
                fontWeight="500"
                color={variables.white}
              >
                Zero
              </Typography>
            </Box>
            <Box
              minWidth="289px"
              height="385px"
              sx={{ border: '1px solid red' }}
            >
              <Typography>Myriad marketplaces</Typography>
              <Typography
                width="100%"
                fontSize="16px"
                fontWeight="500"
                color={variables.white}
              >
                Zero
              </Typography>
            </Box>
            <Box
              minWidth="289px"
              height="385px"
              sx={{ border: '1px solid red' }}
            >
              <Typography>Myriad marketplaces</Typography>
              <Typography
                width="100%"
                fontSize="16px"
                fontWeight="500"
                color={variables.white}
              >
                Zero
              </Typography>
            </Box>
            <Box
              minWidth="289px"
              height="385px"
              sx={{ border: '1px solid red' }}
            >
              <Typography>Myriad marketplaces</Typography>
              <Typography
                width="100%"
                fontSize="16px"
                fontWeight="500"
                color={variables.white}
              >
                Zero
              </Typography>
            </Box>
            <Box
              minWidth="289px"
              height="385px"
              sx={{ border: '1px solid red' }}
            >
              <Typography>Myriad marketplaces</Typography>
              <Typography
                width="100%"
                fontSize="16px"
                fontWeight="500"
                color={'red'}
              >
                Zerofdbdsfbgfbdgbrdngrdngdtngtdndnyt
              </Typography>
            </Box>

            {/* <Tab label="Item One"></Tab>
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" /> */}
          </Tabs>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WelcomePage;
