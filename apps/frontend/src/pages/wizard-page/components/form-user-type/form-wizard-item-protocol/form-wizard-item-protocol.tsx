import {
  FormControl,
  Typography,
  SelectChangeEvent,
  MenuItem,
} from '@material-ui/core';
import GenericSelect from 'apps/frontend/src/components/generic-select/generic-select';
import { variables } from 'libs/ui/theme/src';
import { useDispatch } from 'react-redux';
import { changeProtocolStatus } from '../../../../../store/app.slice';
import * as React from 'react';
import BitcoinIcon from '../../../../../assets/svg/bitcoinIcon.svg';
import FilecoininIcon from '../../../../../assets/svg/filecoinIcon.svg';
import useStyles from './form-wizard-item-protocol-styles';

export interface FormWizardItemProtocolProps {
  isFilecoin?: boolean;
}

interface namesType {
  value: string;
  img?: string;
}

const names: namesType[] = [
  { value: 'Filecoin', img: FilecoininIcon },
  { value: 'Bitcoin', img: BitcoinIcon },
  { value: 'Add Another' },
];

const FormWizardItemProtocol: React.FC<FormWizardItemProtocolProps> = ({
  isFilecoin,
}) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [protocolName, setProtocolName] = React.useState<string>();

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    dispatch(changeProtocolStatus(event.target.value === 'Filecoin'));
    setProtocolName(value);
  };

  return (
    <FormControl sx={{ width: '496px' }}>
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
        {names.map((el: namesType, index) => (
          <MenuItem
            className={
              isFilecoin ? styles.menuItemStylesFilecoin : styles.menuItemStyles
            }
            value={el.value}
            key={index}
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
