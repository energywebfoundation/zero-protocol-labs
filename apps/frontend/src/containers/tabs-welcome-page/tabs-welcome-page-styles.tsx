import { makeStyles } from '@material-ui/styles';
import { variables } from '@energyweb/zero-protocol-labs-theme';

export const useStyles = makeStyles({
  tab: {
    marginRight: '32px',
    border: `1px solid ${variables.secondaryColor}`,
    boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
    borderRadius: '10px',
    padding: '32px 14px 0 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabs: {
    '& .MuiTabs-indicator ': {
      backgroundColor: 'transparent',
    },
  },
  title: {
    '@media (max-width: 630px)': {
      marginLeft: '0',
      marginBottom: '20px',
    },
  },
  btnGroup: {
    marginRight: '55px',
    '@media (max-width: 630px)': {
      marginRight: '0',
    },
  },
  btn: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
  wrapper: {
    '& .Mui-disabled': {
      backgroundColor: 'transparent',
    },
    marginBottom: '64px',
    '@media (max-width: 630px)': {
      flexDirection: 'column',
      marginBottom: '30px',
    },
  },
});

export default useStyles;
