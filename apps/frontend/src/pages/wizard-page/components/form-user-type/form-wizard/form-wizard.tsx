import FormWizardItemProtocol from '../form-wizard-item-protocol/form-wizard-item-protocol';
import FormWizardItemUserType from '../form-wizard-item-user-type/form-wizard-item-user-type';

export interface FormWizardProps {
  isFilecoin?: boolean;
}

const FormWizard: React.FC<FormWizardProps> = ({ isFilecoin }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <FormWizardItemProtocol isFilecoin={isFilecoin} />
      <FormWizardItemUserType isFilecoin={isFilecoin} />
    </div>
  );
};

export default FormWizard;
