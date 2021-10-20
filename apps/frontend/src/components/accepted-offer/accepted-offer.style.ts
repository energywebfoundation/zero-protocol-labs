import { makeStyles } from '@material-ui/styles';
import { alpha } from '@material-ui/core';

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
  formWrapper: {
    paddingRight: 80,
    [theme.breakpoints.down('lg')]: {
      paddingRight: 0,
    },
  },
  formDescriptionWrapper: {
    height: '100%',
    padding: '8px 128px 0px 24px',
    [theme.breakpoints.down('lg')]: {
      padding: '8px 0px 0px 24px',
    },
  },
  formDescriptionItem: {
    padding: '18px 0 0 24px',
    minHeight: 72,
    marginTop: 12,
    borderLeft: `1px solid ${alpha(theme.palette.primary.main, 0.6)}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      padding: '18px 0 0 14px',
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
}));
