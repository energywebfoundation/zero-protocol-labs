import { CertificateDto } from '../../api';
import TableListDesktop from './components/table-list-desktop';
import TableListMobile from './components/table-list-mobile';
import TableListTablet from './components/table-list-tablet';

export interface TableList {
  data: CertificateDto;
  recsSold: number;
  sellerId: string;
}

export const TableList = ({ data, sellerId, recsSold }: TableList) => {
  return (
    <>
      {window.innerWidth < 1027 && window.innerWidth > 375 ? (
        <TableListTablet data={data} sellerId={sellerId} recsSold={recsSold} />
      ) : window.innerWidth < 375 ? (
        <TableListMobile data={data} sellerId={sellerId} recsSold={recsSold} />
      ) : (
        <TableListDesktop data={data} sellerId={sellerId} recsSold={recsSold} />
      )}
    </>
  );
};

export default TableList;
