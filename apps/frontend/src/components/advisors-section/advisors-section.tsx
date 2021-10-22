import { Box, Typography } from '@material-ui/core';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import { ReactComponent as EcoImg } from './assets/eco.svg';
import { ReactComponent as StandardImg } from './assets/standard.svg';
import { ReactComponent as REBAImg } from './assets/REBA.svg';
import { ReactComponent as ReSourceImg } from './assets/re-source.svg';
import { ReactComponent as EnergyImg } from './assets/energy.svg';
import { ReactComponent as PttImg } from './assets/ptt.svg';

export const AdvisorsSection = () => {
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
      <Box display="flex" width="100%" justifyContent="space-around" pb="90px">
        <Box ml="30px">
          <EcoImg />
        </Box>
        <Box>
          <StandardImg />
        </Box>
        <Box>
          <REBAImg />
        </Box>
      </Box>
      <Box display="flex" width="100%" justifyContent="space-around">
        <Box>
          <ReSourceImg />
        </Box>
        <Box>
          <EnergyImg />
        </Box>
        <Box>
          <PttImg />
        </Box>
      </Box>
    </Box>
  );
};

export default AdvisorsSection;
