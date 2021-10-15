import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.dark,
    padding: '16px 8px 8px',
    borderRadius: 10,
    marginTop: 8,
  },
  paperInner: {
    backgroundColor: theme.palette.background.default,
    padding: '16px 24px',
    borderRadius: 10,
  },
  grid: {
    backgroundColor: theme.palette.background.default,
    padding: '8px 0',
  },
  title: {
    fontSize: 20,
    lineHeight: '24px',
    color: theme.palette.common.white,
    fontWeight: 700,
    marginBottom: 16,
    marginLeft: 16,
  },
  item: {
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
  value: {
    fontSize: 18,
    lineHeight: '23px',
    fontWeight: 700,
    color: theme.palette.primary.light,
    borderRadius: 5,
  },
  valueWrapper: {
    marginLeft: 20,
    backgroundColor: theme.palette.background.paper,
    padding: '12px 20px',
    display: 'flex',
    '& .MuiSvgIcon-root': {
      marginLeft: 7,
      '& path': {
        fill: theme.palette.primary.light,
      },
    },
  },
  arrow: {
    fontSize: 13,
    '& path': {
      fill: theme.palette.secondary.main,
    },
  },
  button: {
    width: 40,
    height: 40,
    margin: '0 8px 8px 0',
    transform: 'rotate(-180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expanded: {
    transform: 'rotate(0deg)',
  },
}));
