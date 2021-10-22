import { useState } from 'react';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import {
  Grid,
  Typography,
  Box,
  SelectChangeEvent,
  TextField,
} from '@material-ui/core';
import { useStyles } from './welcome-page-styles';
import GenericSelect from '../../components/generic-select/generic-select';
import { Form, Formik } from 'formik';
import BasicDatePicker from '../../components/date-picker/date-picker';
import GenericSubmitButton from '../../components/generic-submit-button/generic-submit-button';
import Footer from '../../components/footer/footer';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddAltIcon from '@material-ui/icons/PersonAddAlt';
import { QuestionSectionWelcomePage, TabsWelcomePage } from '../../containers';
import GenericQuestionSection from '../../components/generic-question-section/generic-question-section';
import { ReactComponent as CountryImg } from '../../assets/svg/country.svg';
import { ReactComponent as GeneratorImg } from '../../assets/svg/generator.svg';
import { ReactComponent as TWHImg } from '../../assets/svg/twh.svg';
import AdvisorsSection from '../../components/advisors-section/advisors-section';

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

const awaitsData = [
  { img: <CountryImg />, count: '90', name: 'Countries' },
  { img: <GeneratorImg />, count: '560', name: 'Generators' },
  { img: <TWHImg />, count: '356', name: 'TWh' },
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
                    <Box width="100%">
                      <GenericSelect
                        handleChange={(event) =>
                          handleElemChange(event, setFieldValue)
                        }
                        name="region"
                        value={values.region}
                        placeholder={''}
                        bgColor={variables.inputBackgroundColor}
                        options={option1}
                        menuItemClassName={styles.menuItem}
                      />
                    </Box>
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
                        menuItemClassName={styles.menuItem}
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
                      menuItemClassName={styles.menuItem}
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
        <QuestionSectionWelcomePage />
      </Grid>
      <Grid item p="122px 41px 0 40px">
        <GenericQuestionSection
          label=""
          title={'What awaits you inside of Zero? '}
          desc={`Zero App is a place where You'll find:`}
          btnName={'Create account'}
          icon={<PersonAddAltIcon />}
        >
          <Box
            display="flex"
            mb="125px"
            mt="25px"
            width="50%"
            justifyContent="space-between"
          >
            {awaitsData.map((el) => {
              return (
                <Box display="flex" alignItems="center" key={el.name}>
                  {el.img}
                  <Box ml="23px">
                    <Typography
                      fontWeight={700}
                      fontSize="32px"
                      color={variables.white}
                      lineHeight="30px"
                    >
                      {el.count}
                    </Typography>
                    <Typography
                      fontWeight={600}
                      fontSize="22px"
                      color={variables.secondaryColor}
                    >
                      {el.name}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </GenericQuestionSection>
      </Grid>
      <Grid item className={styles.tabsSection}>
        <TabsWelcomePage />
      </Grid>
      <Grid item className={styles.advisorsSection}>
        <AdvisorsSection />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default WelcomePage;
