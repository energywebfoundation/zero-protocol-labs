import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import dayjs from 'dayjs';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import { FC } from 'react';
import { useStyles } from './TableListProofs.styles';
import { ReactComponent as TickIcon } from '../../assets/svg/tick.svg';
import { ReactComponent as DownloadIcon } from '../../assets/svg/download.svg';
import { useTableListProofsEffects } from './TableListProofs.effects';

interface TableListProofsProps {
  purchaseId: string;
}

export const TableListProofs: FC<TableListProofsProps> = ({ purchaseId }) => {
  const styles = useStyles();
  const { blockchainEvents, isLoading } = useTableListProofsEffects(purchaseId);

  if (isLoading) return <CircularProgress />

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          mt={'30px'}
          mb={'18px'}
          ml={'12px'}
          fontWeight={700}
          fontSize={'20px'}
          color={variables.primaryColor}
        >
          BLOCKCHAIN PROOFS {'&'} HISTORY
        </Typography>
      </Box>
        <Box className={styles.wrapper}>
          <Table className={styles.table}>
            <TableBody>
              {blockchainEvents ?
              blockchainEvents.map((event) => {
                return (
                  <TableRow
                    key={event.transactionHash}
                    sx={{ backgroundColor: variables.inputBackgroundColor }}
                  >
                    <Box
                      minWidth="460px"
                      display="flex"
                      justifyContent="flex-start"
                    >
                      <TableCell className={styles.tbCell}>
                        <span className={styles.startIcon}>
                          <TickIcon />
                        </span>
                        <span className={styles.dateCell}>
                          <span className={styles.thCell}>Date</span>
                          <span>{dayjs(event.timestamp!*1000).format('YYYY.MM.DD')}</span>
                        </span>
                      </TableCell>
                      <TableCell
                        className={styles.tbCell}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <span className={styles.nameType}>{event.name}</span>
                      </TableCell>
                    </Box>
                    <Box
                      minWidth="500px"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <TableCell
                        className={styles.tbCell}
                        sx={{ display: 'flex', flexDirection: 'column' }}
                      >
                        <span className={styles.thCell}>Amount</span>
                        {/* have to clarify where to get it from */}
                        <span>{'0000'}</span>
                      </TableCell>
                      <TableCell
                        className={styles.tbCell}
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          minWidth: '140px',
                        }}
                      >
                        <span className={styles.thCell}>Seller Address</span>
                        <span>{event.from}</span>
                      </TableCell>
                      <TableCell
                        className={styles.tbCell}
                        sx={{ display: 'flex', flexDirection: 'column' }}
                      >
                        <span className={styles.thCell}>Buyer Address</span>
                        <span>{event.to}</span>
                      </TableCell>
                    </Box>
                    <Box>
                      <TableCell
                        className={styles.tbCell}
                        sx={{ marginRight: '22px' }}
                      >
                        <span>
                          <span className={styles.thCell}>
                            Transaction proof
                          </span>
                          <span>{event.transactionHash}</span>
                        </span>
                        <span className={styles.endIcon}>
                          <DownloadIcon />
                        </span>
                      </TableCell>
                    </Box>
                  </TableRow>
                );
              })
              : null}
            </TableBody>
          </Table>
        </Box>
    </Box>
  );
};

export default TableListProofs;
