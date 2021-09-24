import { Box, Table, TableCell, TableRow } from '@material-ui/core';
import FuelType, { FuelTypeEnum } from '../../fuel-type/fuel-type';
import { useStyles } from '../table-list-purchase.styles';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { CertificateDto } from '../../../api';
import EthereumAddress from '../../ethereum-address/ethereum-address';

dayjs.extend(utc);

/* eslint-disable-next-line */
export interface TableListTablet {
  data: CertificateDto;
  recsSold: number;
  purchaseId: string;
  sellerName: string;
}

export const TableListTablet = ({
  data,
  purchaseId,
  recsSold,
  sellerName,
}: TableListTablet) => {
  const styles = useStyles();
  return (
    <Box
      boxShadow={'none'}
      borderRadius={'5px'}
      bgcolor={'#F6F3F9'}
      mb={2}
      p={2}
      pt={0}
      maxWidth={'100%'}
    >
      <Table>
        <TableRow>
          <TableCell className={styles.thCell} align="left">
            Purchase ID
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.tbCell}>
            <EthereumAddress shortify address={purchaseId} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.thCell} align="left">
            Seller Name
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.tbCell}>{sellerName ?? '-'}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.thCell} align="left">
            Generator ID
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.tbCell}>
            {data.generatorId ?? '-'}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.thCell} align="left">
            Country
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.tbCell}>{data.country}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.thCell} align="left">
            Energy Source
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.tbCell}>
            <FuelType fuelType={data.energySource as FuelTypeEnum} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.thCell} align="left">
            Amount Purchased
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.tbCell}>{recsSold}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.thCell} align="left">
            Purchase Date
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.tbCell}>
            {dayjs(data.generationStart).isValid()
              ? dayjs(data.generationStart).utc().format('YYYY-MM-DD')
              : '-'}{' '}
            /{' '}
            {dayjs(data.generationEnd).isValid()
              ? dayjs(data.generationEnd).utc().format('YYYY-MM-DD')
              : '-'}
          </TableCell>
        </TableRow>
      </Table>
    </Box>
  );
};

export default TableListTablet;
