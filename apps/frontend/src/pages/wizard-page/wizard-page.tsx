import FormWizardItemProtocol from './components/form-wizard-item-protocol/form-wizard-item-protocol';
import FormWizardItemUserType from './components/form-wizard-item-user-type/form-wizard-item-user-type';
import FormWizardItemEmail from './components/form-wizard-item-email/form-wizard-item-email';
import FormWizardItemConfirm from './components/form-wizard-item-confirm/form-wizard-item-confirm';
import { FormikStep, FormikStepper } from '../../components/formik-stepper';
import { useSelectedProtocolStore } from '../../context';
import { ProtocolsEnum } from '../../utils';
import { Helmet } from 'react-helmet-async';


export const WizardPage = () => {
  const selectedProtocol = useSelectedProtocolStore();
  // bad should be more generic
  const isFilecoin = selectedProtocol === ProtocolsEnum.Filecoin;

  return (
    <>
      <Helmet>
        <title>Create Request</title>
      </Helmet>
      <FormikStepper initialValues={{}} onSubmit={() => {}}>
        <FormikStep label="Protocol">
          <FormWizardItemProtocol isFilecoin={isFilecoin} />
        </FormikStep>
        <FormikStep label="Consumption">
          <FormWizardItemUserType isFilecoin={isFilecoin} />
        </FormikStep>
        <FormikStep label="Preferences">
          <FormWizardItemEmail isFilecoin={isFilecoin} />
        </FormikStep>
        <FormikStep label="Confirmation">
          <FormWizardItemConfirm isFilecoin={isFilecoin} />
        </FormikStep>
      </FormikStepper>
    </>
  );
};

export default WizardPage;
