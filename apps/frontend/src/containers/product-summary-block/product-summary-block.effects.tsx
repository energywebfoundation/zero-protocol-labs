import { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

export const useProductSummaryBlockEffects = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(true);

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return {
    isMobile,
    expanded,
    handleExpand,
  };
};
