import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import { useStyles } from './table-list-proofs-styles';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import { ReactComponent as TickIcon } from '../../assets/svg/tick.svg';
import { ReactComponent as DownloadIcon } from '../../assets/svg/download.svg';
import ButtonDetails from '../button-details/button-details';
import { useState } from 'react';


interface ProofsType {
  id: string;
  date: string;
  type: string;
  amount: string;
  sellerAddress: string;
  buyerAddress: string;
  proofTransaction: string;
}

//mock data will be deleted after backend is created
const tableData: ProofsType[] = [
  {
    id: '04a7155d-ced1-4981-8660-48670a0735dd',
    date: '2020.12.11',
    type: 'Requested Certification',
    amount: '740 RECs',
    sellerAddress: '0xABC...XYZ',
    buyerAddress: '0xQU3R...ACT2',
    proofTransaction: '0xQU3R...ACT2',
  },

  {
    id: '04a7155d-ced1-4981-8660-48670a0735rt',
    date: '2025.12.11',
    type: 'Transferred ownership',
    amount: '200 RECs',
    sellerAddress: '0xABC...www',
    buyerAddress: '0xQU3R...ACT2',
    proofTransaction: '0xQU3R...ACT2',
  },

  {
    id: '04a7155d-ced1-4981-8660-48670a073yut',
    date: '2025.12.11',
    type: 'Certificates issued',
    amount: '350 RECs',
    sellerAddress: '0xABC...www',
    buyerAddress: '0xQU3R...ACT2',
    proofTransaction: '0xQU3R...ACT2',
  },
  {
    id: '04a7155d-ced1-4981-8660-48670a073uop',
    date: '2025.12.11',
    type: 'Certificates requested',
    amount: '600 RECs',
    sellerAddress: '0xABC...www',
    buyerAddress: '0xQU3R...ACT2',
    proofTransaction: '0xQU3R...ACT2',
  },
];

export const TableListProofs = () => {
  const styles = useStyles();

  const [isButtonUp, setIsButtonUp] = useState(false);

  const showTable = () => {
    setIsButtonUp(!isButtonUp);
  };

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
        <Box mr="40px" width="100px" height="50px">
          <ButtonDetails
            name="Details"
            onClick={showTable}
            isButtonUp={isButtonUp}
          />
        </Box>
      </Box>
      {isButtonUp && (
        <Box className={styles.wrapper}>
          <Table className={styles.table}>
            <TableBody>
              {tableData.map((el: ProofsType) => {
                return (
                  <TableRow
                    key={el.id}
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
                          <span>{el.date}</span>
                        </span>
                      </TableCell>
                      <TableCell
                        className={styles.tbCell}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <span className={styles.nameType}>{el.type}</span>
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
                        <span>{el.amount}</span>
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
                        <span>{el.sellerAddress}</span>
                      </TableCell>
                      <TableCell
                        className={styles.tbCell}
                        sx={{ display: 'flex', flexDirection: 'column' }}
                      >
                        <span className={styles.thCell}>Buyer Address</span>
                        <span>{el.buyerAddress}</span>
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
                          <span>{el.proofTransaction}</span>
                        </span>
                        <span className={styles.endIcon}>
                          <DownloadIcon />
                        </span>
                      </TableCell>
                    </Box>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default TableListProofs;
