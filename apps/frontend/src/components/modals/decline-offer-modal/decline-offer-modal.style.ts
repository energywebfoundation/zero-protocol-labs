import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    maxWidth: 528,
    padding: '24px 24px 32px 32px',
    borderRadius: 5,
    boxShadow: 'none',
  },
  title: {
    color: theme.palette.error.main,
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 700,
    textAlign: 'center',
    padding: '8px 24px 8px 32px',
  },
  contentText: {
    color: theme.palette.primary.main,
    fontSize: 16,
    lineHeight: '21px',
    fontWeight: 700,
    textAlign: 'center',
  },
  content: {
    padding: '0 0 8px 0',
  },
  form: {
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 600,
    color: theme.palette.primary.main,
    marginLeft: 16,
  },
  textField: {
    marginTop: 8,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
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
    margin: 0,
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary.dark,
      boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
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
  icon: {
    '& svg path': {
      fill: theme.palette.secondary.main,
    },
  },
  commentHeader: {},
}));
