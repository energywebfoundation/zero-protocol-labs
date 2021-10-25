import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: 72,
    padding: '0 24px 32px 24px',
    [theme.breakpoints.down('md')]: {
      padding: '0 16px 32px 16px',
    },
  },
  stripWrapper: {
    position: 'absolute',
    width: '100%',
    left: 0,
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
