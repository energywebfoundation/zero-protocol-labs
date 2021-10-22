import { Box, Button, ButtonGroup, Typography, Tabs } from '@material-ui/core';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import React from 'react';
import useStyles from './tabs-welcome-page-styles';
import { ReactComponent as LeftArrowIcon } from '../../assets/svg/leftArrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/svg/rightArrow.svg';
import marketIcon from '../../assets/svg/marketIcon.svg';
import platformIcon from '../../assets/svg/platformIcon.svg';
import procurementIcon from '../../assets/svg/procurementIcon.svg';
import integrationIcon from '../../assets/svg/integrationIcon.svg';

const tabsData = [
  {
    img: marketIcon,
    label: 'Myriad marketplaces',
    value:
      'Zero integrates myriad marketplaces—through a single, convenient, digital interface. Marketplace operators can thus tap into a new source of renewable energy buyers, helping attract growing business to their platforms.',
  },
  {
    img: platformIcon,
    label: 'Purchase on digital platforms',
    value:
      'Renewables procurement gets more transparent, faster, and easier thanks to Zero’s connection to digitalized marketplaces that make the process as easy as booking a hotel room or flight.',
  },
  {
    img: procurementIcon,
    label: 'Multiple procurement options',
    value:
      'Buyers get greater visibility into available supplies of verified renewable energy options—including energy attribute certificates (EACs) such as renewable energy certificates (RECs), guarantees of origin (GOs), and International RECs (I-RECs).',
  },
  {
    img: integrationIcon,
    label: 'Purchase on digital platforms',
    value:
      'A standardized API enables any digitized renewable energy platform—including those built with EW Origin—to connect and post available supplies for buyers.',
  },
  {
    img: integrationIcon,
    label: 'New buyers',
    value:
      'EW Zero connects digital marketplace platform operators to new buyers, scaling demand for renewables and increasing demand liquidity. ',
  },
];

export const TabsWelcomePage = () => {
  const styles = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  const handleBackStep = () => setValue((s) => s - 1);
  const handleNextStep = () => setValue((s) => s + 1);

  return (
    <Box width="100%">
      <Box
        className={styles.wrapper}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="64px"
      >
        <Typography
          fontSize="32px"
          fontWeight="700"
          color={variables.secondaryColor}
          ml="15px"
        >
          Advantages of using Zero
        </Typography>
        <ButtonGroup sx={{ mr: '55px' }}>
          <Button
            className={styles.btn}
            disabled={value === 4}
            variant="contained"
            onClick={handleBackStep}
            startIcon={<LeftArrowIcon />}
          ></Button>

          <Button
            className={styles.btn}
            disabled={value === tabsData.length - 1}
            variant="contained"
            onClick={handleNextStep}
            endIcon={<RightArrowIcon />}
          ></Button>
        </ButtonGroup>
      </Box>
      <Tabs
        className={styles.tabs}
        value={value}
        onChange={handleChange}
        scrollButtons={false}
        aria-label="scrollable force tabs example"
        variant="scrollable"
      >
        {tabsData.map((el) => {
          return (
            <Box
              minWidth="289px"
              height="385px"
              className={styles.tab}
              key={el.label}
            >
              <img src={el.img} alt="tabs-img" />
              <Typography
                mt="26px"
                mb="20px"
                color={variables.white}
                fontSize="24px"
                fontWeight={700}
                whiteSpace="pre-wrap"
                textAlign="center"
              >
                {el.label}
              </Typography>
              <Typography
                whiteSpace="pre-wrap"
                width="100%"
                fontSize="16px"
                fontWeight="500"
                color={variables.white}
                textAlign="center"
              >
                {el.value}
              </Typography>
            </Box>
          );
        })}
      </Tabs>
    </Box>
  );
};

export default TabsWelcomePage;
