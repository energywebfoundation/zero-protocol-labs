import { makeStyles } from '@material-ui/styles';
import { variables } from '@energyweb/zero-protocol-labs-theme';

export const useStyles = makeStyles({
  placeholderStyles: {
    fontSize: '18px',
    fontWeight: 600,
    padding: '0',
    marginLeft: '10px',
    borderRadius: '50px',
  },
  placeholderFilecoinStyles: {
    fontSize: '18px',
    fontWeight: 600,
    padding: '0',
    marginLeft: '10px',
    borderRadius: '50px',
    color: variables.filcoinColor,
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
  selectFilcoinValueStyle: {
    fontWeight: 700,
    fontSize: '18px',
    color: variables.filcoinColor,
  },
  outlineStyles: {
    '&:focus-visible': {
      outline: 'none',
    },
  },
});

export default useStyles;
