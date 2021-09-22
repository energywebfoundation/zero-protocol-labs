import { CertificateDto } from '../../api';
import TableListDesktop from './components/table-list-desktop';
import TableListTablet from './components/table-list-tablet';
import { Tabs } from '@material-ui/core';
import { Box } from '@material-ui/system';

export interface TableListPurchase {
  data: CertificateDto;
  recsSold: number;
  sellerId: string;
}

export const TableListPurchase = ({
  data,
  sellerId,
  recsSold,
}: TableListPurchase) => {
  return (
    <>
      {window.innerWidth < 1024 ? (
        <Tabs
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          <Box sx={{ marginRight: '16px' }}>
            <TableListTablet
              data={data}
              sellerId={sellerId}
              recsSold={recsSold}
            />
          </Box>
          <Box sx={{ marginRight: '16px' }}>
            <TableListTablet
              data={data}
              sellerId={sellerId}
              recsSold={recsSold}
            />
          </Box>
          <Box sx={{ marginRight: '16px' }}>
            <TableListTablet
              data={data}
              sellerId={sellerId}
              recsSold={recsSold}
            />
          </Box>
        </Tabs>
      ) : (
        <TableListDesktop data={data} sellerId={sellerId} recsSold={recsSold} />
      )}
    </>
  );
};

export default TableListPurchase;
