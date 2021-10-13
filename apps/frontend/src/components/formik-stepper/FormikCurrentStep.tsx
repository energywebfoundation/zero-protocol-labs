import { useSelectedProtocolStore } from '../../context';
import { ProtocolsEnum } from '../../utils';
import FormWizardItemProtocol from '../../pages/wizard-page/components/form-wizard-item-protocol/form-wizard-item-protocol';
import FormWizardItemUserType from '../../pages/wizard-page/components/form-wizard-item-user-type/form-wizard-item-user-type';
import FormWizardItemEmail from '../../pages/wizard-page/components/form-wizard-item-email/form-wizard-item-email';
import FormWizardItemConfirm from '../../pages/wizard-page/components/form-wizard-item-confirm/form-wizard-item-confirm';
import { SelectChangeEvent } from '@material-ui/core';

export interface IFormStepItem {
    handleChange?: any,
    setFieldValue?: any
}

export interface IFormStepSelectCallbackArgs {
    event: SelectChangeEvent, 
    setFieldValue: any, 
}

export const FormikCurrentStep = ({
  step,
  handleChange,
  setFieldValue,
  values
}: {
  step: number;
  handleChange: any;
  setFieldValue: any;
  values: any;
}) => {
  const selectedProtocol = useSelectedProtocolStore();
  // bad should be more generic
  const isFilecoin = selectedProtocol === ProtocolsEnum.Filecoin;
  const renderSteps = (step: number, handleChange: any, setFieldValue: any) => {
    switch (step) {
      case 0:
        return <FormWizardItemProtocol isFilecoin={isFilecoin} handleChange={handleChange} setFieldValue={setFieldValue} />;

      case 1:
        return <FormWizardItemUserType isFilecoin={isFilecoin} handleChange={handleChange} setFieldValue={setFieldValue} />;

      case 2:
        return <FormWizardItemEmail isFilecoin={isFilecoin} handleChange={handleChange} setFieldValue={setFieldValue} values={values}/>;

      case 3:
        return <FormWizardItemConfirm isFilecoin={isFilecoin} values={values} />;

      default:
        return <FormWizardItemProtocol isFilecoin={isFilecoin} handleChange={handleChange} setFieldValue={setFieldValue} />;
    }
  };

  return <>{renderSteps(step, handleChange, setFieldValue)}</>;
};
