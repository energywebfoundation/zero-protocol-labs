import { Box, Container } from '@material-ui/core';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { memo } from 'react';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = memo(() => (
  <header style={{ background: '#2D1155' }}>
    <Container maxWidth={'xl'}>
      <Box
        sx={{ height: '88px' }}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'100%'}
      >
        <Logo />
      </Box>
    </Container>
  </header>
));

export default Header;
