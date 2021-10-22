import { Box } from '@material-ui/core';
import useStyles from './question-section-welcome-page-styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import TollIcon from '@material-ui/icons/Toll';
import GenericQuestionSection from '../../components/generic-question-section/generic-question-section';

const dataSection = [
  {
    title: 'Are you',
    label: 'New to Renewable Energy procurement?',
    desc: 'Let us guide you in a simple step by step process!',
    btnName: 'Guide me',
    icon: <ErrorOutlineIcon />,
  },
  {
    title: 'Are you',
    label: 'a Crypto Miner, Application or Crypto User?',
    desc: 'head here for a dedicated and guided process',
    btnName: 'Make your crypto green!',
    icon: <TollIcon />,
  },
];

export const QuestionSectionWelcomePage = () => {
  const styles = useStyles();

  return (
    <Box display="flex" mt="89px" className={styles.wrapper}>
      {dataSection.map((el) => {
        return (
          <GenericQuestionSection
            key={el.label}
            title={el.title}
            label={el.label}
            desc={el.desc}
            btnName={el.btnName}
            icon={el.icon}
          />
        );
      })}
    </Box>
  );
};

export default QuestionSectionWelcomePage;
