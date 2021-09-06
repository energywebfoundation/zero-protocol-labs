import { Box, Paper, Typography } from '@material-ui/core';
import { ReactNode, ReactNodeArray } from 'react';

/* eslint-disable-next-line */
export interface PageSectionProps {
  headingText: string;
  sectionHelpText?: ReactNode;
  children: ReactNode | ReactNodeArray;
}

export const PageSection = ({
  children,
  headingText,
  sectionHelpText,
}: PageSectionProps) => (
  <Box pt={'13px'}>
    <Typography
      sx={{ my: '13px', textTransform: 'uppercase' }}
      color={'#2D1155'}
      lineHeight={'31px'}
      fontSize={'24px'}
      fontWeight={700}
    >
      {headingText}
    </Typography>
    <Paper sx={{ p: 4, borderRadius: '10px' }}>
      {sectionHelpText && (
        <Box mb={3}>
          <Typography
            component={'div'}
            fontWeight={600}
            color={'#2D1155'}
            fontSize={'18px'}
          >
            {sectionHelpText}
          </Typography>
        </Box>
      )}
      {children}
    </Paper>
  </Box>
);

export default PageSection;
