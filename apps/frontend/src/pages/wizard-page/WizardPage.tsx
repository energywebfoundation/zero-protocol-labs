import { variables } from '@energyweb/zero-protocol-labs-theme';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Grid,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@material-ui/core';
import { Form, Formik } from 'formik';
import BitcoinGlobusImg from '../../assets/svg/globus.svg';
import FilecoinGlobusImg from '../../assets/svg/filecoinGlobus.svg';
import { ReactComponent as LeftArrowIcon } from '../../assets/svg/leftArrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/svg/rightArrow.svg';
import { ReactComponent as LeftArrowIconFilecoin } from '../../assets/svg/leftArrowFilecoin.svg';
import { ReactComponent as RightArrowIconFilecoin } from '../../assets/svg/rightArrowFilecoin.svg';
import { ReactComponent as SencIcon } from '../../assets/svg/sendIcon.svg';
import CardReadMore from '../../components/card-reade-more/cardReadMore';
import { textWizardPageDown, textWizardPageUp } from './wizard-page-utils';
import { WizardPageStepSelector } from './WizardPageStepSelector';
import { useStyles } from './WizardPage.styles';
import { initialValues, useWizardPageEffects } from './WizardPage.effects';

export const WizardPage = () => {
  const styles = useStyles();
  const windowRespWidth = window.innerWidth > 620;
  const {
    handleSubmit,
    handleBackStep,
    isFilecoin,
    step,
    stepLabels,
    isLastStep,
    addressMapping,
  } = useWizardPageEffects();

  return (
    <>
      <Helmet>
        <title>Create Request</title>
      </Helmet>
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
          backgroundSize: `${!windowRespWidth && 'contain'}`,
          position: 'relative',
        }}
      >
        <Grid
          item
          m={'0 auto'}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          p={`${!windowRespWidth && '0 15px'}`}
        >
          <Box
            mt={'70px'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            mb={'37px'}
          >
            <Typography
              color={
                isFilecoin ? variables.filcoinColor : variables.secondaryColor
              }
              fontSize={'32px'}
              fontWeight={700}
              textAlign={'center'}
            >
              {textWizardPageUp[0][step]}
            </Typography>
            <Typography
              color={isFilecoin ? variables.black : variables.white}
              fontSize={'20px'}
              fontWeight={500}
              textAlign={'center'}
              maxWidth={'383px'}
              mt={'12px'}
            >
              {textWizardPageUp[1][step]}
            </Typography>
          </Box>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) =>
              handleSubmit(values, addressMapping ?? new Map())
            }
          >
            {({ isSubmitting, handleChange, setFieldValue, values }) => (
              <Form className={styles.form} autoComplete="off">
                <Box display={'flex'} justifyContent={'center'} mb={'50px'}>
                  <Stepper
                    connector={<></>}
                    alternativeLabel
                    nonLinear
                    activeStep={step}
                  >
                    {stepLabels.map((label: string, index) => (
                      <Step
                        className={
                          step >= index && isFilecoin
                            ? styles.step
                            : step >= index && !isFilecoin
                            ? styles.stepBitcoin
                            : !(step >= index) && !isFilecoin
                            ? styles.stepBitcoinInActive
                            : styles.stepInActive
                        }
                        key={label}
                        active={step >= index}
                      >
                        <StepLabel className={styles.stepLabel}>
                          {windowRespWidth && label}
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
                <WizardPageStepSelector
                  step={step}
                  handleFormikChange={handleChange}
                  setFieldValue={setFieldValue}
                  values={values}
                />
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  mt={'24px'}
                  className={styles.btn}
                >
                  <Button
                    sx={{ height: '48px' }}
                    disabled={step === 0}
                    variant="contained"
                    onClick={handleBackStep}
                    startIcon={
                      isFilecoin ? <LeftArrowIconFilecoin /> : <LeftArrowIcon />
                    }
                  >
                    Back
                  </Button>
                  <Button
                    sx={{ height: '48px' }}
                    disabled={isSubmitting}
                    variant="contained"
                    type="submit"
                    endIcon={
                      isLastStep ? (
                        <SencIcon />
                      ) : isFilecoin ? (
                        <RightArrowIconFilecoin />
                      ) : (
                        <RightArrowIcon />
                      )
                    }
                  >
                    {isSubmitting
                      ? 'Submiting'
                      : isLastStep
                      ? 'Send Request'
                      : 'Next'}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
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
              maxWidth={'450px'}
            >
              {isFilecoin
                ? textWizardPageDown[2][step]
                : textWizardPageDown[0][step]}
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
                ? textWizardPageDown[3][step]
                : textWizardPageDown[1][step]}
              {windowRespWidth ? (
                <span
                  style={{
                    color: isFilecoin
                      ? variables.purpleLight
                      : variables.secondaryColor,
                  }}
                >
                  {' '}
                  {step === 0 && 'read more'}
                </span>
              ) : step === 0 ? (
                ' called RECs.'
              ) : (
                ''
              )}
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
              {!windowRespWidth && textWizardPageDown[4][step]}
            </Typography>
            {isFilecoin && windowRespWidth && <CardReadMore />}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
