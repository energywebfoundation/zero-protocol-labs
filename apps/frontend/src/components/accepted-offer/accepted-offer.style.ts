import { makeStyles } from '@material-ui/styles';

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
  formPaper: {
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
