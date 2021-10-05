import { makeStyles } from '@material-ui/styles';
import { variables } from 'libs/ui/theme/src';

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
      '&:hover': {
        backgroundColor: variables.filcoinColorLight,
        color: variables.filcoinColor,
      },
    },
    iconStyles: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '8px',
      width: '31px',
      height: '31px',
      borderRadius: '50%',
      backgroundColor: variables.white,
    },
    addAnotherStyles: {
      height: '43px',
    },
    placeholderStyles: {
      fontSize: '18px',
      fontWeight: 600,
      padding: '0',
      marginLeft: '10px',
      borderRadius: '50px',
    },
    selectStyles: {
      '& svg': {
        marginRight: '24px',
      },
    },
    selectValueStyle: {
      fontWeight: 700,
      fontSize: '18px',
    },
    selectFilcoinValueStyle: {
      fontWeight: 700,
      fontSize: '18px',
      color: variables.filcoinColor,
    },
    outlineStyles: {
      '&:focus-visible': {
        outline: 'none',
      },
    },
  };
});

export default useStyles;
