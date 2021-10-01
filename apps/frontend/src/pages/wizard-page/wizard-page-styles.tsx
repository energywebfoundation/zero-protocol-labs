import { makeStyles } from '@material-ui/styles';
import GlobusImg from '../../assets/svg/globus.svg';
import { variables } from 'libs/ui/theme/src';

export const useStyles = makeStyles({
  gridStyle: {
    height: '100vh',
    backgroundImage: `url(${GlobusImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: variables.primaryColor,
  },
  linkStyles: {
    color: variables.secondaryColor,
  },
});
