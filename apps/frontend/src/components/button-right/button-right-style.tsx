import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => {
  return {
    btn: {
      width: '48px',
      height: '48px',
      backgroundColor: '#fff',
      boxShadow: ' 0px 4px 10px rgba(160, 154, 198, 0.2)',
      cursor: 'pointer',
    },
  };
});

export default useStyles;
