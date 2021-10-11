import { makeStyles } from '@material-ui/styles';
import { variables } from '@energyweb/zero-protocol-labs-theme';

export const useStyles = makeStyles(() => {
  return {
    tableWrapper: {
      width: '100%',
      backgroundColor: variables.white,
      marginTop: '8px',
      boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
      borderRadius: '5px',
      padding: '14px 0',
      '& .MuiTableCell-root': {
        padding: '5px 10px',
      },
      '& .MuiTableBody-root tr': {
        backgroundColor: variables.white,
        '& .MuiTableCell-root': {
          color: variables.filcoinColor,
          fontSize: '16px',
          fontWeight: 700,
        },
      },
      '& .MuiTableHead-root ': {
        '& .MuiTableCell-root': {
          color: variables.black,
          fontSize: '12px',
          fontWeight: 400,
        },
      },
    },
    tableBitcoinWrapper: {
      width: '100%',
      backgroundColor: variables.white,
      marginTop: '8px',
      boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
      borderRadius: '5px',
      padding: '14px 0',
      '& .MuiTableCell-root': {
        padding: '5px 10px',
      },
      '& .MuiTableBody-root tr': {
        backgroundColor: variables.white,
        '& .MuiTableCell-root': {
          color: variables.primaryColor,
          fontSize: '16px',
          fontWeight: 700,
        },
      },
      '& .MuiTableHead-root ': {
        '& .MuiTableCell-root': {
          color: variables.primaryColor,
          fontSize: '12px',
          fontWeight: 700,
        },
      },
    },
  };
});

export default useStyles;
