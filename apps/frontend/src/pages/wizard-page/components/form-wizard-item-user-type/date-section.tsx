import { Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import BasicDatePicker from 'apps/frontend/src/components/date-picker/date-picker';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import { IFormStepItem } from 'apps/frontend/src/components/formik-stepper/FormikCurrentStep';

export interface IDateSectionProps extends IFormStepItem {
  isFilecoin?: boolean;
  id: number;
}

const DateSection: React.FC<IDateSectionProps> = ({
  isFilecoin,
  setFieldValue,
  handleChange,
  id,
}) => {
  return (
    <Grid
      style={{
        backgroundColor: isFilecoin
          ? variables.filcoinColor
          : variables.inputBackgroundColor,
        borderRadius: '5px',
        padding: '15px 10px',
        border: ` ${!isFilecoin && `2px solid ${variables.secondaryColor}`}`,
      }}
    >
      <Grid item display={'flex'} justifyContent={'space-between'}>
        <Box width={'160px'}>
          <Typography
            color={isFilecoin ? variables.white : variables.primaryColor}
            fontSize={variables.fontSize}
            fontWeight={600}
            mb={'8px'}
            ml={'14px'}
          >
            Generation start date
          </Typography>
          <BasicDatePicker
            name={`start_${id}_${1}`}
            color="darkBlue"
            isFilecoin={isFilecoin}
            setFieldValue={setFieldValue}
            calendar="white"
          />
        </Box>
        <Box width={'160px'}>
          <Typography
            color={isFilecoin ? variables.white : variables.primaryColor}
            fontSize={variables.fontSize}
            fontWeight={600}
            mb={'8px'}
            ml={'14px'}
          >
            Generation end date
          </Typography>
          <BasicDatePicker
            name={`end_${id}_${1}`}
            setFieldValue={setFieldValue}
            color="darkBlue"
            isFilecoin={isFilecoin}
            calendar="white"
          />
        </Box>
        <Box width={'100px'}>
          <Typography
            color={isFilecoin ? variables.white : variables.primaryColor}
            fontSize={variables.fontSize}
            fontWeight={600}
            mb={'8px'}
            ml={'14px'}
          >
            Mwh
          </Typography>
          <Box height={'48px'} width={'100px'}>
            <TextField
              name={`energy_${id}_${1}`}
              onChange={handleChange}
              inputProps={{
                style: {
                  height: '100%',
                  backgroundColor: isFilecoin
                    ? variables.filcoinColor
                    : variables.white,
                  borderRadius: '5px',
                  border: `1px solid ${variables.white}`,
                  color: isFilecoin ? variables.white : variables.primaryColor,
                  fontSize: '18px',
                  fontWeight: 700,
                  padding: '14px',
                },
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item display={'flex'} justifyContent={'space-between'} mt={'10px'}>
        <Box width={'160px'}>
          <Typography
            color={isFilecoin ? variables.white : variables.primaryColor}
            fontSize={variables.fontSize}
            fontWeight={600}
            mb={'8px'}
            ml={'14px'}
          >
            Generation start date
          </Typography>
          <BasicDatePicker
            setFieldValue={setFieldValue}
            name={`start_${id}_${2}`}
            color="darkBlue"
            isFilecoin={isFilecoin}
            calendar="white"
          />
        </Box>
        <Box width={'160px'}>
          <Typography
            color={isFilecoin ? variables.white : variables.primaryColor}
            fontSize={variables.fontSize}
            fontWeight={600}
            mb={'8px'}
            ml={'14px'}
          >
            Generation end date
          </Typography>
          <BasicDatePicker
            setFieldValue={setFieldValue}
            name={`end_${id}_${2}`}
            color="darkBlue"
            isFilecoin={isFilecoin}
            calendar="white"
          />
        </Box>
        <Box width={'100px'}>
          <Typography
            color={isFilecoin ? variables.white : variables.primaryColor}
            fontSize={variables.fontSize}
            fontWeight={600}
            mb={'8px'}
            ml={'14px'}
          >
            Mwh
          </Typography>
          <Box height={'48px'} width={'100px'}>
            <TextField
              name={`energy_${id}_${2}`}
              onChange={handleChange}
              inputProps={{
                style: {
                  height: '100%',
                  backgroundColor: isFilecoin
                    ? variables.filcoinColor
                    : variables.white,
                  borderRadius: '5px',
                  border: `1px solid ${variables.white}`,
                  color: isFilecoin ? variables.white : variables.primaryColor,
                  fontSize: '18px',
                  fontWeight: 700,
                  padding: '14px',
                },
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DateSection;
