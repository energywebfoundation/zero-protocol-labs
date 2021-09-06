import { Paper } from '@material-ui/core';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface PaperBoxProps {
  children: ReactNode;
  bgColor: string;
  customPadding?: string | number;
  customHeight?: string;
  customBorderRadius?: string;
}

export const PaperBox = ({
  customBorderRadius = '10px',
  customHeight,
  children,
  bgColor,
}: PaperBoxProps) => (
  <Paper
    sx={{
      boxShadow: 'none',
      height: customHeight,
      p: 3,
      backgroundColor: bgColor,
      borderRadius: customBorderRadius,
    }}
  >
    {children}
  </Paper>
);

export default PaperBox;
