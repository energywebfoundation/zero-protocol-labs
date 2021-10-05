import { makeStyles } from '@material-ui/styles';
import { variables } from 'libs/ui/theme/src';

export const useStyles = makeStyles(() => {
  return {
    input: {
      backgroundColor: variables.filcoinColorLight,
      color: variables.filcoinColor,
      fontSize: '18px',
      fontWeight: 700,
      '& input': {
        padding: '12px 13px',
      },
    },
  };
});

export default useStyles;
