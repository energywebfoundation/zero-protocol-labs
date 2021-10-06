import { makeStyles } from '@material-ui/styles';
import { variables } from 'libs/ui/theme/src';

export const useStyles = makeStyles(() => {
  return {
    input: {
      backgroundColor: variables.filcoinColorLight,
      color: variables.filcoinColor,
    },
  };
});

export default useStyles;
