import styled from '@emotion/styled';
import { Box, Container, Typography } from '@material-ui/core';

/* eslint-disable-next-line */
export interface NotificationStripProps {
  text: string;
  height?: number;
}

const StyledNotificationStrip = styled.div``;

export const NotificationStrip = ({ text, height }: NotificationStripProps) => (
  <StyledNotificationStrip>
    <Box
      sx={{ height: height ?? 88 }}
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
          {text}
        </Typography>
      </Container>
    </Box>
  </StyledNotificationStrip>
);

export default NotificationStrip;
