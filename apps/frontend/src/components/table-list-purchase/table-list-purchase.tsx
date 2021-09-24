import { CertificateDto } from '../../api';
import TableListDesktop from './components/table-list-desktop';
import TableListTablet from './components/table-list-tablet';
import { Tabs } from '@material-ui/core';
import { Box } from '@material-ui/system';

export interface TableListPurchase {
  data: CertificateDto;
  recsSold: number;
  purchaseId: string;
  sellerName: string;
}

export const TableListPurchase = ({
  data,
  purchaseId,
  recsSold,
  sellerName,
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
              sellerName={sellerName}
              data={data}
              purchaseId={purchaseId}
              recsSold={recsSold}
            />
          </Box>
        </Tabs>
      ) : (
        <TableListDesktop
          sellerName={sellerName}
          data={data}
          purchaseId={purchaseId}
          recsSold={recsSold}
        />
      )}
    </>
  );
};

export default TableListPurchase;
