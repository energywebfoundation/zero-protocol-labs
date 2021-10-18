import { makeStyles } from '@material-ui/styles';
import { variables } from '@energyweb/zero-protocol-labs-theme';

export const useStyles = makeStyles({
  wrapper: {
    borderRadius: '5px',
    '& .MuiTableRow-root': {
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px',
      // '& td:not(:last-child)': {
      //   marginRight: 80
      // }
    },
  },
  tbCell: {
    color: variables.primaryColor,
    fontWeight: 600,
    fontSize: '20px',
    border: 'none',
    display: 'inline-flex',
  },
  thCell: {
    display: 'flex',
    fontWeight: 500,
    fontSize: '14px',
  },
});

export default useStyles;
