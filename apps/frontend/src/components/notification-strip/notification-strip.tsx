import styled from '@emotion/styled';
import { Box, Container, Typography } from '@material-ui/core';

/* eslint-disable-next-line */
export interface NotificationStripProps {}

const StyledNotificationStrip = styled.div``;

export const NotificationStrip = (props: NotificationStripProps) => (
  <StyledNotificationStrip>
    <Box
      sx={{ height: '88px' }}
      bgcolor={'#00D08A'}
      display={'flex'}
      alignItems={'center'}
    >
      <Container maxWidth={'xl'}>
        <Typography
          fontFamily={'Rajdhani'}
          color={'#fff'}
          textAlign={'center'}
          fontSize={'20px'}
          fontWeight={700}
        >
          Some EAC’s have been retired in your name
        </Typography>
      </Container>
    </Box>
  </StyledNotificationStrip>
);

export default NotificationStrip;
