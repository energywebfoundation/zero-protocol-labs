import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Box } from '@material-ui/system';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import FilcoinLogo from '../../assets/svg/filecoinLogo.svg';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { ReactComponent as Vector } from '../../assets/svg/vector-line.svg';
import { ReactComponent as People } from '../../assets/svg/people.svg';
import { useStyles } from './cardReadMore-styles';

const cardData = [
  'brief Reminder of what are RECs ',
  'explainer of how these certificates tie into Filecoin’s Reputation system',
  '+ optional next steps of what to do with this for the Storage Provider',
];

export default function CardReadMore() {
  const styles = useStyles();

  const [showInfo, setShowInfo] = React.useState<boolean>(false);

  const showCardInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <Card className={styles.card}>
      <Box width="111px" height="32px" mb={'16px'}>
        <CardMedia component="img" alt="Filcoin" image={FilcoinLogo} />
      </Box>
      <CardContent>
        <Typography color={variables.black}>(optional explainer)</Typography>
        <List>
          {cardData.map((el) => {
            return (
              <ListItem key={el} className={styles.listItem}>
                <ListItemIcon sx={{ minWidth: '20px' }}>•</ListItemIcon>
                <ListItemText className={styles.listItemText}>
                  {el}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Button
          onClick={showCardInfo}
          className={styles.button}
          endIcon={
            showInfo ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
        >
          Read more
        </Button>
        {showInfo && (
          <Box>
            <Vector />
            <Box display="flex">
              <People />
              <Box ml={'21px'}>
                <Typography
                  color={variables.filcoinColor}
                  lineHeight={'20px'}
                  fontSize={'16px'}
                  fontWeight={700}
                >
                  Alan <br />
                  Protocol Labs
                </Typography>
                <Typography
                  color={variables.black}
                  lineHeight={'15.31px'}
                  fontSize={'12px'}
                  fontWeight={500}
                >
                  Power Systems <br /> Research Scientist
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </CardActions>
    </Card>
  );
}
