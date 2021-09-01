import HelpOutline from '@material-ui/icons/HelpOutline';
import { ReactNode } from 'react';
import PopOver from '../pop-over/pop-over';
import { Box } from '@material-ui/core';

/* eslint-disable-next-line */
export interface InfoProps {
  noIcon?: boolean;
  popoverContent: string;
  children: ReactNode;
}

export const Info = ({ noIcon, popoverContent, children }: InfoProps) => {
  return !noIcon ? (
    <Box component={'span'}>
      {children}
      {popoverContent && (
        <PopOver popoverContent={popoverContent}>
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
      )}
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
