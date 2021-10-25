import { Box, Typography, Link } from '@material-ui/core';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import { useStyles } from './footer-styles';

export const Footer = () => {
  const styles = useStyles();
  const windowRespWidth = window.innerWidth < 630;

  return (
    <footer className={styles.footer}>
      <Typography
        fontSize="12px"
        fontWeight="700"
        color={variables.purpleFooterText}
        mr={`${!windowRespWidth && '25%'}`}
        textAlign="center"
      >
        Energy Web is incorporated in Zug, Switzerland
      </Typography>
      <Box className={styles.policy}>
        <Link className={styles.link} mr={`${!windowRespWidth && '32px'}`}>
          Privacy Policy
        </Link>
        <Link className={styles.link} mt={`${windowRespWidth && '4px'}`}>
          Cookies Policy
        </Link>
      </Box>
    </footer>
  );
};

export default Footer;
