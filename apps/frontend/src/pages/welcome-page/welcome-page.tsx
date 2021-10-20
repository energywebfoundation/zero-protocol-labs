import { variables } from '@energyweb/zero-protocol-labs-theme';
import {
  Grid,
  Typography,
  Box,
  FormControl,
  SelectChangeEvent,
} from '@material-ui/core';
import { useStyles } from './welcome-page-styles';
import GenericSelect from '../../components/generic-select/generic-select';
import { useState } from 'react';

export const WelcomePage = () => {
  const styles = useStyles();
  const [value, setValue] = useState('');

  let option = [
    { value: 'test1', label: 'test1' },
    { value: 'test2', label: 'test2' },
  ];

  const handleElemChange = (event: SelectChangeEvent) => {
    const {
      target: { value, name },
    } = event;
    setValue(value);
  };

  return (
    <Grid className={styles.wrapper}>
      <Grid item className={styles.welcomeBlock}>
        <Typography
          color={variables.secondaryColor}
          fontSize={'40px'}
          fontWeight={700}
          textAlign={'center'}
          lineHeight={'51px'}
          mb="5px"
          pt="105px"
        >
          Welcome to Zero
        </Typography>
        <Typography
          color={variables.white}
          fontSize={'24px'}
          fontWeight={600}
          lineHeight={'30px'}
          textAlign={'center'}
          mb="48px"
        >
          the global search engine for buying Renewable Energy
        </Typography>
        <Box>
          <FormControl className={styles.form}>
            <Box mr="16px" width="100%">
              <Typography
                fontSize={variables.fontSize}
                ml={'15px'}
                mb={'8px'}
                fontWeight={600}
                color={variables.purpleText}
              >
                Regions
              </Typography>
              <GenericSelect
                handleChange={(event) => handleElemChange(event)}
                name="Region"
                value={value}
                placeholder={''}
                bgColor={variables.inputBackgroundColor}
                options={option}
              />
            </Box>
            <Box width="100%">
              <Typography
                fontSize={variables.fontSize}
                ml={'15px'}
                mb={'8px'}
                fontWeight={600}
                color={variables.purpleText}
              >
                Device type
              </Typography>
              <GenericSelect
                handleChange={(event) => handleElemChange(event)}
                name="Region"
                value={value}
                placeholder={''}
                bgColor={variables.inputBackgroundColor}
                options={option}
              />
            </Box>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WelcomePage;
