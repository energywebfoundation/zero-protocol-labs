import { useState } from 'react';
import dayjs from 'dayjs';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { formatPower, Unit } from '../../utils';
import { offerMockData } from '../../__mock__';

export const useProductSummaryBlockEffects = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(true);

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const products = offerMockData.products.map((product) => {
    return {
      address: product.address,
      startDate: dayjs(product.generationStart).format('YYYY-MM-DD'),
      endDate: dayjs(product.generationEnd).format('YYYY-MM-DD'),
      volume: formatPower(product.volume, {
        unit: Unit.MWh,
        includeUnit: true,
      }),
    };
  });

  return {
    isMobile,
    expanded,
    handleExpand,
    products,
  };
};
