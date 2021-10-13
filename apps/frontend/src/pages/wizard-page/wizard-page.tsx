import { FormikStepper } from '../../components/formik-stepper';
import { Helmet } from 'react-helmet-async';

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
