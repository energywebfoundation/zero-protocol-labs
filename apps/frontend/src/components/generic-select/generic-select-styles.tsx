import { makeStyles } from '@material-ui/styles';
import { variables } from 'libs/ui/theme/src';

const useStyles = makeStyles({
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
  outlineStyles: {
    '&:focus-visible': {
      outline: 'none',
    },
  },
  addAnotherStyles: {
    height: '43px',
  },
});

export default useStyles;
