import {
  FormControl,
  Typography,
  SelectChangeEvent,
  MenuItem,
} from '@material-ui/core';
import GenericSelect from 'apps/frontend/src/components/generic-select/generic-select';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import { useDispatch } from 'react-redux';
import { changeProtocolStatus } from '../../../../store/app.slice';
import * as React from 'react';
import BitcoinIcon from '../../../../assets/svg/bitcoinIcon.svg';
import FilecoininIcon from '../../../../assets/svg/filecoinIcon.svg';
import useStyles from './form-wizard-item-protocol-styles';
import { namesType } from '../form-wizard-item-user-type/form-wizard-item-user-type';

export interface IFormWizardItemProtocolProps {
  isFilecoin?: boolean;
}

const names: namesType[] = [
  { value: 'Filecoin', img: FilecoininIcon },
  { value: 'Bitcoin', img: BitcoinIcon },
  { value: 'Add Another' },
];

const FormWizardItemProtocol: React.FC<IFormWizardItemProtocolProps> = ({
  isFilecoin,
}) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [protocolName, setProtocolName] = React.useState<string>();

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    dispatch(changeProtocolStatus(value === 'Filecoin'));
    setProtocolName(value);
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
        handleChange={handleChange}
        value={protocolName}
        placeholder={'Choose the Protocol'}
        bgColor={variables.white}
      >
        {names.map((el: namesType) => (
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
