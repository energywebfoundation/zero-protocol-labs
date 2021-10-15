import {
  FormControl,
  Typography,
  MenuItem,
  SelectChangeEvent,
} from '@material-ui/core';
import GenericSelect from 'apps/frontend/src/components/generic-select/generic-select';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import * as React from 'react';
import BitcoinIcon from '../../assets/svg/bitcoinIcon.svg';
import FilecoininIcon from '../../assets/svg/filecoinIcon.svg';
import useStyles from './form-wizard-item-protocol-styles';
import { IGenericValueImage } from '../form-wizard-item-user-type/form-wizard-item-user-type';
import {
  useSelectedProtocolDispatch,
  useSelectedProtocolStore,
} from 'apps/frontend/src/context';
import { ProtocolsEnum } from 'apps/frontend/src/utils';

const names: IGenericValueImage[] = [
  { value: ProtocolsEnum.Filecoin, img: FilecoininIcon },
  { value: ProtocolsEnum.Bitcoin, img: BitcoinIcon },
  { value: ProtocolsEnum.Another },
];

export const FormWizardItemProtocol: React.FC = () => {
  const styles = useStyles();
  const setSelectedProtocol = useSelectedProtocolDispatch();
  const selectedProtocol = useSelectedProtocolStore();
  const isFilecoin = selectedProtocol === ProtocolsEnum.Filecoin;

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedProtocol(event.target.value);
  };

  return (
    <FormControl className={styles.formControl}>
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
        handleChange={(event) => handleChange(event)}
        value={selectedProtocol}
        name="protocol"
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
