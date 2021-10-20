import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
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
}));
