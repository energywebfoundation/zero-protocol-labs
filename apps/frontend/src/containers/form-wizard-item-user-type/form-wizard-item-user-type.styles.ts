import { makeStyles } from '@material-ui/styles';
import { variables } from '@energyweb/zero-protocol-labs-theme';

export const useStyles = makeStyles(() => {
  return {
    menuItemStyles: {
      fontSize: '16px',
      fontWeight: 600,
      backgroundColor: variables.white,
      paddingLeft: '20px',
      '&:hover': {
        backgroundColor: variables.primaryColor,
        color: variables.white,
      },
    },
    menuItemStylesFilecoin: {
      fontSize: '16px',
      fontWeight: 600,
      backgroundColor: variables.white,
      paddingLeft: '20px',
      color: variables.filcoinText,
      '&:hover': {
        backgroundColor: variables.filcoinColorLight,
        color: variables.filcoinColor,
        fontWeight: 700,
      },
    },
    buttonAddStyle: {
      backgroundColor: variables.white,
      marginTop: '8px',
      minWidth: '488px',
      fontSize: '16px',
      minHeight: '48px',
      fontWeight: 700,
      color: variables.filcoinColor,
      borderRadius: '5px',
      boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
      '&:hover': {
        backgroundColor: variables.white,
      },
    },
    buttonGreenAddStyle: {
      backgroundColor: variables.white,
      marginTop: '8px',
      minWidth: '488px',
      fontSize: '16px',
      minHeight: '48px',
      fontWeight: 700,
      color: variables.secondaryColor,
      borderRadius: '5px',
      boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
      '&:hover': {
        backgroundColor: variables.white,
      },
    },
  };
});

export default useStyles;
