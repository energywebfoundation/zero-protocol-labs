import { Button } from '@material-ui/core';
import useStyles from './button-details-style';
import IconTop from './assets/arrowTop.svg';

export interface ButtonDetailsProps {
  name: string;
  onClick: any;
  isButtonUp: boolean;
}

export const ButtonDetails = ({
  onClick,
  name,
  isButtonUp,
}: ButtonDetailsProps) => {
  const styles = useStyles();
  return (
    <Button onClick={onClick} className={styles.btn}>
      {name}
      <img
        className={!isButtonUp ? styles.iconRotate : styles.icon}
        src={IconTop}
        alt="icon-top"
      />
    </Button>
  );
};
