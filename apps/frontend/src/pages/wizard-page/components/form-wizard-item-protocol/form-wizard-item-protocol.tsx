import { FormControl, Typography, MenuItem } from '@material-ui/core';
import GenericSelect from 'apps/frontend/src/components/generic-select/generic-select';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import * as React from 'react';
import BitcoinIcon from '../../../../assets/svg/bitcoinIcon.svg';
import FilecoininIcon from '../../../../assets/svg/filecoinIcon.svg';
import useStyles from './form-wizard-item-protocol-styles';
import { IGenericValueImage } from '../form-wizard-item-user-type/form-wizard-item-user-type';
import {
  useSelectedProtocolDispatch,
  useSelectedProtocolStore,
} from 'apps/frontend/src/context';
import { ProtocolsEnum } from 'apps/frontend/src/utils';
import {
  IFormStepItem,
  IFormStepSelectCallbackArgs,
} from 'apps/frontend/src/components/formik-stepper/FormikCurrentStep';

export interface IFormWizardItemProtocolProps extends IFormStepItem {
  isFilecoin?: boolean;
}

const names: IGenericValueImage[] = [
  { value: ProtocolsEnum.Filecoin, img: FilecoininIcon },
  { value: ProtocolsEnum.Bitcoin, img: BitcoinIcon },
  { value: ProtocolsEnum.Another },
];

const FormWizardItemProtocol: React.FC<IFormWizardItemProtocolProps> = ({
  isFilecoin,
  setFieldValue,
}) => {
  const styles = useStyles();
  const setSelectedProtocol = useSelectedProtocolDispatch();
  const selectedProtocol = useSelectedProtocolStore();

  const handleChange = ({
    event,
    setFieldValue,
  }: IFormStepSelectCallbackArgs) => {
    const {
      target: { value, name },
    } = event;
    setSelectedProtocol(value);
    setFieldValue(name, value);
  };

  return (
    <FormControl sx={{ width: '488px' }}>
      <Typography
        fontSize={variables.fontSize}
        color={isFilecoin ? variables.black : variables.white}
        ml={'15px'}
        mb={'8px'}
        fontWeight={600}
      >
        Protocol
      </Typography>
      <GenericSelect
        isFilecoin={isFilecoin}
        handleChange={(event) =>
          handleChange({ event, setFieldValue })
        }
        value={selectedProtocol}
        name='protocol'
        placeholder={'Choose the Protocol'}
        bgColor={variables.white}
      >
        {names.map((el: IGenericValueImage) => (
          <MenuItem
            className={
              isFilecoin ? styles.menuItemStylesFilecoin : styles.menuItemStyles
            }
            value={el.value}
            key={el.value}
          >
            {el.img && (
              <span className={styles.iconStyles}>
                <img src={el.img} />
              </span>
            )}
            {el.value}
          </MenuItem>
        ))}
      </GenericSelect>
    </FormControl>
  );
};

export default FormWizardItemProtocol;
