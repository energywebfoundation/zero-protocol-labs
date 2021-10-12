import { variables } from "@energyweb/zero-protocol-labs-theme";
import { Box, Button, Grid, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { Form, Formik, FormikConfig, FormikHelpers, FormikValues } from "formik";
import React, { useState } from "react";
import BitcoinGlobusImg from '../../assets/svg/globus.svg';
import FilecoinGlobusImg from '../../assets/svg/filecoinGlobus.svg';
import { ReactComponent as LeftArrowIcon } from '../../assets/svg/leftArrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/svg/rightArrow.svg';
import { ReactComponent as LeftArrowIconFilecoin } from '../../assets/svg/leftArrowFilecoin.svg';
import { ReactComponent as RightArrowIconFilecoin } from '../../assets/svg/rightArrowFilecoin.svg';
import { ReactComponent as SencIcon } from '../../assets/svg/sendIcon.svg';
import { textWizardPageDown, textWizardPageUp } from '../../pages/wizard-page/wizard-page-utils';
import CardReadMore from "../card-reade-more/cardReadMore";
import { useStyles } from "./FormikStepper.styles";
import { useSelectedProtocolStore } from "../../context";
import { ProtocolsEnum } from "../../utils";

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'>
  {
    label: string;
  }

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export const FormikStepper = ({
  children,
  ...props
}: FormikConfig<FormikValues>) => {
  const styles = useStyles();

  const selectedProtocol = useSelectedProtocolStore();
  // bad needs to be replaced by more generic solutino
  const isFilecoin = selectedProtocol === ProtocolsEnum.Filecoin;

  const childrenArray = React.Children.toArray(
    children
  ) as React.ElementType<FormikStepProps>[];

  const [step, setStep] = useState(0);
  const currentChild: any = childrenArray[
    step
  ] as React.ElementType<FormikStepProps>;

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (values: FormikValues, helpers: FormikHelpers<FormikValues>) => {
    if (isLastStep()) {
      await props.onSubmit(values, helpers);
      setCompleted(true);
    } else {
      setStep((s) => s + 1);
    }
  }

  function isLastStep() {
    return step === childrenArray.length - 1;
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
        position: 'relative',
      }}
    >
      <Grid
        item
        xs={6}
        m={'0 auto'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
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
          {...props}
          validationSchema={currentChild.props.validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form
              autoComplete="off"
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '488px',
              }}
            >
              <Box display={'flex'} justifyContent={'center'} mb={'50px'}>
                <Stepper
                  connector={<></>}
                  alternativeLabel
                  nonLinear
                  activeStep={step}
                >
                  {childrenArray.map((child: any, index) => (
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
                      key={child.props.label}
                      active={step >= index || completed}
                    >
                      <StepLabel sx={{ width: '100px' }}>
                        {child.props.label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
              {currentChild}
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
          </Typography>
          {isFilecoin && <CardReadMore />}
        </Box>
      </Grid>
    </Grid>
  );
  };
