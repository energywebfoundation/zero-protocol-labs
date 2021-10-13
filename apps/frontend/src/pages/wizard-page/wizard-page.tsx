import { FormikStepper } from '../../components/formik-stepper';
import { Helmet } from 'react-helmet-async';
import { useOrderPageEffects } from './wizard-page.effects';

export const WizardPage = () => {

  return (
    <>
      <Helmet>
        <title>Create Request</title>
      </Helmet>
      <FormikStepper />
    </>
  );
};

export default WizardPage;
