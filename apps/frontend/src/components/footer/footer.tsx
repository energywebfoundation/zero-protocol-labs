import { Box, Typography, Link } from '@material-ui/core';
import { variables } from '@energyweb/zero-protocol-labs-theme';

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: variables.primaryColorDark,
        display: 'flex',
        alignItems: 'center',
        padding: '36px 72px 37px 72px',
      }}
    >
      <Typography
        fontSize="12px"
        fontWeight="700"
        color={variables.purpleFooterText}
        mr="25%"
      >
        Energy Web is incorporated in Zug, Switzerland
      </Typography>
      <Box>
        <Link
          sx={{
            fontSize: '12px',
            fontWeight: '700',
            color: variables.purpleFooterText,
            marginRight: '32px',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          Privacy Policy
        </Link>
        <Link
          sx={{
            fontSize: '12px',
            fontWeight: '700',
            color: variables.purpleFooterText,
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          Cookies Policy
        </Link>
      </Box>
    </footer>
  );
};

export default Footer;
