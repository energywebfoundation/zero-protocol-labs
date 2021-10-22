import { makeStyles } from '@material-ui/styles';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import ImgWelcome from '../../assets/svg/welcome-bg.svg';

export const useStyles = makeStyles({
  wrapper: {
    backgroundColor: variables.primaryColor,
  },
  welcomeBlock: {
    padding: '0 41px 0 40px',
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
      '& .MuiSelect-select': {
        borderRadius: '5px',
        padding: '12px 0 12px 14px',
      },
    },
    '& .MuiSvgIcon-root': {
      marginRight: '20px',
    },
  },
  menuItem: {
    fontSize: '16px',
    fontWeight: 600,
    backgroundColor: variables.white,
    paddingLeft: '20px',
    '&:hover': {
      backgroundColor: variables.primaryColor,
      fontWeight: 700,
      color: variables.white,
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
  tabsSection: {
    padding: '120px 0 0 40px',
  },
  questionSection: {
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%2300D08AFF' stroke-width='2' stroke-dasharray='10' stroke-dashoffset='23' stroke-linecap='square'/%3e%3c/svg%3e");border-radius: 10px`,
  },
  advisorsSection: {
    padding: '95px 41px 120px 40px',
  },
});
