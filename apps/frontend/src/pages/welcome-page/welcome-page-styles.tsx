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
  form: {
    backgroundColor: variables.white,
    padding: '32px 31px 32px 32px',
    height: '300px',
    width: '100%',
    display: 'flex',
    flexDirection: 'unset',
  },
});
