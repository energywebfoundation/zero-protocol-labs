import { makeStyles } from '@material-ui/styles';
import { variables } from 'libs/ui/theme/src';

export const useStyles = makeStyles({
  gridStyle: {
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  btn: {
    '& .MuiButton-root': {
      backgroundColor: variables.white,
      color: variables.primaryColor,
      fontSize: '16px',
      fontWeight: 700,
      boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2);',
      borderRadius: '5px',
    },
  },
  step: {
    '& .MuiStepLabel-iconContainer': {
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      border: '2px solid #703CBB',
      '& .Mui-active': {
        color: 'transparent',
      },
      '& .MuiSvgIcon-root': {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
      },
    },
    '& .MuiStepIcon-text': {
      fontSize: '15px',
      fontWeight: 500,
      fill: '#703CBB',
    },
    '& .MuiStepLabel-labelContainer': {
      '& .Mui-active': {
        color: '#703CBB',
      },
    },
  },
  stepBitcoin: {
    '& .MuiStepLabel-iconContainer': {
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      border: '2px solid #00D08A',
      '& .Mui-active': {
        color: 'transparent',
      },
      '& .MuiSvgIcon-root': {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
      },
    },
    '& .MuiStepIcon-text': {
      fontSize: '15px',
      fontWeight: 500,
      fill: '#00D08A',
    },
    '& .MuiStepLabel-labelContainer': {
      '& .Mui-active': {
        color: '#00D08A',
      },
    },
  },
  stepInActive: {
    '& .MuiStepLabel-iconContainer': {
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      border: '2px solid #0090FF',

      '& .MuiSvgIcon-root': {
        '& circle': {
          display: 'none',
        },
        width: '40px',
        height: '40px',
        borderRadius: '50%',
      },
    },
    '& .MuiStepLabel-labelContainer': {
      color: '#0090FF',
    },
    '& .MuiStepIcon-text': {
      fontSize: '15px',
      fontWeight: 500,
      fill: variables.filcoinColor,
    },
    '& .Mui-active': {
      color: variables.filcoinColor,
    },
  },
  stepBitcoinInActive: {
    '& .MuiStepLabel-iconContainer': {
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      border: '2px solid #9B95BD',

      '& .MuiSvgIcon-root': {
        '& circle': {
          display: 'none',
        },
        width: '40px',
        height: '40px',
        borderRadius: '50%',
      },
    },
    '& .MuiStepLabel-labelContainer': {
      color: '#9B95BD',
    },
    '& .MuiStepIcon-text': {
      fontSize: '15px',
      fontWeight: 500,
      fill: '#9B95BD',
    },
    '& .Mui-active': {
      color: '#9B95BD',
    },
  },
});
