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
  },
});

export default useStyles;
