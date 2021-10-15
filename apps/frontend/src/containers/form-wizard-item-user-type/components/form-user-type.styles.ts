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
    input: {
      backgroundColor: variables.filcoinColorLight,
      color: variables.filcoinColor,
      fontSize: '18px',
      fontWeight: 700,
      '& input': {
        padding: '12px 13px',
      },
    },
    inputBitcoun: {
      backgroundColor: variables.inputBackgroundColor,
      color: variables.primaryColor,
      fontSize: '18px',
      fontWeight: 700,
      '& input': {
        padding: '12px 13px',
      },
    },
    form: {
      backgroundColor: variables.white,
      boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
      borderRadius: '5px',
      marginTop: '8px',
      // padding: '16px',
    },
    buttonStyle: {
      minWidth: '48px',
      minHeight: '48px',
      backgroundColor: variables.filcoinColor,
      '&:hover': {
        backgroundColor: variables.filcoinColor,
      },
    },
    buttonGreenStyle: {
      minWidth: '48px',
      minHeight: '48px',
      backgroundColor: variables.secondaryColor,
      '&:hover': {
        backgroundColor: variables.secondaryColor,
      },
    },
    icon: {
      transform: 'rotate(180deg)',
    },
  };
});

export default useStyles;
