import { FC, useState } from 'react';
import clsx from 'clsx';
import {
  Grid,
  Box,
  Typography,
  Paper,
  SvgIcon,
  IconButton,
  Collapse,
} from '@material-ui/core';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-up.svg';
import { ReactComponent as CalendarIconLight } from '../../assets/svg/calendarIconDark.svg';
import { useStyles } from './product-summary-block.style';

export const ProductSummaryBlock: FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper className={classes.paper}>
      <Box display="flex" justifyContent="space-between">
        <Typography className={classes.title}>
          Summary of your Products
        </Typography>
        <IconButton
          className={clsx({ [classes.expanded]: expanded }, classes.button)}
          onClick={handleExpandClick}
        >
          <SvgIcon
            component={Arrow}
            className={classes.arrow}
            viewBox="0 0 13 8"
          />
        </IconButton>
      </Box>
      <Collapse in={expanded} unmountOnExit>
        <Paper className={classes.paperInner}>
          <Grid container className={classes.grid}>
            <Grid item xs={3}>
              <Box display="flex" className={classes.item}>
                <Typography className={classes.label}>
                  Miner IDs / Address
                </Typography>
                <Box className={classes.valueWrapper}>
                  <Typography className={classes.value}>f0112027</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" className={classes.item}>
                <Typography className={classes.label}>
                  Generation start date
                </Typography>
                <Box className={classes.valueWrapper} minWidth={158}>
                  <Typography className={classes.value}>2020/11/01</Typography>
                  <SvgIcon component={CalendarIconLight} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" className={classes.item}>
                <Typography className={classes.label}>
                  Generation end date
                </Typography>
                <Box className={classes.valueWrapper} minWidth={158}>
                  <Typography className={classes.value}>2020/12/31</Typography>
                  <SvgIcon component={CalendarIconLight} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" className={classes.item}>
                <Typography className={classes.label}>Mwh</Typography>
                <Box className={classes.valueWrapper}>
                  <Typography className={classes.value}>3 MWh</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container className={classes.grid}>
            <Grid item xs={3}>
              <Box display="flex" className={classes.item}>
                <Typography className={classes.label}>
                  Miner IDs / Address
                </Typography>
                <Box className={classes.valueWrapper}>
                  <Typography className={classes.value}>f0112027</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" className={classes.item}>
                <Typography className={classes.label}>
                  Generation start date
                </Typography>
                <Box className={classes.valueWrapper} minWidth={158}>
                  <Typography className={classes.value}>2020/11/01</Typography>
                  <SvgIcon component={CalendarIconLight} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" className={classes.item}>
                <Typography className={classes.label}>
                  Generation end date
                </Typography>
                <Box className={classes.valueWrapper} minWidth={158}>
                  <Typography className={classes.value}>2020/12/31</Typography>
                  <SvgIcon component={CalendarIconLight} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" className={classes.item}>
                <Typography className={classes.label}>Mwh</Typography>
                <Box className={classes.valueWrapper}>
                  <Typography className={classes.value}>3 MWh</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Collapse>
    </Paper>
  );
};

export default ProductSummaryBlock;
