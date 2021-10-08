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
      '&.Mui-selected': {
        backgroundColor: 'none',
        '&:hover': {
          backgroundColor: variables.primaryColor,
        },
      },
    },
    menuItemStylesFilecoin: {
      fontSize: '16px',
      fontWeight: 600,
      backgroundColor: variables.white,
      paddingLeft: '20px',
      color: variables.filcoinText,
      '&:hover': {
        backgroundColor: variables.white,
        color: variables.filcoinColor,
        fontWeight: 700,
      },
      '&.Mui-selected': {
        backgroundColor: 'none',
        '&:hover': {
          backgroundColor: variables.white,
        },
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
  };
});

export default useStyles;
