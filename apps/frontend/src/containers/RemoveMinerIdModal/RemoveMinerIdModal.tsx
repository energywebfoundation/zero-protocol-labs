import { ProtocolTypeEnumType } from '@energyweb/zero-protocol-labs-api-client';
import { Box, Button, Modal, Paper, Typography } from '@material-ui/core';
import { FC } from 'react';
import { useSelectedProtocolStore } from '../../context';
import { useStyles } from './RemoveMinerIdModal.styles';

interface RemoveMinerIdModalProps {
  open: boolean;
  id: number | undefined;
  handleClose: () => void;
  handleRemove: (id: number | undefined) => void;
}

export const RemoveMinerIdModal: FC<RemoveMinerIdModalProps> = ({
  open, id, handleClose, handleRemove
}) => {
  const selectedProtocol = useSelectedProtocolStore();
  const isFilecoin = selectedProtocol === ProtocolTypeEnumType.FILECOIN;
  const classes = useStyles({ isFilecoin });
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper className={classes.wrapper}>
        <Typography color="primary" variant="h5" component="span" textAlign='center'>
          Are you sure you want to remove this Miner ID / Address ?
        </Typography>
        <Box mt={'20px'}>
          <Button
            sx={{ mr: '15px' }}
            variant="contained"
            onClick={handleClose}
            classes={{ contained: classes.button }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => handleRemove(id)}
            classes={{ contained: classes.button }}
          >
            Remove
          </Button>
        </Box>
      </Paper>
    </Modal>
  )
}
