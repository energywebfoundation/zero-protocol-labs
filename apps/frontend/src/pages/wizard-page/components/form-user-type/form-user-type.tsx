import { Button, FormControl, TextField, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import Info from 'apps/frontend/src/components/info/info';
import { variables } from 'libs/ui/theme/src';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import useStyles from './form-user-type-style';

export const FormUserType = () => {
  const isFilecoin = useSelector((state: RootState) => state.app.isFilecoin);
  const styles = useStyles();

  return (
    <FormControl sx={{ padding: '16px' }}>
      <Info
        isFilecoin={isFilecoin}
        color={variables.black}
        fontSize={variables.fontSize}
        fontWeight={600}
        hideTimeout={1000}
        popoverContentElement={<div>Miner IDs / Address fdfsdsd </div>}
      >
        Miner IDs / Address fdfsdsd
      </Info>
      <Box width={456} maxWidth={'100%'} mt={'13px'} mb={'19px'}>
        <TextField
          InputProps={{
            className: styles.input,
          }}
          fullWidth
          id="fullWidth"
        />
      </Box>
      <Box>
        <Typography
          color={variables.black}
          fontSize={variables.fontSize}
          fontWeight={600}
        >
          Country
        </Typography>
        Select
      </Box>
      <Box>
        <Box></Box>
        <Box>
          <Button>click</Button>
        </Box>
        <Box></Box>
      </Box>
    </FormControl>
  );
};

export default FormUserType;
