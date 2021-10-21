import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles<
  Theme,
  {
    bgColor: string;
    color: string;
    hoverBgColor: string;
    hoverColor: string;
    iconColor: string;
    hoverIconColor: string;
  }
>({
  btn: {
    width: '100%',
    backgroundColor: ({ bgColor }) => bgColor,
    color: ({ color }) => color,
    borderRadius: '5px',
    height: '48px',
    fontSize: '16px',
    fontWeight: 700,
    '& .MuiButton-endIcon': {
      color: ({ iconColor }) => iconColor,
    },
    '&:hover': {
      backgroundColor: ({ hoverBgColor }) => hoverBgColor,
      color: ({ hoverColor }) => hoverColor,
      '& .MuiButton-endIcon': {
        color: ({ hoverIconColor }) => hoverIconColor,
      },
    },
  },
});
