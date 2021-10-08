import { Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import BasicDatePicker from 'apps/frontend/src/components/date-picker/date-picker';
import { variables } from 'libs/ui/theme/src';

export interface DateSectionProps {
  isFilecoin?: boolean;
}

const DateSection: React.FC<DateSectionProps> = ({ isFilecoin }) => {
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
