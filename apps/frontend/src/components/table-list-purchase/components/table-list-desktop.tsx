import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import FuelType, { FuelTypeEnum } from '../../fuel-type/fuel-type';
import { useStyles } from '../table-list-purchase.styles';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { CertificateDto } from '../../../api';
import EthereumAddress from '../../ethereum-address/ethereum-address';
import { ButtonRight } from '../../button-right/button-right';

dayjs.extend(utc);

/* eslint-disable-next-line */
export interface TableListDesktop {
  data: CertificateDto;
  recsSold: number;
  sellerId: string;
}

export const TableListDesktop = ({
  data,
  sellerId,
  recsSold,
}: TableListDesktop) => {
  const styles = useStyles();
  return (
    <Box
      boxShadow={'none'}
      borderRadius={'5px'}
      bgcolor={'#F6F3F9'}
      mb={2}
      p={2}
      pt={0}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.thCell} align="left">
              Purchase ID
            </TableCell>
            <TableCell className={styles.thCell} align="left">
              Seller Name
            </TableCell>
            <TableCell className={styles.thCell} align="left">
              Generator ID
            </TableCell>
            <TableCell className={styles.thCell} align="left">
              Country
            </TableCell>
            <TableCell className={styles.thCell} align="left">
              Energy Source
            </TableCell>
            <TableCell className={styles.thCell} align="left">
              Amount Purchased
            </TableCell>
            <TableCell className={styles.thCell} align="left">
              Purchase Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ borderRadius: '5px', backgroundColor: '#fff' }}>
          <TableRow>
            <TableCell className={styles.tbCell}>
              <EthereumAddress shortify address={sellerId} />
            </TableCell>
            <TableCell className={styles.tbCell}>
              {data.generatorName ?? '-'}
            </TableCell>
            <TableCell className={styles.tbCell}>
              {data.generatorId ?? '-'}
            </TableCell>
            <TableCell className={styles.tbCell}>{data.country}</TableCell>
            <TableCell className={styles.tbCell}>
              <FuelType fuelType={data.energySource as FuelTypeEnum} />
            </TableCell>
            <TableCell className={styles.tbCell}>{recsSold}</TableCell>
            <TableCell className={styles.tbCell}>
              {dayjs(data.generationStart).isValid()
                ? dayjs(data.generationStart).utc().format('YYYY-MM-DD')
                : '-'}{' '}
              /{' '}
              {dayjs(data.generationEnd).isValid()
                ? dayjs(data.generationEnd).utc().format('YYYY-MM-DD')
                : '-'}
            </TableCell>
            <TableCell className={styles.tbCell}>
              <ButtonRight />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default TableListDesktop;
