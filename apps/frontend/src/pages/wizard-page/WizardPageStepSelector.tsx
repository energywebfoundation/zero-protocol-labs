import { FormWizardItemConfirm, FormWizardItemEmail, FormWizardItemProtocol, FormWizardItemUserType } from '../../containers';
import { useSelectedProtocolStore } from '../../context';
import { ProtocolsEnum } from '../../utils';

export interface IFormStepItem {
    handleChange: (values: any) => void;
    setFieldValue: (name: string, value: any) => void;
}

export interface WizardPageStepSelectorProps {
  step: number;
  handleChange: (values: any) => void;
  setFieldValue: (name: string, value: any) => void;
  values: any;
}

export const WizardPageStepSelector = ({
  step,
  handleChange,
  setFieldValue,
  values
}: WizardPageStepSelectorProps) => {
  const selectedProtocol = useSelectedProtocolStore();
  // bad should be more generic
  const isFilecoin = selectedProtocol === ProtocolsEnum.Filecoin;

  const renderSteps = (
    step: number,
    handleChange: (values: any) => void,
    setFieldValue: any
  ) => {
    switch (step) {
      case 1:
        return <FormWizardItemUserType values={values} isFilecoin={isFilecoin} handleChange={handleChange} setFieldValue={setFieldValue} />;

      case 2:
        return <FormWizardItemEmail isFilecoin={isFilecoin} handleChange={handleChange} setFieldValue={setFieldValue} values={values}/>;

      case 3:
        return <FormWizardItemConfirm isFilecoin={isFilecoin} values={values} />;

      default:
        return <FormWizardItemProtocol />;
    }
  };

  return <>{renderSteps(step, handleChange, setFieldValue)}</>;
};
