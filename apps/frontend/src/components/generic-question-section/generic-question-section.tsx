import { Box, Typography } from '@material-ui/core';
import * as React from 'react';
import useStyles from './generic-question-section-styles';
import GenericSubmitButton from '../generic-submit-button/generic-submit-button';
import { variables } from '@energyweb/zero-protocol-labs-theme';
import { ReactNode } from 'react-transition-group/node_modules/@types/react';
import { SvgIconProps } from '@material-ui/core';

export interface IGenericQuestionSectionProps {
  children?: ReactNode;
  title: string;
  label: string;
  desc: string;
  btnName: string;
  icon: SvgIconProps;
}

export const GenericQuestionSection: React.FC<IGenericQuestionSectionProps> = ({
  children,
  label,
  desc,
  btnName,
  icon,
  title,
}) => {
  const styles = useStyles();
  const windowRespWidth = window.innerWidth < 500;

  return (
    <Box p="20px 0 25px 0" width="100%">
      <Box
        p="0 10px"
        position="relative"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        className={styles.questionSection}
      >
        <Typography
          fontSize="32px"
          position="absolute"
          fontWeight="700"
          color={variables.secondaryColor}
          bgcolor={variables.primaryColor}
          borderRadius={'20px'}
          p={`${windowRespWidth ? '0 10px 0 10px' : '0 50px 0 50px'}`}
          top="-30px"
          textAlign="center"
        >
          {title}
        </Typography>
        <Typography
          fontSize="32px"
          fontWeight="700"
          color={variables.secondaryColor}
          mt="9px"
          textAlign="center"
        >
          {label}
        </Typography>
        <Typography
          fontSize="20px"
          fontWeight="700"
          color={variables.white}
          mb="50px"
          mt={!label ? '7px' : ''}
          textAlign="center"
        >
          {desc}
        </Typography>
        {children}
        <Box
          width={!windowRespWidth ? '380px' : 'unset'}
          display="flex"
          justifyContent="center"
          position="absolute"
          bottom="-20px"
          bgcolor={variables.primaryColor}
        >
          <Box width={windowRespWidth ? '280px' : '340px'}>
            <GenericSubmitButton
              name={btnName}
              bgColor={variables.white}
              color={variables.primaryColor}
              hoverBgColor={variables.secondaryColor}
              hoverColor={variables.white}
              iconColor={variables.secondaryColor}
              hoverIconColor={variables.primaryColor}
              icon={icon}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GenericQuestionSection;
