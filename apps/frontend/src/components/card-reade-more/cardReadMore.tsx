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
import { Box } from '@material-ui/system';
import { variables } from 'libs/ui/theme/src';
import FilcoinLogo from '../../assets/svg/filecoinLogo.svg';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { ReactComponent as Vector } from '../../assets/svg/vector-line.svg';
import { ReactComponent as People } from '../../assets/svg/people.svg';

const CardData = [
  'brief Reminder of what are RECs ',
  'explainer of how these certificates tie into Filecoin’s Reputation system',
  '+ optional next steps of what to do with this for the Storage Provider',
];

export default function CardReadMore() {
  return (
    <Card
      sx={{
        maxWidth: 280,
        position: 'absolute',
        top: 80,
        right: 80,
        padding: '32px 24px 31px 24px',
        backgroundColor: variables.bodyBackgroundColor,
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(160, 154, 198, 0.2)',
      }}
    >
      <Box width="111px" height="32px" mb={'16px'}>
        <CardMedia
          component="img"
          alt="Filcoin"
          image={FilcoinLogo}
          sx={{
            '& > img': {
              width: 500,
            },
          }}
        />
      </Box>
      <CardContent>
        <Typography color={variables.black}>(optional explainer)</Typography>
        <List
          sx={{
            display: 'felx',
          }}
        >
          {CardData.map((el) => {
            return (
              <ListItem
                sx={{ padding: '0', display: 'flex', alignItems: 'flex-start' }}
              >
                <ListItemIcon sx={{ minWidth: '20px' }}>•</ListItemIcon>
                <ListItemText
                  sx={{
                    '& > span': {
                      color: variables.black,
                    },
                    margin: 0,
                  }}
                >
                  {el}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
        }}
      >
        <Button
          sx={{
            '&:hover': {
              backgroundColor: 'unset',
            },
            color: variables.purpleLight,
            padding: 0,
            fontSize: variables.fontSize,
            fontWeight: 600,
          }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Read more
        </Button>
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
      </CardActions>
    </Card>
  );
}
