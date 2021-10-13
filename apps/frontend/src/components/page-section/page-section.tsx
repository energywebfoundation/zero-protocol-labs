import clsx from 'clsx';
import { Box, Paper, Typography } from '@material-ui/core';
import { ReactNode, ReactNodeArray } from 'react';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  style: {
    '@media (max-width: 375px)': {
      padding: '15px',
    },
  },
}));

export interface PageSectionProps {
  headingText: string;
  paperClassName?: string;
  helperTextClassName?: string;
  sectionHelpText?: ReactNode;
  children: ReactNode | ReactNodeArray;
}

export const PageSection = ({
  children,
  headingText,
  sectionHelpText,
  paperClassName,
  helperTextClassName,
}: PageSectionProps) => {
  const classes = useStyles();

  return (
    <Box pt={'13px'} className={classes.style}>
      <Typography
        sx={{ my: '13px', textTransform: 'uppercase' }}
        color={'#2D1155'}
        lineHeight={'31px'}
        fontSize={'24px'}
        fontWeight={700}
      >
        {headingText}
      </Typography>
      <Paper
        className={clsx(classes.style, paperClassName)}
        sx={{ p: 4, borderRadius: '10px' }}
      >
        {sectionHelpText && (
          <Box mb={3}>
            <Typography
              component={'div'}
              fontWeight={600}
              color={'#2D1155'}
              fontSize={'18px'}
              className={helperTextClassName}
            >
              {sectionHelpText}
            </Typography>
          </Box>
        )}
        {children}
      </Paper>
    </Box>
  );
};

export default PageSection;
