import { variables } from '@energyweb/zero-protocol-labs-theme';
import {
  Box,
  Grid,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Form, Formik, FormikValues } from 'formik';
import { useState } from 'react';
import BitcoinGlobusImg from '../../assets/svg/globus.svg';
import FilecoinGlobusImg from '../../assets/svg/filecoinGlobus.svg';
import { ReactComponent as LeftArrowIcon } from '../../assets/svg/leftArrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/svg/rightArrow.svg';
import { ReactComponent as LeftArrowIconFilecoin } from '../../assets/svg/leftArrowFilecoin.svg';
import { ReactComponent as RightArrowIconFilecoin } from '../../assets/svg/rightArrowFilecoin.svg';
import { ReactComponent as SencIcon } from '../../assets/svg/sendIcon.svg';
import {
  textWizardPageDown,
  textWizardPageUp,
} from '../../pages/wizard-page/wizard-page-utils';
import CardReadMore from '../card-reade-more/cardReadMore';
import { useStyles } from './FormikStepper.styles';
import { useSelectedProtocolStore } from '../../context';
import { ProtocolsEnum } from '../../utils';

import { FormikCurrentStep } from './FormikCurrentStep';
import { CreateOrderDto } from '@energyweb/zero-protocol-labs-api-client';
import { dataConversion } from './FormikStepperUtils';
import { useOrderPageEffects } from '../../pages/wizard-page/wizard-page.effects';

export const FormikStepper = () => {
  const styles = useStyles();
  const windowRespWidth = window.innerWidth > 620;
  const navigate = useNavigate();
  const selectedProtocol = useSelectedProtocolStore();
  // bad needs to be replaced by more generic solutino
  const isFilecoin = selectedProtocol === ProtocolsEnum.Filecoin;
  const stepLabels = ['Protocol', 'Consumption', 'Preferences', 'Confirmation'];

  const [step, setStep] = useState(0);

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (values: FormikValues) => {
    if (isLastStep()) {
      const convertingValues = dataConversion(values);
      let { data } = await useOrderPageEffects(convertingValues);
      if (data?.id) {
        navigate('/wizard-thank');
      }
    } else {
      setStep((s) => s + 1);
    }
  };

  function isLastStep() {
    return step === stepLabels.length - 1;
  }
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
          initialValues={{ wire: false, crypto: false }}
          onSubmit={(values) => handleSubmit(values)}
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
                        (step >= index || completed) && isFilecoin
                          ? styles.step
                          : (step >= index || completed) && !isFilecoin
                          ? styles.stepBitcoin
                          : !(step >= index || completed) && !isFilecoin
                          ? styles.stepBitcoinInActive
                          : styles.stepInActive
                      }
                      key={label}
                      active={step >= index || completed}
                    >
                      <StepLabel className={styles.stepLabel}>
                        {windowRespWidth && label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
              <FormikCurrentStep
                step={step}
                handleChange={handleChange}
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
                  disabled={step === 0 || completed}
                  variant="contained"
                  onClick={() => setStep((s) => s - 1)}
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
                    isLastStep() ? (
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
                    : isLastStep()
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
            ) : (
              'called RECs.'
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
  );
};
