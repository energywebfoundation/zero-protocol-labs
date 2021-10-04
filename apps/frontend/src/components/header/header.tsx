import { Box, Container } from '@material-ui/core';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as LogoFilecoin } from '../../assets/svg/filecoinLogo.svg';
import { ReactComponent as ZeroLogo } from '../../assets/svg/zeroLogo.svg';
import { memo } from 'react';
import { variables } from 'libs/ui/theme/src';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = memo(() => {
  const isFilecoin = useSelector((state: RootState) => state.app.isFilecoin);

  return (
    <header
      style={{
        background: isFilecoin
          ? variables.filcoinBackgroundColor
          : variables.primaryColor,
      }}
    >
      <Container maxWidth={'xl'}>
        <Box
          sx={{ height: '88px' }}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
        >
          {isFilecoin ? (
            <Box>
              <ZeroLogo style={{ marginRight: '40px' }} />
              <LogoFilecoin />
            </Box>
          ) : (
            <Logo />
          )}
        </Box>
      </Container>
    </header>
  );
});

export default Header;
