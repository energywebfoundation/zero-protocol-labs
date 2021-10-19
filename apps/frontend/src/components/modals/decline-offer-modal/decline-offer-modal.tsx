import { FC, useState } from 'react';
import clsx from 'clsx';
import { useFormik } from 'formik';
import {
  Grid,
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormLabel,
  TextField,
} from '@material-ui/core';
import { ReactComponent as CloseIcon } from 'apps/frontend/src/assets/svg/close.svg';
import { useStyles } from './decline-offer-modal.style';

interface DeclineOfferModalProps {
  open: boolean;
  handleClose: () => void;
}

export const DeclineOfferModal: FC<DeclineOfferModalProps> = ({
  open,
  handleClose,
}) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      comment: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={{ paper: classes.paper }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle className={classes.title}>Decline offer</DialogTitle>
      <DialogContent className={classes.content}>
        <DialogContentText className={classes.contentText}>
          Could You tell Us, why You decline the offer?
        </DialogContentText>
        <form className={classes.form}>
          <FormLabel className={classes.label}>Comment</FormLabel>
          <TextField
            fullWidth
            multiline
            rows={6}
            id="comment"
            name="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            className={classes.textField}
          />
        </form>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button
          onClick={handleClose}
          startIcon={<CloseIcon />}
          className={classes.button}
          classes={{ startIcon: classes.icon }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleClose}
          autoFocus
          endIcon={<CloseIcon />}
          className={clsx(classes.button, classes.buttonDark)}
          classes={{ endIcon: classes.icon }}
        >
          Confirm decline
        </Button>
      </DialogActions>
    </Dialog>
  );
};
