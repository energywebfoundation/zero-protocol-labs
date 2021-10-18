import { variables } from "@energyweb/zero-protocol-labs-theme";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles<Theme, { isFilecoin: boolean }>({
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    boxShadow: '24px',
    padding: 20,
    textAlign: 'center'
  },
  button: {
    color: variables.mainBackgroundColor,
    backgroundColor: ({ isFilecoin }) => isFilecoin ? variables.filcoinColor : undefined,
    '&:hover': {
      backgroundColor: ({ isFilecoin }) => isFilecoin ? variables.filcoinColorLight : variables.secondaryColor,
      color: ({ isFilecoin }) => isFilecoin ? variables.filcoinColor : undefined
    },
  }
});
