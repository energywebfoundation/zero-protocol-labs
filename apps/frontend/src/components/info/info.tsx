import HelpOutline from '@material-ui/icons/HelpOutline';
import { ReactElement, ReactNode } from 'react';
import PopOver from '../pop-over/pop-over';
import { Box, BoxProps } from '@material-ui/core';
import { variables } from '@energyweb/zero-protocol-labs-theme';

export interface InfoProps extends BoxProps {
  noIcon?: boolean;
  popoverContentElement?: ReactElement;
  popoverContent?: string;
  children: ReactNode;
  hideTimeout?: number;
  fontWeight?: number;
  isFilecoin?: boolean;
  boxProps?: BoxProps;
}

export const Info = ({
  noIcon,
  popoverContentElement,
  popoverContent,
  children,
  hideTimeout,
  fontSize,
  color,
  fontWeight,
  isFilecoin,
  boxProps,
}: InfoProps) => {
  return !noIcon ? (
    <Box
      component={'span'}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      {...boxProps}
    >
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
              color: isFilecoin
                ? variables.filcoinColor
                : variables.purpleLight,
              cursor: 'pointer',
              right: '-4px',
              top: '-6px',
              position: 'relative',
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
