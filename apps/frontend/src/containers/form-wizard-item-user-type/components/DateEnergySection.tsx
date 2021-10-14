import { Box, Grid, TextField, Typography } from '@material-ui/core';
import BasicDatePicker from 'apps/frontend/src/components/date-picker/date-picker';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import { useEffect, useMemo } from 'react';
import { useAddressMappingSetState } from 'apps/frontend/src/context';
import { WizardFormValues } from 'apps/frontend/src/pages/wizard-page/WizardPage.effects';

export interface IDateSectionProps {
  isFilecoin?: boolean;
  id: number;
  values: WizardFormValues;
  amountOfFields: number;
  handleFormikChange: (value: any) => void;
  setFieldValue: (name: string, value: any) => void;
}

export const DateEnergySection: React.FC<IDateSectionProps> = ({
  isFilecoin,
  values,
  setFieldValue,
  amountOfFields,
  handleFormikChange,
  id,
}) => {
  const fieldsRenderArr = useMemo(
    () => Array.from(Array(amountOfFields+1).keys()),
    [amountOfFields]
  );
  const setAddressMapping = useAddressMappingSetState();

  useEffect(() => {
    setAddressMapping && setAddressMapping((prev) => prev.set(id, fieldsRenderArr));
  }, [id, fieldsRenderArr, setAddressMapping])

  return (
    <>
    {fieldsRenderArr.length > 0 ?
      (<Grid
      style={{
        backgroundColor: isFilecoin
          ? variables.filcoinColor
          : variables.inputBackgroundColor,
        borderRadius: '5px',
        padding: '15px 10px',
        border: ` ${!isFilecoin && `2px solid ${variables.secondaryColor}`}`,
      }}
    >
      {fieldsRenderArr.map(nestedId => {
        return (
        <Grid key={nestedId} item display={'flex'} justifyContent={'space-between'} mb={'10px'}>
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
            value={values[`startDate_${id}_${nestedId}`] || ''}
            setValue={value => setFieldValue(`startDate_${id}_${nestedId}`, value)}
            color="darkBlue"
            isFilecoin={isFilecoin}
            calendar="white"
          />
        </Box>
        <Box width={'160px'} mx={'10px'}>
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
            value={values[`endDate_${id}_${nestedId}`] || ''}
            setValue={value => setFieldValue(`endDate_${id}_${nestedId}`, value)}
            color="darkBlue"
            isFilecoin={isFilecoin}
            calendar="white"
          />
        </Box>
        <Box>
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
              name={`energy_${id}_${nestedId}`}
              onChange={handleFormikChange}
              value={values[`energy_${id}_${nestedId}`] || ''}
              inputProps={{
                style: {
                  height: '100%',
                  backgroundColor: isFilecoin
                    ? variables.filcoinColor
                    : variables.white,
                  borderRadius: '5px',
                  border: `1px solid ${variables.white}`,
                  color: isFilecoin ? variables.white : variables.primaryColor,
                  fontWeight: 700,
                  padding: '13.5px'
                },
              }}
            />
          </Box>
        </Box>
      </Grid>)}
      )}
    </Grid>) : null}
    </>
  );
};
