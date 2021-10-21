import { makeStyles } from '@material-ui/styles';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import ImgWelcome from '../../assets/svg/welcome-bg.svg';

export const useStyles = makeStyles({
  wrapper: {
    backgroundColor: variables.primaryColor,
    padding: '0 41px 0 40px',
  },
  welcomeBlock: {
    height: '100vh',
    backgroundImage: `url("${ImgWelcome}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'round',
  },
  formBlock: {
    backgroundColor: variables.white,
    padding: '32px 31px 32px 32px',
    width: '100%',
    display: 'flex',
    flexDirection: 'unset',
    boxShadow: '0px 0px 10px rgba(112, 60, 187, 0.2)',
    borderRadius: '5px',
    '& .MuiOutlinedInput-root': {
      height: '48px',
      borderRadius: '5px',
      paddingRight: '35px',
      '& .MuiSelect-select': {
        borderRadius: '5px',
        padding: '12px 0 12px 14px',
      },
    },
    '& .MuiSvgIcon-root': {
      marginRight: '20px',
    },
  },
  dateBlock: {
    '& .MuiFormControl-root': {
      '& .MuiOutlinedInput-root': {
        borderRadius: '5px',
      },
      width: '100%',
    },
  },
  input: {
    '& input::placeholder': {
      fontSize: '18px',
      fontWeight: 600,
    },
  },
  amountSpan: {
    fontSize: '18px',
    fontWeight: 600,
  },
});
