import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    lineHeight: '31px',
    fontWeight: 700,
    color: theme.palette.primary.main,
    marginTop: 38,
    [theme.breakpoints.down('md')]: {
      marginTop: 28,
    },
  },
  dropTitle: {
    fontSize: 24,
    lineHeight: '31px',
    fontWeight: 700,
    color: theme.palette.primary.light,
    marginBottom: 2,
  },
  fileName: {
    fontWeight: 700,
    color: theme.palette.secondary.main,
    position: 'absolute',
    bottom: 36,
  },
  upload: {
    minHeight: 272,
    backgroundColor: theme.palette.background.default,
    borderRadius: 10,
    padding: '16px 24px 16px',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      padding: 24,
      minHeight: 'initial',
    },
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
  endIcon: {
    marginLeft: 16,
    '& path': {
      transition: 'fill 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
  },
}));
