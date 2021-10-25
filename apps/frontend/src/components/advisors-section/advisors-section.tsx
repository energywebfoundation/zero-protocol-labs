import { Box, Typography } from '@material-ui/core';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import { ReactComponent as EcoImg } from './assets/eco.svg';
import { ReactComponent as StandardImg } from './assets/standard.svg';
import { ReactComponent as REBAImg } from './assets/REBA.svg';
import { ReactComponent as ReSourceImg } from './assets/re-source.svg';
import { ReactComponent as EnergyImg } from './assets/energy.svg';
import { ReactComponent as PttImg } from './assets/ptt.svg';

const advisorsDate = [
  [<EcoImg />, <StandardImg />, <REBAImg />],
  [<ReSourceImg />, <EnergyImg />, <PttImg />],
];

export const AdvisorsSection = () => {
  const windowRespWidth = window.innerWidth < 980;

  return (
    <Box>
      <Typography
        fontWeight={700}
        fontSize="32px"
        color={variables.secondaryColor}
        textAlign="center"
        mb="36px"
      >
        Advisors
      </Typography>
      {advisorsDate.map((el, index) => {
        return (
          <Box
            key={index}
            display="flex"
            width="100%"
            justifyContent="space-around"
            alignItems="center"
            flexWrap="wrap"
          >
            {el.map((item, index) => {
              return (
                <Box
                  key={index}
                  width="300px"
                  display="flex"
                  justifyContent="center"
                  pb={`${windowRespWidth ? '50px' : '90px'}`}
                >
                  {item}
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export default AdvisorsSection;
