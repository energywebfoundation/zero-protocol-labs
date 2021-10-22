import { FC } from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { WireTransferInformation } from '../wire-transfer-information';
import { ReactComponent as AddNoteIcon } from '../../assets/svg/add-note.svg';
import { useWireTransferInstructionsEffects } from './wire-transfer-instructions.effects';
import { useStyles } from './wire-transfer-instructions.style';

export const WireTransferInstructions: FC = () => {
  const classes = useStyles();
  const { uploadButtonText, getRootProps, getInputProps, acceptedFileItems } =
    useWireTransferInstructionsEffects();

  return (
    <>
      <Box>
        <Typography className={classes.title}>
          Wire Transfer instructions
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ pr: { xs: 0, md: 1, lg: 7.2 } }}>
          <WireTransferInformation
            accountHolder="Monsoon Carbon LTD"
            iban="FR12500A08170648489890"
            swift="FRECR/23"
            amount="15"
            currency="USD"
            transferConcept="Zero Offer #ABC4567DEF"
            boxProps={{ sx: { mt: { xs: 2 }, mb: { xs: 2 } } }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 0, md: 1, lg: 3 } }}>
          <Box
            className={classes.upload}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            sx={{ mt: { xs: 0, md: 2 } }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Typography className={classes.dropTitle}>
                Drag and drop payment receipt
              </Typography>
            </Box>
            <Typography
              color="primary"
              fontSize={14}
              lineHeight="16px"
              textAlign="center"
              fontWeight={600}
            >
              or
            </Typography>
            <Button
              variant="contained"
              className={classes.uploadButton}
              classes={{ endIcon: classes.endIcon }}
              endIcon={<AddNoteIcon />}
            >
              {uploadButtonText}
            </Button>
            {acceptedFileItems}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
