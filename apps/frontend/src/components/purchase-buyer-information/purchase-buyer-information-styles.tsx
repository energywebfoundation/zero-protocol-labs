import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  flexColumn: {
    '@media (max-width: 1027px)': {
      displey: 'flex',
      flexDirection: 'column',
    },
  },
  margin: {
    '@media (max-width: 1082px)': {
      marginLeft: '10px',
    },
    '@media (max-width: 1024px)': {
      marginLeft: '0',
    },
  },
  fieldLab: {
    '@media (max-width: 1027px)': {
      marginBottom: '0',
    },
  },
  box: {
    '@media (max-width: 1027px)': {
      marginBottom: '12px',
    },
  },
}));
