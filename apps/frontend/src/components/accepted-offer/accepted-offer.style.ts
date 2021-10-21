import { makeStyles } from '@material-ui/styles';
import { alpha } from '@material-ui/core';
import { variables } from '@energyweb/zero-protocol-labs-theme';

export const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: '24px 24px 20px 24px',
    borderRadius: 10,
    boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
    marginTop: 16,
    [theme.breakpoints.down('md')]: {
      padding: '24px 24px 29px 24px',
    },
  },
  paper2: {
    backgroundColor: theme.palette.background.paper,
    padding: '40px 30px 48px 48px',
    borderRadius: 10,
    boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
    marginTop: 8,
    [theme.breakpoints.down('lg')]: {
      padding: '48px 16px',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 16,
      padding: 16,
    },
  },
  title: {
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 700,
    color: theme.palette.primary.light,
    marginBottom: 24,
  },
  list: {
    margin: 0,
    paddingLeft: 30,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 28,
    },
    '& a': {
      color: theme.palette.primary.light,
      textDecoration: 'none',
    },
    '& li': {
      fontSize: 18,
      lineHeight: '23px',
      fontWeight: 600,
      color: theme.palette.primary.main,
    },
  },
  subTitle: {
    fontSize: 18,
    lineHeight: '23px',
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
  formDescriptionWrapper: {
    height: '100%',
    padding: '8px 128px 0px 24px',
    [theme.breakpoints.down('lg')]: {
      padding: '8px 0px 0px 24px',
    },
  },
  formDescriptionItem: {
    padding: '18px 128px 0 24px',
    minHeight: 72,
    marginTop: 12,
    borderLeft: `1px solid ${alpha(theme.palette.primary.main, 0.6)}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      padding: '10px 0 0 14px',
      marginTop: 22,
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 0 20px',
      margin: 0,
      borderLeft: 'none',
    },
  },
  descriptionTitle: {
    fontSize: 12,
    lineHeight: '16px',
    color: theme.palette.primary.main,
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: '16px',
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  label: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 600,
    marginLeft: 14,
    color: theme.palette.primary.main,
  },
  field: {
    marginTop: 8,
    '& input': {
      fontSize: 18,
      lineHeight: '23px',
      fontWeight: 600,
      color: theme.palette.primary.main,
    },
  },
  fieldWrapper: {
    padding: '0 58px 12px 0',
    [theme.breakpoints.down('lg')]: {
      padding: '0 13px 12px 0',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 0 16px 0',
    },
  },
  switchWrapper: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      marginTop: -11,
      flexDirection: 'column',
    },
  },
  switch: {
    '& span': {
      lineHeight: '16px',
      fontWeight: 500,
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: variables.purpleExtraLight,
    },
    '& .MuiSwitch-switchBase + .MuiSwitch-track': {
      backgroundColor: variables.purpleExtraLight,
    },
  },
  wireTransfer: {
    minHeight: 272,
    backgroundColor: theme.palette.background.default,
    borderRadius: 10,
    padding: '16px 24px 16px',
    [theme.breakpoints.down('md')]: {
      padding: 24,
      minHeight: 'initial',
    },
  },
  wireTransferTitle: {
    fontSize: 24,
    lineHeight: '31px',
    fontWeight: 700,
    color: theme.palette.primary.main,
    marginTop: 38,
    [theme.breakpoints.down('md')]: {
      marginTop: 28,
    },
  },
  wireTransferItem: {
    padding: '8px 0',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '4px 0',
    },
  },
  wireTransferLabel: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  wireTransferValue: {
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 600,
    color: theme.palette.primary.main,
    '& span': {
      lineHeight: '32px',
    },
  },
  dropTitle: {
    fontSize: 24,
    lineHeight: '31px',
    fontWeight: 700,
    color: theme.palette.primary.light,
    marginBottom: 2,
  },
  uploadButton: {
    padding: '14px 22px',
    fontSize: 16,
    lineHeight: '21px',
    fontWeight: 700,
    color: theme.palette.common.white,
    marginTop: 13,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.background.paper,
      boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
      '& svg path': {
        fill: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
    },
  },
  buttonsGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 24,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      marginTop: 16,
    },
  },
  button: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.dark,
    boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
    borderRadius: 5,
    fontSize: 16,
    lineHeight: '21px',
    fontWeight: 700,
    padding: '13px 17px',
    marginLeft: 16,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.background.paper,
      boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
      '& svg path': {
        fill: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 0 8px',
    },
  },
  buttonDark: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.background.paper,
      boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
    },
  },
  endIcon: {
    marginLeft: 16,
    '& path': {
      transition: 'fill 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
  },
}));
