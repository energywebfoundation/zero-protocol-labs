import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: 72,
    padding: '0 24px 32px 24px',
    [theme.breakpoints.down('md')]: {
      padding: '0 16px 32px 16px',
    },
  },
  sectionPaper: {
    backgroundColor: '#421d77',
    padding: '16px 23px 43px 23px',
    boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
    [theme.breakpoints.down('md')]: {
      padding: '16px 25px 43px 25px',
    },
  },
  helperText: {
    color: '#f6efff',
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 700,
    marginBottom: -8,
  },
  headingTextClassName: {
    textTransform: 'capitalize',
  },
  wrapperClassName: {
    padding: 0,
  },
  stripWrapper: {
    position: 'absolute',
    width: '100%',
    left: 0,
  },
  label: {
    fontSize: 12,
    lineHeight: '15px',
    color: '#f6efff',
    fontWeight: 700,
  },
  value: {
    fontSize: 20,
    lineHeight: '24px',
    color: '#fff',
    fontWeight: 700,
    '& span': {
      fontSize: 12,
      lineHeight: '15px',
      fontWeight: 500,
      marginLeft: 4,
      position: 'relative',
      top: -2,
    },
  },
  primary: {
    color: '#00d08a',
  },
  payment: {
    fontSize: 18,
  },
  infoItem: {
    marginBottom: 10,
    '& .MuiSvgIcon-root': {
      fill: '#fff',
      marginLeft: 3,
      top: 0,
    },
  },
  mainInfoWrapper: {
    paddingRight: 64,
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      height: '100%',
    },
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
    },
  },
  mainInfo: {
    [theme.breakpoints.down('lg')]: {
      paddingLeft: 67,
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      alignSelf: 'center',
      width: '100%',
      maxWidth: 350,
      margin: '21px 0 17px 0',
    },
  },
  secondaryInfo: {
    [theme.breakpoints.down('lg')]: {
      marginBottom: 17,
    },
  },
  secondaryInfoWrapper: {
    paddingLeft: 24,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      width: '100%',
      maxWidth: 350,
      margin: '0 auto',
    },
  },
  buttonsGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 16,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
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
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary.dark,
      boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 0 8px',
    },
  },
  buttonDark: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.paper,
      boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
    },
  },
  endIcon: {
    marginLeft: 16,
  },
}));
