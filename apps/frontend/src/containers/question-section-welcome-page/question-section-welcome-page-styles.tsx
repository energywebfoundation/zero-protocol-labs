import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  wrapper: {
    '& > div:not(:last-child)': {
      marginRight: '20px',
    },
  },
});

export default useStyles;
