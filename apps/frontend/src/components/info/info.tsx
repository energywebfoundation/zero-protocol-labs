import HelpOutline from '@material-ui/icons/HelpOutline';
import { ReactElement, ReactNode } from 'react';
import PopOver from '../pop-over/pop-over';
import { Box, BoxProps } from '@material-ui/core';

/* eslint-disable-next-line */
export interface InfoProps {
  noIcon?: boolean;
  popoverContentElement?: ReactElement;
  popoverContent?: string;
  boxProps?: BoxProps;
  children: ReactNode;
  hideTimeout?: number;
}

export const Info = ({
  noIcon,
  popoverContentElement,
  popoverContent,
  children,
  hideTimeout,
  boxProps,
}: InfoProps) => {
  return !noIcon ? (
    <Box {...boxProps}>
      {children}
      {
        <PopOver
          hideTimeout={hideTimeout}
          popoverContent={popoverContent}
          popoverContentElement={popoverContentElement}
        >
          <HelpOutline
            sx={{
              fontSize: '12px',
              color: '#703CBB',
              cursor: 'pointer',
              position: 'relative',
              right: '-4px',
              top: '2px',
            }}
          />
        </PopOver>
      }
    </Box>
  ) : (
    <PopOver popoverContent={popoverContent}>
      <Box
        component={'span'}
        sx={{
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
      >
        {children}
      </Box>
    </PopOver>
  );
};

export default Info;
