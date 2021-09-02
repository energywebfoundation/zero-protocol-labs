import { Box, Paper } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Popper from '@material-ui/core/Popper';
import React, { FC, ReactElement, ReactNode, useState } from 'react';
import { useStyles } from './pop-over.styles';
/* eslint-disable-next-line */
export interface PopOverProps {
  children: ReactElement;
  popoverContent: string;
}

export const PopOver: FC<PopOverProps> = ({ popoverContent, children }) => {
  const [showPopOver, setShowPopOver] = useState(false);
  const [anchorElement, setAnchorElement] = useState<HTMLDivElement | null>(
    null
  );
  const styles = useStyles();
  return (
    <>
      {React.cloneElement(children, {
        onMouseOver: (event: MouseEvent) => {
          setAnchorElement(event.currentTarget as HTMLDivElement);
          setShowPopOver(true);
        },
        onMouseOut: () => {
          setShowPopOver(false);
        },
      })}
      <Popper
        open={showPopOver}
        anchorEl={anchorElement}
        color={'primary'}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ backgroundColor: '#2D1155', color: '#fff' }}>
              <Box p={'10px 40px'}>
                <pre className={styles.popoverText}>{popoverContent}</pre>
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default PopOver;