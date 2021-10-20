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
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-up.svg';
import { ReactComponent as CalendarIconLight } from '../../assets/svg/calendarIconDark.svg';
import { useStyles } from './product-summary-block.style';

export const ProductSummaryBlock: FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [expanded, setExpanded] = useState(true);

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
      <Collapse in={isMobile ? true : expanded} unmountOnExit>
        <Paper className={classes.paperInner}>
          <Grid container className={classes.grid}>
            <Grid item className={classes.gridItem}>
              <Box display="flex" className={classes.item}>
                <Typography className={classes.label}>
                  Miner IDs / Address
                </Typography>
                <Box
                  sx={{ minWidth: { xs: 158, md: 'initial' } }}
                  className={classes.valueWrapper}
                >
                  <Typography className={classes.value}>f0112027</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item className={classes.gridItem}>
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
            <Grid item className={classes.gridItem}>
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
            <Grid item className={classes.gridItem}>
              <Box display="flex" className={classes.item}>
                <Typography
                  sx={{ textAlign: { xs: 'right', md: 'left' } }}
                  className={classes.label}
                >
                  Mwh
                </Typography>
                <Box className={classes.valueWrapper}>
                  <Typography className={classes.value}>3 MWh</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container className={classes.grid}>
            <Grid item className={classes.gridItem}>
              <Box display="flex" className={classes.item}>
                <Typography className={classes.label}>
                  Miner IDs / Address
                </Typography>
                <Box
                  sx={{ minWidth: { xs: 158, md: 'initial' } }}
                  className={classes.valueWrapper}
                >
                  <Typography className={classes.value}>f0212014</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item className={classes.gridItem}>
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
            <Grid item className={classes.gridItem}>
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
            <Grid item className={classes.gridItem}>
              <Box display="flex" className={classes.item}>
                <Typography
                  sx={{ textAlign: { xs: 'right', md: 'left' } }}
                  className={classes.label}
                >
                  Mwh
                </Typography>
                <Box className={classes.valueWrapper}>
                  <Typography className={classes.value}>6 MWh</Typography>
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
