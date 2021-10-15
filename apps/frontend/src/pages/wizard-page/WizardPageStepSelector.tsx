import { FormWizardItemConfirm, FormWizardItemEmail, FormWizardItemProtocol, FormWizardItemUserType } from '../../containers';
import { useSelectedProtocolStore } from '../../context';
import { ProtocolsEnum } from '../../utils';
import { WizardFormValues } from './WizardPage.effects';

export interface IFormStepItem {
  handleFormikChange: (value: any) => void;
  setFieldValue: (name: string, value: any) => void;
}

export interface WizardPageStepSelectorProps {
  step: number;
  handleFormikChange: (values: any) => void;
  setFieldValue: (name: string, value: any) => void;
  values: WizardFormValues;
}

export const WizardPageStepSelector = ({
  step,
  handleFormikChange,
  setFieldValue,
  values
}: WizardPageStepSelectorProps) => {
  const selectedProtocol = useSelectedProtocolStore();
  // bad should be more generic
  const isFilecoin = selectedProtocol === ProtocolsEnum.Filecoin;

  const renderSteps = (
    step: number,
    handleFormikChange: (values: any) => void,
    setFieldValue: any
  ) => {
    switch (step) {
      case 1:
        return <FormWizardItemUserType values={values} isFilecoin={isFilecoin} handleFormikChange={handleFormikChange} setFieldValue={setFieldValue} />;

      case 2:
        return <FormWizardItemEmail isFilecoin={isFilecoin} handleFormikChange={handleFormikChange} setFieldValue={setFieldValue} values={values}/>;

      case 3:
        return <FormWizardItemConfirm isFilecoin={isFilecoin} values={values} />;

      default:
        return <FormWizardItemProtocol />;
    }
  };

  return <>{renderSteps(step, handleFormikChange, setFieldValue)}</>;
};
